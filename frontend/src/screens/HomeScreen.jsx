import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const [currentCategory, setCurrentCategory] = useState('All');

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  const filterProducts = (category) => {
    // Your filtering logic here...
    if (category === 'All') {
      return data.products; // Return all products
    }

    return data.products.filter((product) => product.category === category);
  };

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>Products</h1>
          <Button
            variant='outline-success'
            className='p-2 mx-0'
            onClick={() => setCurrentCategory('All')}
          >
            All
          </Button>
          <Button
            variant='outline-success'
            className='p-2 mx-1'
            onClick={() => setCurrentCategory('Fiction')}
          >
            Fiction
          </Button>
          <Button
            variant='outline-success'
            className='p-2 mx-1'
            onClick={() => setCurrentCategory('Non-Fiction')}
          >
            Non-Fiction
          </Button>
          <Row>
            {filterProducts(currentCategory).map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword || ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
