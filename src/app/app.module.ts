import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { DownloadVideoFormComponent } from './download-video-form/download-video-form.component';
import { TableFilterItemComponent } from './table-filter-item/table-filter-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadVideoFormComponent,
    TableFilterItemComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
