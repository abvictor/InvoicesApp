import { object, string, number, date, InferType } from 'yup';


export const invoiceSchema = object({
                  //bill from
    bill_from_street_address: string().required('Field required'),
    bill_from_city: string().required('Field required'),
    bill_from_post_code: string().required('Field required'),
    bill_from_contry: string().required('Field required'),

                  //bill to
    bill_to_client_name: string().required('Field required'),
    bill_to_client_email: string().email('Not valid e-mail').required('Field required'),
    bill_to_street_address: string().required('Field required'),
    bill_to_city: string().required('Field required'),
    bill_to_post_code: string().required('Field required'),
    bill_to_country: string().required('Field required'),

                  //invoices detail
    invoice_date: string().required('Field required'),
    invoice_payment_term: string().required('Field required'),
    invoice_description: string().required('Field required'),

                  //item list
    item_name: string().required('Field required'),
    item_qty: number().required('Field required'),
    item_price: number().required('Field required'),

  });

