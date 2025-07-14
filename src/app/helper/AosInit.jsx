"use client";
import Aos from "aos";
import { useEffect } from "react";

const AOSInit = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      delay: 0.2,
      once: true,
    });
  }, []);

  return null;
};

export default AOSInit;
