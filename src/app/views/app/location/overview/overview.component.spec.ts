import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: LocationOverviewComponent;
  let fixture: ComponentFixture<LocationOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocationOverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
