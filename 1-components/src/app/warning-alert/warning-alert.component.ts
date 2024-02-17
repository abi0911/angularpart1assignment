import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p> Warning Alert !!! You are in danger </p>
  ` ,
  styles:[
    `
    p{
      padding :20px;
      border: 1px solid red;
      background-color: mistyrose;
    }

    
    `
  ]
})
export class WarningAlertComponent {

}
