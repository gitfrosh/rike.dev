import { motion } from "framer-motion";

function App({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
            transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
          opacity: 0,
        },
        pageAnimate: {
            transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default App;
