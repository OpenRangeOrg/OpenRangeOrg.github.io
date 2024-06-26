import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { CsvGrapeComponent } from './view/csv-grape/csv-grape.component';
import { GooglyJsComponent } from './view/googly-js/googly-js.component';
import { AdoEntityComponent } from './view/ado-entity/ado-entity.component';
import { UiGrapeComponent } from './view/ui-grape/ui-grape.component';
import { ObjectToCsvComponent } from './view/object-to-csv/object-to-csv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    CsvGrapeComponent,
    GooglyJsComponent,
    AdoEntityComponent,
    UiGrapeComponent,
    ObjectToCsvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
