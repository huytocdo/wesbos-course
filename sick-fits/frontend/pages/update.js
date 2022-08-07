import UpdateProduct from '../components/CreateProduct';

export default function UpdatePage({ query }) {
  return (
    <div>
      <UpdateProduct id={query.id} />
    </div>
  );
}
