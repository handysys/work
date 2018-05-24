import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgriftaComponent } from './egrifta.component';

describe('EgriftaComponent', () => {
  let component: EgriftaComponent;
  let fixture: ComponentFixture<EgriftaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgriftaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgriftaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
