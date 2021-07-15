import React from 'react';
import renderer from 'react-test-renderer';
import App from './components/App';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <App page="http://www.facebook.com">Facebook</App>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
