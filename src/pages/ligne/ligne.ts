import {Component,} from '@angular/core';
import {
  AlertController,
  IonicPage,
  NavController,
  NavParams,
} from 'ionic-angular';
import {Gare} from "../../Data/Gare";
import {User} from "../../Data/user";
import {Company} from "../../Data/company";
import * as M from 'moment'
import {Ligne} from "../../Data/ligne";
import {GeneralProvider} from "../../providers/general/general";


@IonicPage()
@Component({
  selector: 'page-ligne',
  templateUrl: 'ligne.html',
})
export class LignePage {
  user:User;
  gares:Gare;
  garesList=[];
  selectOptions;
  pieChartData;
  heure:any;
  arrive: any;
  jours: any=[];
  price: any;
  lines:Ligne;
  //line:Ligne;
  lignes=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl:AlertController,private generalProvider: GeneralProvider ) {
    this.gares=new Gare();
    this.selectOptions = {
      title: 'Jours',
      subTitle: 'Choisissez vos de voyage',
    };
  }





  ngAfterViewInit() {
    }

  ionViewDidLoad() {
    let date=new Date();
    this.heure=date.getHours()+'h'+date.getMinutes();
    M.locale('fr');
    this.GetUser();
    this.lines=new Ligne();
    let garesdb=this.gares.AllGare();
    this.lignes=this.lines.GetLigneByCompany(this.user.company.name);
    this.garesList=garesdb.filter(r=>r.company==this.user.company.name && r.name!=this.user.gare.name);
    //console.log(this.garesList);

  }



  AddLine() {
    console.log(this.heure, this.arrive, this.jours);
    if(this.jours.length>0){
      let joursdb=this.jours.toString();
      let line=new Ligne();
      line.arrive=this.arrive;
      line.depart=this.user.gare.name;
      line.prix=this.price;
      line.company=this.user.company.name;
      line.heure=this.heure;
      line.jours=joursdb;
      this.lignes.push(line);
    }else {
      this.alertCtrl.create({
        title:"Info",
        subTitle:'Vous devez remplire tous les champs!!'
      }).present()
    }


  }

  GetUser(){
    let userstock=localStorage.getItem('user');
    let usertab=userstock.split("&");
    let c=new Company();
    let g=new Gare();
    g.name=usertab[1];
    c.name=usertab[0];
    this.user=new User(usertab[2],c,'1234',g);
  }

  showPicker(){
    let date=new Date();
    let time=this.heure.split('h');
    date.setHours(parseInt(time[0]),parseInt(time[1]));
    //console.log(date)
    this.generalProvider.DatePicker('time',date).then(date=>{
      this.heure=date.getHours()+'h'+date.getMinutes();
      this.alertCtrl.create({
        title:date.toDateString(),
      }).present();
    }).catch(err=>console.log(err))
  }



}
/*
useAngularLibrary() {

    this.pieChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Languages', 'Percent'],
        ['Ionic',     33],
        ['Angular',      33],
        ['JavaScript',  33]
      ],
      options: {
        'title': 'Technologies',
        'width': 400,
        'height': 300
      }
    };
 }
 */
