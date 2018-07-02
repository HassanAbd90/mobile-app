import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouchPage } from './touch';

@NgModule({
  declarations: [
    TouchPage,
  ],
  imports: [
    IonicPageModule.forChild(TouchPage),
  ],
})
export class TouchPageModule {}
