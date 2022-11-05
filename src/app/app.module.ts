import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { DonorFormComponent } from './donor-form/donor-form.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { RecieptFormComponent } from './reciept-form/reciept-form.component';
import { RecieptListComponent } from './reciept-list/reciept-list.component';
import { AddListDoctorComponent } from './add-list-doctor/add-list-doctor.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    DonorFormComponent,
    DoctorListComponent,
    AddDoctorComponent,
    RecieptFormComponent,
    RecieptListComponent,
    AddListDoctorComponent,
    AdminLoginComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
