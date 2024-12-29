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
  dimensions: Dimensions;
  private value = 0;
  private carry = false;

  numbers: number[] = [];
  digits: number[] = [];
  private timeouts: ReturnType<typeof setTimeout>[] = [];

  constructor(private readonly abacusService: AbacusService) {
    this.dimensions = { ...abacusService.DEFAULT_DIMENSIONS };

    abacusService.getDimensions.subscribe((value) => {
      this.dimensions = value;
      this.numbers = Array.from(
        { length: this.dimensions.base },
        (v, k) => k + 1,
      ).reverse();

      this.updateDigits();
    });
    abacusService.getValue.subscribe((value) => {
      this.value = value;

      this.updateDigits();
    });
    abacusService.getCarry.subscribe((value) => (this.carry = value));
  }

  private updateDigits() {
    let tempValue = this.value;
    const tempDigits: number[] = [];

    // Resets all timeouts
    for (const timeout of this.timeouts) clearTimeout(timeout);
    this.timeouts = [];

    for (let i = 0; i < this.dimensions.digits; i++) {
      tempDigits.push(tempValue % this.dimensions.base);
      tempValue = Math.floor(tempValue / this.dimensions.base);
    }

    // Uncarries values when this.carry is true, then calls carryDigits() for animation
    if (this.carry && tempDigits[0] == 0 && this.value != 0) {
      for (let i = 0; i == 0 || tempDigits[i] == -1; i++) {
        tempDigits[i] += this.dimensions.base;
        tempDigits[i + 1]--;
      }

      this.carryDigits(0);
    }

    this.abacusService.setCarry = false;

    this.digits = tempDigits;
  }

  carryDigits(i: number) {
    this.timeouts.push(
      setTimeout(() => {
        this.digits[i] = 0;
        this.digits[i + 1]++;

        if (this.digits[i + 1] == this.dimensions.base) this.carryDigits(i + 1);
      }, 1000),
    );
  }
}
