import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from '../../Core/NavBar/navbar.component';
import { Psicologa } from '../../Models/psicologa';
import { PsicologaService } from '../../_services/psicologa.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { PsicologaRequest } from '../../Models/PsicologaRequest';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-psicologa',
  standalone: true,
  imports: [
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterLink,
    NavbarComponent,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './psicologa.component.html',
  styleUrl: './psicologa.component.css',
})
export class PsicologaComponent {
  ProntuarioPsicologo = {
    nome: '',
    dataNascimento: '',
    rg: '',
    cpf: '',
    responsavel: '',
    endereco: '',
    municipio: '',
    saude: '',
    consciente: '',
    religiao: '',
    filho: '',
    qntFilho: '',
    acolhimento: '',
    historico: '',
  };

  errorMessage: string = '';
  showErrorCard: boolean = false; // Controla a exibição do card de erro
  showSuccessCard: boolean = false; // Controla o card de sucesso

  constructor(
    private psicologaService: PsicologaService,
    private router: Router
  ) {}

  ProntPsicologa() {
    if (
      !this.ProntuarioPsicologo.nome ||
      !this.ProntuarioPsicologo.dataNascimento ||
      !this.ProntuarioPsicologo.rg ||
      !this.ProntuarioPsicologo.cpf ||
      !this.ProntuarioPsicologo.responsavel ||
      !this.ProntuarioPsicologo.endereco ||
      !this.ProntuarioPsicologo.municipio ||
      !this.ProntuarioPsicologo.saude ||
      !this.ProntuarioPsicologo.consciente ||
      !this.ProntuarioPsicologo.religiao ||
      !this.ProntuarioPsicologo.filho ||
      !this.ProntuarioPsicologo.acolhimento ||
      !this.ProntuarioPsicologo.historico
    ) {
      this.showErrorCard = true; // Mostra o card de erro
      setTimeout(() => (this.showErrorCard = false), 5000); // Esconde o card após 5 segundos
      return;
    }

    this.psicologaService.salvaProntPsic(this.ProntuarioPsicologo).subscribe({
      next: (response) => {
        // Exibe o card de sucesso
        this.showSuccessCard = true;

        // Esconde o card após 5 segundos
        setTimeout(() => {
          this.showSuccessCard = false;

          // Redireciona após o card desaparecer
          this.router.navigateByUrl('https://localhost:7292/api/ProntuarioPsicologo');
          this.router.navigate(['/PerfPsic']);
        }, 5000);
      },
      error: (err) => {
        console.error('Erro ao salvar prontuário:', err);

        // Mensagem de erro (opcional, se quiser adicionar)
        this.errorMessage = 'Ocorreu um erro ao salvar o prontuário. Tente novamente.';
      }
    });
  }
}