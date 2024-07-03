import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-ado-entity',
  templateUrl: './ado-entity.component.html',
  styleUrls: ['./ado-entity.component.css']
})
export class AdoEntityComponent implements AfterViewInit{
  ngAfterViewInit() {
    (window as any).Prism.highlightAll();
  }
}
