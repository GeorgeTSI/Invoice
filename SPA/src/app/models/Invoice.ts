export interface IInvoiceList {
    id: number;
    date: Date;
    status: number;
    amount: number;
}


export interface InvoiceUpdate {
    Id: number;
    Amount: number;
}