export declare const starter = "import { useState } from \"react\";\n/** @jsx jsx */\nimport { motion } from \"framer-motion\";\nimport { css, jsx, Global } from \"@emotion/react\";;\n\nconst Slider = () => {\n  const [sliderValue, setSlider] = useState(32);\n\n  return <>\n  <Global styles={css`\n      body{\n          margin: 0;\n          background: rgb(${sliderValue},${255-sliderValue*4},255);\n          overflow: overlay;\n        }  \n    `}/>\n    <input max=\"128\"\n      css={`\n        appearance: none;\n        width: 100%;\n        height: 40px; \n        background: rgb(${sliderValue*2},${255-2*sliderValue},0); \n        outline: none; \n    `} type=\"range\"\n      value={sliderValue} step=\"1\"\n      onChangeCapture={(e) => setSlider(Number(e.currentTarget.value))}>\n    </input>\n    <motion.p\n      animate={{ fontSize: sliderValue + `px` }}>\n      Example when the text gets bigger...\n    </motion.p>\n      <motion.p animate={{fontSize:64-sliderValue+\"px\"}}>\n        ...or smaller\n    </motion.p>\n  </>\n}\n\nexport default () => <>\n  <Slider />\n</>\n";
