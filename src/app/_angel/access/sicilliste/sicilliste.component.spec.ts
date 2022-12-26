import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SicillisteComponent } from './sicilliste.component';

describe('SicillisteComponent', () => {
  let component: SicillisteComponent;
  let fixture: ComponentFixture<SicillisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SicillisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SicillisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
