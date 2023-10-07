export interface Invoice {
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
  }

export type InvoiceFormProps={
    isOpen: boolean
    handleClose: ()=>void;
}