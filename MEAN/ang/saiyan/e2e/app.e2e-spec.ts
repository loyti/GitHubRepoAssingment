import { SaiyanPage } from './app.po';

describe('saiyan App', () => {
  let page: SaiyanPage;

  beforeEach(() => {
    page = new SaiyanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
