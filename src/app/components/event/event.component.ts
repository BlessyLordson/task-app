
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent{

  constructor() { }
 
  public twoWayBinding :string = "Angular";

}





 // public text:string = "Hi";
  // public type:string = "text";
//   ngOnInit(): void {
//     this.loadtask()
    
//   }

// loadtask(){
//   setTimeout(() => {
//     this.type = "password";
//   }, 5000)
// }

// changeColor(){
//   this.type = this.type ==="password" ? "text" : this.type ==="text" ? "password" : "text";
//   } 



