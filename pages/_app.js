import Footer from "../components/theme/Footer";
import "../styles/globals.scss";

import Navbar from "../components/theme/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
