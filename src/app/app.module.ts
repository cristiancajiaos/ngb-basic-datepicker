import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicDatepickerComponent } from './basic-datepicker/basic-datepicker.component';
import { DatepickerInPopupComponent } from './datepicker-in-popup/datepicker-in-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BasicDatepickerComponent,
    DatepickerInPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
