import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBoxcolor]'
})
export class BoxcolorDirective {

  constructor(private element:ElementRef) { 
    element.nativeElement.style.color='red';
  }
  @HostListener('mouseover')  onHover(){
    this.element.nativeElement.style.color="green";
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.element.nativeElement.style.color="red";
  }
}
