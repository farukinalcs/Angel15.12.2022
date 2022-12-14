import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GecislerimComponent } from './gecislerim.component';

describe('GecislerimComponent', () => {
  let component: GecislerimComponent;
  let fixture: ComponentFixture<GecislerimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GecislerimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GecislerimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
