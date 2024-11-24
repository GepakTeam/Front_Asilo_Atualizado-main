import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEnferComponent } from './perfil-enfer.component';

describe('PerfilEnferComponent', () => {
  let component: PerfilEnferComponent;
  let fixture: ComponentFixture<PerfilEnferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilEnferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilEnferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
