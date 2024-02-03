import {Component} from '@angular/core';
import {NavItem} from "./nav-item/nav-item";
import {NavItemComponent} from "./nav-item/nav-item.component";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavItemComponent,
    NgForOf
  ],
  template: `
    <div
      class="flex flex-col gap-3 w-1/5 min-w-40 max-w-60 h-full min-h-screen py-6 px-2 border-r-2 border-demo-border text-demo-grey text-xs lg:text-xl">
      <app-nav-item *ngFor="let navItem of navItemList" [navItem]="navItem"
                    [isSelected]="selectedOption === navItem.name"
                    (optionSelected)="onOptionSelected($event)"></app-nav-item>
      <p class="text-xs text-demo-span capitalize mt-4 ml-3">other information</p>
      <app-nav-item *ngFor="let navItem of otherInfoList" [navItem]="navItem"
                    [isSelected]="selectedOption === navItem.name"
                    (optionSelected)="onOptionSelected($event)"></app-nav-item>
      <p class="text-sm text-demo-span capitalize mt-4 ml-3">settings</p>
      <app-nav-item *ngFor="let navItem of settingList" [navItem]="navItem"
                    [isSelected]="selectedOption === navItem.name"
                    (optionSelected)="onOptionSelected($event)"></app-nav-item>

    </div>
  `
})
export class NavbarComponent {
  navItemList: NavItem[] = [
    {
      "icon": "../../assets/navbar/dashboard.svg",
      "name": "dashboard"
    },
    {
      "icon": "../../assets/navbar/orders.svg",
      "name": "orders"
    },
    {
      "icon": "../../assets/navbar/products.svg",
      "name": "products"
    },
    {
      "icon": "../../assets/navbar/categories.svg",
      "name": "categories"
    },
    {
      "icon": "../../assets/navbar/customers.svg",
      "name": "customers"
    },
    {
      "icon": "../../assets/navbar/reports.svg",
      "name": "reports"
    },
    {
      "icon": "../../assets/navbar/coupons.svg",
      "name": "coupons"
    },
    {
      "icon": "../../assets/navbar/inbox.svg",
      "name": "inbox"
    },
  ]

  selectedOption: string = 'customers';


  otherInfoList = [
    {
      "icon": "../../assets/navbar/knowledge_base.svg",
      "name": "knowledge base"
    },
    {
      "icon": "../../assets/navbar/product_updates.svg",
      "name": "product updates"
    }
  ]
  settingList = [
    {
      "icon": "../../assets/navbar/personal_settings.svg",
      "name": "personal settings"
    },
    {
      "icon": "../../assets/navbar/global_settings.svg",
      "name": "global settings"
    }
  ]

  onOptionSelected(option: string): void {
    this.selectedOption = option;
    console.log('Option selected:', this.selectedOption);
  }
}
