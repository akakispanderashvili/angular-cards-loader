import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[basicAttribute]',
})
export class BassicAttributeDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
  }
}
