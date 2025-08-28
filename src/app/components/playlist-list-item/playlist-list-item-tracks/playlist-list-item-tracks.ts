import { Component, effect, inject, input, signal } from "@angular/core";
import { PlaylistApi } from "../../../service/playlist-api";
import { API } from "../../../interface/api";
import { faBrandSpotify } from "@ng-icons/font-awesome/brands";
import { NgIcon, provideIcons } from "@ng-icons/core";

@Component({
  selector: "app-playlist-list-item-tracks",
  imports: [NgIcon],
  templateUrl: "./playlist-list-item-tracks.html",
  styleUrl: "./playlist-list-item-tracks.scss",
  providers: [provideIcons({ faBrandSpotify })],
})
export class PlaylistListItemTracks {
  readonly playlistId = input.required<string>();
  readonly show = input.required<boolean>();
  private readonly _playlistApi = inject(PlaylistApi);
  public songs: API.Playlist.Songs[] = [];
  public process = signal<boolean>(false);

  constructor() {
    effect(() => {
      const show = this.show();
      if (show && this.songs.length === 0) {
        this.process.set(true);
        const playlistId = this.playlistId();
        this._playlistApi.get(playlistId).subscribe({
          next: (res: API.Playlist.Playlist) => {
            this.songs = res.songs;
          },
          complete: () => {
            this.process.set(false);
          },
        });
      }
    });
  }

  openSpotify(song: API.Playlist.Song) {
    const a = document.createElement("a");
    a.href = `https://open.spotify.com/intl-de/track/${song.id}`;
    a.target = "_blank";
    const link = document.body.appendChild(a);
    link.click();
    document.body.removeChild(link);
  }
}
