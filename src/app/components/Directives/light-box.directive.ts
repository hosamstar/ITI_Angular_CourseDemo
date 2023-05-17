import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[LightBox]',
})
export class LightBoxDirective implements OnChanges {
  @Input('LightBox') highlightColor: String = 'yellow';
  @Input() defaultColor: string = 'darkblue';

  constructor(private elemRef: ElementRef) {
    // elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
    // in constructor input decorator won't be detected once created the component so we remove that to ngOnChange
  }
  ngOnChanges(): void {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
    // Used just when component recieve @Input decorator function to detect this change.
  }

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = `3px solid ${this.highlightColor}`;
  }

  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.border = `2px solid ${this.defaultColor}`;
  }
}
