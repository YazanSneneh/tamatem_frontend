import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  baseUrl: string = `${environment.tamatemStoreApi }store/items`

  constructor(private http: HttpClient) { }

  getAllItems(){
    return this.http.get(this.baseUrl)
  }

  getItemDetails(id: any){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  updateItemDetails(id: string, item: any){
    

    const headers = {
        "Authorization": `JWT ${this.formatToken()}`
      }
    return this.http.put(`${this.baseUrl}/${id}/`, item, { headers })
  }

  formatToken (){
    let token = localStorage.getItem("token")
    if(token){
      return token.replace(/^"(.*)"$/, '$1');
    }
    return ""
  }
}
