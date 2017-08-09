import { RColorPage } from './app.po';

describe('r-color App', () => {
  let page: RColorPage;

  beforeEach(() => {
    page = new RColorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
