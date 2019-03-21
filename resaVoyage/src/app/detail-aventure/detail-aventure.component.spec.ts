import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAventureComponent } from './detail-aventure.component';

describe('DetailAventureComponent', () => {
  let component: DetailAventureComponent;
  let fixture: ComponentFixture<DetailAventureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAventureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
