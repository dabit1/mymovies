import React from 'react';
import { shallow, mount } from 'enzyme';
import MoviesFiltersListItem from './movies-filters-list-item';

const fakeMoviesFiltersListItemData = {
  id: 1,
  title: 'fake title',
  active: true,
};

const setup = (rendering = 'shallow', disabled = false) => {
  const onChangeSpy = jest.fn();
  const component = (
    <MoviesFiltersListItem
      disabled={disabled}
      onChange={onChangeSpy}
      {...fakeMoviesFiltersListItemData}
    />
  );

  return {
    wrapper: rendering === 'shallow' ? shallow(component) : mount(component),
    onChangeSpy,
  };
};

describe('MoviesFiltersListItem component suite', () => {
  it('should have the class "c-movies-filters-list-item"', () => {
    const { wrapper } = setup();
    expect(wrapper.is('.c-movies-filters-list-item')).toBeTruthy();
  });

  it('should have the class "disabled" when it is disabled', () => {
    const { wrapper } = setup('shallow', true);
    expect(wrapper.is('.disabled')).toBeTruthy();
  });

  it('should render the title inside of item', () => {
    const { wrapper } = setup('mount');
    expect(wrapper.find('span').at(0).text()).toEqual(fakeMoviesFiltersListItemData.title);
  });

  it('should render a checkbox inside of it', () => {
    const { wrapper } = setup('mount');
    expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
  });

  it('should have a prop which set the status of the checkbox', () => {
    const { wrapper } = setup('mount');
    expect(wrapper.find('input[type="checkbox"]').props().checked).toEqual(fakeMoviesFiltersListItemData.active);
  });

  it('should have a method which is called when a filter is changed', () => {
    const { wrapper, onChangeSpy } = setup('mount');

    wrapper.find('MoviesFiltersListItem ListItem').simulate('click');
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
    expect(onChangeSpy).toHaveBeenCalledWith(false);
  });

  it('should not call any method when a filter is changed if it is disabled', () => {
    const { wrapper, onChangeSpy } = setup('mount', true);

    wrapper.find('MoviesFiltersListItem ListItem').simulate('click');
    expect(onChangeSpy).toHaveBeenCalledTimes(0);
  });
});
