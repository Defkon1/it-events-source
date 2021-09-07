import React from 'react';
import { getDaysInMonth, getISODay, format } from 'date-fns';
import { it } from 'date-fns/locale';
import { Heading, Box } from 'grommet';
import Day from './Day';
import EmptyDays from './EmptyDays';
import Weekdays from './Weekdays';
import { Hide } from '../Query';
import styled from 'styled-components';
import buildDaysWithEvents from '../../utils/buildDaysWithEvents';

type Props = MonthInfo & {
  openModal: (modalData: ModalData) => void;
};

const Month = ({ events, startDate, openModal }: Props) => {
  const dayNumber = getISODay(startDate);
  const days = getDaysInMonth(startDate);
  const emptyDays = 7 - ((dayNumber + days) % 7);

  const daysWithEvents = buildDaysWithEvents(startDate, events);

  return (
    <Box margin="medium">
      <Heading
        a11yTitle={`Mese di ${format(startDate, 'MMMM yyyy', { locale: it })}`}
        color="text"
      >
        <MonthHeading>{`${format(startDate, 'LLLL', { locale: it })} `}</MonthHeading>
        {format(startDate, 'yyyy')}
      </Heading>
      <MonthContainer>
        <Hide size="small">
          <Weekdays />
        </Hide>
        <Box direction="row" wrap>
          {dayNumber !== 7 && <EmptyDays amount={dayNumber} />}

          {daysWithEvents.map((modalData) => {
            const onClick =
              modalData.events.length > 0
                ? () => openModal(modalData)
                : undefined;

            return (
              <Day
                key={format(modalData.date, 'dd')}
                onClick={onClick}
                {...modalData}
              />
            );
          })}

          {emptyDays !== 7 && <EmptyDays amount={emptyDays} />}
        </Box>
      </MonthContainer>
    </Box>
  );
};

const MonthContainer = styled.div`
  border-radius: 12px;
  border: 4px ${(props) => props.theme.global.colors.border} solid;
`;

const MonthHeading = styled.b`
  text-transform: capitalize;
`;


export default React.memo(Month);
