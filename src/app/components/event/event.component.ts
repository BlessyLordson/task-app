import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }
  public text:string = "Hi";
  public type:string = "text";

  ngOnInit(): void {
    this.loadtask()
    
  }

loadtask(){
  setTimeout(() => {
    this.type = "password";
  }, 5000)
}

changeColor(){
  this.type = this.type ==="password" ? "text" : this.type ==="text" ? "password" : "text";
  } 


}
