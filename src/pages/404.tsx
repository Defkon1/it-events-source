import React from 'react';
import { Box, Heading, Button, Text } from 'grommet';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <Box
      a11yTitle="Eventi informatici italiani"
      align="center"
      flex="grow"
      height="100vh"
      justify="center"
      pad="medium"
      animation="slideDown"
    >
      <Heading size="xlarge" margin="small">
        404
      </Heading>
      <Heading size="small">Pagina non trovata</Heading>

      <Button
        primary
        margin="large"
        href="/"
        label={<Text margin="small">Torna alla home</Text>}
      />
    </Box>
  </Layout>
);

export default NotFoundPage;
