import { Dota2NextzyPage } from './app.po';

describe('dota2-nextzy App', () => {
  let page: Dota2NextzyPage;

  beforeEach(() => {
    page = new Dota2NextzyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
