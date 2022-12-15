import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

// para rodar os testes no terminal vamos usar o comando: ng test

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let sum = service.calculate(1, 4, CalculatorService.SUM);
      expect(sum).toEqual(5);
    })
  );

  it('deve garantir que 1 - 4 = -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let sub = service.calculate(1, 4, CalculatorService.SUBTRATION);
      expect(sub).toEqual(-3);
    })
  );

  it('deve garantir que 1 / 4 = 0.25',
    inject([CalculatorService], (service: CalculatorService) => {
      let division = service.calculate(1, 4, CalculatorService.DIVISION);
      expect(division).toEqual(0.25);
    })
  );

  it('deve garantir que 1 * 4 = 4',
  inject([CalculatorService], (service: CalculatorService) => {
    let mult = service.calculate(1, 4, CalculatorService.MULTIPLICATION);
    expect(mult).toEqual(4);
  })
);

  it('deve retornar 0 para operação inválida',
    inject([CalculatorService], (service: CalculatorService) => {
      let invalidOperation = service.calculate(1, 4, '%');
      expect(invalidOperation).toEqual(0);
    })
  );
});
