import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IApiTable } from '../_model/i-api-table';


@Injectable({
  providedIn: 'root'
})

export class ApiTableService {

  private apiUrl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private _httpClient: HttpClient) { }

  fetchData(): Observable<IApiTable[]> {

    return this._httpClient.get<IApiTable[]>(this.apiUrl);

  }
}
