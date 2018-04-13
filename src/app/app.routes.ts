import {LoginComponent} from './login/login.component';
import {Routes} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { Step2SignupComponent } from './step2-signup/step2-signup.component';

export const master_routes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'signup-2', component: Step2SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: SignupComponent}
];
