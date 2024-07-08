import { AfterViewInit, Component } from '@angular/core';
@Component({
  selector: 'app-object-to-csv',
  templateUrl: './object-to-csv.component.html',
  styleUrls: ['./object-to-csv.component.css']
})
export class ObjectToCsvComponent implements AfterViewInit{
  ngAfterViewInit() {
    (window as any).Prism.highlightAll();
  }
}

