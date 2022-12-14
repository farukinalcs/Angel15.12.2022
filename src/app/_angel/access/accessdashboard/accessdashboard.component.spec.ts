import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessdashboardComponent } from './accessdashboard.component';

describe('AccessdashboardComponent', () => {
  let component: AccessdashboardComponent;
  let fixture: ComponentFixture<AccessdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
