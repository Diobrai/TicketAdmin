import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoixTempsPage } from './choix-temps';

@NgModule({
  declarations: [
    ChoixTempsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoixTempsPage),
  ],
})
export class ChoixTempsPageModule {}
