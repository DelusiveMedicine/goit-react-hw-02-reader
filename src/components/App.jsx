import React from 'react';
import Reader from './Reader/Reader';
import publications from './Reader/publications';

const App = () => {
  return (
    <React.Fragment key={1}>
      <Reader items={publications} />
    </React.Fragment>
  );
};

export default App;
