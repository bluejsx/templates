import 'bluejsx'

import Header from '../src/components/Header'

import 'github-markdown-css'
import 'highlight.js/styles/vs2015.css'


export default ({ Component, pageProps }) => {
  return (<div>
    <Header />
    <Component {...pageProps} class={`container markdown-body`}/>
  </div>)
}
