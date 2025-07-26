import { motion } from "framer-motion";

function HamburgerToggle({ isOpen, toggle }) {
  return (
    <div
      onClick={toggle}
      className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer relative z-[1003]"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
        transition={{ duration: 0.3 }}
        className="absolute w-6 h-[1px] bg-white origin-center"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
        transition={{ duration: 0.3 }}
        className="absolute w-6 h-[1px] bg-white origin-center"
      />
    </div>
  );
}

export default HamburgerToggle;
