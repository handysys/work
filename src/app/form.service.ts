import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
// import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
const API_URL = environment.apiUrl;

@Injectable()
export class FormService {

  constructor(private http: HttpClient) { }

  SendForm(formData){
    return this.http.post( API_URL, formData, httpOptions);
  }

}
