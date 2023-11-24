import { FC, lazy, Suspense, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import spinner from "../../Assets/Ripple.svg";
// import Header from "../../Static/Header";
import Hero from "./Hero";

const AboutPage = lazy(() => import("./About"));
const AppWorks = lazy(() => import("./AppWorks"));
const GetStarted = lazy(() => import("./GetStarted"));
// const Footer = lazy(() => import("../../Static/Footer"));

const LazyComponent: FC<{ children: JSX.Element }> = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView();
  const loadedRef = useRef(loaded);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    if (inView) {
      // Set a timeout of 1 seconds before setting the loaded state to true
      timeoutId = setTimeout(() => {
        setLoaded(true);
      }, 1000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [inView]);

  useEffect(() => {
    if (loadedRef.current !== loaded && loaded) {
      // This code will only be executed once when the component is loaded
      loadedRef.current = true;
    }
  }, [loaded]);

  return (
    <div ref={ref}>
      {loaded ? (
        children
      ) : (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <img src={spinner} />
        </div>
      )}
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <LazyComponent>
        <Suspense fallback={null}>
          <AboutPage />
        </Suspense>
      </LazyComponent>
      <LazyComponent>
        <Suspense fallback={null}>
          <AppWorks />
        </Suspense>
      </LazyComponent>
      <LazyComponent>
        <Suspense fallback={null}>
          <GetStarted />
        </Suspense>
      </LazyComponent>
      {/* <LazyComponent>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </LazyComponent> */}
    </div>
  );
};

export default LandingPage;
