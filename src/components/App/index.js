import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
/* import GithubCorner from '../github/Corner'; */

import FloatCart from '../FloatCart';
import { SocialIcon } from 'react-social-icons';

const App = () => (
  <React.Fragment>
   {/*  <GithubCorner /> */}
   <header>
     <a href="/">Burano Deco</a>
     {/* <img src="/logo.png" className="header-img"></img> */}
   </header>
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
    <footer>
    <p>BuranoDeco 2021 ® </p>&nbsp;<SocialIcon style={{ height: 25, width: 25 }} url="https://instagram.com/buranodeco" network="instagram" />  </footer>
  </React.Fragment>
);

export default App;
