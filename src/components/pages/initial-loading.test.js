import React from 'react';
import { shallow, mount } from 'enzyme';
import InitialLoading from './initial-loading';

const setup = (rendering = 'shallow') => {
  const component = <InitialLoading />;
  return {
    wrapper: rendering === 'shallow' ? shallow(component) : mount(component),
  };
};

describe('InitialLoading component suite', () => {
  it('should be selectable by class "c-initial-loading"', () => {
    const { wrapper } = setup('mount');
    expect(wrapper.find('.c-initial-loading')).toHaveLength(1);
  });
});
