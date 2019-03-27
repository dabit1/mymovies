import React from 'react';
import { mount } from 'enzyme';
import NoMatch from './no-match';

jest.mock('../../components/layout/header', () => {
  const Header = () => <div />;
  return Header;
});
const setup = () => mount(<NoMatch />);

describe('NoMatch component suite', () => {
  it('should be selectable by class "c-no-match"', () => {
    const wrapper = setup();
    expect(wrapper.find('.c-no-match')).toHaveLength(1);
  });
});
