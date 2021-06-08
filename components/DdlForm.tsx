import React from 'react';
import {
  SimpleGrid, Heading, FormControl, FormLabel, Input, Box, Textarea,
} from '@chakra-ui/react';

const Component = () => (
  <SimpleGrid columns={2} spacing={10}>
    <Box shadow="md" p={5} borderRadius="md">
      <Heading fontSize="xl">Table Information Import From</Heading>
      <FormControl id="TableName">
        <FormLabel>TableName</FormLabel>
        <Input />
      </FormControl>
      <FormControl id="Columns">
        <FormLabel>Columns</FormLabel>
        <Textarea />
      </FormControl>
    </Box>
    <Box shadow="md" p={5} borderRadius="md">
      <Heading fontSize="xl">DDL for Make View Table</Heading>
      <FormControl id="Ddl">
        <FormLabel>Ddl</FormLabel>
        <Textarea readOnly />
      </FormControl>
    </Box>
  </SimpleGrid>
);

export default Component;
