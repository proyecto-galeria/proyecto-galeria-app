import { InstructionsModule } from './instructions.module';

describe('InstructionsModule', () => {
  let instructionsModule: InstructionsModule;

  beforeEach(() => {
    instructionsModule = new InstructionsModule();
  });

  it('should create an instance', () => {
    expect(instructionsModule).toBeTruthy();
  });
});
