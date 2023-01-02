import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-dairyopen',
  templateUrl: './dairyopen.component.html',
  styleUrls: ['./dairyopen.component.scss']
})
export class DairyopenComponent implements OnInit{
  did: any;
  title:any;
  description:any;
  name:any;
  date:any
  constructor(private backendservice:BackendserviceService,private route:ActivatedRoute){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.did = params.get('id')
      })
  }

  ngOnInit():void{
    this.backendservice.diaryview(this.did).subscribe((data: any) => {
      console.log(data)
      this.title=data["title"]
      this.description=data["description"]
      this.date=data["date"]
      this.name=localStorage.getItem("name")
      });
  }
 
}



