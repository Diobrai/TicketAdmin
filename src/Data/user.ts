import {Company} from "./company";
import {Gare} from "./Gare";

export class User {
  username:string;
  company:Company;
  password:string;
  gare:Gare;
  constructor(username: string, company: Company, password: string, gare: Gare) {
    this.username = username;
    this.company = company;
    this.password = password;
    this.gare = gare;
  }

}
