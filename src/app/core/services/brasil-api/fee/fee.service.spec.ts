import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FeeService } from './fee.service';
import { environment } from 'src/environments/environment';
import { FeeGetAllMock } from 'src/app/shared/classes/mocks/brasil-api/fee/fee-get-all.mock';

describe('FeeService', () => {
  let service: FeeService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FeeService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${FeeService.prototype.getAll.name}
    should return fee list`, done => {
    service.getAll().subscribe(fee => {
      expect(fee[0].nome).toBe('Selic');
      expect(fee[1].nome).toBe('CDI');
      done();
    });

    httpController.expectOne(`${environment.url_brasilapi}/taxas/v1`).flush(FeeGetAllMock);
  });
});
