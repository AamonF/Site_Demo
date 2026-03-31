"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDemoRequest } from "@/components/launch/DemoRequestProvider";
import Button from "@/components/ui/Button";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const { open } = useDemoRequest();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-slate-200 shadow-xl px-4 py-3 safe-area-bottom"
        >
          <Button
            type="button"
            variant="primary"
            size="md"
            onClick={open}
            className="w-full justify-center"
          >
            Request a demo
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
