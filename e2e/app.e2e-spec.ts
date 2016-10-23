import { NgReduxProtoPage } from './app.po';

describe('ng-redux-proto App', function() {
  let page: NgReduxProtoPage;

  beforeEach(() => {
    page = new NgReduxProtoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
