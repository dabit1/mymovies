import React from 'react';
import { shallow, mount } from 'enzyme';
import MovieDetails from './movie-details';

const setup = (rendering = 'shallow') => {
  const props = {
    title: 'movie',
    overview: 'it overview',
    poster_path: 'image',
    vote_average: 1,
  };
  const goBackSpy = jest.fn();
  const history = { goBack: goBackSpy };
  const component = (
    <MovieDetails
      location={{ state: { movie: props } }}
      history={history}
    />
  );
  return {
    wrapper: rendering === 'shallow' ? shallow(component) : mount(component),
    goBackSpy,
  };
};

describe('MovieDetails component suite', () => {
  it('should be selectable by class "c-movie-details"', () => {
    const { wrapper } = setup('mount');
    expect(wrapper.find('.c-movie-details')).toHaveLength(1);
  });

  it('should go back when detail is closed', () => {
    const { wrapper, goBackSpy } = setup('mount');

    wrapper.find('Modal').props().onClose();
    expect(goBackSpy).toHaveBeenCalledTimes(1);
  });

  it('should render a button to close the detail', () => {
    const { wrapper, goBackSpy } = setup('mount');

    wrapper.find('.c-movie-details__close-btn').at(0).simulate('click');
    expect(goBackSpy).toHaveBeenCalledTimes(1);
  });
});
