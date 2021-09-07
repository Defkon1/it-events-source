import React from 'react';
import { Box, Text, Anchor, Image } from 'grommet';
import { graphql, useStaticQuery } from 'gatsby';
import { format, parseISO } from 'date-fns';

const FOOTER_QUERY = graphql`
  query FooterInfoQuery {
    siteBuildMetadata {
      buildTime
    }
  }
`;

const Footer = () => {
  const data = useStaticQuery(FOOTER_QUERY);
  const buildTime = data.siteBuildMetadata.buildTime;

  console.log(buildTime);

  return (
    <Box tag="footer" justify="between" direction="row" pad="medium">
      <Anchor
        rel="license"
        href="http://creativecommons.org/licenses/by-sa/4.0/"
      >
        <Image src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" />
      </Anchor>

      <Text color="text" size="xsmall">
        Last update {format(parseISO(buildTime), 'dd/MM/yyyy HH:mm:ss')}
      </Text>
      <Text color="text" size="xsmall">
        This site is powered by&nbsp;
        <Anchor href="https://www.netlify.com/">Netlify</Anchor> - Developed
        by&nbsp;
        <Anchor href="http://alessiomarinelli.it/">Alessio Marinelli</Anchor>
        &nbsp; based on&nbsp;
        <Anchor href="http://emasuriano.com/">Ema Suriano</Anchor> Gatsby
        starter
      </Text>
    </Box>
  );
};

export default Footer;
