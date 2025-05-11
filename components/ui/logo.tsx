"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" aria-label="Home" className="block">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-10 h-10"
      >
        <Image
          src="/logo.png" // Make sure to move the PNG into your public folder as 'public/logo.png'
          alt="Personal Logo"
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </motion.div>
    </Link>
  );
}
