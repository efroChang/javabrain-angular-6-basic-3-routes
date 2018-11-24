import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsNotFoundComponent } from './settings-not-found.component';

describe('SettingsNotFoundComponent', () => {
  let component: SettingsNotFoundComponent;
  let fixture: ComponentFixture<SettingsNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
