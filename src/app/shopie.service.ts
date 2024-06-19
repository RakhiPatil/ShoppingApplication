import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopieService {

  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private ht:HttpClient) { }

  myShopie(){
    return this.ht.get(this.baseUrl);
  }
}
