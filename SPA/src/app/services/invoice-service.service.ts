import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInvoiceList, InvoiceUpdate } from '../models/Invoice';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {
  private apiUrl: string = environment.apiUrl + '/invoice'

  constructor(private http: HttpClient) { }

  public getInvoiceList(){
    return this.http.get<IInvoiceList[]>(this.apiUrl + '/getInvoices')
  }

  public updateDetails(json: InvoiceUpdate){
    return this.http.post<IInvoiceList[]>(this.apiUrl + "/updateInvoice", json);
  }

  public addInvocie(json: any){
    return this.http.post<IInvoiceList[]>(this.apiUrl + "/addInvoice", json);
  }
}
