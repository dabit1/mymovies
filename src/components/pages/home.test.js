import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './home';

jest.mock('../../components/layout/header', () => {
  const Header = () => <div />;
  return Header;
});
jest.mock('../../containers/movies-list', () => {
  const MoviesList = () => <div />;
  return MoviesList;
});
jest.mock('../../containers/movies-filters-list', () => {
  const MoviesFiltersList = () => <div />;
  return MoviesFiltersList;
});
jest.mock('../../containers/filter-chips', () => {
  const FilterChips = () => <div />;
  return FilterChips;
});

const setup = (rendering = 'shallow') => {
  const component = (<Home classes={{}} />);
  return {
    wrapper: rendering === 'shallow' ? shallow(component) : mount(component),
  };
};

describe('Home component suite', () => {
  it('should be selectable by class "c-home"', () => {
    const { wrapper } = setup('mount');
    expect(wrapper.find('.c-home')).toHaveLength(1);
  });

  it('should have a method that control the state of the drawer on mobile devices', () => {
    const { wrapper } = setup('mount');

    const drawerState = wrapper.find('Home').state().mobileOpen;
    wrapper.find('Home').instance().handleDrawerToggle();
    expect(wrapper.find('Home').state().mobileOpen).not.toEqual(drawerState);
  });

  it('should have a method to close the drawer on mobile devices', () => {
    const { wrapper } = setup('mount');

    wrapper.find('Home').setState({ mobileOpen: true });
    wrapper.find('Home').instance().closeDrawer();
    expect(wrapper.find('Home').state().mobileOpen).toBeFalsy();
  });
});
