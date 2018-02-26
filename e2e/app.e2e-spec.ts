import { MyprojectsPage } from './app.po';

describe('myprojects App', () => {
  let page: MyprojectsPage;

  beforeEach(() => {
    page = new MyprojectsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
