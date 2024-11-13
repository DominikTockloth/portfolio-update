import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { Project } from '../models/project.model';
import { NgIf, NgStyle } from '@angular/common';
import { PopupProjectComponent } from '../popup-project/popup-project.component';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    PopupProjectComponent,
    TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(private renderer: Renderer2) { }

  isProject1Visible: boolean = false;
  isProject2Visible: boolean = false;
  isProject3Visible: boolean = false;
  isHovered: boolean = false;
  isPopUpOpen: boolean = false;

  selectedProject: Project | null = null;

  @Output() openProjectEvent = new EventEmitter<Project>();

 
  openProject(project: Project) {
    this.selectedProject = project;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  closeProject() {
    this.selectedProject = null;
    this.renderer.removeStyle(document.body, 'overflow');
  }

  toggleVisibilityProject(index: number, isHovered: boolean) {
    if (index == 0) {
      this.isProject1Visible = isHovered;
    } else if (index == 1) {
      this.isProject2Visible = isHovered;
    } else if (index == 2) {
      this.isProject3Visible = isHovered;
    }
  }

  projects: Project[] = [
    {
      id: 'join',
      number: 1,
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'HTML', 'CSS'],
      technologyImg: ['./../../assets/img/Angular.png', './../../assets/img/typescript.png', './../../assets/img/Firebase.png', './../../assets/img/html.png', './../../assets/img/css.png'],
      github: 'https://github.com/DominikTockloth/Join-Kanban-Project-Angular-',
      livetest: 'https://join.dominik-tockloth.de/log-in',
      img: './../../assets/img/join-2.png',
    },
    {
      id: 'elPolloLoco',
      number: 2,
      title: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      technologyImg: ['./../../assets/img/Javascript.png', './../../assets/img/html.png', './../../assets/img/css.png'],
      github: 'https://github.com/DominikTockloth/El-Pollo-Loco-',
      livetest: 'https://el-pollo-loco.dominik-tockloth.de',
      img: './../../assets/img/pollo.png',
    },
    {
      id: 'simpleCrm',
      number: 3,
      title: 'Simple CRM',
      description: 'A Simple Customer Relationship Management system working with CRUD functionality.',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'HTML', 'CSS'],
      technologyImg: ['./../../assets/img/Angular.png', './../../assets/img/typescript.png', './../../assets/img/Firebase.png', './../../assets/img/html.png', './../../assets/img/css.png'],
      github: 'https://github.com/DominikTockloth/Simple-CRM',
      livetest: 'https://simple-crm.dominik-tockloth.de/',
      img: './../../assets/img/simple-crm.png',
    }
  ]
}
