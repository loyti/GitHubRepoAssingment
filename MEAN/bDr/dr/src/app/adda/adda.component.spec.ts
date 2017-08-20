import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddaComponent } from './adda.component';

describe('AddaComponent', () => {
  let component: AddaComponent;
  let fixture: ComponentFixture<AddaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
