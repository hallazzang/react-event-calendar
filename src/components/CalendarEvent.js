import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-column: ${props => props.col} / span ${props => props.colSpan};
  background: ${props => props.color};
  font-size: 0.8rem;
  line-height: 0.8rem;
  padding: 2px 6px;
`;
Label.defaultProps = {
  color: '#ddf',
};

const CalendarEvent = props => {
  const { title, col, colSpan, onClick } = props;

  return (
    <Label col={col} colSpan={colSpan} onClick={onClick}>
      {title}
    </Label>
  );
};
CalendarEvent.propTypes = {
  title: PropTypes.string,
  col: PropTypes.number,
  colSpan: PropTypes.number,
  onClick: PropTypes.func,
};
CalendarEvent.defaultProps = {
  title: '',
  col: 1,
  colSpan: 1,
  onClick: () => {},
};

export default CalendarEvent;
