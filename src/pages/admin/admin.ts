import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Company} from "../../Data/company";
import {Gare} from "../../Data/Gare";
import {User} from "../../Data/user";

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  user:User;
  edit: boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.GetUser();
    console.log(this.user);
    //console.log('ionViewDidLoad AdminPage');
  }

  go() {
    this.GetUser();
    this.edit=!this.edit;

  }

  Modifier() {
    this.edit=!this.edit;
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
}
