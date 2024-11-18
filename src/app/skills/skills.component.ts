import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor,TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  textItems: string[] = [
    'HTML', 'CSS', 'JavaScript', 'Material Design', 'TypeScript', 'Angular', 'Firebase', 'Git', 'Rest-Api', 'Scrum', 'Growth mindset'];
  images: string[] = [
    'html.png', 'css.png', 'Javascript.png', 'material.png', 'typescript.png', 'Angular.png', 'Firebase.png', 'git.png', 'Api.png', 'scrum.png', 'mind.png'];
  basePath: string = './../../assets/img/'
}
