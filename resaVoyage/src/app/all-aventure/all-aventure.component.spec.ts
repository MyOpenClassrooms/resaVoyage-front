import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAventureComponent } from './all-aventure.component';

describe('AllAventureComponent', () => {
  let component: AllAventureComponent;
  let fixture: ComponentFixture<AllAventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAventureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
