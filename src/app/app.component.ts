import { Component } from '@angular/core';
import { AbacusComponent } from './abacus/abacus.component';
import { ValueInputComponent } from './value-input/value-input.component';
import { ValueDisplayComponent } from './value-display/value-display.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  imports: [
    TitleComponent,
    AbacusComponent,
    ValueDisplayComponent,
    ValueInputComponent,
    CopyrightComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'abacus';
}
