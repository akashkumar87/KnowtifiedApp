import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { knowtifiedAppServiceUrl} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class KnowtifiedServiceService {
  private contactFormAPI=knowtifiedAppServiceUrl.submitContactForm;
  constructor(private http:HttpClient) { }

  submitContactForm(payload={}):Observable<any>{
    return this.http.post(this.contactFormAPI,payload)
  }
}
