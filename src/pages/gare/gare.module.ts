import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GarePage } from './gare';

@NgModule({
  declarations: [
    GarePage,
  ],
  imports: [
    IonicPageModule.forChild(GarePage),
  ],
})
export class GarePageModule {}
