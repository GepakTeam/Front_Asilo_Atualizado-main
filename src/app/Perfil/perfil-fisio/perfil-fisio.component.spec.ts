import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFisioComponent } from './perfil-fisio.component';

describe('PerfilFisioComponent', () => {
  let component: PerfilFisioComponent;
  let fixture: ComponentFixture<PerfilFisioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilFisioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilFisioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
