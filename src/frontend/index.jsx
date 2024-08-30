import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, DynamicTable, Popup, Link } from '@forge/react';

const presidents = [
  { name: 'George Washington', party: 'Independent', term: '1789-1797', id: '1' },
  { name: 'John Adams', party: 'Federalist', term: '1797-1801', id: '2' },
  { name: 'Thomas Jefferson', party: 'Democratic-Republican', term: '1801-1809', id: '3' },
  { name: 'James Madison', party: 'Democratic-Republican', term: '1809-1817', id: '4' },
  { name: 'James Monroe', party: 'Democratic-Republican', term: '1817-1825', id: '5' },
];

const createKey = (value) => `key-${value.replace(/\s+/g, '-').toLowerCase()}`;


const head = {
  cells: [
    {
      key: 'name',
      content: 'Name',
    },
    {
      key: 'party',
      content: 'Party',
    },
    {
      key: 'term',
      content: 'Term',
    },
  ],
};


const App = () => {

  const [ popupIsOpen, setPopupIsOpen ] = useState(false)

  const rows = presidents.map((president, index) => ({
    key: `row-${index}-${president.name}`,
    cells: [
      {
        key: createKey(president.name),
        content: <Link href="">{president.name}</Link>,
      },
      {
        key: createKey(president.party),
        content: president.party,
      },
      {
        key: president.id + 'popup',        
        content: <Popup
          placement='right-start'
          role='menu'
          rootBoundary='document'
          shouldRenderToParent={true}
          strategy='absolute'
          isOpen={popupIsOpen}
          onClose={() => setPopupIsOpen(false)}
          content={() => <Box xcss={contentStyles}>Content</Box>}
          trigger={() => (
            <Button
              appearance='subtle'
              onClick={() => setPopupIsOpen(!popupIsOpen)}
            >
              <Box padding='space.050'>
                <Icon glyph='editor-more' label='more' />
              </Box>
            </Button>
          )}
        />,
      },
    ],
  }));

  return (

    <DynamicTable
      caption="Table test"
      head={head}
      rows={rows}
    />

  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
