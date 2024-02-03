import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {CategoriesComponent} from "./categories/categories.component";


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="bg-demo-shadow w-full h-full">
      <app-header></app-header>
      <div class="flex flex-row">

        <app-navbar class="basis-1/5 lg:basis-1/6"></app-navbar>
        <app-categories class="basis-4/5 lg:basis-5/6"></app-categories>
      </div>


    </main>
  `,
  imports: [HeaderComponent, NavbarComponent, CategoriesComponent]

})
export class AppComponent {
  title = 'angular-demo';
}
