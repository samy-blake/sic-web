import { Routes } from "@angular/router";
import { VPlaylist } from "./views/v-playlist/v-playlist";
import { VUser } from "./views/v-user/v-user";
import { V404 } from "./views/v-404/v-404";

export const routes: Routes = [
  {
    path: "",
    component: VPlaylist,
  },
  {
    path: "user",
    component: VUser,
  },
  {
    path: "**",
    component: V404,
  },
];
