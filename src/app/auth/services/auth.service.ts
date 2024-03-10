import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = `${environment.tamatemStoreApi }auth/jwt/`

  constructor(private http: HttpClient) { }

  login(credintials: Object): Observable<any>{
    const loginUrl = this.baseUrl + "create/"
    return this.http.post(loginUrl, credintials)
  }
}
