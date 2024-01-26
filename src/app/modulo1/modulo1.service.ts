import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Modulo1Service {
  private apiUrl = 'https://www.thecocktaildb.com/api';

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/json/v1/1/list.php?c=list`);
  }
}
