import { Injectable,EventEmitter  } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';   

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeloginFunction = new EventEmitter();
  invokelogoutFunction = new EventEmitter();
  subsVar: Subscription;  

  constructor() { }
  onloginButtonClick() {    
    this.invokeloginFunction.emit();    
  }   
}
