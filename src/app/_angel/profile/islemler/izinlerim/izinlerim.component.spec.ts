import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzinlerimComponent } from './izinlerim.component';

describe('IzinlerimComponent', () => {
  let component: IzinlerimComponent;
  let fixture: ComponentFixture<IzinlerimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzinlerimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzinlerimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
