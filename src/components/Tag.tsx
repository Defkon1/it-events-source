import React from 'react';
import { Box, Text } from 'grommet';
import { Tag as TagIcon } from 'grommet-icons';

const renderTag = (value: string) => (
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
    <Text size="small">{value}</Text>
  </Box>
);

const Tag = ({ children, ...props }: { children: string }) =>
  renderTag(children);

export default Tag;
