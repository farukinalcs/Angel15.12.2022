import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDataWidgetComponent } from './access-data-widget.component';

describe('AccessDataWidgetComponent', () => {
  let component: AccessDataWidgetComponent;
  let fixture: ComponentFixture<AccessDataWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessDataWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessDataWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
