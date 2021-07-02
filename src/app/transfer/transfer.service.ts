import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import * as data from '../data/transaction.json';
@Injectable({providedIn:'root'})
export class TransferService{
  data  =new BehaviorSubject({});

}
