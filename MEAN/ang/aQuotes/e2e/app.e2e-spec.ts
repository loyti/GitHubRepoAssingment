import { AQuotesPage } from './app.po';

describe('a-quotes App', () => {
  let page: AQuotesPage;

  beforeEach(() => {
    page = new AQuotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
