import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { Psicologa } from '../Models/psicologa';
import { PsicologaRequest } from '../Models/PsicologaRequest';


@Injectable({
  providedIn: 'root'
})

export class PsicologaService {
  onFormSubmit(model: PsicologaRequest) {
    throw new Error('Method not implemented.');
  }

  prontuariosUrl = 'https://localhost:7292/api/ProntuarioPsicologo';

  constructor(private http:HttpClient) { }

    listaProntPsic(): Observable<Psicologa[]>{
      return this.http.get<Psicologa[]>(this.prontuariosUrl);
    }

    salvaProntPsic(psicologaRequest: PsicologaRequest): Observable<PsicologaRequest>
    {
      console.log("Services");
      console.log(psicologaRequest);
      return this.http.post<PsicologaRequest>(this.prontuariosUrl, psicologaRequest);
    }
}

