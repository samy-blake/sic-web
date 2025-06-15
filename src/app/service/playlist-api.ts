import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { API } from "../interface/api";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PlaylistApi {
  private http = inject(HttpClient);

  getAll(params?: API.Playlists.Params): Observable<API.Playlists.Playlist[]> {
    const options: { params?: HttpParams } = {};
    if (params) {
      options.params = new HttpParams().appendAll(
        params as {
          [param: string]: any;
        },
      );
    }
    return this.http.get<API.Playlists.Playlist[]>(
      `${environment.apiRout}/playlist`,
      options,
    );
  }

  get(id: string): Observable<API.Playlist.Playlist> {
    return this.http.get<API.Playlist.Playlist>(
      `${environment.apiRout}/playlist/${id}`,
    );
  }
}
