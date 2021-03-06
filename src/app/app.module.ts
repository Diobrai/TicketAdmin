import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {DatePicker} from '@ionic-native/date-picker'
import { MyApp } from './app.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { GeneralProvider } from '../providers/general/general';
import {DatePipe} from "@angular/common";


@NgModule({
  declarations: [
    MyApp,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Retour',
    }),
    Ng2GoogleChartsModule,




  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeneralProvider,
    DatePipe




  ]
})
export class AppModule {}
