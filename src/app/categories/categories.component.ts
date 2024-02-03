import { Component } from '@angular/core';
import {CategoryItem} from "./category-item/category-item";
import {CategoryItemComponent} from "./category-item/category-item.component";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CategoryItemComponent,
    NgForOf
  ],
  template: `
    <div class="pr-10">

      <div class="m-6 flex justify-between">
        <p class="text-2xl font-semibold">
          Categories
        </p>

        <img src="../../assets/categories/add_category.png" alt="Icon of add category" width="174" height="40" class="mr-4 cursor-pointer"/>

      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-2 place-items-center">
        <app-category-item *ngFor="let categoryItem of categoryItemList" [categoryItem]="categoryItem"
                           [isSelected]="selectedOption === categoryItem.name"
                           (optionSelected)="onOptionSelected($event)"></app-category-item>

      </div>

    </div>
  `
})
export class CategoriesComponent {
  categoryItemList: CategoryItem[] = [
    {
      "image": "../../assets/categories/men_clothes.png",
      "name":"men clothes",
      "quantity":24
    },
    {
      "image": "../../assets/categories/women_clothes.png",
      "name":"women clothes",
      "quantity":12
    },
    {
      "image": "../../assets/categories/accessories.png",
      "name":"accessories",
      "quantity":43
    },
    {
      "image": "../../assets/categories/cotton_clothes.png",
      "name":"cotton clothes",
      "quantity":31
    },
    {
      "image": "../../assets/categories/summer_clothes.png",
      "name":"summer clothes",
      "quantity":26
    },
    {
      "image": "../../assets/categories/wedding_clothes.png",
      "name":"wedding clothes",
      "quantity":52
    },
    {
      "image": "../../assets/categories/spring_collection.png",
      "name":"spring collection",
      "quantity":24
    },
    {
      "image": "../../assets/categories/casual_clothes.png",
      "name":"casual clothes",
      "quantity":52
    },
    {
      "image": "../../assets/categories/hats.png",
      "name":"hats",
      "quantity":26
    },

  ]
  selectedOption: string = 'women clothes';
  onOptionSelected(option: string): void {
    this.selectedOption = option;
    console.log('Option selected:', this.selectedOption);
  }
}
