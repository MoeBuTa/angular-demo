import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NavItem} from "./nav-item";
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div
        [class.bg-demo-blue]="isSelected"
        [class.text-demo-white]="isSelected"
        class="flex flex-row cursor-pointer p-2 rounded-md relative"
           (click)="selectOption()">
          <img [src]="navItem.icon" alt="Icon of {{navItem.name}}" width="24" height="24" class="mr-4"/>
          <p class="flex items-center capitalize">
              {{navItem.name}}
          </p>
        <img *ngIf="navItem.name === 'orders'" src="../../../assets/navbar/order_badge.svg" class="absolute right-4 top-1/2 transform -translate-y-1/2" alt="badge"/>


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
