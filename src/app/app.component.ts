import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
  styles: [`
    h1 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'angular_web_app';
}
