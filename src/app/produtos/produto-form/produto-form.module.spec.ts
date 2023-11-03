import { ProdutoFormModule } from './produto-form.module';

describe('ProdutoFormModule', () => {
  let produtoFormModule: ProdutoFormModule;

  beforeEach(() => {
    produtoFormModule = new ProdutoFormModule();
  });

  it('should create an instance', () => {
    expect(produtoFormModule).toBeTruthy();
  });
});
