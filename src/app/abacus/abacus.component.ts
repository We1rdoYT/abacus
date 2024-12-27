import { Component } from '@angular/core';
import { AbacusService } from '../abacus.service';
import { Dimensions } from '../dimensions';

@Component({
  selector: 'app-abacus',
  imports: [],
  templateUrl: './abacus.component.html',
  styleUrl: './abacus.component.scss',
})
export class AbacusComponent {
  dimensions;
  value = 0;

  numbers: number[] = [];
  digits: number[] = [];

  constructor(private readonly abacusService: AbacusService) {
    this.dimensions = abacusService.DEFAULT_DIMENSIONS;

    abacusService.getDimensions.subscribe((value) => {
      this.dimensions = value;

      this.numbers = Array.from(
        { length: this.dimensions.base - 1 },
        (v, k) => k + 1,
      );

      this.updateDigits(this.value, value);
    });
    abacusService.getValue.subscribe((value) => {
      this.value = value;
      this.updateDigits(value, this.dimensions);
    });
  }

  private updateDigits(value: number, dimensions: Dimensions): void {
    const tempDigits: number[] = [];

    for (let i = 0; i < dimensions.digits; i++) {
      tempDigits.push(value % dimensions.base);
      value = Math.floor(value / dimensions.base);
    }

    this.digits = tempDigits;
  }
}
