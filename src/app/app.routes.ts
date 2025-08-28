import { Routes } from "@angular/router";
import { VPlaylist } from "./views/v-playlist/v-playlist";
import { VUser } from "./views/v-user/v-user";
import { V404 } from "./views/v-404/v-404";
import { VAuthLogin } from "./views/v-auth/v-auth-login/v-auth-login";
import { VUserRegister } from "./views/v-auth/v-auth-register/v-auth-register";
import { VAuth } from "./views/v-auth/v-auth";

export const routes: Routes = [
  {
    path: "",
    component: VPlaylist,
  },
  {
    path: "auth",
    component: VAuth,
    children: [
      {
        path: "login",
        component: VAuthLogin,
      },
      {
        path: "register",
        component: VUserRegister,
      },
      {
        path: "**",
        redirectTo: "login",
      },
    ],
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
