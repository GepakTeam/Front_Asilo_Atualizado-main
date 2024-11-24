import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPsicComponent } from './lista-psic.component';

describe('ListaPsicComponent', () => {
  let component: ListaPsicComponent;
  let fixture: ComponentFixture<ListaPsicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPsicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPsicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
