import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { AdoEntityComponent } from './view/ado-entity/ado-entity.component';
import { CsvGrapeComponent } from './view/csv-grape/csv-grape.component';
import { GooglyJsComponent } from './view/googly-js/googly-js.component';
import { ObjectToCsvComponent } from './view/object-to-csv/object-to-csv.component';
import { UiGrapeComponent } from './view/ui-grape/ui-grape.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'csv-grape', component: CsvGrapeComponent },
  { path: 'ado-entity', component: AdoEntityComponent },
  { path: 'googly-js', component: GooglyJsComponent },
  { path: 'object-to-csv', component: ObjectToCsvComponent },
  { path: 'ui-grape', component: UiGrapeComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/page-not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
