import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnfermagemRequest } from '../Models/EnfermagemRequest';

@Injectable({
  providedIn: 'root',
})
export class EnfermagemService {
  ProntEnfermagem(model: EnfermagemRequest) {
    throw new Error('Method not implemented.');
  }

  prontuarioUrl = 'https://localhost:7292/api/ProntuarioEnfermagem';

  constructor(private http: HttpClient) {}

  listaProntEnf(): Observable<any[]> {
    return this.http.get<any[]>(this.prontuarioUrl);
  }

  salvaProntEnf(enfermagemRequest: EnfermagemRequest): Observable<EnfermagemRequest> {
    enfermagemRequest.dataNascimento = new Date(enfermagemRequest.dataNascimento).toLocaleDateString('pt-BR');
    enfermagemRequest.dataExame = new Date(enfermagemRequest.dataExame).toLocaleDateString('pt-BR');
    enfermagemRequest.controleSinaisVitaisData = new Date(enfermagemRequest.controleSinaisVitaisData).toLocaleDateString('pt-BR');
    
    // Converte o horário para "HH:mm:ss" que é o esperado para TimeSpan
    const horario = new Date(enfermagemRequest.controleSinaisVitaisHorario);
    enfermagemRequest.controleSinaisVitaisHorario = horario.toTimeString().split(' ')[0];
  
    console.log('Services');
    console.log(enfermagemRequest);
  
    return this.http.post<EnfermagemRequest>(this.prontuarioUrl, enfermagemRequest);
  }
}
