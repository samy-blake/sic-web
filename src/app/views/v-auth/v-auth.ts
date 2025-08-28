import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { ButtonModule } from "primeng/button";

@Component({
  selector: "app-v-auth",
  imports: [RouterLink, RouterOutlet, ButtonModule],
  templateUrl: "./v-auth.html",
  styleUrl: "./v-auth.scss",
})
export class VAuth {
}
