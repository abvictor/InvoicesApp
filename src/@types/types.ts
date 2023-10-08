export interface IInvoice {
    id: string;
    status: string;

    billFrom: {
      streetAddress: string;
      city: string;
      postCode: string;
      country: string;
    };
    billTo: {
      clientName: string;
      clientEmail: string;
      streetAddress: string;
      city: string;
      postCode: string;
      country: string;
    };
    invoiceDetail: {
      invoiceDate: string;
      paymentTerm: string;
      description: string;
    };
    itemList: {
      itemName: string;
      itemQty: string;
      itemPrice: string;
    };
    total: number;
  }

export type InvoiceFormProps={
    isOpen: boolean
    handleClose: ()=>void;
}

export interface IInvoiceCard{
  id: string;
  date: string;
  total: number;
  status: string;
  name: string;
}