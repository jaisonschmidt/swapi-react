import React from 'react';

import LoadingImg from '../../assets/img/loading.svg';

import './Loading.scss';

const Loading = () => (
  <div className="loading">
    <img src={LoadingImg} className="-spinner" alt="loading" />
  </div>
);

export default Loading;
