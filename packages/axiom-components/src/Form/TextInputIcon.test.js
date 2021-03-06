import React from 'react';
import renderer from 'react-test-renderer';
import TextInputIcon from './TextInputIcon';

const getComponent = (props) =>
  renderer.create(
    <TextInputIcon { ...props } />
  );

describe('TextInputIcon', () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'twitter',
    };
  });

  it('renders with defaultProps', () => {
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with align="left"', () => {
    props.align = 'left';
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with onClick', () => {
    props.onClick = () => {};
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with the correct iconColor', () => {
    props.iconColor = 'facebook';
    const component = getComponent(props);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
