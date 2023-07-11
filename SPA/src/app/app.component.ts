import { Component, OnInit } from '@angular/core';
import { IInvoiceList, InvoiceUpdate } from './models/Invoice';
import { InvoiceServiceService } from './services/invoice-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'InvoiceSPA';

  public enableEdit: boolean = false;

  public invoiceList: IInvoiceList[] = [];

  constructor (private service: InvoiceServiceService){}

  public ngOnInit(): void {
    
  }

  public getInvoices() {
    this.service.getInvoiceList().subscribe( data => {
      this.invoiceList = data;
    },
    error => {
      alert('system error');
    });
  }

  public updateInvoice(){
    let json: InvoiceUpdate = 
    {
       Id: 1,
      Amount: 2
    };

    this.service.updateDetails(json).subscribe( data => {
      this.invoiceList = data;
    },
    error => {
      alert('update error');
    });
  }

  public addInvoice(){
    let json = 
    {
      id: 1,
      date: new Date,
      status: 2,
      amount: 3
    };

    this.service.addInvocie(json).subscribe( data => {
      this.invoiceList = data;
    },
    error => {
      alert('add error');
    });
  }
}
