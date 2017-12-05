import {
  graphql
} from 'react-apollo';
import gql from 'graphql-tag';

import UserList from '../components/UserList';

const userQuery = gql`
  query UserListQuery($username: String!) {
    user(login: $username) {
      id,
      name,
      bio,
      company,
      avatarUrl
    }
  }
`;

const withUsers = graphql(userQuery, {
  options: ({ username }) => ({
    variables: {
      username
    }
  })
});

const Users = withUsers(UserList);

export default Users;