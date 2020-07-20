import ServiceNowForm from '../src/screens/ServiceNowForm'
import React from 'react';
import renderer from 'react-test-renderer';
import "isomorphic-fetch"

test('renders form correctly', () => {
  const tree = renderer.create(<ServiceNowForm />).toJSON()
  expect(tree).toMatchSnapshot();
});

