import React from 'react';
import { shallow, mount } from 'enzyme';
import MoviesList from './index';
import MoviesListItem from './movies-list-item';

const fakeMoviesListData = [
  {
    id: 1,
    poster_path: 'fakeimage.jpg',
    title: 'fake title',
    overview: 'fake resume',
    release_date: '2018-01-01',
    vote_average: 2.0,
  },
  {
    id: 2,
    poster_path: '',
    title: 'fake title 2',
    overview: 'fake resume 2',
    release_date: '2018-01-01',
    vote_average: 3.0,
  },
];
for (let i = 1; i <= 40; i += 1) {
  fakeMoviesListData.push({ ...fakeMoviesListData[1], id: fakeMoviesListData[1].id + i });
}

const setup = (rendering = 'shallow', loading = false) => {
  const onFetchMoreMoviesSpy = jest.fn();
  const historySpy = { push: jest.fn() };
  const component = (
    <MoviesList
      movies={fakeMoviesListData}
      onFetchMoreMovies={onFetchMoreMoviesSpy}
      history={historySpy}
      isLoadingMovies={loading}
    />
  );

  return {
    wrapper: rendering === 'shallow' ? shallow(component) : mount(component),
    onFetchMoreMoviesSpy,
    historySpy,
  };
};

describe('MoviesList component suite', () => {
  it('should be selectable by class "c-movies-list"', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.c-movies-list')).toHaveLength(1);
  });

  it('should have an array prop with the movies', () => {
    const { wrapper } = setup();
    expect(Array.isArray(wrapper.instance().props.movies)).toBeTruthy();
  });

  it('should render items when passed in', () => {
    const { wrapper } = setup();
    expect(wrapper.find(MoviesListItem)).toHaveLength(20);
  });

  it('should render an image which url is concatenated', () => {
    const { wrapper } = setup();
    const imageProp = wrapper.find(MoviesListItem).at(0).props().image;
    expect(imageProp).toEqual(expect.stringContaining(fakeMoviesListData[0].poster_path));
  });

  it('should push in history when an item is pressed', () => {
    const { wrapper, historySpy } = setup('mount');
    const itemIndex = 0;

    wrapper.find(MoviesListItem).at(itemIndex).simulate('click');
    expect(historySpy.push).toHaveBeenCalledTimes(1);
  });

  it('should render a loading when items are being fetched', () => {
    const { wrapper } = setup('shallow', true);
    expect(wrapper.find('.c-movies-list__progress')).toHaveLength(1);
  });

  it('should fetch more movies if there are no more movies in the current list', () => {
    const { wrapper, onFetchMoreMoviesSpy } = setup('mount');
    wrapper.find('InfiniteScroll').props().loadMore(3);
    expect(onFetchMoreMoviesSpy).toHaveBeenCalledTimes(1);
  });

  it('should not fetch more movies if the page is the same as the current one', () => {
    const { wrapper, onFetchMoreMoviesSpy } = setup('mount');
    wrapper.find('InfiniteScroll').props().loadMore(2);
    wrapper.find('InfiniteScroll').props().loadMore(2);
    expect(onFetchMoreMoviesSpy).toHaveBeenCalledTimes(0);
  });

  it('should not fetch more movies if there are more movies in the current list', () => {
    const { wrapper, onFetchMoreMoviesSpy } = setup('mount');
    wrapper.find('InfiniteScroll').props().loadMore(2);
    expect(onFetchMoreMoviesSpy).toHaveBeenCalledTimes(0);
  });
});
