import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <app-header></app-header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  imports: [HomeComponent, HeaderComponent]

})
export class AppComponent {
  title = 'angular-demo';
}
