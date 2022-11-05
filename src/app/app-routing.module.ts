import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddListDoctorComponent } from './add-list-doctor/add-list-doctor.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { DonorFormComponent } from './donor-form/donor-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecieptFormComponent } from './reciept-form/reciept-form.component';
import { RecieptListComponent } from './reciept-list/reciept-list.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'user', component:UserComponent},
  {path:'donor-form', component:DonorFormComponent},
  {path:'doctor-list', component:DoctorListComponent},
  {path:'add-doctor', component:AddDoctorComponent},
  {path:'reciept-form', component:RecieptFormComponent},
  {path:'reciept-list', component:RecieptListComponent},
  {path:'add-list-doctor', component:AddListDoctorComponent},
  {path:'contact-us', component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
