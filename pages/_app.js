import '../styles/globals.scss'

import Navbar from '../components/theme/Navbar'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
