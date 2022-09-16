import Footer from '../components/theme/footer'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
