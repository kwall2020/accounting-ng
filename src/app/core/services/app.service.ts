import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  public getTransaction(id: number): Observable<any> {
    return this.httpClient.get(
      `${environment.apiBaseUrl}/transaction/${id.toString()}`
    );
  }

  public getTransactions(): Observable<any> {
    return this.httpClient.get(`${environment.apiBaseUrl}/transaction`);
  }
}
