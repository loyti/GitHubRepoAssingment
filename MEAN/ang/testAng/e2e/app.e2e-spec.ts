import { TestAngPage } from './app.po';

describe('test-ang App', () => {
  let page: TestAngPage;

  beforeEach(() => {
    page = new TestAngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
