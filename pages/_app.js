import "../styles/globals.css";
import Nav from "../components/Nav";
import { Provider } from "react-redux";
import store from "../components/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
