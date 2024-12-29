import { Injectable } from '@angular/core';
import { Dimensions } from './dimensions';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbacusService {
  readonly DEFAULT_DIMENSIONS: Dimensions = {
    base: 2,
    digits: 4,
  };

  private dimensions = new BehaviorSubject<Dimensions>({
    ...this.DEFAULT_DIMENSIONS,
  });
  private value = new BehaviorSubject<number>(0);
  private carry = new BehaviorSubject<boolean>(false);

  public get getDimensions(): BehaviorSubject<Dimensions> {
    return this.dimensions;
  }

  public get getValue(): BehaviorSubject<number> {
    return this.value;
  }

  public get getCarry(): BehaviorSubject<boolean> {
    return this.carry;
  }

  public set setDimensions(v: Dimensions) {
    this.dimensions.next({
      base: v.base ?? this.dimensions.getValue().base,
      digits: v.digits ?? this.dimensions.getValue().digits,
    });
  }
  public set setValue(v: number) {
    this.value.next(v ?? 0);
  }

  public set setCarry(v: boolean) {
    this.carry.next(v);
  }
}
