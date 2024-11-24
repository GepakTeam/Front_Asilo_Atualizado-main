import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEnfComponent } from './lista-enf.component';

describe('ListaEnfComponent', () => {
  let component: ListaEnfComponent;
  let fixture: ComponentFixture<ListaEnfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEnfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaEnfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
