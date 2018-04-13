import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { master_routes } from './app.routes';
import { SignupComponent } from './signup/signup.component';
import { Step2SignupComponent } from './step2-signup/step2-signup.component';
import { Step3SignupComponent } from './step3-signup/step3-signup.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    Step2SignupComponent,
    Step3SignupComponent,
    ActivateAccountComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(master_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
