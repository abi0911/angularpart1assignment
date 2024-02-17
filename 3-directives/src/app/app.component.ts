import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  showSecret = false;
  //log :number[]= [];
  log :Date[]= [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
   // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}

/*
export class AppComponent {
  hiddenText:boolean = true;
  log = [];
 count =0;

  enablePara(){
    this.hiddenText = false;
  }

  disablePara(){
    this.hiddenText = true;
  }

  addButtonClickToLog(){
    
    this.log.push(this.log.length + 1);
  }

  getColor(){
    return this.count >= 4? 'blue': 'red';

  }

  getClass(){
    return this.count >= 4? 'white':'black';

  }
}*/