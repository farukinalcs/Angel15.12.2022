import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GecisgruplariComponent } from './gecisgruplari.component';

describe('GecisgruplariComponent', () => {
  let component: GecisgruplariComponent;
  let fixture: ComponentFixture<GecisgruplariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GecisgruplariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GecisgruplariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
