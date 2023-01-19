import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home/home1/home1.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { CalculatorComponent } from './userhome/calculator/calculator.component';
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
import { Userhome1Component } from './userhome/userhome1/userhome1.component';
import { WeatherComponent } from './userhome/weather/weather.component';
import { AuthGuardService } from './auth-guard.service';
import { ExpenseentryComponent } from './userhome/expenseentry/expenseentry.component';
import { ExpenseviewComponent } from './userhome/expenseview/expenseview.component';
import { ExpensecategoryComponent } from './userhome/expensecategory/expensecategory.component';
import { ExpenseviewtotalComponent } from './userhome/expenseviewtotal/expenseviewtotal.component';


const routes: Routes = [{
  path: 'home', component: HomeComponent,
  children:
    [{ path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path:'home1',component:Home1Component}
    ]
},
{ path: '', redirectTo: 'home/home1', pathMatch: 'full' },
{ path: 'userhome', component: UserhomeComponent,canActivate:[AuthGuardService] ,
children:
[{path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
{path:'profileedit',component:ProfileeditComponent,canActivate:[AuthGuardService]},
{path:'diaryentry',component:DairyentryComponent,canActivate:[AuthGuardService]},
{path:'diaryview',component:DairyviewComponent,canActivate:[AuthGuardService]},
{path:'dairyedit/:id',component:DairyeditComponent,canActivate:[AuthGuardService]},
{path:'dairyopen/:id',component:DairyopenComponent,canActivate:[AuthGuardService]},
{path:'dairydelete/:id',component:DairydeleteComponent,canActivate:[AuthGuardService]},
{path:'profileinsert',component:ProfileinsertComponent,canActivate:[AuthGuardService]},
{path:'todo',component:TodoComponent,canActivate:[AuthGuardService]},
{path:'tododelete/:id',component:TododeleteComponent,canActivate:[AuthGuardService]},
{path:'userhome1',component:Userhome1Component,canActivate:[AuthGuardService]},
{path:'weather',component:WeatherComponent,canActivate:[AuthGuardService]},
{path:'calculator',component:CalculatorComponent,canActivate:[AuthGuardService]},
{path:'expenseentry',component:ExpenseentryComponent,canActivate:[AuthGuardService]},
{path:'expenseview',component:ExpenseviewComponent,canActivate:[AuthGuardService]},
{path:'expensecategory',component:ExpensecategoryComponent,canActivate:[AuthGuardService]},
{path:'expenseviewtotal',component:ExpenseviewtotalComponent,canActivate:[AuthGuardService]}

]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
