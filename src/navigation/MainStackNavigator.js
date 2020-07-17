import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


import ServiceNowList from '../screens/ServiceNowList'
import ServiceNowForm from '../screens/ServiceNowForm'

const Stack = createStackNavigator()

function MainStackNavigator() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
              name='ServiceNowList'
              component={ServiceNowList}
              options={{ title: 'Service Now Tickets' }}
            />
            <Stack.Screen
              name='ServiceNowForm'
              component={ServiceNowForm}
              options={{ title: 'Submit Ticket' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )
}

export default MainStackNavigator