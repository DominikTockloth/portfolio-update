import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Project } from '../models/project.model';
import { NgFor, NgIf } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-popup-project',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    TranslateModule
  ],
  templateUrl: './popup-project.component.html',
  styleUrl: './popup-project.component.scss',
  animations: [
    // Trigger for the entire modal fade in/out
    trigger('fadeAnimation', [
      state('open', style({
        opacity: 1,
        zIndex: 10,
        display: 'block',
      })),
      state('closed', style({
        opacity: 0,
        zIndex: -2,
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.125s ease-in-out', style({ opacity: 0 })),
        style({ display: 'none' })
      ]),
      transition('closed => open', [
        style({ display: 'block' }),
        animate('0.125s ease-in-out', style({ opacity: 1 }))
      ])
    ]),
    // Trigger for the project content fade in/out
    trigger('fadeProject', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.100s ease-in-out', style({ opacity: 0 }))
      ]),
      transition('closed => open', [
        animate('0.100s ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})


export class PopupProjectComponent {
  constructor(private renderer: Renderer2) { }
  selectedProject: Project | null = null;

  @Input() project: Project | null = null;

  @Output() close = new EventEmitter<void>();


  onClose() {
    this.close.emit();
  }
  closeProject() { }

  next() {
    this.selectedProject = this.project;
    const nextIndex = this.project!.number % this.projects.length;
    this.project = this.projects[nextIndex]
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
