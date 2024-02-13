import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZIP } from '../interfaces/ZIP';

@Injectable({
  providedIn: 'root'
})
export class GetZIPService {

  private baseUrl = 'https://cep.awesomeapi.com.br/json';

  constructor(private httpClient: HttpClient) { }

  getCep(zip: string): Observable<ZIP> {
    return this.httpClient.get<ZIP>(`${this.baseUrl}/${zip}`)
  }
}
