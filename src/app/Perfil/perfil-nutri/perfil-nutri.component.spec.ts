import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilNutriComponent } from './perfil-nutri.component';

describe('PerfilNutriComponent', () => {
  let component: PerfilNutriComponent;
  let fixture: ComponentFixture<PerfilNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilNutriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
