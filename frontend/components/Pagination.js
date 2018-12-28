import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import PaginationStyles from './styles/PaginationStyles';

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => {
  return (
    <PaginationStyles>
      <Query  query={PAGINATION_QUERY}>
      {({data, loading, error}) => {
        if(loading) return <p>Loading...</p>
        if(error) return <p>Loading...</p>
        return (
        <p>Pagination {data.itemsConnection.aggregate.count}</p> 
      )}}
      
      </Query>
      <p>Pagination</p>
    </PaginationStyles>
  );
};

export default Pagination;