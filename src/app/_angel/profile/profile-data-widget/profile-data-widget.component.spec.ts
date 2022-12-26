import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDataWidgetComponent } from './profile-data-widget.component';

describe('ProfileDataWidgetComponent', () => {
  let component: ProfileDataWidgetComponent;
  let fixture: ComponentFixture<ProfileDataWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDataWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDataWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
