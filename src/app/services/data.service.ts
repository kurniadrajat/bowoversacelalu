// data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../models/data.model';


const apiUrl = 'https://6580f9853dfdd1b11c424344.mockapi.io/rakamin/GetAllUsersData'; // Ganti dengan URL API yang sesuai
@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(apiUrl);
  }

  // Post data
  post(name: string, currency: string, balance:number,country:string,city:string){
      const body = {name: name, currency: currency,balance: balance, country: country,city:city}
      return this.http.post(`${apiUrl}`, body)
  }
}
