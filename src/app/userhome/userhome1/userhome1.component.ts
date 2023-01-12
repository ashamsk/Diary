import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from 'src/app/backendservice.service';

@Component({
  selector: 'app-userhome1',
  templateUrl: './userhome1.component.html',
  styleUrls: ['./userhome1.component.scss']
})
export class Userhome1Component implements OnInit{
  
  
  name:any
  quote: any;
  randomQuote = "";
  randomAuthor = "";
  constructor(private backendservice:BackendserviceService){}
ngOnInit()
{
  this.name=localStorage.getItem("name")
  this.getRandomQuote();
    setInterval(() => {
      this.getRandomQuote();
    }, 10000);
}
getRandomQuote() {
  this.backendservice.getRandomQuote().subscribe(data => {
    this.quote = data;
    this.randomQuote=this.quote.content;
    this.randomAuthor=this.quote.author;
    console.log(this.quote.content);
  });
}
}
