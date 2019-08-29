import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {User} from "../../Data/user";
import {ReservationsList} from "../../Data/reservationsList";
import {Gare} from "../../Data/Gare";
import {Company} from "../../Data/company";
import {DatePipe} from "@angular/common";
import {GeneralProvider} from "../../providers/general/general";


/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  user:User;
  reservation:ReservationsList;
  reservationsArray=[];
  date: any=new Date();
  arrive: any;
  garesCompagny: any;
  gares:Gare;
  heure: string;
  tabReservations=[];
  imprimer:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public datepipe: DatePipe, private generalProvider:GeneralProvider,
              ) {
    let userstock=localStorage.getItem('user');
    let usertab=userstock.split("&");
    let c=new Company();
    let g=new Gare();
    g.name=usertab[1];
    c.name=usertab[0];
    this.user=new User(usertab[2],c,'1234',g);
    console.log(this.user)
    //this.user=this.navParams.data[0];
    this.reservation=new ReservationsList();
    this.gares=new Gare();
    this.date=this.datepipe.transform(this.date,'dd/MM/yyyy');
    console.log('date', this.date)
  }

  ionViewDidLoad() {
    let date=new Date();
    this.heure=date.getHours()+'h'+date.getMinutes();
    console.log('company', this.user.company.name);
    this.garesCompagny=this.gares.AllGare().filter(g=>g.company==this.user.company.name && g.name!=this.user.gare.name);
    console.log(this.garesCompagny);
    this.reservationsArray=this.reservation.GetReservationByCompany(this.user.company.name);
    this.tabReservations=this.reservationsArray;

  }

  GetReservation(arrive: any) {
    this.imprimer=true;
    this.tabReservations=this.reservationsArray.filter(r=>r.ligne.arrive==arrive && r.ligne.date==this.date && r.ligne.heure==this.heure);

  }

  payer(r: any) {
    r.paye=true;
    //this.GetReservation(this.arrive)
  }
  showPicker(){
    let date=new Date();
    let datatable=this.date.split('/');
    date.setFullYear(datatable[2],datatable[1]-1,datatable [0]);
    this.generalProvider.DatePicker('date',date).then(date=>{
      //this.heure=date.getHours()+'h'+date.getMinutes();
      if(date){
        this.date=this.datepipe.transform(date,'dd/MM/yyyy');
      }else {

      }

    }).catch(err=>console.log(err))
  }

  showTimePicker() {
    let date=new Date();
    let time=this.heure.split('h');
    date.setHours(parseInt(time[0]),parseInt(time[1]));
    //console.log(date)
    this.generalProvider.DatePicker('time',date).then(date=>{
      if(date){
        this.heure=date.getHours()+'h'+date.getMinutes();
      }
    }).catch(err=>console.log(err))

  }
}
