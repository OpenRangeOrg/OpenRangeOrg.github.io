import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-ui-grape',
  templateUrl: './ui-grape.component.html',
  styleUrls: ['./ui-grape.component.css']
})
export class UiGrapeComponent implements AfterViewInit{
  ngAfterViewInit() {
    (window as any).Prism.highlightAll();
  }
}
