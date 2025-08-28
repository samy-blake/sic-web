import { Component, input, signal } from "@angular/core";
import { API } from "../../interface/api";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { faBrandSpotify } from "@ng-icons/font-awesome/brands";
import { faSolidChevronDown } from "@ng-icons/font-awesome/solid";
import { PlaylistListItemTracks } from "./playlist-list-item-tracks/playlist-list-item-tracks";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-playlist-list-item",
  imports: [NgIcon, PlaylistListItemTracks, NgClass],
  templateUrl: "./playlist-list-item.html",
  styleUrl: "./playlist-list-item.scss",
  providers: [provideIcons({ faBrandSpotify, faSolidChevronDown })],
})
export class PlaylistListItem {
  readonly playlist = input.required<API.Playlists.Playlist>();
  public showTracks = signal<boolean>(false);

  openSpotify() {
    const id = this.playlist().id;
    const a = document.createElement("a");
    a.href = `https://open.spotify.com/playlist/${id}`;
    a.target = "_blank";
    const link = document.body.appendChild(a);
    link.click();
    document.body.removeChild(link);
  }

  toggleTracks() {
    this.showTracks.update((v) => !v);
  }
}
