import { TestAng2Page } from './app.po';

describe('test-ang2 App', () => {
  let page: TestAng2Page;

  beforeEach(() => {
    page = new TestAng2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
