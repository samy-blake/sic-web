import { Component, inject } from "@angular/core";
import { PlaylistApi } from "../../service/playlist-api";
import { API } from "../../interface/api";
import { PlaylistListItem } from "./playlist-list-item/playlist-list-item";

@Component({
  selector: "app-playlists",
  imports: [PlaylistListItem],
  templateUrl: "./playlists.html",
  styleUrl: "./playlists.scss",
})
export class Playlists {
  private readonly _playlistApi = inject(PlaylistApi);
  public playlists: API.Playlists.Playlist[] = [];

  constructor() {
    this._playlistApi.getAll().subscribe({
      next: (res: API.Playlists.Playlist[]) => {
        this.playlists = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
