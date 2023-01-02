import { Component } from '@angular/core';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-dairyview',
  templateUrl: './dairyview.component.html',
  styleUrls: ['./dairyview.component.scss']
})
export class DairyviewComponent {
  uid:any
  constructor(private backendservice:BackendserviceService){}
  Dataarray: any[]=[];
  ngOnInit()
  {
    this.uid=localStorage.getItem("uid")
    this.backendservice.getdairydata(this.uid).subscribe((res) => {this.Dataarray = res;})
  }
}
