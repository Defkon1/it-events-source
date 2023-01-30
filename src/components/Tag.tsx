import React from 'react';
import { Box, Text } from 'grommet';
import { Tag as TagIcon } from 'grommet-icons';

const renderTag = (value: string) => {
  
  const tagLink = "https://www.amazon.it/?k=" + encodeURI(value) + "&tag=" + process.env.GATSBY_AMAZON_TAG;
  
    return (
    <Box
      background="brand"
      direction="row"
      align="center"
      round="xsmall"
      pad="xsmall"
      gap="xsmall"
      margin="xxsmall"
    >
      <TagIcon color="text" style={{ width: '12px', height: '12px' }} />
      <Text size="small"><a href={tagLink}>{value}</a></Text>
    </Box>
  );
};

const Tag = ({ children, ...props }: { children: string }) =>
  renderTag(children);

export default Tag;
