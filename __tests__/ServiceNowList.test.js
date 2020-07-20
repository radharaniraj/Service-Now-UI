import ServiceNowList from '../src/screens/ServiceNowList'
import React from 'react';
import renderer from 'react-test-renderer';
import "isomorphic-fetch"


// Snapshot testing for Service Now List
test('renders list correctly', async() => {
  const tree = renderer.create(<ServiceNowList />).toJSON()
  expect(tree).toMatchSnapshot();
});