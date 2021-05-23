import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTremMetroComponent } from './listar-trem-metro.component';

describe('ListarTremMetroComponent', () => {
  let component: ListarTremMetroComponent;
  let fixture: ComponentFixture<ListarTremMetroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTremMetroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTremMetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
