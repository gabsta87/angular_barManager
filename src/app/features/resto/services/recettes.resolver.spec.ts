import { TestBed } from '@angular/core/testing';

import { RecettesResolver } from './recettes.resolver';

describe('RecettesResolver', () => {
  let resolver: RecettesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RecettesResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
