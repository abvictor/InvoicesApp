import * as yup from "yup";

export const InvoiceSchema = yup.object().shape({
  street_address: yup.string().required("Please, fill the field correctly"),
  city: yup.string().required("Please, fill the field correctly"),
  post_code: yup.string().required("Please, fill the field correctly"),
  country: yup.string().required("Please, fill the field correctly"),

  client_name: yup.string().required("Please, fill the field correctly"),
  client_email: yup
    .string()
    .email("Please, insert a valid e-mail")
    .required("Please, fill the field correctly"),

  payment_terms: yup.string().required("Please, fill the field correctly"),
  invoice_date: yup.string().required("Please, insert a valid date"),
  to_street_address: yup.string().required("Please, fill the field correctly"),
  to_city: yup.string().required("Please, fill the field correctly"),
  to_post_code: yup.string().required("Please, fill the field correctly"),
  to_country: yup.string().required("Please, fill the field correctly"),

  project_description: yup.string().required("Please, fill the field correctly"),
  item_name: yup.string().required("Please, fill the field correctly"),
  qty: yup.number().positive().required("Please, fill the field correctly"),
  price: yup.number().positive().required("Please, fill the field correctly"),
});
