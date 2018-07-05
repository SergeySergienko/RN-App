import {createStackNavigator} from 'react-navigation';
import Auth from './screens/Auth';
import Event from './screens/events/Event';
import EventList from './screens/events/EventList';

const AppNavigator = createStackNavigator({
  
  auth: {
    screen: Auth
  },
  event: {
    screen: Event
  },
  eventList: {
    screen: EventList
  },
});

export default AppNavigator;