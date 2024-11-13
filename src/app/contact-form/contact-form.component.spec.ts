import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormComponent,TranslateModule.forRoot()],
      providers:[
        TranslateService,TranslateStore,TranslateLoader, provideHttpClient(),provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
