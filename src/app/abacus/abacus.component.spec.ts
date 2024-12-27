import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbacusComponent } from './abacus.component';

describe('AbacusComponent', () => {
  let component: AbacusComponent;
  let fixture: ComponentFixture<AbacusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbacusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AbacusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
