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

  public updateDetails(data: any){
    return this.http.post<InvoiceUpdate>(this.apiUrl + "/updateInvoice", data);
  }

  public addInvocie(data: any){
    return this.http.post<IInvoiceList[]>(this.apiUrl + "/addInvoice", data);
  }
}
