import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit {
  aboutTitle? : string;
  aboutText? : string;

  constructor() { }

  ngOnInit(): void {
    this.aboutTitle = environment.aboutTitle;
    this.aboutText = environment.aboutText;

  }

}
