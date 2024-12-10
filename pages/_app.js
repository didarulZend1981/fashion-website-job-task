import CartProvider from "@/Components/CartProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {

  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );


}
