import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-dairyedit',
  templateUrl: './dairyedit.component.html',
  styleUrls: ['./dairyedit.component.scss']
})
export class DairyeditComponent implements OnInit{
  did: any;
  public Coursedataarray: any;
  EditCourseForm: FormGroup;

  constructor(private route:ActivatedRoute,private Fb:FormBuilder,private backendService:BackendserviceService){

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.did = params.get('id')
      })
      this.EditCourseForm = this.Fb.group({
         did:[],
        title:[''],
        date: [''],
        description: [''],
        uid:['']
      })
}


ngOnInit(): void{
  this.backendService.diaryview(this.did).subscribe((data: any) => {
    this.Coursedataarray = data;
    this.EditCourseForm.setValue({
      did:data.did,
      title:data.title,
      date: data.date,
      description: data.description,
      uid:localStorage.getItem("uid"),

    });
    //this.EditCourseForm.patchValue(this.Coursedataarray)
    });
    }

    SubmitOn()
    {
      this.backendService.updatediary(this.EditCourseForm.value)
    }


}