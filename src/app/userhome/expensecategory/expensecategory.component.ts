import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-expensecategory',
  templateUrl: './expensecategory.component.html',
  styleUrls: ['./expensecategory.component.scss']
})
export class ExpensecategoryComponent {
  uid:any
constructor(private fb:FormBuilder,private backendservice:BackendserviceService){
  this.uid=localStorage.getItem("uid")
}
categoryForm=this.fb.group({
  category:[''],
  uid:['']
})
onSubmit(){
  

console.log(this.categoryForm.value)
 this.backendservice.addcategory(this.categoryForm.value)
}
}
