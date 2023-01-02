import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-dairydelete',
  templateUrl: './dairydelete.component.html',
  styleUrls: ['./dairydelete.component.scss']
})
export class DairydeleteComponent {
public Dataarray:any
did:any
uid:any
constructor(private backendservice:BackendserviceService,private route:ActivatedRoute){
  this.route.paramMap.subscribe((params: ParamMap) => {
    this.did = params.get('id')
    })
}
onsubmit(){
// console.log(this.did);

  this.backendservice.diaryviewdelete(this.did)
  //.subscribe(data=>{});
}
ngOnInit():void{
this.backendservice.diaryview(this.did).subscribe((data:any)=>{
  this.Dataarray=data
  this.uid=data["uid"]
  console.log(this.Dataarray)
})

}
}
