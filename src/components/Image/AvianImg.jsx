import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const AvianImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`{
  images: allFile {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}`}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        return n.node.relativePath.includes(filename);
      });

      if (!image) return null;

      const imageFluid = image.node.childImageSharp.gatsbyImageData;
      return <GatsbyImage image={imageFluid} alt={alt} />;
    }}
  />
);

AvianImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AvianImg;
