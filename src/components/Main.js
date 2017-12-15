import React from 'react';
import { Filter, List } from '.';

export const Main = ({ bugs, completeBug, workingOnBug, deleteBug }) => {
  return (
    <div>
      <Filter />
      <List
        bugs={bugs}
        completeBug={completeBug}
        workingOnBug={workingOnBug}
        deleteBug={deleteBug}
      />
    </div>
  );
};
