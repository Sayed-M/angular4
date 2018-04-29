import {LoginComponent} from './login/login.component';
import {Routes} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { Step2SignupComponent } from './step2-signup/step2-signup.component';
import { Step3SignupComponent } from './step3-signup/step3-signup.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ProfileComponent } from './profile/profile.component';

export const master_routes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'signup-2', component: Step2SignupComponent},
    {path: 'signup-3', component: Step3SignupComponent},
    {path: 'activate-account', component: ActivateAccountComponent},
    {path: 'login', component: LoginComponent},
    {path: 'profile', component: ProfileComponent},
    {path: '**', redirectTo: '/signup'}
];
