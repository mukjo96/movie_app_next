import React from 'react';
import '../styles/globals.css'
import moment from 'moment';


function MyApp({ Component, pageProps }) {
  moment.locale('ko');
  return <Component {...pageProps} />
}

export default MyApp
