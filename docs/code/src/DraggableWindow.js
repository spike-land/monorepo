/** @jsx jsx */

import ReactDOM from "https://cdn.skypack.dev/react-dom";
import React from "https://cdn.skypack.dev/react";

export const DraggableWindow = () => React.createElement("div", {}, "Ello");
import {
  css,
  jsx,
} from "https://cdn.skypack.dev/@zedvision/emotion-react@10.10.34/dist/emotion-react.modern.js";

export { jsx };

export { ReactDOM };

// import {
//   css,
//   jsx,
// } from "https://unpkg.com/@zedvision/emotion-react/dist/emotion-react.modern.js";
// import { motion } from "https://unpkg.com/framer-motion@3.1.1/dist/framer-motion.es.js";

// export { jsx };

// export { ReactDOM };

// export const DraggableWindow = ({ onShare }) => {
//   return jsx(
//     React.Fragment,
//     null,
//     jsx(
//       motion.div,
//       {
//         css: css`
//             background: red;
//             border: 4px solid red;
//             border-radius: 8px;
//           `,
//         animate: {
//           scale: 1,
//           top: 1,
//           left: 600,
//         },
//         dragElastic: 0.5,
//         dragMomentum: false,
//         initial: {
//           top: 1,
//           left: 0,
//           scale: 0.7,
//         },
//         transition: {
//           duration: 0.5,
//         },
//         drag: true,
//         dragConstraints: {
//           left: -window.innerWidth + 200,
//           right: 0,
//           bottom: window.innerHeight - 200,
//           top: 0,
//         },
//       },
//       jsx(
//         "div",
//         {
//           css: `
//       display: block;
//       with: 100%;
//       text-align: right;
//       background: linear-gradient(0deg, darkred, red);
//     `,
//         },
//         jsx("button", {
//           css: `
//               background: darkred;
//               margin-top: -4px;
//               margin-right: -4px;
//               color: white;
//               cursor: pointer;
//               font-weight: bold;
//               font-family: Roboto;
//               padding: 8px 16px;
//               outline: none;
//               border: none;
//               border-radius: 0px 8px 0px 0px;
//             `,
//           onClick: () => onShare(),
//         }, "🌎 SHARE"),
//       ),
//       jsx("div", {
//         css: `
//       min-width: 200px;
//       padding: 30px;
//       max-width: 600px;
//       background: white;
//       max-height: 800px;
//       border-radius: 0px 0px 8px 8px;
//       overflow-y: overlay;
//     `,
//         id: "zbody",
//       }),
//     ),
//   );
// };
