import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  title? : string;
  subtitle? : string;

  constructor() { }

  ngOnInit(): void {
    this.title = environment.Title;
    this.subtitle = environment.Subtitle;
  }

}
