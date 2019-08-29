import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LignePage } from './ligne';
import {Ng2GoogleChartsModule} from "ng2-google-charts";


@NgModule({
  declarations: [
    LignePage,
  ],
  imports: [
    IonicPageModule.forChild(LignePage),
    Ng2GoogleChartsModule,

  ],
})
export class LignePageModule {}
