import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHeroComponent } from './select-hero.component';

describe('SelectHeroComponent', () => {
  let component: SelectHeroComponent;
  let fixture: ComponentFixture<SelectHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
