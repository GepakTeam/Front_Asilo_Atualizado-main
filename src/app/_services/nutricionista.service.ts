import { Injectable } from '@angular/core';
import { Fisioterapia } from '../Models/fisioterapia';
import { HttpClient } from '@angular/common/http';
import { Nutricionista } from '../Models/nutricionista';
import { Observable } from 'rxjs';
import { NutricionistaRequest } from '../Models/NutricionistaRequest';

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {
  onFormSubmit(model: NutricionistaRequest) {
    throw new Error('Method not implemented.');
  }

  prontuariosUrl = 'https://localhost:7292/api/ProntuarioNutricionista';

  constructor(private http:HttpClient) { }

    listaProntNutri(): Observable<Nutricionista[]>{
      return this.http.get<Nutricionista[]>(this.prontuariosUrl);
    }

    salvaProntNutri(nutricionistaRequest: NutricionistaRequest): Observable<NutricionistaRequest>
    {
      console.log("Services");
      console.log(nutricionistaRequest);
      return this.http.post<NutricionistaRequest>(this.prontuariosUrl, nutricionistaRequest);
    }
}