import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { API } from "../interface/api";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthApi {
  private http = inject(HttpClient);

  register(data: API.Auth.RegisterBody): Observable<void> {
    return this.http.post<void>(`${environment.apiRoute}/auth/register`, data);
  }

  login(data: API.Auth.LoginBody): Observable<API.Auth.LoginResponse> {
    return this.http.post<API.Auth.LoginResponse>(
      `${environment.apiRoute}/auth/login`,
      data,
    );
  }
}
