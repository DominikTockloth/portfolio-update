import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupProjectComponent } from './popup-project.component';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('PopupProjectComponent', () => {
  let component: PopupProjectComponent;
  let fixture: ComponentFixture<PopupProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupProjectComponent,TranslateModule.forRoot()],
      providers:[
        TranslateService,TranslateStore,TranslateLoader, provideHttpClient(),provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
