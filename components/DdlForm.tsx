import React from 'react';
import {
  SimpleGrid, Heading, FormControl, FormLabel, Input, Box, Textarea,
} from '@chakra-ui/react';

const Component = () => {
  const [tableName, setTableName] = React.useState('');
  const [columns, setColumns] = React.useState<string[]>([]);
  const [ddl, setDdl] = React.useState('');

  React.useEffect(() => {
    if (!tableName) return;
    if (columns.length === 0) return;

    setDdl(`create or replace view v_${tableName} as
select
  ${columns.join(',\n  ')}
from medically.${tableName};`);
  }, [tableName, columns]);

  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box shadow="md" p={5} borderRadius="md" my={4}>
        <Heading fontSize="xl">Table Information Import From</Heading>
        <FormControl id="TableName" my={4}>
          <FormLabel>TableName</FormLabel>
          <Input onChange={(ev) => setTableName(ev.target.value)} />
        </FormControl>
        <FormControl id="Columns" my={4}>
          <FormLabel>Columns</FormLabel>
          <Textarea onChange={(ev) => {
            setColumns(ev.target.value.split('\n').filter((v) => v && v.length > 0));
          }}
          />
        </FormControl>
      </Box>
      <Box shadow="md" p={5} borderRadius="md" my={4}>
        <Heading fontSize="xl">DDL for Make View Table</Heading>
        <FormControl id="Ddl" my={4}>
          <FormLabel>Ddl</FormLabel>
          <Textarea value={ddl} readOnly rows={20} />
        </FormControl>
      </Box>
    </SimpleGrid>
  );
};

export default Component;
