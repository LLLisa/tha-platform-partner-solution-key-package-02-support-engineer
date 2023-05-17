import { Test, TestingModule } from '@nestjs/testing';
import { FrontendController } from './frontend.controller';

describe('FrontendController', () => {
  let controller: FrontendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrontendController],
    }).compile();

    controller = module.get<FrontendController>(FrontendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('getInsuranceEntities should return the correct insurance entites', () => {
    const assertionObj = [
        {
            "value": "1",
            "label": "United Healthcare"
        },
        {
            "value": "2",
            "label": "Cigna"
        },
        {
            "value": "3",
            "label": "BC/BS Empire"
        }
    ]
    expect(controller.getInsuranceOptions()).toStrictEqual(assertionObj)
  });

  it('getServiceOptions should return the correct set of service-options', () => {
    const assertionObj = [
      {
          "value": "1",
          "label": "Delayed Reimbusement"
      },
      {
          "value": "2",
          "label": "Immediate Reimbusement"
      },
      {
          "value": "3",
          "label": "No Reimbusement"
      },
  ]
    expect(controller.getServiceOptions()).toStrictEqual(assertionObj)
  });

  
});
