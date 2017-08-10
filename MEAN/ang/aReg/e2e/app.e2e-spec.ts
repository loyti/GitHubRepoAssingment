import { ARegPage } from './app.po';

describe('a-reg App', () => {
  let page: ARegPage;

  beforeEach(() => {
    page = new ARegPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
