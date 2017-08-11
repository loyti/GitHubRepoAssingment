import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSS4Component } from './c-ss4.component';

describe('CSS4Component', () => {
  let component: CSS4Component;
  let fixture: ComponentFixture<CSS4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSS4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
