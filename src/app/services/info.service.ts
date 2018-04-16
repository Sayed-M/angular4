import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {

  company: string;

  user: string;

  loggedIn: boolean = false;

  constructor() { }

  public getCompany() {
    return this.company;
  }

  public setCompany(data) {
    this.company = data;
  }

  public getUser() {
    return this.user;
  }

  public setUser(data) {
    this.user = data;
  }

}
