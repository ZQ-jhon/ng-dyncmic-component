import { ActiveModalService } from './active-modal.service';
import { Injectable, Type, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NgxModalModule } from './ngx-modal.module';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(
    private cfr: ComponentFactoryResolver,
    private active: ActiveModalService,
  ) { }
  public create(host: ViewContainerRef, component: Type<any>, data: Object) {
    // 保持全局单例 Modal
    host.clear();

    // 工厂方法
    const factory = this.cfr.resolveComponentFactory(component);
    const currentModal = host.createComponent(factory);
    currentModal.instance.data = data;

    this.active.activitedModal = currentModal;
  }
}
