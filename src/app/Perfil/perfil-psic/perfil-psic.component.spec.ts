import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPsicComponent } from './perfil-psic.component';

describe('PerfilPsicComponent', () => {
  let component: PerfilPsicComponent;
  let fixture: ComponentFixture<PerfilPsicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilPsicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilPsicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
