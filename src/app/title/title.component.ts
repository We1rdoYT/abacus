import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent implements AfterViewInit {
  hidden = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.hidden = true;
    }, 2000);
  }
}
