import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coctel } from './coctel.interface'; // Asumiendo que has creado la interfaz

@Injectable({
  providedIn: 'root',
})
export class Modulo2Service {
  private apiUrl = 'https://www.thecocktaildb.com/api.php';

  constructor(private http: HttpClient) {}

  getCoctelesPorCategoria(categoria: string): Observable<Coctel[]> {
    return this.http.get<Coctel[]>(
      `${this.apiUrl}/cocteles?categoria=${categoria}`
    );
  }
}
