import { Component, OnInit } from '@angular/core';
import { IInvoiceList, InvoiceUpdate } from './models/Invoice';
import { InvoiceServiceService } from './services/invoice-service.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Invoice - SPA';

  public enableEdit: boolean = true;

  public invoiceList: IInvoiceList[] = [];
  public listForm!: FormGroup;

  constructor (private service: InvoiceServiceService, private fb: FormBuilder){}

  public ngOnInit(): void {
    this.createListForm(); 
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
       Id: this.listForm.value.id,
      Amount: this.listForm.value.amount
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

  private createListForm(){
    this.listForm = this.fb.group({
      id: new FormControl(),
      status: new FormControl(),
      date: new FormControl(),
      amount: new FormControl(),
    })
  }
}
