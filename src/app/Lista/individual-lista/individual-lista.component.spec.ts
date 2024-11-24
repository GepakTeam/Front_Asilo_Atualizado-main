import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualListaComponent } from './individual-lista.component';

describe('IndividualListaComponent', () => {
  let component: IndividualListaComponent;
  let fixture: ComponentFixture<IndividualListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
