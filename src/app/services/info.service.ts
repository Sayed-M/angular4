import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {

  company: string;

  user: string;

  email: string;

  password: any;

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

  public getEmail() {
    return this.email;
  }

  public setEmail(data) {
    this.email = data;
  }

  public getPassword() {
    return this.password;
  }

  public setPassword(data) {
    this.password = data;
  }

}
