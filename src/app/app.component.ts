import { Component } from '@angular/core';

export interface itemType{
  id: number,
  title:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'formArray';
  
}
