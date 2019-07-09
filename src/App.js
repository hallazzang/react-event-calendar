import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Calendar from './components/Calendar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 1rem auto;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: transparent;
  border: none;

  &:hover {
    color: #777;
  }
`;

const App = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [events, setEvents] = useState([]);

  const loadPrevMonth = () => {
    let prevMonth = month - 1;
    if (prevMonth < 1) {
      setYear(year - 1);
      prevMonth = 12;
    }
    setMonth(prevMonth);
  };

  const loadNextMonth = () => {
    let nextMonth = month + 1;
    if (nextMonth > 12) {
      setYear(year + 1);
      nextMonth = 1;
    }
    setMonth(nextMonth);
  };

  useEffect(() => {
    const newEvents = [];
    for (let i = 0; i < 5; i++) {
      const beginDay = Math.floor(Math.random() * 28),
        endDay = Math.min(beginDay + Math.floor(Math.random() * 8), 28);
      newEvents.push({
        id: i + 1,
        title: `Event ${i + 1}`,
        beginDate: new Date(year, month - 1, beginDay),
        endDate: new Date(year, month - 1, endDay),
      });
    }
    setEvents(newEvents);
  }, [year, month]);

  return (
    <Container>
      <Controls>
        <Button onClick={loadPrevMonth}>&laquo; Prev Month</Button>
        <Button onClick={loadNextMonth}>Next Month &raquo;</Button>
      </Controls>
      <Calendar year={year} month={month} events={events} />
    </Container>
  );
};

export default App;
