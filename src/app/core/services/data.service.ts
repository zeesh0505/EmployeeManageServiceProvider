import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { User } from '../../models/user';
import { environment  } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const options = new RequestOptions({
  withCredentials: true
});

@Injectable()
export class DataService {

  private apiUrl = environment.api_url;
  userData: string;

  constructor(
    private http: HttpClient) {}

// getUser() {
//   return this.http.get<User> (this.apiUrl + '/auth/user');
//   // return this.http.get(this.apiUrl + '/auth/isAdmin').pipe(map((response: Response) => response.text()));
// }

callService() {
  (this.http.get(this.apiUrl + '/auth/user').pipe(map(data => {
    if (data === 'true') {
      return true;
 } else {
   return false;
 }
     })));
   }

   errorHandler(error: Response) {
    return Observable.throw(error);
}
}
