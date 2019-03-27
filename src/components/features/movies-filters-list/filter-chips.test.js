import React from 'react';
import { shallow, mount } from 'enzyme';
import FilterChips from './filter-chips';

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

const setup = (rendering = 'shallow', loading = false, noFilters = false) => {
  const onDeleteFilterSpy = jest.fn();
  const component = (
    <FilterChips
      selectedFilters={!noFilters ? fakeMoviesFiltersListData : []}
      onDeleteFilter={onDeleteFilterSpy}
      isLoadingMovies={loading}
    />
  );

  return {
    wrapper: rendering === 'shallow' ? shallow(component) : mount(component),
    onDeleteFilterSpy,
  };
};

describe('FilterChips component suite', () => {
  it('should be selectable by class "c-filter-chips"', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.c-filter-chips')).toHaveLength(1);
  });

  it('should have an array prop with the selected filters', () => {
    const { wrapper } = setup();
    expect(Array.isArray(wrapper.instance().props.selectedFilters)).toBeTruthy();
  });

  it('should have a prop which is called when a chip is deleted', () => {
    const { wrapper, onDeleteFilterSpy } = setup('mount');

    wrapper.find('Chip').at(0).props().onDelete();
    expect(onDeleteFilterSpy).toHaveBeenCalledTimes(1);
    expect(onDeleteFilterSpy).toHaveBeenCalledWith(1);
  });

  it('should not call any method when a chip is deleted and the movies are being loaded', () => {
    const { wrapper, onDeleteFilterSpy } = setup('mount', true);

    wrapper.find('Chip').at(0).props().onDelete();
    expect(onDeleteFilterSpy).toHaveBeenCalledTimes(0);
  });

  it('should not render anything if there is no filters selected', () => {
    const { wrapper } = setup('shallow', false, true);
    expect(wrapper.find('.c-filter-chips')).toHaveLength(0);
  });
});
