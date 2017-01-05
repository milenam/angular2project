import { Angular2projectPage } from './app.po';

describe('angular2project App', function() {
  let page: Angular2projectPage;

  beforeEach(() => {
    page = new Angular2projectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
