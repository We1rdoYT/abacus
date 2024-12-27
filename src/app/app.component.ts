import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AbacusComponent } from './abacus/abacus.component';
import { ValueInputComponent } from './value-input/value-input.component';
import { ValueDisplayComponent } from './value-display/value-display.component';
import { CopyrightComponent } from './copyright/copyright.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AbacusComponent,
    ValueInputComponent,
    ValueDisplayComponent,
    CopyrightComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'abacus';
}
