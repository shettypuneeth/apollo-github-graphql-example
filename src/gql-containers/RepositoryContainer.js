import {
  graphql
} from 'react-apollo';
import gql from 'graphql-tag';

import RepositoryList from '../components/RepositoryList';

const repositoryQuery = gql`
  query RepositoryListQuery($number: Int!, $username: String!) {
    repositoryOwner(login: $username) {
      repositories(last: $number) {
        nodes {
          name,
          forkCount
        }
      }
    }
  }
`;

const withRepositories = graphql(repositoryQuery, {
  options: ({ username, number = 5 }) => ({
    variables: {
      username,
      number
    }
  })
});

const Repositories = withRepositories(RepositoryList);

export default Repositories;