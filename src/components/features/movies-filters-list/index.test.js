import React from 'react';
import { shallow, mount } from 'enzyme';
import MoviesFiltersList from './index';
import MoviesFiltersListItem from './movies-filters-list-item';

const fakeMoviesFiltersListData = [
  {
    id: 1,
    name: 'fake name 1',
  },
  {
    id: 2,
    name: 'fake name 2',
  },
];

const setup = (rendering = 'shallow') => {
  const onChangeFilterSpy = jest.fn();
  const onPressFilterSpy = jest.fn();
  const component = (
    <MoviesFiltersList
      filters={fakeMoviesFiltersListData}
      onChangeFilter={onChangeFilterSpy}
      onPressFilter={onPressFilterSpy}
    />
  );

  return {
    wrapper: rendering === 'shallow' ? shallow(component) : mount(component),
    onChangeFilterSpy,
    onPressFilterSpy,
  };
};

describe('MoviesFiltersList component suite', () => {
  it('should be selectable by class "c-movies-filters-list"', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.c-movies-filters-list')).toHaveLength(1);
  });

  it('should have an array prop with the filters', () => {
    const { wrapper } = setup();
    expect(Array.isArray(wrapper.instance().props.filters)).toBeTruthy();
  });

  it('should render items when passed in', () => {
    const { wrapper } = setup();
    expect(wrapper.find(MoviesFiltersListItem)).toHaveLength(2);
  });

  it('should have a prop which is called when a filter changes', () => {
    const { wrapper, onChangeFilterSpy } = setup('mount');

    wrapper.find('MoviesFiltersListItem').at(0).props().onChange(true);
    expect(onChangeFilterSpy).toHaveBeenCalledTimes(1);
    expect(onChangeFilterSpy).toHaveBeenCalledWith(1, true);
  });

  it('should have a prop which is called when a filter is pressed', () => {
    const { wrapper, onPressFilterSpy } = setup('mount');

    wrapper.find('MoviesFiltersListItem').at(0).props().onChange();
    expect(onPressFilterSpy).toHaveBeenCalledTimes(1);
  });
});
