import { ProdutoListModule } from './produto-list.module';

describe('ProdutoListModule', () => {
  let produtoListModule: ProdutoListModule;

  beforeEach(() => {
    produtoListModule = new ProdutoListModule();
  });

  it('should create an instance', () => {
    expect(produtoListModule).toBeTruthy();
  });
});
