import { useState, useEffect } from "react";

import "@styles/global.css";

export default function HyperDemoPage({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return;

  return <Component {...pageProps} />;
}
