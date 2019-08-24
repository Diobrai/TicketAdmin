
export class Ligne {
       company:string;
       date:string;
       prix:number;
       arrive:string;
       depart:string;
       heure:string;
       allLigne=[];
       constructor(){
         this.allLigne=[
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:1200,
             arrive:'Bamako',
             depart:'Mopti',
             company:'Bani Transport'
           },
           {
             date:'18/08/2019',
             heure:'20h30',
             prix:1200,
             arrive:'Bamako',
             depart:'Sikasso',
             company:'Bani Transport'
           },
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:1200,
             arrive:'Sikasso',
             depart:'Bamako',
             company:'Alou Transport'
           },
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:1200,
             arrive:'Bamako',
             depart:'Mopti',
             company:'Diarra Transport'
           },
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:1200,
             arrive:'Bamako',
             depart:'segou',
             company:'Pedro Transport'
           },
           {
             date:'18/08/2019',
             heure:'12h30',
             prix:1200,
             arrive:'Bamako',
             depart:'Koutiala',
             company:'Pedro Transport'
           },



         ]
       }

       GetLigneByCompany(name,date){
         return this.allLigne.filter((val)=>
         val.company==name && val.date==date)
       }



}
