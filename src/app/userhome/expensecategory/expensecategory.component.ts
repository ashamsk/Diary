import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-expensecategory',
  templateUrl: './expensecategory.component.html',
  styleUrls: ['./expensecategory.component.scss']
})
export class ExpensecategoryComponent {
  DataArray:any
  submitted=false
  uid:any
  
constructor(private fb:FormBuilder,private backendservice:BackendserviceService){
  this.uid=localStorage.getItem("uid")
}
categoryForm=this.fb.group({
  category:['',[Validators.required]],
  uid:['']
})
onSubmit(){
  this.submitted=true
    if(this.categoryForm.invalid)
    {
      return
    }
console.log(this.categoryForm.value)
 this.backendservice.addcategory(this.categoryForm.value)
}
ngOnInit(){
this.backendservice.viewcategory(this.uid).subscribe((res) => {
  this.DataArray=res
  console.log(this.DataArray)
  })

}
del(cid:any)
{
this.backendservice.deletecategory(cid)
}
}
