import React, { useState, useMemo } from 'react';
import { Box } from 'grommet';
import { graphql, useStaticQuery } from 'gatsby';
import Footer from '../components/Footer';
import ModalEvent from '../components/ModalEvent';
import Month from '../components/Calendar/Month';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import groupEventsByMonth from '../utils/groupEventsByMonth';
import { format } from 'date-fns';

const EVENTS_QUERY = graphql`
  query eventsQuery {
    site {
      siteMetadata {
        limitMonthInTheFuture
      }
    }
    allEventsCsv(sort: { fields: date }) {
      nodes {
        id
        date
        name
        description
        location
        tags
        link
      }
    }
  }
`;
const CalendarPage = () => {
  const [modalData, setModalData] = useState<ModalData>();

  const { allEventsCsv, site } = useStaticQuery(EVENTS_QUERY);
  const { limitMonthInTheFuture } = site.siteMetadata;

  const months = useMemo(
    () => groupEventsByMonth(allEventsCsv.nodes, limitMonthInTheFuture),
    [allEventsCsv.nodes, limitMonthInTheFuture],
  );

  return (
    <Layout>
      <Hero />

      <Box id="calendars" animation="fadeIn">
        {months.map((month) => (
          <Month
            key={format(month.startDate, 'MM')}
            openModal={(data: ModalData) => setModalData(data)}
            {...month}
          />
        ))}
      </Box>
      {modalData && (
        <ModalEvent onClose={() => setModalData(undefined)} {...modalData} />
      )}

      <Footer />
    </Layout>
  );
};

export default CalendarPage;
