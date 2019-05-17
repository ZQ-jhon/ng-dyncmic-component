import { Injectable, ComponentRef } from '@angular/core';
import { NgxModalModule } from './ngx-modal.module';

@Injectable({
  providedIn: NgxModalModule,
})
export class ActiveModalService {
  public activitedModal: ComponentRef<any>;
  constructor() { }

  /**
   * same as cancel
   */
  public dismiss() {
    this.activitedModal.destroy();
  }

  /**
   * action `confirm`
   */
  public confirm(callback: Function) {
    this.activitedModal.destroy();
    this.activitedModal.onDestroy(callback(this.activitedModal.instance));
  }

  /**
   * before close
   */
  public getValueAndClose() {

  }

}
