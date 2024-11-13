import { TransparentInputDirective } from './transparent-input.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('TransparentInputDirective', () => {
  let directive: TransparentInputDirective;
  let elementRefMock: ElementRef;
  let rendererMock: Renderer2;

  beforeEach(() => {
    // Erstelle ein Mock-ElementRef-Objekt
    elementRefMock = new ElementRef(document.createElement('input'));
    // Erstelle ein Mock-Renderer2-Objekt
    rendererMock = jasmine.createSpyObj('Renderer2', ['setStyle']);
    // Initialisiere die Direktive mit dem Mock-ElementRef und Mock-Renderer2
    directive = new TransparentInputDirective(elementRefMock, rendererMock);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set background to transparent on focus', () => {
    directive.onFocus();
    expect(rendererMock.setStyle).toHaveBeenCalledWith(elementRefMock.nativeElement, 'backgroundColor', 'transparent');
  });

  it('should set background to transparent on blur', () => {
    directive.onBlur();
    expect(rendererMock.setStyle).toHaveBeenCalledWith(elementRefMock.nativeElement, 'backgroundColor', 'transparent');
  });

  it('should set background to transparent on input', () => {
    directive.onInput();
    expect(rendererMock.setStyle).toHaveBeenCalledWith(elementRefMock.nativeElement, 'backgroundColor', 'transparent');
  });
});



