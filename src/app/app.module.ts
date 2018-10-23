import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeDE from '@angular/common/locales/de';

import { AppComponent } from './app.component';
import { TarifListComponent } from './tarif-list/tarif-list.component';
import { registerLocaleData } from '@angular/common';
import { TarifItemComponent } from './tarif-list/tarif-item/tarif-item.component';
import { TarifFilterPanelComponent } from './tarif-list/tarif-filter-panel/tarif-filter-panel.component';

registerLocaleData(localeDE);

@NgModule({
  declarations: [
    AppComponent,
    TarifListComponent,
    TarifItemComponent,
    TarifFilterPanelComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
