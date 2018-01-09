import { Injectable } from '@angular/core';
import { BaseService } from '@services/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemDefinitionService extends BaseService {

  constructor(http: HttpClient) {
    super(http, 'itemdefinition');
  }

}
