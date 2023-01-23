import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-tododelete',
  templateUrl: './tododelete.component.html',
  styleUrls: ['./tododelete.component.scss']
})
export class TododeleteComponent {
  tid: any;
  public Dataarray: any;
  DeleteForm: FormGroup;
  constructor(private route: ActivatedRoute, private Fb: FormBuilder, private backendService: BackendserviceService) {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.tid = params.get('id')
      
    })
    this.DeleteForm = this.Fb.group({
      tid:[''],task: [''], status: [''],uid:['']
    })
  }
  ngOnInit(): void{
    
console.log(this.tid)
    this.backendService.viewdeletetodo(this.tid).subscribe((data: any) => {
      this.Dataarray = data;
      this.DeleteForm.setValue({
        tid:data.tid,
        task:data.task,
        status:data.status,
        uid:data.uid

  
     });
      
      });
  
      }


      onSubmit() {
         this.backendService.deletetododata(this.tid)
        //console.log(this.DeleteForm.value)
        
        }

}
