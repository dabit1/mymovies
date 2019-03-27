import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './header';

jest.mock('../../containers/search-movie', () => {
  const SearchMovie = () => <div />;
  return SearchMovie;
});

const setup = (rendering = 'shallow') => {
  const handleDrawerToggleSpy = jest.fn();
  const component = (
    <Header
      handleDrawerToggle={handleDrawerToggleSpy}
    />
  );
  return {
    wrapper: rendering === 'shallow' ? shallow(component) : mount(component),
    handleDrawerToggleSpy,
  };
};

describe('Header component suite', () => {
  it('should be selectable by class "c-header"', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.c-header')).toHaveLength(1);
  });

  it('should have a prop which is called when a chip is deleted', () => {
    const { wrapper, handleDrawerToggleSpy } = setup('mount');

    wrapper.find('IconButton').at(0).props().onClick();
    expect(handleDrawerToggleSpy).toHaveBeenCalledTimes(1);
  });
});
