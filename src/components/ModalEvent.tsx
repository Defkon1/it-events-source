import React, { ReactNode, Fragment } from 'react';
import { Layer, Box, Text, Button } from 'grommet';
import { FormClose } from 'grommet-icons';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { parseTags } from '../utils/parseTags';
import Tag from './Tag';

type Props = ModalData & {
  onClose: () => void;
};

const ModalEvent = ({ onClose, date, events }: Props) => (
  <Layer position="center" onClickOutside={onClose} onEsc={onClose} modal>
    <Header onClick={onClose}>{format(date, 'cccc d, MMMM', { locale: it })}</Header>
    <Box direction="column" align="center" tag="section" margin="small">
      {events.map((event, i, arr) => (
        <Fragment key={event.id}>
          <EventDescription event={event} />
          {i !== arr.length - 1 && (
            <Box
              margin={{ vertical: 'small' }}
              background="calendar-modal-separator"
              height="3px"
              width="100%"
              style={{ borderRadius: '50%' }}
            />
          )}
        </Fragment>
      ))}
    </Box>
  </Layer>
);

type HeaderProps = {
  children: ReactNode;
  onClick: () => void;
};

const Header = ({ onClick, children }: HeaderProps) => (
  <Box
    direction="row"
    align="center"
    tag="header"
    elevation="small"
    justify="between"
  >
    <Text
      margin={{ left: 'small' }}
      color="calendar-modal-text"
      a11yTitle="Giorno selezionato"
    >
      <b>{children}</b>
    </Text>
    <Button
      icon={<FormClose />}
      a11yTitle="Chiudi popup"
      onClick={onClick}
    />
  </Box>
);

const EventDescription = ({ event }: { event: EventInfo }) => (
  <Box
    direction="row"
    fill="horizontal"
    background="calendar-modal-background"
    justify="center"
  >
    <Text a11yTitle="Ora evento" margin="small" color="calendar-modal-text">
      {format(new Date(event.date), 'HH:mm')}
    </Text>
    <Box margin="small" width="medium">
      <Text
        a11yTitle="Event name"
        weight="bold"
        size="large"
        color="calendar-modal-text"
      >
        {event.name}
      </Text>

      {event.location && (
        <Text a11yTitle="Luogo evento" color="calendar-modal-text">
          {event.location}
        </Text>)}
   
      <Text
        margin={{ top: 'small' }}
        a11yTitle="Descrizione evento"
        weight="normal"
        size="normal"
        color="calendar-modal-text"
      >
        {event.description}
      </Text>

      {event.tags && (
        <Box align="center" direction="row" wrap={true} margin={{ top: "medium" }}>
          {parseTags(event.tags).map((tag, i)=>{
            return <Tag key={i}>{tag}</Tag>
          })}    
        </Box>)}

      <Box margin={{ top: 'medium' }}>
        <Button
          href={event.link}
          label="Link"
          alignSelf="end"
          a11yTitle="Link evento"
          target="_blank"
          primary
        />
      </Box>
    </Box>
  </Box>
);

export default ModalEvent;
