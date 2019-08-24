import {Ligne} from "./ligne";

export class Reservations {
  line:Ligne;
  name:string;
  place:number;
  company:string;
  date:string;


  constructor(line: Ligne, name: string, place: number, company: string, date: string) {
    this.line = line;
    this.name = name;
    this.place = place;
    this.company = company;
    this.date = date;
  }





}
