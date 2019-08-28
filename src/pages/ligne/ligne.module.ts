import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LignePage } from './ligne';
import {ChartsModule} from "ng2-charts";
import {Ng2GoogleChartsModule} from "ng2-google-charts";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    LignePage,
  ],
  imports: [
    IonicPageModule.forChild(LignePage),
    Ng2GoogleChartsModule,
    ComponentsModule,

  ],
})
export class LignePageModule {}
