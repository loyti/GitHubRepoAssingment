import { UstzPage } from './app.po';

describe('ustz App', () => {
  let page: UstzPage;

  beforeEach(() => {
    page = new UstzPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
