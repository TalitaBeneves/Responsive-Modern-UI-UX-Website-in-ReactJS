import React from 'react';
import { atlassian, dropbox, google, shopify, slack } from "./imports";
import './brand.css';

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={atlassian} alt="brand" />
      </div>
      <div>
        <img src={dropbox} alt="brand" />
      </div>
      <div>
        <img src={google} alt="brand" />
      </div>
      <div>
        <img src={shopify} alt="brand" />
      </div>
      <div>
        <img src={slack} alt="brand" />
      </div>
    </div>
  )
}

export default Brand;