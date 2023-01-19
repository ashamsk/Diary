import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent{
 uid:any;
 name:any;
 constructor(private router:Router){}
ngOnInit():void{
  this.uid=localStorage.getItem("uid")
  this.name=localStorage.getItem("name")
  // console.log(this.uid)
}
logout()
{
  if (this.canLogout()) {
    localStorage.removeItem('token');
    this.router.navigate(['/home/home1']);
  }
  else { 
    // show an error message or take other action 
  } 
}

  canLogout()
   {
     // check for conditions here and return true or false 
    return true;
   }

}

