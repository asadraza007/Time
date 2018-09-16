import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public message =""


  click(){
    this.message = "Thanks for wasting your time";

    setTimeout(()=>{
      this.message="";
    },2000);
  }
}



