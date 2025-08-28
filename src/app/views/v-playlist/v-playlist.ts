import { Component, inject } from "@angular/core";
import { PlaylistApi } from "../../service/playlist-api";
import { API } from "../../interface/api";

@Component({
  selector: "app-v-playlist",
  imports: [],
  templateUrl: "./v-playlist.html",
  styleUrl: "./v-playlist.scss",
})
export class VPlaylist {
  private readonly _playlistApi = inject(PlaylistApi);
  public playlists: API.Playlists.Playlist[] = [];

  constructor() {
    this._playlistApi.getAll().subscribe({
      next: (data: API.Playlists.Playlist[]) => {
        this.playlists = data;
      },
    });
  }
}
