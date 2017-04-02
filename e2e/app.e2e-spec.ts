import { MathBugPage } from './app.po';

describe('math-bug App', () => {
  let page: MathBugPage;

  beforeEach(() => {
    page = new MathBugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
