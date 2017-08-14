import { GScorePage } from './app.po';

describe('g-score App', () => {
  let page: GScorePage;

  beforeEach(() => {
    page = new GScorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
