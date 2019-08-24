import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../Data/user";
import {ReservationsList} from "../../Data/reservationsList";
import {Gare} from "../../Data/Gare";
import {Company} from "../../Data/company";

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
  date: string;
  arrive: any;
  garesCompagny: any;
  gares:Gare;
  heure: string;
  tabReservations=[];
  imprimer:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  }

  ionViewDidLoad() {
    console.log('company', this.user.company.name);
    this.garesCompagny=this.gares.AllGare().filter(g=>g.company==this.user.company.name && g.name!=this.user.gare.name);
    console.log(this.garesCompagny);
    this.reservationsArray=this.reservation.GetReservationByCompany(this.user.company.name);
    this.tabReservations=this.reservationsArray;

  }

  GetReservation(arrive: any) {console.log(this.date);
    let date1=this.date.split('-');
    let date2=date1[2]+'/'+date1[1]+'/'+date1[0];
    let heure1=this.heure.replace(':','h');
    console.log(date2, heure1);
    this.imprimer=true;
    this.tabReservations=this.reservationsArray.filter(r=>r.ligne.arrive==arrive && r.ligne.date==date2 && r.ligne.heure==heure1);

  }

  payer(r: any) {
    r.paye=true;
    //this.GetReservation(this.arrive)
  }
}
