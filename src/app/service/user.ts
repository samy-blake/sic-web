import {
  computed,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { LocalStorage } from "./local-storage";

@Injectable({
  providedIn: "root",
})
export class User {
  private _token: WritableSignal<string> = signal("");
  private _storage = inject(LocalStorage);

  public get token(): string {
    return this._token();
  }

  // public readonly token = computed(() => this._token());

  public isAuth: Signal<boolean> = computed(() => !!this._token());

  constructor() {
    const token = this.getTokenFromStorage();
    if (token) this.setToken(token);
    console.log({ token });
  }

  setToken(token: string) {
    this._token.set(token);
  }

  saveTokenToStorage(token: string) {
    this._storage.setItem("token", token);
  }

  getTokenFromStorage(): string | null {
    const token = this._storage.getItem("token");
    if (!token) return null;

    const decodeToken = jwtDecode(token);

    if ((decodeToken.exp || 0) * 1000 < Date.now()) {
      this._storage.removeItem("token");
      return null;
    }

    return token;
  }
}
