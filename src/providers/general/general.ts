import { Injectable } from '@angular/core';
import {DatePicker} from "@ionic-native/date-picker";

/*
  Generated class for the GeneralProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GeneralProvider {

  constructor(private datePicker: DatePicker) {
  }

  public DatePicker(mode:string,date):Promise<Date>{
    let options={
        date:date,
        mode: mode,
        androidTheme: 0,
        allowOldDates: true,
        allowFutureDates: true,
        doneButtonLabel: 'Fait',
        doneButtonColor: '#2038f4',
        cancelButtonLabel: 'Annuler',
        cancelButtonColor: '#000000',
        locale:'Fr',
      };
    return this.datePicker.show(options);
  }
}
