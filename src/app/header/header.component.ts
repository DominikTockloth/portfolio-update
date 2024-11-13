import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  selectedLanguage: string = 'en';


  constructor(public translate: TranslateService) { }


  switchLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
  }
}



