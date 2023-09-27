import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>Paginas gratis Unne {title && `| ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default Head;
