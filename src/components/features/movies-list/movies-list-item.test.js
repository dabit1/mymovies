import React from 'react';
import { shallow, mount } from 'enzyme';
import MoviesListItem from './movies-list-item';

const fakeMoviesListItemData = {
  title: 'fake title',
  resume: 'fake resume',
  voteAverage: 10,
  image: 'fake',
  releaseDate: '2018-01-01',
};

const setup = (rendering = 'shallow') => {
  const component = <MoviesListItem onPress={jest.fn()} {...fakeMoviesListItemData} />;

  return {
    wrapper: rendering === 'shallow' ? shallow(component) : mount(component),
  };
};

describe('MoviesListItem component suite', () => {
  it('should have the class "c-movies-list-item"', () => {
    const { wrapper } = setup();
    expect(wrapper.is('.c-movies-list-item')).toBeTruthy();
  });

  it('should render a image inside of item', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should render a title inside of item', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual(fakeMoviesListItemData.title);
  });

  it('should render the vote average inside of item', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.c-movies-list-item__star-icon')).toHaveLength(5);
  });

  it('should render the release date inside of item', () => {
    const { wrapper } = setup();
    expect(wrapper.find('em').text()).toContain('2018');
  });

  it('should have a prop which is called when the container is pressed', () => {
    const { wrapper } = setup('mount');

    wrapper.simulate('click');
    expect(wrapper.props().onPress).toHaveBeenCalledTimes(1);
  });
});
