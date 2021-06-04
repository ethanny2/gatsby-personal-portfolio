import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import photogram from '../../images/photogram.gif';
import elseif from '../../images/elseif.gif';
import fansite from '../../images/fansite.gif';
import gamerandomizer from '../../images/gamerandomizer.gif';
import threejsboilerplate from '../../images/threejsboilerplate.gif';
import scrabble from '../../images/scrabble.gif';
import streetwares from '../../images/streetwares.gif';

import placeholder from '../../images/project.jpg';
import styles from './ProjectImg.module.css';

function chooseGif(filename) {
  switch (filename) {
    case 'photogram':
      return { photo: photogram, alt: 'Photogram dashboard demo' };
    case 'elseif':
      return { photo: elseif, alt: 'Photogram dashboard demo' };
    case 'fansite':
      return { photo: fansite, alt: 'Photogram dashboard demo' };
    case 'gamerandomizer':
      return { photo: gamerandomizer, alt: 'Photogram dashboard demo' };
    case 'threejsboilerplate':
      return { photo: threejsboilerplate, alt: 'Photogram dashboard demo' };
    case 'scrabble':
      return { photo: scrabble, alt: 'Photogram dashboard demo' };
    case 'streetwares':
      return { photo: streetwares, alt: 'Photogram dashboard demo' };
    default:
      return placeholder;
  }
}

const ProjectImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              extension
              childImageSharp {
                fluid(maxWidth: 1366) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));
      if (!image) return null;
      if (image.node.extension.includes('gif')) {
        const sourceGif = chooseGif(image.node.name);
        return <img className={styles.gif} src={sourceGif.photo} alt={sourceGif.alt} />;
      }

      const imageFluid = image.node.childImageSharp?.fluid;
      return <Img alt={alt} fluid={imageFluid} />;
    }}
  />
);

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
