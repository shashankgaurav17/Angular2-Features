import { CywarePage } from './app.po';

describe('cyware App', () => {
  let page: CywarePage;

  beforeEach(() => {
    page = new CywarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
