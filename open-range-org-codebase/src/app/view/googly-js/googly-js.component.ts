import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-googly-js',
  templateUrl: './googly-js.component.html',
  styleUrls: ['./googly-js.component.css']
})
export class GooglyJsComponent implements AfterViewInit{
  ngAfterViewInit() {
    (window as any).Prism.highlightAll();
  }
}
