import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/* Interfaces */
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private _API_URL: string = 'https://restcountries.eu/rest/v2';

  get params() {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor(private http: HttpClient) { }

  public buscarPais(termino: string): Observable<Country[]> {

    const url = `${this._API_URL}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.params });
   
  }

  public buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this._API_URL}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.params });
   
  }
  
  public getPaisAlpha(codigo: string): Observable<Country> {

    const url = `${this._API_URL}/alpha/${codigo}`;
    return this.http.get<Country>(url);
   
  }

  public buscarRegion(region: string): Observable<Country[]> {

    const url = `${this._API_URL}/region/${region}`;
    return this.http.get<Country[]>(url, { params: this.params });

  }
}
