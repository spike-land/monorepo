import { css } from "@emotion/react";
import { motion } from "framer-motion";

export default () => (
  <header
    css={css`
      background-color: #282c34;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
      text-align: center;
      overflow: hidden;
    `}
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: 0,
        duration: 2,
        repeatType: "loop",
      }}
    >
      <div
        css={css`
      font-size: calc(10px + 20vmin);
        `}
      >
        🔥
      </div>
      -------------------
    </motion.div>
    <p>
      Hey!Try to modify <code>this</code> page.
    </p>
    <a
      css={css`
  color: #61dafb;
  `}
      href="./edit"
    >
      Open the editor.
    </a>
  </header>
);
