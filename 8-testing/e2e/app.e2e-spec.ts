import { AppPage } from './app.po';

describe('ng-chat App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have the text login present', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('LOGIN');
  });
});
