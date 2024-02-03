import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryItem} from "./category-item";

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-demo-white w-[280px] rounded-md">
      <img [src]="categoryItem.image" alt="Image of {{categoryItem.name}}" width="280"/>
      <div class="p-4">
        <p class="text-black text-sm font-semibold">{{categoryItem.name}}</p>
        <p class="text-demo-span text-xs">{{categoryItem.quantity}} items</p>
      </div>

    </div>

  `
})
export class CategoryItemComponent {
  @Input() categoryItem!:CategoryItem;
  @Input() isSelected: boolean = false;
  @Output() optionSelected = new EventEmitter<string>();

  selectOption(): void {
    this.optionSelected.emit(this.categoryItem.name);
  }
}
