import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  isSidebarOpen = false;

  ngOnInit() {
  }

  toggleSidebar() {
    console.log('hii');
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
