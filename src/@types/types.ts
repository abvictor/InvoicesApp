import { ReactNode } from "react";

export type TModalProps = {
  onRequestClose: () => void;
  isModalOpen: boolean;
};
export interface ICardDetails {
  id: string;
  date: string;
  name: string;
  total: number;
  status: string;
}

export interface IInvoice {
  id: string;
  status: string;
  bill_from: {
    street_address: string;
    city: string;
    post_code: string;
    country: string;
  };
  bill_to: {
    client_name: string;
    client_email: string;
    street_address: string;
    city: string;
    post_code: string;
    country: string;
  };
  payment_terms: string;
  date: string;
  project_description: string;

  items: Item[];
  total: number;
}
export type Item = {
  name: string;
  qty: number;
  price: number;
  total: number;
};
