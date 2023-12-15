import { Component, ElementRef, HostBinding, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { class: 'full' } // OPTION 1
})
export class HeaderComponent {
  // @HostBinding('class') classes = ['full'] // OPTION 2

  constructor() {
    // inject(ElementRef).nativeElement.className = 'full' // OPTION 3
  }

}
