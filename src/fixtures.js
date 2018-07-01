export const data = {
  'events': {
    '0': {
      'month': 'March',
      'title': 'Design it, Build it',
      'url': 'http://www.dibiconference.com',
      'when': 'March 30-31, 2017',
      'where': 'Edinburgh, Scotland'
    },
    '1': {
      'month': 'April',
      'title': 'Alter Conference',
      'url': 'http://www.alterconference.com',
      'when': 'April 10, 2017',
      'where': 'London, England'
    },
    '2': {
      'month': 'May',
      'title': 'An Event Apart',
      'url': 'http://www.apartconference.com',
      'when': 'May 19-21, 2017',
      'where': 'Paris, France'
    },
    '3': {
      'month': 'May',
      'title': 'An Event Apart',
      'url': 'http://www.apartconference.com',
      'when': 'May 19-21, 2017',
      'where': 'Paris, France'
    },
    '4': {
      'month': 'May',
      'title': 'The Event',
      'url': 'http://www.apartconference.com',
      'when': 'May 19-21, 2017',
      'where': 'Paris, France'
    },
    '5': {
      'month': 'May',
      'title': 'An Event Apart',
      'url': 'http://www.apartconference.com',
      'when': 'May 19-21, 2017',
      'where': 'Paris, France'
    },
    '6': {
      'month': 'May',
      'title': 'The Event',
      'url': 'http://www.apartconference.com',
      'when': 'May 19-21, 2017',
      'where': 'Paris, France'
    },
    '7': {
      'month': 'May',
      'title': 'An Event Apart',
      'url': 'http://www.apartconference.com',
      'when': 'May 19-21, 2017',
      'where': 'Paris, France'
    },
  }
}

function toArr(obj) {
  const arr = Object.entries(obj);
  const newArr = arr.map(([uid, value]) => ({uid, ...value}));
  return newArr;
}

export const eventList = toArr(data.events);
// export const peopleList = toArr(data.people);