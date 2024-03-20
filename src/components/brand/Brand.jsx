import React from 'react';
import './brand.css';
import { google,atlassian,dropbox,slack,shopify } from './imports';

const Brand = () => {
  return (
    <div className="">
      <div className="flex">
        <ul className="flex__bar">
          <li><img src={google} alt="google" />google</li>
          <li> <img src={slack} alt="slack" />slack</li>
          <li><img src={atlassian} alt="atlassian" />atlassian</li>
          <li><img src={dropbox} alt="" />DropBox</li>
          <li><img src={shopify} alt="" />Shopify</li>
        </ul>




      </div>





    </div>
  )
}

export default Brand;