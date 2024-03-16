import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query getUsers @cached {
    users(order_by: { createdAt: desc }) {
      id
      email
      username
      createdAt
      updatedAt
    }
  }
`;
