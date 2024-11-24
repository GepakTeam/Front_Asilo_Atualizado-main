import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIndComponent } from './lista-ind.component';

describe('ListaIndComponent', () => {
  let component: ListaIndComponent;
  let fixture: ComponentFixture<ListaIndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaIndComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaIndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
