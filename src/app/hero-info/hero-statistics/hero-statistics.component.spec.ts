import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroStatisticsComponent } from './hero-statistics.component';

describe('HeroStatisticsComponent', () => {
  let component: HeroStatisticsComponent;
  let fixture: ComponentFixture<HeroStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
