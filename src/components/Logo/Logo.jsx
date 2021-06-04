import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';
// Make CSS module to style the logo

/*  Gatsby image doesnt work on svgs */
export default function Logo({ logoName }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { extension: { eq: "svg" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);
  const [logo] = data.allFile.edges.filter((edge) => edge.node.publicURL.includes(logoName));
  const logoURL = logo.node.publicURL;
  return (
    <img
      className={`${styles.logo} ${logoName.includes('amazon') ? styles.amazon : ''} ${
        logoName.includes('vercel') ? styles.vercel : ''
      }`}
      alt={logoName}
      src={logoURL}
    />
  );
}

Logo.propTypes = {
  logoName: PropTypes.string,
};
