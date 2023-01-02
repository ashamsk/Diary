import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.scss']
})
export class UserhomeComponent{
 uid:any;
 name:any;
ngOnInit():void{
  this.uid=localStorage.getItem("uid")
  this.name=localStorage.getItem("name")
  console.log(this.uid)
}
}
