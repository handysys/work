import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhcpComponent } from './ehcp.component';

describe('EhcpComponent', () => {
  let component: EhcpComponent;
  let fixture: ComponentFixture<EhcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
