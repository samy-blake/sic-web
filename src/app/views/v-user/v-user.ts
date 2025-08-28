import { AccessToken, SpotifyApi as SpotifySdk } from "@spotify/web-api-ts-sdk";
import { Component, inject, signal } from "@angular/core";
import { User } from "../../service/user";
import { Router } from "@angular/router";
import { SpotifyApi } from "../../service/spotify-api";
import { ButtonModule } from "primeng/button";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { faBrandSpotify } from "@ng-icons/font-awesome/brands";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-v-user",
  imports: [ButtonModule, NgIcon],
  templateUrl: "./v-user.html",
  styleUrl: "./v-user.scss",
  providers: [provideIcons({ faBrandSpotify })],
  standalone: true,
})
export class VUser {
  private _userService = inject(User);
  private _spotifyApi = inject(SpotifyApi);

  public showSpotifyBtn = signal(false);

  constructor() {
    if (!this._userService.isAuth()) {
      const router: Router = inject(Router);
      router.navigate(["/auth/login"]);
      return;
    }
    this._spotifyApi.getAccess().subscribe({
      next: (res) => {
        const spotifyAccess = res;
        console.log(spotifyAccess);
      },
      error: (err) => {
        if (err.status === 403) {
          this.showSpotifyBtn.set(true);
        }
      },
    });
  }

  linkSpotify() {
    SpotifySdk.performUserAuthorization(
      environment.spotify.clientId,
      "http://127.0.0.1:4200/user",
      [
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "streaming",
      ],
      async (accessToken: AccessToken) => {
        console.log(accessToken);
        this._spotifyApi.setUserToken(accessToken).subscribe({
          next: () => {
            alert("gespeichert");
          },
          error: () => {
            alert("fehler");
          },
        });
      },
    );
  }
}
