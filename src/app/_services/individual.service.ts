import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { Individual } from '../Models/individual';
import { IndividualRequest } from '../Models/IndividualRequest';


@Injectable({
  providedIn: 'root'
})
export class IndividualService {
  onFormSubmit(modelIndividual: IndividualRequest) {
    throw new Error('Method not implemented.');
  }

  prontuariosUrl = 'https://localhost:7292/api/ProntuarioIndividual';

  constructor(private http:HttpClient) { }

    listaProntInd(): Observable<Individual[]>{
      return this.http.get<Individual[]>(this.prontuariosUrl);
    }

    salvaProntInd(individualRequest: IndividualRequest): Observable<IndividualRequest>
    {
      console.log("Services");
      console.log(individualRequest);
      return this.http.post<IndividualRequest>(this.prontuariosUrl, individualRequest);
    }
}