import { FrontendVersion2Page } from './app.po';

describe('frontend-version2 App', function() {
  let page: FrontendVersion2Page;

  beforeEach(() => {
    page = new FrontendVersion2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
