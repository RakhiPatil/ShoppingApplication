import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {'path':'cart', component:CartComponent},
    {'path':'dashboard', component:DashboardComponent},
    {'path':'home', component:HomepageComponent},
    {'path':'profile', component:ProfileComponent},
    {'path':'register', component: RegisterComponent },
    {'path':'', component:HomepageComponent},
  
];
