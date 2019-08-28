import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Company} from "../../Data/company";
import {Gare} from "../../Data/Gare";
import {User} from "../../Data/user";
@IonicPage()
@Component({
  selector: 'page-gare',
  templateUrl: 'gare.html',
})
export class GarePage {
  user:User;
  gares:Gare;
  garesList=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl:AlertController) {
    this.gares=new Gare();
  }

  ionViewDidLoad() {
    this.GetUser();
    let garesdb=this.gares.AllGare();
    //console.log('ionViewDidLoad GarePage');
    this.garesList=garesdb.filter(r=>r.company==this.user.company.name);
    console.log(this.garesList);

  }

  OpenForm() {
    const alt=this.alertCtrl.create({
      enableBackdropDismiss:false,
      title:'Nouveau Gare',
      inputs:[{
        name:'name',
        type:'text',
        placeholder:'nom du gare'
      },
        {
          name:'adresse',
          type:'text',
          placeholder:'adresse du gare'
        },
      ],
      buttons:[{
        text: 'Annuler',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
        {
          text: 'Ajouter',
          handler:data=>{
            let gare=data;
            this.garesList.push({name:gare.name,adresse:gare.adresse})
          }
        }]
    });

    alt.present().then(data=>{console.log('work')})

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

  archive() {

  }

  Modifier(g: any) {

  }
  Supprimer(g: any) {

  }
}
