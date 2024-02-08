import "../styles/globals.css";
import Sidebar from '../components/Sidebar'
// 1. We're extending the base Saas UI theme,
// so import the extendTheme function.

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
    <Component {...pageProps} />
    </Sidebar>

    

  );
}
