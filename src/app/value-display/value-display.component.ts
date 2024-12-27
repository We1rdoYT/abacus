import { Component } from '@angular/core';
import { AbacusService } from '../abacus.service';

@Component({
  selector: 'app-value-display',
  imports: [],
  templateUrl: './value-display.component.html',
  styleUrl: './value-display.component.scss',
})
export class ValueDisplayComponent {
  base;
  value = 0;

  constructor(private readonly abacusService: AbacusService) {
    this.base = { ...abacusService.DEFAULT_DIMENSIONS }.base;

    abacusService.getValue.subscribe((value) => (this.value = value));
    abacusService.getDimensions.subscribe((value) => (this.base = value.base));
  }
}
