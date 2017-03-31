import { AriawrongdoinglistPage } from './app.po';

describe('ariawrongdoinglist App', () => {
  let page: AriawrongdoinglistPage;

  beforeEach(() => {
    page = new AriawrongdoinglistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
