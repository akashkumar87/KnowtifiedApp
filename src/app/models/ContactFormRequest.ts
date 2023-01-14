export interface ContactFormRequest {
  first_name: string;
  last_name: string;
  email_address: string;
  contact_number: number;
  street_name: string;
  locality: string;
  pin_code: number;
  district: string;
  state: string;
  country: string;
  subject: string;
  message: string;
  file_name: string;
}
