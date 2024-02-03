import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="flex justify-between p-4 w-screen h-auto text-demo-grey text-sm bg-demo-white">
      <img src="../../assets/header/logo.svg" alt="logo" width="159" height="38"/>

      <div class="flex w-1/2">
        <img src="../../assets/header/search.svg" alt="search" width="24" height="24"/>
        <input
          type="search"
          placeholder="Search..."
          class="px-5 text-sm focus:outline-none"
        />
      </div>


      <div class="flex flex-row-reverse w-1/4">
        <div class="flex items-center ml-4 mr-2">
          <img src="../../assets/header/user/avatar.svg" alt="avatar" width="36" height="36" class="mr-2"/>
          <p class="whitespace-nowrap">X&apos;eriya Ponald</p>
          <img src="../../assets/header/user/drop-icon.svg" alt="drop-icon" width="24" height="24" class="ml-6"/>
        </div>
        <img src="../../assets/header/notifications.svg" alt="notifications" width="30" height="30"  class="mr-2"/>
        <img src="../../assets/header/chat.svg" alt="chat" width="24" height="24" class="mr-2 "/>

      </div>

    </header>




  `
})
export class HeaderComponent {

}
