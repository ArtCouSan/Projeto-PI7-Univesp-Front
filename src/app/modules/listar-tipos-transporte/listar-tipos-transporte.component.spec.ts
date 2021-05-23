import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTiposTransporteComponent } from './listar-tipos-transporte.component';

describe('ListarTiposTransporteComponent', () => {
  let component: ListarTiposTransporteComponent;
  let fixture: ComponentFixture<ListarTiposTransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTiposTransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTiposTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
