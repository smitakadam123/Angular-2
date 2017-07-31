import { ProjectFirstPage } from './app.po';

describe('project-first App', () => {
  let page: ProjectFirstPage;

  beforeEach(() => {
    page = new ProjectFirstPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
