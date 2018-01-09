import { TestBed, inject } from '@angular/core/testing';

import { ItemDefinitionService } from './itemdefinition.service';

describe('ItemdefinitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemDefinitionService]
    });
  });

  it('should be created', inject([ItemDefinitionService], (service: ItemDefinitionService) => {
    expect(service).toBeTruthy();
  }));
});
