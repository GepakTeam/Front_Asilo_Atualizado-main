import { Routes } from '@angular/router';
import { IndividualComponent } from './Prontuarios/individual/individual.component';
import { LoginComponent } from './login/login.component';
import { PsicologaComponent } from './Prontuarios/psicologa/psicologa.component';
import { FisioterapiaComponent } from './Prontuarios/fisioterapia/fisioterapia.component';
import { IndividualListaComponent } from './Lista/individual-lista/individual-lista.component';
import { ListaIndComponent } from './Lista/lista-ind/lista-ind.component';
import { ListaEnfComponent } from './Lista/lista-enf/lista-enf.component';
import { ListaFisioComponent } from './Lista/lista-fisio/lista-fisio.component';
import { ListaPsicComponent } from './Lista/lista-psic/lista-psic.component';
import { NutricionistaComponent } from './Prontuarios/nutricionista/nutricionista.component';
import { ListaNutriComponent } from './Lista/lista-nutri/lista-nutri.component';
import { PerfilAdmComponent } from './Perfil/perfil-adm/perfil-adm.component';
import { PerfilEnferComponent } from './Perfil/perfil-enfer/perfil-enfer.component';
import { PerfilPsicComponent } from './Perfil/perfil-psic/perfil-psic.component';
import { PerfilNutriComponent } from './Perfil/perfil-nutri/perfil-nutri.component';
import { PerfilFisioComponent } from './Perfil/perfil-fisio/perfil-fisio.component';
import { EnfermagemComponent } from './Prontuarios/enfermagem/enfermagem.component';



export const routes: Routes =[
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'adm',
        component: PerfilAdmComponent
    },
    {
        path: 'individual', 
        component: IndividualComponent
    },
    {
        path: 'listaIndividual',
        component: ListaIndComponent
    },
    {
        path: 'PerfEnf',
        component: PerfilEnferComponent
    },
    {
        path: 'enfermagem',
        component: EnfermagemComponent
    },
    {
        path: 'listaEnfermagem',
        component: ListaEnfComponent
    },
    {
        path: 'PerfPsic',
        component: PerfilPsicComponent
    },
    {
        path: 'psicologa',
        component: PsicologaComponent
    },
    {
        path: 'listaPsicologa',
        component: ListaPsicComponent
    },
    {
        path: 'PerfNutri',
        component: PerfilNutriComponent
    },
    {
        path: 'nutricionista',
        component: NutricionistaComponent
    },
    {
        path: 'listaNutricionista',
        component: ListaNutriComponent
    },
    {
        path: 'PerfFisio',
        component: PerfilFisioComponent
    },
    {
        path: 'fisioterapia',
        component: FisioterapiaComponent
    },
    {
        path: 'listaFisioterapia',
        component: ListaFisioComponent
    },
    {
        path: 'listaCompleta',
        component: IndividualListaComponent
    }
];
