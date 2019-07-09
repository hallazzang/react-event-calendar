import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CalendarEvent from './CalendarEvent';

const Row = styled.div`
  display: grid;
  flex-basis: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1.2rem repeat(5, 0.8rem);
  grid-auto-flow: dense;
  grid-gap: 3px 6px;
`;

const DayHeader = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => (props.dimmed ? '#bbb' : '#000')};
  font-weight: ${props => (props.dimmed ? 'normal' : 'bold')};
`;

const CalendarWeekRow = props => {
  const { year, month, dates, events } = props;

  return (
    <Row>
      {dates.map(date => (
        <DayHeader
          dimmed={date.getFullYear() !== year || date.getMonth() !== month - 1}
          key={date}
        >
          {date.getDate()}
        </DayHeader>
      ))}
      {events.map(event => {
        const col =
            dates.findIndex(
              date => date.valueOf() === event.beginDate.valueOf()
            ) + 1 || 1,
          colSpan =
            (dates.findIndex(
              date => date.valueOf() === event.endDate.valueOf()
            ) + 1 || 7) -
            col +
            1;

        return (
          <CalendarEvent
            title={event.title}
            col={col}
            colSpan={colSpan}
            key={event.id}
            onClick={() => alert(`${event.title} Clicked!`)}
          />
        );
      })}
    </Row>
  );
};
CalendarWeekRow.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
};
CalendarWeekRow.defaultProps = {
  events: [],
};

export default CalendarWeekRow;
