import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurelerimComponent } from './surelerim.component';

describe('SurelerimComponent', () => {
  let component: SurelerimComponent;
  let fixture: ComponentFixture<SurelerimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurelerimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurelerimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
