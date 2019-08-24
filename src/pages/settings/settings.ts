import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  GoToAdminPage() {
    this.navCtrl.push('AdminPage').then((data)=>{
      console.log('it work')
    })
  }

  GoToGarePage() {
    this.navCtrl.push('GarePage').then((data)=>{
      console.log('it work')
    })

  }

  GoToLignePage() {
    this.navCtrl.push('LignePage').then((data)=>{
      console.log('it work')
    })

  }
  GoToStatistiquePage() {
    this.navCtrl.push('StatistiquePage').then((data)=>{
      console.log('it work');
    })
  }
}
