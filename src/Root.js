import React, { Component } from 'react';
import styled from 'styled-components';

import UserContainer from './gql-containers/UserContainer';
import RepositoryContainer from './gql-containers/RepositoryContainer';


const RootStyled = styled.div`
  position: relative;
  top: 40%;
  transform: translateY(-40%);
  transition: transform 1s ease;
  max-width: 300px;
  padding: 20px;
  margin: 0 auto;
`;
const SearchWrapper = styled.div`
  display: flex;
  padding: 15px;
  border: 1px solid #bdc3c7;
`;
const InuputStyled = styled.input`  
  padding: 5px;
  border: 1px solid #bdc3c7;
  min-width: 200px;
  font-size: 14px;
`;
const SeachStyled = styled.button`
  padding: 5px;
  border: 1px solid #bdc3c7;
  font-size: 13px;
  border-left: 0px;
  border-radius: 0;
`;

class Root extends Component {
  constructor() {
    super();
    this.state = { username: '' };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
  }

  handleUserNameChange(e) {
    const username = e.target.value;
    
    this.setState({ username,  search: false });
  }

  handleButtonClick() {
    if (!this.state.username) return;
    this.setState({ search: true });
  }

  render() {
    return (
      <RootStyled>
        <SearchWrapper>
          <InuputStyled value={this.state.value} onChange={this.handleUserNameChange} />
          <SeachStyled onClick={this.handleButtonClick}>Search</SeachStyled>
        </SearchWrapper>

        {
          this.state.search && (
            <div>
              <UserContainer username={this.state.username} />
              <div>
                REPOSITORIES
              </div>
              <RepositoryContainer username={this.state.username} />
            </div>
          )
        }
      </RootStyled>
    );
  }
}

export default Root;