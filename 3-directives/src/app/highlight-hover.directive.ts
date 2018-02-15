import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightHover]'
})
export class HighlightHoverDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
