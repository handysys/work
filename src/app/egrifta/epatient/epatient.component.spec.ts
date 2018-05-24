import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpatientComponent } from './epatient.component';

describe('EpatientComponent', () => {
  let component: EpatientComponent;
  let fixture: ComponentFixture<EpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
