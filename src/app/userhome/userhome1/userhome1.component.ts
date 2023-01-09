import { Component } from '@angular/core';

@Component({
  selector: 'app-userhome1',
  templateUrl: './userhome1.component.html',
  styleUrls: ['./userhome1.component.scss']
})
export class Userhome1Component {
  name:any
ngOnInit()
{
  this.name=localStorage.getItem("name")
  // console.log(localStorage.getItem("name"))
}
}
