import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AbacusService } from '../abacus.service';
import { Dimensions } from '../dimensions';

@Component({
  selector: 'app-value-input',
  imports: [FormsModule],
  templateUrl: './value-input.component.html',
  styleUrl: './value-input.component.scss',
})
export class ValueInputComponent {
  dimensions: Dimensions;
  value = 0;

  constructor(private readonly abacusService: AbacusService) {
    this.dimensions = { ...abacusService.DEFAULT_DIMENSIONS };
  }

  updateDimensions() {
    if (
      this.validateBase(this.dimensions.base) &&
      this.validateDigits(this.dimensions.digits)
    )
      this.abacusService.setDimensions = this.dimensions;
  }

  updateValue() {
    if (this.validateValue(this.value, this.dimensions))
      this.abacusService.setValue = this.value;
  }

  addValue() {
    if (this.validateValue(this.value + 1, this.dimensions)) {
      this.value++;
      this.abacusService.setCarry = true;
    } else this.value = 0;

    this.updateValue();
  }

  subtractValue() {
    if (this.validateValue(this.value - 1, this.dimensions)) this.value--;
    else this.value = 0;

    this.updateValue();
  }

  resetValue() {
    this.value = 0;
    this.updateValue();
  }

  validateBase(base: number): boolean {
    return (base >= 2 && base <= 36 && Number.isInteger(base)) || base == null;
  }

  validateDigits(digits: number): boolean {
    return (digits > 0 && Number.isInteger(digits)) || digits == null;
  }

  validateValue(value: number, dimensions: Dimensions): boolean {
    return (
      (value >= 0 &&
        value < dimensions.base ** dimensions.digits &&
        Number.isInteger(value)) ||
      value == null
    );
  }
}
