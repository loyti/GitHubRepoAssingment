import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSS2Component } from './c-ss2.component';

describe('CSS2Component', () => {
  let component: CSS2Component;
  let fixture: ComponentFixture<CSS2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSS2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
