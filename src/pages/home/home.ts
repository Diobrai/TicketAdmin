import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {UserData} from "../../Data/userData";



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  userData:UserData;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
    this.userData=new UserData();

  }


  GoToRegisterPage() {

  }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Entrez vos informations",
      inputs: [
        {
          name: 'username',
          placeholder: 'Nom Utilisateur'
        },
        {
          name: 'password',
          placeholder: 'Mot de Pass',
          type:'password',
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connexion',
          handler: data => {
            let user=data;
            if(user.username.length>0){
              const confirmCompany=this.alertCtrl.create({
                title: 'Bienvenue '+user.username,
                message: "confirmer votre company et votre Gare",
                inputs:[
                  {
                    name: 'company',
                    placeholder: 'compagnie'
                  },
                  {
                    name: 'gare',
                    placeholder: 'gare',
                  },

                ],
                buttons:[
                  {
                    text: 'Annuler',
                    handler: data => {
                      console.log('Cancel clicked');
                    }
                  },
                  {
                    text: 'Connexion',
                    handler:data=>{
                      let username=user.username;
                      let gare=data.gare;
                      let user1=this.userData.getUserByUsernameAndGare(username,gare);
                      user=user1;
                      if(user1.length>0){
                        console.log(user1);
                        const toast = this.toastCtrl.create({
                          message: 'Authentification  en cour',
                          duration: 3000,
                          position:'top'
                        });
                        toast.present().then(data=>{
                          console.log('')
                        });
                        toast.onDidDismiss((data)=>{
                          this.navCtrl.setRoot('ProfilePage',{user:user1}).then((data)=>{
                            localStorage.setItem('user',user1[0].company.name+'&'+user1[0].gare.name+"&"+user1[0].username);
                          });
                        })


                      }else{

                      }

                    }
                  }]
              });
              confirmCompany.present();
            }
          }
        }]
    })
    prompt.present().then(()=>{
      console.log('it works')
    });
  }
}
