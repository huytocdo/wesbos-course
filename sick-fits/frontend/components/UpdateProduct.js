import gql from 'graphql-tag';

const SINGLE_PRODUCT_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateProduct({ id }) {
  // 1. We need to get the existing product
  // 2. We need to get the mutation to update the product
  // 3. We need the form to handle the updates
  return <p>Update!</p>;
}
