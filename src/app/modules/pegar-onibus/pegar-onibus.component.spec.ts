import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegarOnibusComponent } from './pegar-onibus.component';

describe('PegarOnibusComponent', () => {
  let component: PegarOnibusComponent;
  let fixture: ComponentFixture<PegarOnibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegarOnibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegarOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
