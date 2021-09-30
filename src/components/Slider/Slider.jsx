import React from 'react';

export default function Slider(props) {
  const { images } = props;

  return (
    <div className="catalog-hotels__slider">
      <ul className="catalog-hotels__slide-list">
        {images.map(img => <li className="catalog-hotels__slide-item" key={img}>
          <img className="catalog-hotels__slide-img" src={img} width="164" height="149" alt={img.replace(/(img\/)/g, '')} />
        </li>)}
      </ul>
    </div>
  );
};
