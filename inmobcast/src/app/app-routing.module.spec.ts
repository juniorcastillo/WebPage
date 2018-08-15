import { AppRouter } from './app-routing.module';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRouter;

  beforeEach(() => {
    appRoutingModule = new AppRouter();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});
