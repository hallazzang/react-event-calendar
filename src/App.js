import React from 'react';
import styled from 'styled-components';

import Calendar from './components/Calendar';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const App = () => {
  const events = [
    {
      id: 1,
      title: 'Event 1',
      beginDate: new Date(2019, 6, 3),
      endDate: new Date(2019, 6, 12),
    },
    {
      id: 2,
      title: 'Event 2',
      beginDate: new Date(2019, 6, 14),
      endDate: new Date(2019, 6, 16),
    },
    {
      id: 3,
      title: 'Event 3',
      beginDate: new Date(2019, 6, 12),
      endDate: new Date(2019, 6, 15),
    },
    {
      id: 4,
      title: 'Event 4',
      beginDate: new Date(2019, 6, 13),
      endDate: new Date(2019, 6, 13),
    },
  ];

  return (
    <Container>
      <Calendar year={2019} month={7} events={events} />
    </Container>
  );
};

export default App;
