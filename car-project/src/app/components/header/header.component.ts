import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  onTop = true;
  ngOnInit(): void {}

  @HostListener('document:scroll')
  onScroll() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 0) {
      this.onTop = false;
    } else {
      this.onTop = true;
    }
  }
}
