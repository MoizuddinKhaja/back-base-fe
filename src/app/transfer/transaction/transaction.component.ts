import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as data from '../../data/transaction.json';
import {TransferService} from '../transfer.service'
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  data:any[] = (data  as  any).default;
  public searchText$:BehaviorSubject<string> = new BehaviorSubject<string>('');
  searchText:string='';
  constructor(private httpClient:HttpClient,private transferService:TransferService){

  this.transferService.data.subscribe((obj)=>{
    if(Object.keys(obj).length){
    if(!this.searchText){
        this.data = (data  as  any).default;
      }
      this.data['data'].push(obj);
      this.data['data'] =   this.data['data'].filter((item)=>item['merchant'].name.toLowerCase().includes(this.searchText.toLowerCase()));
      this.sortTransactions();
    }
  })
  }

  ngOnInit(): void {
  this.sortTransactions();
  }
  inputChange(value){
    this.searchText$.next(value);
  }

  sortTransactions(){
    this.data['data'].sort((a: any, b: any) =>  new Date(b.dates.valueDate).getTime() - new Date(a.dates.valueDate).getTime());
  }
}
