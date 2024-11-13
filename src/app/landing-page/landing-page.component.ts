import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FooterComponent } from '../footer/footer.component';
import {  TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactFormComponent,
    FooterComponent,
    TranslateModule,
   
  ],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss','./landing-responsive.scss']
})
export class LandingPageComponent {


  constructor( ) {}
 
}
