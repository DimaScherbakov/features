import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TableComponent } from './table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    NgSelectModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
