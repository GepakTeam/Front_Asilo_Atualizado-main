import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { FisioterapiaRequest } from '../Models/FisioterapiaRequest';


@Injectable({
  providedIn: 'root'
})

export class FisioterapiaService {
  ProntFisioterapia(model: FisioterapiaRequest) {
    throw new Error('Method not implemented.');
  }

  private prontuarioUrl = 'https://localhost:7292/api/ProntuarioFisioterapeuta';

  constructor(private http:HttpClient) { }

    listaProntFisio(): Observable<any[]> {
      return this.http.get<any[]>(this.prontuarioUrl);
    }

    // listaProntFisio(): Observable<Fisioterapia[]>{
    //   return this.http.get<Fisioterapia[]>(this.prontuariosUrl);
    // }

    salvaProntFisio(fisioterapiaRequest: FisioterapiaRequest): Observable<FisioterapiaRequest>
    {
      console.log("Services");
      console.log(fisioterapiaRequest);
      return this.http.post<FisioterapiaRequest>(this.prontuarioUrl, fisioterapiaRequest);
    }
}
