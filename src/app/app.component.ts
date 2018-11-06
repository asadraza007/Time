import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public message =""
  public title = "It Does Nothing";
  public randomArray = ["它什么都没做","No hace nada","यह कुछ भी नहीं करता है","لا يفعل شيئا","Não faz nada","এটা কিছুই না","Он ничего не делает",
  "それは何もしない","Iku ora","Es tut nichts","아무것도하지 않는다","هیچ کاری نمی کند","Ça ne fait rien","Hiçbir şey yapmıyor","It Does Nothing"]


  click(){
    this.message = "Thanks for wasting your time";
    this.title = this.randomArray[Math.floor(Math.random()*10)];
    setTimeout(()=>{
      this.message="";
    },2000);
  }
}



