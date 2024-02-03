import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NavItem} from "./nav-item";


@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [],
  template: `
      <div
        [class.bg-demo-blue]="isSelected"
        [class.text-demo-white]="isSelected"
        class="flex flex-row cursor-pointer p-2 rounded-md"
           (click)="selectOption()">
          <img [src]="navItem.icon" alt="Icon of {{navItem.name}}" width="24" height="24" class="mr-4"/>
          <p class="capitalize">
              {{navItem.name}}
          </p>
      </div>
  `
})
export class NavItemComponent {
  @Input() navItem!:NavItem;
  @Input() isSelected: boolean = false;
  @Output() optionSelected = new EventEmitter<string>();

  selectOption(): void {
    this.optionSelected.emit(this.navItem.name);
  }
}
