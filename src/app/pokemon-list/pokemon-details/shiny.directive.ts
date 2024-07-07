import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShiny]',
  standalone: true,
})
export class ShinyDirective {
  @Input('host') sprites!: string[];
  @HostBinding('src') src!: string;

  constructor() {}

  ngOnInit() {
    this.src = this.sprites[0];
  }

  @HostListener('mouseenter') mouseenter() {
    this.src = this.sprites[1];
  }

  @HostListener('mouseleave') mouseleave() {
    this.src = this.sprites[0];
  }
}
