import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  links : string[] | undefined;
  logoSrc : string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.links = environment.menu;
    this.logoSrc = environment.logo;
  }

}
