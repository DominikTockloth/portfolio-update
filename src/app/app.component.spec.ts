import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateCompiler, TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, TranslateModule.forRoot()],
      providers: [
        TranslateStore, TranslateService, TranslateLoader, TranslateCompiler, TranslateModule, provideHttpClient(),provideRouter([])
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'Hello, portfolio-update' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio-update');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, portfolio-update');
  });
});
