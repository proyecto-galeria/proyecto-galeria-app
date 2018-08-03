import { ConceptsModule } from './concepts.module';

describe('ConceptsModule', () => {
  let conceptsModule: ConceptsModule;

  beforeEach(() => {
    conceptsModule = new ConceptsModule();
  });

  it('should create an instance', () => {
    expect(conceptsModule).toBeTruthy();
  });
});
