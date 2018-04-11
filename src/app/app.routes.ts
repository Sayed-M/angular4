import {LoginComponent} from './login/login.component';
import {Routes} from '@angular/router';
import { SignupComponent } from './signup/signup.component';

export const master_routes: Routes = [
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: SignupComponent}
];
