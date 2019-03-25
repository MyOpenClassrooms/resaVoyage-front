import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AventureByCatComponent } from './aventure-by-cat.component';

describe('AventureByCatComponent', () => {
  let component: AventureByCatComponent;
  let fixture: ComponentFixture<AventureByCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AventureByCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AventureByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
