import { TestBed } from '@angular/core/testing';

import { ShopieService } from './shopie.service';

describe('ShopieService', () => {
  let service: ShopieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
