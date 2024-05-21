import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',component:HomepageComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'product-details',component:ProductDetailsComponent},
    {path:'profile',component:ProfileComponent},
    {path:'product',component:ProductComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent}

];
