import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidApiComponent } from './covid-api.component';

describe('CovidApiComponent', () => {
  let component: CovidApiComponent;
  let fixture: ComponentFixture<CovidApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
