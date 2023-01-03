import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormGroup } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ProfileComponent } from './userhome/profile/profile.component';
import { ProfileeditComponent } from './userhome/profileedit/profileedit.component';
import { DairyentryComponent } from './userhome/dairyentry/dairyentry.component';
import { DatePipe } from '@angular/common';
import { DairyviewComponent } from './userhome/dairyview/dairyview.component';
import { DairyeditComponent } from './userhome/dairyedit/dairyedit.component';
import { DairyopenComponent } from './userhome/dairyopen/dairyopen.component';
import { DairydeleteComponent } from './userhome/dairydelete/dairydelete.component';
import { ProfileinsertComponent } from './userhome/profileinsert/profileinsert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    ProfileComponent,
    ProfileeditComponent,
    DairyentryComponent,
    DairyviewComponent,
    DairyeditComponent,
    DairyopenComponent,
    DairydeleteComponent,
    ProfileinsertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    

    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
