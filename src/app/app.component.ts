import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import {NavbarComponent} from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="bg-demo-shadow w-full h-full">
      <app-header></app-header>
      <app-navbar></app-navbar>
    </main>
  `,
  imports: [HeaderComponent, NavbarComponent]

})
export class AppComponent {
  title = 'angular-demo';
}
