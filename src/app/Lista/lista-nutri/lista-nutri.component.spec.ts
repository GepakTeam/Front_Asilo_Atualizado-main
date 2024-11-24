import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNutriComponent } from './lista-nutri.component';

describe('ListaNutriComponent', () => {
  let component: ListaNutriComponent;
  let fixture: ComponentFixture<ListaNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNutriComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
