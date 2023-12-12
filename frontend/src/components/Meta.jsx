import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Bookstore ASA',
  description: 'We sell the best products for cheap',
  keywords: 'book, fiction, nonfiction, cheap',
};

export default Meta;
