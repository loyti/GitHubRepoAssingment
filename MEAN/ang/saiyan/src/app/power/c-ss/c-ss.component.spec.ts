import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSComponent } from './c-ss.component';

describe('CSSComponent', () => {
  let component: CSSComponent;
  let fixture: ComponentFixture<CSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
