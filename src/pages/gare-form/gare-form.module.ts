import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GareFormPage } from './gare-form';

@NgModule({
  declarations: [
    GareFormPage,
  ],
  imports: [
    IonicPageModule.forChild(GareFormPage),
  ],
})
export class GareFormPageModule {}
