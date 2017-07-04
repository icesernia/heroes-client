import { TestBed, inject } from '@angular/core/testing';

import { SelectHeroService } from './select-hero.service';

describe('SelectHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectHeroService]
    });
  });

  it('should be created', inject([SelectHeroService], (service: SelectHeroService) => {
    expect(service).toBeTruthy();
  }));
});
