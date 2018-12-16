import { Component } from '@angular/core';
import { timeout } from './log.decorator';
import { hasPermission } from './permissions.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
  }

 
  public invokeButtonClick() {
    
    this.getSomeData();
  }


  @hasPermission(['user'])
  // change this to @hasPermission(['user']) and it will not return the message 'some data'.  
  // Instead it will return 'unauthorized' from decorator function.
  public getSomeData(){
    console.log('some data')
  }

}
