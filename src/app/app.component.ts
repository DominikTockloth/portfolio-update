import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import AOS from 'aos';
import { TranslateService} from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterOutlet,
    LandingPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'Hello, portfolio-update';

  constructor(private renderer: Renderer2, public translate: TranslateService) { }

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      AOS.init();
    }
    this.renderer.setStyle(document.body, 'margin', '0');
  }

}

