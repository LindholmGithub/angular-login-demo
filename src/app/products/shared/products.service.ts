import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FilteredListDto} from './filtered-list.dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<FilteredListDto> {
    return this._http
      .get<FilteredListDto>('https://localhost:5001/api/products');
  }
}
