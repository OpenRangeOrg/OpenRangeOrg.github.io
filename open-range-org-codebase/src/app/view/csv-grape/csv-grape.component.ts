import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-csv-grape',
  templateUrl: './csv-grape.component.html',
  styleUrls: ['./csv-grape.component.css']
})
export class CsvGrapeComponent implements AfterViewInit{
  ngAfterViewInit() {
    (window as any).Prism.highlightAll();
  }
}
