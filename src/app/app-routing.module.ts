import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { DairydeleteComponent } from './userhome/dairydelete/dairydelete.component';
import { DairyeditComponent } from './userhome/dairyedit/dairyedit.component';
import { DairyentryComponent } from './userhome/dairyentry/dairyentry.component';
import { DairyopenComponent } from './userhome/dairyopen/dairyopen.component';
import { DairyviewComponent } from './userhome/dairyview/dairyview.component';
import { ProfileComponent } from './userhome/profile/profile.component';
import { ProfileeditComponent } from './userhome/profileedit/profileedit.component';
import { ProfileinsertComponent } from './userhome/profileinsert/profileinsert.component';
import { TodoComponent } from './userhome/todo/todo.component';
import { TododeleteComponent } from './userhome/tododelete/tododelete.component';
import { UserhomeComponent } from './userhome/userhome.component';


const routes: Routes = [{
  path: 'home', component: HomeComponent,
  children:
    [{ path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
    ]
},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'userhome', component: UserhomeComponent ,
children:
[{path:'profile',component:ProfileComponent},
{path:'profileedit',component:ProfileeditComponent},
{path:'diaryentry',component:DairyentryComponent},
{path:'diaryview',component:DairyviewComponent},
{path:'dairyedit/:id',component:DairyeditComponent},
{path:'dairyopen/:id',component:DairyopenComponent},
{path:'dairydelete/:id',component:DairydeleteComponent},
{path:'profileinsert',component:ProfileinsertComponent},
{path:'todo',component:TodoComponent},
{path:'tododelete/:id',component:TododeleteComponent}

]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
