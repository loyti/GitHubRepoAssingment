import { SBoardPage } from './app.po';

describe('s-board App', () => {
  let page: SBoardPage;

  beforeEach(() => {
    page = new SBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
