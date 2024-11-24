import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFisioComponent } from './lista-fisio.component';

describe('ListaFisioComponent', () => {
  let component: ListaFisioComponent;
  let fixture: ComponentFixture<ListaFisioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFisioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaFisioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
