import {createStackNavigator} from 'react-navigation';
import Auth from './screens/Auth';
import Event from './screens/events/Event';
import EventMap from './screens/events/EventMap';
import EventList from './screens/events/EventList';

const AppNavigator = createStackNavigator({
  eventList: {
    screen: EventList
  },
  auth: {
    screen: Auth
  },
  event: {
    screen: Event
  },
  eventMap: {
    screen: EventMap
  }
});

export default AppNavigator;