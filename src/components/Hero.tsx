import React, { useContext } from 'react';
import {
  Box,
  Heading,
  Button,
  ResponsiveContext,
  Text,
  Anchor,
  Avatar,
} from 'grommet';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Github } from 'grommet-icons';

const METADATA_QUERY = graphql`
  query {
    site {
      siteMetadata {
        title
        subTitle
        repoLink
      }
    }
    imageSharp {
      original {
        src
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(METADATA_QUERY);
  const size = useContext(ResponsiveContext);

  const { title, repoLink } = data.site.siteMetadata;

  return (
    <Box a11yTitle="Eventi informatici italiani" width="100%">
      <Box
        tag="header"
        direction="row"
        align="center"
        justify="between"
        background="brand"
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation="medium"
        style={{ zIndex: 1 }}
      >
        <Heading level="3" margin="none" a11yTitle="Titolo applicazione">
          {title}
        </Heading>
        <Box direction="row" justify="between">
          <Anchor href="https://www.google.it" a11yTitle="Codice su Github">
            <Github size="32px" color="text" />
          </Anchor>
          &nbsp;
          <Anchor
            href="https://alessiomarinelli.it"
            a11yTitle="Informazioni sull'autore"
          >
            <Avatar
              size="32px"
              src="//s.gravatar.com/avatar/4d10f56416189bd8f7947edc5908fbe8?s=32"
            />
          </Anchor>
        </Box>
      </Box>

      <Box
        align="center"
        flex="grow"
        height="90vh"
        justify="center"
        pad="medium"
        animation="slideDown"
      >
        <Box width="large" flex="grow">
          <Heading size="small" a11yTitle="Informazioni sito" color="brand">
            Cos&apos;&egrave;?
          </Heading>
          <Box
            border={{
              color: 'brand',
              size: 'large',
              style: 'solid',
              side: 'left',
            }}
            pad="medium"
          >
            <Text
              a11yTitle="Introduzione al sito"
              weight="normal"
              size="normal"
              textAlign="justify"
              color="text"
            >
              Una lista curata di eventi informatici live e online per
              sviluppatori, designer e tech enthusiasts organizzati in giro per
              l&apos;Italia.
            </Text>

            <Separator spacing="xsmall" />

            <Text
              a11yTitle="Introduzione al sito"
              weight="normal"
              size="normal"
              textAlign="justify"
              color="text"
            >
              Dallo sviluppo software al design di architetture, passando per
              approfondimenti legali e soft skill, cercando di abbracciare tutto
              ciò che ruota intorno all&apos;informatica, al software e alla sua
              realizzazione.{' '}
            </Text>
          </Box>
        </Box>

        <Box width="large" flex="grow">
          <Heading
            size="small"
            a11yTitle="Informazioni sito"
            color="brand"
            textAlign="end"
          >
            Come segnalare un evento?
          </Heading>
          <Box
            border={{
              color: 'brand',
              size: 'large',
              style: 'solid',
              side: 'right',
            }}
            pad="medium"
          >
            <Text
              a11yTitle="Introduzione al sito"
              weight="normal"
              size="normal"
              textAlign="justify"
              color="text"
            >
              Vai al{' '}
              <Anchor href={repoLink}>repository GitHub degli eventi</Anchor>, e
              invia una pull request!
            </Text>
          </Box>
        </Box>

        <Separator spacing="medium" />

        <Box direction={size === 'small' ? 'column' : 'row'} gap="large">
          <HeroButton
            href="#calendars"
            label="Vedi gli eventi"
            a11yTitle="Vedi gli eventi"
            primary
          />
          <HeroButton
            href={repoLink}
            label="Segnala un evento!"
            a11yTitle="Segnala un evento!"
            color="secondary"
            target="_blank"
          />
        </Box>
      </Box>
    </Box>
  );
};

const Separator = ({ spacing = 'small' }: { spacing?: string }) => (
  <Box margin={{ vertical: spacing }} />
);

const HeroButton = styled(Button)`
  padding: 15px;
`;

export default Hero;
