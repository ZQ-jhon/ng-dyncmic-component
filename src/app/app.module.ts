import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalComponent } from './component/modal.component';
import { AppComponent } from './app.component';
import { NgxModalModule } from './ngx-modal/ngx-modal.module';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    NgxModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalComponent,
  ]
})
export class AppModule { }
