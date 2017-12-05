import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  padding: 10px 0;
  font-size: 11px;  
`;

const UserWrapper = styled.div`
  display: flex;
  background: #f1f2f3;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px;
`;
const Avatar = styled.img`
  width: 60px;
  height: 60px;
`;
const Details = styled.div`
  padding: 0 30px;
  color: #34495e;
  font-size: 14px;
`;

const UserList = ({ data: { loading, error, user } }) => {
  if (loading) {
    return (
      <Loader>Loading...</Loader>
    )
  }

  if (error) {
    return (
      <div>No user found...</div>
    )
  }
  
  return (
    <UserWrapper>
      <Avatar src={user.avatarUrl}/>
      <Details>
        <div>{user.name}</div>
        <div>{user.bio}</div>
        <div>{user.company}</div>        
      </Details>
    </UserWrapper>
  );
};

export default UserList;