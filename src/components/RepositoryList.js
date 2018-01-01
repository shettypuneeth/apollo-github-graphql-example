import React from 'react';
import styled from 'styled-components';
const q = import('https://code.jquery.com/jquery-3.2.1.min.js');

console.log(q);

const Loader = styled.div`
  padding: 10px 0;
  font-size: 11px;
`;

const Repo = styled.div`
  padding: 15px 0;
  color: #afb3b5;
  border-bottom: 1px solid #f1f2f3;
  &:hover {
    color: #34495e;
  }
`;

const RepositoryList = ({ data: { loading, error, repositoryOwner } }) => {
  if (loading || !repositoryOwner) {
    return (
      <Loader>Loading...</Loader>
    )
  }

  const { repositories: { nodes } } = repositoryOwner;
  return (
    <div>
      {
        nodes.map((n, i) => (
          <Repo key={i}>
            <div style={{paddingBottom: 5}}>{n.name}</div>
            <div><span>Forks</span>: {n.forkCount}</div>
          </Repo>
        ))
      }
    </div>
  );
};

export default RepositoryList;