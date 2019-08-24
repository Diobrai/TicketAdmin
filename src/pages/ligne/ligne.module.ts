import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LignePage } from './ligne';

@NgModule({
  declarations: [
    LignePage,
  ],
  imports: [
    IonicPageModule.forChild(LignePage),
  ],
})
export class LignePageModule {}
