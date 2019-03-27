import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchMovie from './index';

const setup = (rendering = 'shallow') => {
  const onSubmitSpy = jest.fn();
  const component = <SearchMovie onSubmit={onSubmitSpy} onChangeText={jest.fn()} value="fake value" />;

  return {
    wrapper: rendering === 'shallow' ? shallow(component) : mount(component),
    onSubmitSpy,
  };
};

describe('SearchMovie component suite', () => {
  it('should be selectable by class "c-search-movie"', () => {
    const { wrapper } = setup();
    expect(wrapper.find('.c-search-movie')).toHaveLength(1);
  });

  it('should have a prop with the text', () => {
    const { wrapper } = setup('mount');
    expect(wrapper.props().value).toEqual('fake value');
  });

  it('should render a text input', () => {
    const { wrapper } = setup('mount');
    expect(wrapper.find('input[type="text"]')).toHaveLength(1);
  });

  it('should render button', () => {
    const { wrapper } = setup('mount');
    expect(wrapper.find('button')).toHaveLength(2);
  });

  it('should have a prop which is called when enter key is pressed on text input', () => {
    const { wrapper, onSubmitSpy } = setup('mount');

    wrapper.find('SearchMovie input[type="text"]').simulate('keyup', { key: 'Enter' });
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });

  it('should have to submit if the text is empty', () => {
    const { wrapper, onSubmitSpy } = setup('mount');

    wrapper.find('SearchBar').props().onChange(' ');
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });

  it('should have a prop which is called when the text changes', () => {
    const { wrapper } = setup('mount');

    wrapper.props().onChangeText = jest.fn();
    wrapper.find('SearchMovie input[type="text"]').simulate('change');
    expect(wrapper.props().onChangeText).toHaveBeenCalledTimes(1);
  });

  it('should have a prop which is called when cancel search button is pressed', () => {
    const { wrapper, onSubmitSpy } = setup('mount');

    wrapper.props().onChangeText = jest.fn();
    wrapper.find('SearchMovie button').at(1).simulate('click');
    expect(wrapper.props().onChangeText).toHaveBeenCalledTimes(1);
    expect(onSubmitSpy).toHaveBeenCalledTimes(1);
  });
});
