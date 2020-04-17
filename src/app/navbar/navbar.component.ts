import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    const isSolar = localStorage.getItem('isSolar');

    if (theme) {
      document.body.classList.add(theme);
      isSolar && document.body.classList.add('solar');
    }
  }

  onClickdark() {
    document.body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  }

  onClicklight() {
    document.body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }

  onClicksolar() {
    if (document.body.classList.contains('solar')) {
      document.body.classList.remove('solar');
      localStorage.removeItem('isSolar');
    }
    else {
      document.body.classList.add('solar');
      localStorage.setItem('isSolar', 'true');
    }
  }

}