import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanimlamalarComponent } from './tanimlamalar.component';

describe('TanimlamalarComponent', () => {
  let component: TanimlamalarComponent;
  let fixture: ComponentFixture<TanimlamalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanimlamalarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TanimlamalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
