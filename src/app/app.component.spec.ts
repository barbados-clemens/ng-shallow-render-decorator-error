import { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { Shallow } from 'shallow-render';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let shallow: Shallow<AppComponent>;
  let render: any;
  beforeEach(async () => {
    shallow = new Shallow(AppComponent, AppModule);

    render = await shallow.render();
    component = render.fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'example-app'`, () => {
    expect(component.title).toEqual('example-app');
  });

  it('should render title', () => {
    render.fixture.detectChanges();

    expect(render.find('.content span').textContent).toContain(
      'example-app app is running!'
    );
  });
});
