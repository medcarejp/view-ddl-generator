import React from 'react';
import {
  SimpleGrid, Heading, FormControl, FormLabel, Input,
} from '@chakra-ui/react';

const Component = () => (
  <SimpleGrid columns={2} spacing={10}>
    <div>
      <Heading as="h2">Table Information Import From</Heading>
      <FormControl id="TableName">
        <FormLabel>TableName</FormLabel>
        <Input />
      </FormControl>
    </div>
    <div>
      <Heading as="h2">DDL for Make View Table</Heading>
    </div>
  </SimpleGrid>
);

export default Component;
