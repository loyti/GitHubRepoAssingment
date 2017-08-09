import { DMailPage } from './app.po';

describe('d-mail App', () => {
  let page: DMailPage;

  beforeEach(() => {
    page = new DMailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
