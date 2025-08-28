import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { API } from "../interface/api";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: "root",
})
export class SpotifyApi {
  private _user = inject(User);
  private _http = inject(HttpClient);

  setUserToken(data: API.Spotify.SetUserTokenBody): Observable<void> {
    return this._http.post<void>(
      `${environment.apiRoute}/spotify/user-token`,
      data,
      {
        headers: {
          "Authorization": `Bearer ${this._user.token}`,
        },
      },
    );
  }

  getAccess(): Observable<API.Spotify.AccessResponse> {
    return this._http.get<API.Spotify.AccessResponse>(
      `${environment.apiRoute}/spotify/access`,
      {
        headers: {
          "Authorization": `Bearer ${this._user.token}`,
        },
      },
    );
  }
}
