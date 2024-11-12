import React from 'react';
import revision from '../../../revision.json';

const Version = () => {
  return (
    <div>
      <div>revision : {revision.revision}</div>
      <div>branch: {revision.branch}</div>
      <div>lastCommit: {revision.lastCommitDate}</div>
    </div>
  );
};

export default Version;
