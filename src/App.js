import React from 'react';

import Calendar from './components/Calendar';

const App = () => {
  const events = [
    {
      title: 'Event 1',
      beginDate: new Date(2019, 6, 3),
      endDate: new Date(2019, 6, 12),
    },
  ];

  return <Calendar year={2019} month={7} events={events} />;
};

export default App;
