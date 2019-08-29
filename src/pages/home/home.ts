import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {UserData} from "../../Data/userData";
import { DatePicker } from '@ionic-native/date-picker';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  userData:UserData;
  myDate:string;
  myTime:string;
  myDateNTime:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController,
              private datePicker: DatePicker) {
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
  showpicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
