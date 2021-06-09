import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import header from '../images/header.jpg';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content="Portfolio, JavaScript, Ethan Soo Hon" />
        <meta name="author" content="Ethan Soo Hon" />
        <link rel="canonical" href="ethansoohon.com" />
        <meta name="subject" content="Ethan Soo Hon Portfolio" />
        <meta name="url" content="ethansoohon.com" />
        <meta httpEquiv="Expires" content="0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="imagetoolbar" content="no" />
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
        <meta
          name="twitter:card"
          content="Portfolio site for fullstack JavaScript developer, Ethan Soo Hon"
        />
        <meta name="twitter:site" content="@ArrayLikeObj" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@ArrayLikeObj" />
        <meta name="twitter:image" content={header} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:url" content="ethansoohon.com" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={header} />
        <meta property="og:site_name" content="ethansoohon.com" />
        <meta property="og:description" content={description} />
      </Helmet>
      <App />
    </>
  );
};
