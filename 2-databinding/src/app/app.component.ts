import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName:string = '';
  buttonControlFlag:boolean=true;
  
  resetUserName(){
    this.userName ='';

  }

  enableButton(event:any){
    if(event.target.value != ''){
      this.buttonControlFlag=false;
    }
  }
}
