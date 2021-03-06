import { TestprojectPage } from './app.po';

describe('testproject App', () => {
  let page: TestprojectPage;

  beforeEach(() => {
    page = new TestprojectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
