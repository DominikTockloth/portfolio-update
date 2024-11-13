import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTransparentInput]',
  standalone: true ,
})
export class TransparentInputDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setTransparentBackground();
  }

  @HostListener('focus') onFocus() {
    this.setTransparentBackground();
  }

  @HostListener('blur') onBlur() {
    this.setTransparentBackground();
  }

  @HostListener('input') onInput() {
    this.setTransparentBackground(); // Hintergrundfarbe bei Eingabe
  }

  @HostListener('change') onChange() {
    this.setTransparentBackground(); // Hintergrundfarbe bei Änderung durch Autofill
  }

  private setTransparentBackground() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent');
  }
}



