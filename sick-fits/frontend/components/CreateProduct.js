import { useMutation } from '@apollo/client';
import { ALL_PRODUCTS_QUERY } from './Products';
import DisplayError from './ErrorMessage';
import useForm from '../lib/useForm';
import React from 'react';
import Form from './styles/Form';
import gql from 'graphql-tag';
import Router from 'next/router';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And what types are they.
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload!
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: '',
    price: 0,
    description: '',
  });

  const [createProduct, { loading, error, data }] = useMutation(
    CREATE_PRODUCT_MUTATION,
    {
      variables: inputs,
      refetchQuery: [{ query: ALL_PRODUCTS_QUERY }],
    }
  );

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await createProduct();
        clearForm();
        // Go to that product's page!
        Router.push({
          pathname: `/product/${res.data.createProduct.id}`,
        });
      }}
    >
      <DisplayError error={error} />
      <fieldset aria-busy={loading} disabled={loading}>
        <label htmlFor={'image'}>
          Image
          <input
            type={'file'}
            id={'image'}
            name={'image'}
            onChange={handleChange}
          />
        </label>
        <label htmlFor={'name'}>
          Name
          <input
            type={'text'}
            id={'name'}
            name={'name'}
            placeholder={'Name'}
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor={'price'}>
          Price
          <input
            type={'number'}
            id={'price'}
            name={'price'}
            placeholder={'Price'}
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor={'description'}>
          Description
          <textarea
            id={'description'}
            name={'description'}
            placeholder={'Description'}
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <button type={'submit'}>+ Add Product</button>
    </Form>
  );
}
