import { ActiveModalService } from './ngx-modal/active-modal.service';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from './ngx-modal/modal.service';
import { ModalComponent } from './component/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public data: Object;
  @ViewChild('host', { read: ViewContainerRef }) host: ViewContainerRef;
  constructor(
    private modal: ModalService,
    private active: ActiveModalService,
  ) { }

  public create(): void {
    // 清除动态创建时拿到的回调数据
    this.data = {};
    this.modal.create(this.host, ModalComponent, {timestamp: new Date().toLocaleDateString(), data: '创建一下试试', action: 'create',});
  }
  public destory() {
    this.active.dismiss();
  }
  public confirm() {
    this.active.confirm((res) => {
      console.log(res);
      this.data = res;
    });
  }
}
