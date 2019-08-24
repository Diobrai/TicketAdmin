import {Reservations} from "./reservations";

export class ReservationsList {
  static db;
  constructor(){
    ReservationsList.db=[{
      ligne:{
        date:'18/08/2019',
        heure:'12h30',
        prix:1200,
        arrive:'Mopti',
        depart:'Bamako',
        company:'Alou Transport'
      },
      username:'Brahima',
      numero:1,
      payer:false
    },
      {
        ligne:{
          date:'18/08/2019',
          heure:'12h30',
          prix:1200,
          arrive:'Mopti',
          depart:'Bamako',
          company:'Alou Transport'
        },
        username:'Djeneba',
        numero:2,
        payer:false
      },
      {
        ligne:{
          date:'30/08/2019',
          heure:'12h30',
          prix:1200,
          arrive:'Mopti',
          depart:'Bamako',
          company:'Alou Transport',

        },
        username:'Drissa',
        numero:3,
        payer:false
      },
      {
        ligne:{
          date:'30/08/2019',
          heure:'12h30',
          prix:1200,
          arrive:'Sikasso',
          depart:'Bamako',
          company:'Alou Transport'
        },
        username:'Abdoulaye',
        numero:4,
        payer:false
      },
      {
        ligne:{
          date:'30/08/2019',
          heure:'12h30',
          prix:1200,
          arrive:'Sikasso',
          depart:'Bamako',
          company:'Alou Transport'
        },
        username:'Traore',
        numero:5,
        payer:false
      },
      {
        ligne:{
          date:'18/08/2019',
          heure:'12h30',
          prix:1200,
          arrive:'Sikasso',
          depart:'Bamako',
          company:'Alou Transport'
        },
        username:'Chaka',
        numero:6,
        payer:false
      },
      {
        ligne:{
          date:'23/08/2019',
          heure:'13h30',
          prix:1200,
          arrive:'Koutiala',
          depart:'Bamako',
          company:'Alou Transport'
        },
        username:'Seydou',
        numero:7,
        payer:false
      },
      {
        ligne:{
          date:'18/08/2019',
          heure:'12h30',
          prix:1200,
          arrive:'Koutiala',
          depart:'Bamako',
          company:'Alou Transport'
        },
        username:'Alima',
        numero:8,
        payer:false
      },
      {
        ligne:{
          date:'18/08/2019',
          heure:'12h30',
          prix:1200,
          arrive:'Koutiala',
          depart:'Bamako',
          company:'Alou Transport'
        },
        username:'Yamadou',
        numero:9,
        payer:false
      },
      {
        ligne:{
          date:'30/08/2019',
          heure:'12h30',
          prix:1200,
          arrive:'Koutiala',
          depart:'Bamako',
          company:'Alou Transport',
        },
        username:'Ali',
        numero:10,
        payer:false
      }]
  }
  AddReservation(reservation: Reservations){
    ReservationsList.db.push(reservation);
  }

  GetReservation(company: string,place:string,date:string):Reservations[]{
    let reservation=ReservationsList.db.filter(r=>r.company==company&&r.place.toString()==place&&r.date==date);
    return reservation;
  }
  GetReservationByCompany(company:string){
    return ReservationsList.db.filter(r=>r.ligne.company==company);
  }
  AllReservation():Reservations[]{
    return ReservationsList.db;
  }


}
