import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  // @Input() appBorderCard : string|undefined;
  @Input("appBorderCard") borderColor : string|undefined;

  constructor(private el:ElementRef) 
  {
    this.setShadow(this.shadowSize, this.shadowSize, 10, this.borderThickness, this.idleColor)
    this.setBorder(this.borderThickness, this.idleColor);
  }

  shadowSize: number = 5
  defaultColor: string = "blue"
  borderThickness:number = 2
  idleColor:string = "black"

  private setShadow(x:number, y:number, blur:number, radius:number, color:string)
  {
    this.el.nativeElement.style.boxShadow = `${x}px ${y}px ${blur}px ${radius}px ${color}`;
  }

  private setBorder(size:number, color:string)
  {
    this.el.nativeElement.style.border = `${size}px solid ${color}`;
  }

  @HostListener("mouseenter") onMouseEnter()
  {
    this.setBorder(4, this.borderColor||this.defaultColor)
    this.setShadow(this.shadowSize, this.shadowSize, 20, this.borderThickness, this.borderColor||this.defaultColor)
  }

  @HostListener("mouseleave") onMouseLeave()
  {
    this.setShadow(this.shadowSize, this.shadowSize, 10, this.borderThickness, this.idleColor)
    this.setBorder(this.borderThickness, this.idleColor);
  }
}
