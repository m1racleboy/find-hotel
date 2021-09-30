import React, { useState } from 'react';

export default function Slider(props) {
  const { images } = props;
  const [renderedImgCount, setRenderedImgCount] = useState(0);

  const prevHandler = (e) => {
    e.preventDefault();
    setRenderedImgCount(renderedImgCount - 3);
  }

  const nextHandler = (e) => {
    e.preventDefault();
    setRenderedImgCount(renderedImgCount + 3);
  }

  return (
    <div className="catalog-hotels__slider">
      <button className="catalog-hotels__slider-button-prev" onClick={prevHandler} disabled={renderedImgCount <= 0}>←</button>
      <ul className="catalog-hotels__slide-list">
        {images.slice(renderedImgCount, renderedImgCount + 4).map(img => <li className="catalog-hotels__slide-item" key={img}>
          <img className="catalog-hotels__slide-img" src={img} width="164" height="149" alt={img.replace(/(img\/)/g, '')} />
        </li>)}
      </ul>
      <button className="catalog-hotels__slider-button-next" onClick={nextHandler} disabled={renderedImgCount + 3 >= images.length}>→</button>
    </div>
  );
};
