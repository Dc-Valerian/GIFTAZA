import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRoute";
import OnlineStatus from "./pages/Online/Online";
import useMouse from "@react-hook/mouse-position";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./style.css";

const App = () => {
  const ref = useRef(null);

  const [cursorVariant, setCursorVariant] = useState<"default" | "hover">(
    "default"
  );
  console.log(setCursorVariant);

  const mouse = useMouse(ref, {
    enterDelay: 70,
    leaveDelay: 80,
  });

  let mouseXPosition: number | null = mouse.x || null;
  let mouseYPosition: number | null = mouse.y || null;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      x: mouseXPosition || 0,
      y: mouseYPosition || 0,
    },
    hover: {
      x: mouseXPosition || 0,
      y: mouseYPosition || 0,
      width: 130,
      height: 130,
      fontSize: "20px",
    },
  };

  const spring = {
    stiffness: 500,
    damping: 25,
    duration: 0.3,
    restDelta: 0.001,
  };

  return (
    <div ref={ref}>
      <motion.div
        className="circle"
        variants={variants}
        transition={spring}
        animate={cursorVariant}
      />
      <RouterProvider router={mainRoute} />
      <OnlineStatus />
    </div>
  );
};

export default App;
