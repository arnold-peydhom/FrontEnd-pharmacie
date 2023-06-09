import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ListProductService {
  private apiUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'; 
  constructor(private httpClient : HttpClient) { }

  getCats() : Observable<any[]>{
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  addCats(cat:Product) : Observable<Product>{
    return this.httpClient.post<Product>(this.apiUrl,cat)
  }

  updateCats(value:any):Observable<Product>{
    return this.httpClient.put<Product>(`${this.apiUrl}`,value);
  }

  deleteCats(id:number):Observable<any>{
    return this.httpClient.delete<Product>(`${this.apiUrl}/${id}`);
  }
}
