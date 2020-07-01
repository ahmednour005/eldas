import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(){
    var show = document.getElementById('navbar-collapse');
        show.style.right = "-200px";
  }
   showMenu() {
    var show = document.getElementById('navbar-collapse');
        show.style.right = "0";
    }

}
