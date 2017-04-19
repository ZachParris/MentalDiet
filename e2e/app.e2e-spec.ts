import { MentalDietPage } from './app.po';

describe('mental-diet App', () => {
  let page: MentalDietPage;

  beforeEach(() => {
    page = new MentalDietPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
