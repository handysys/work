import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrogarzoComponent } from './trogarzo.component';

describe('TrogarzoComponent', () => {
  let component: TrogarzoComponent;
  let fixture: ComponentFixture<TrogarzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrogarzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrogarzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
