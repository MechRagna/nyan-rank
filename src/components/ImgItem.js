import React from "react";
// import PropTypes from "prop-types";

const ImgItem = ({ url, name }) => {
  return (
    <div className="img-cat">
      <img src={url} alt={name} />
    </div>
  );
};

ImgItem.propTypes = {};

export default ImgItem;
