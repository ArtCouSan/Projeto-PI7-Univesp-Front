import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMiniOnibusComponent } from './listar-mini-onibus.component';

describe('ListarMiniOnibusComponent', () => {
  let component: ListarMiniOnibusComponent;
  let fixture: ComponentFixture<ListarMiniOnibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMiniOnibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMiniOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
