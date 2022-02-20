import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {ActionEvent} from "./product.state";


@Injectable({providedIn:"root"})
export class EventDrivenService{
  // la comunication des composant de l'app a travers un objet
  sourceEventSubjet:Subject<ActionEvent>= new Subject<ActionEvent>();
  //subject is used insteqd of event emitter pour centraliser la gestion d
  // des events in one object
  sourceEventSubjetObservable=this.sourceEventSubjet.asObservable();


  publishEvent(event:ActionEvent){
this.sourceEventSubjet.next(event)

  }
}
