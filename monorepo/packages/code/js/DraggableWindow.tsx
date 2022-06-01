/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FC } from "react";

import { motion } from "framer-motion";
// import { motion } from "./lazyMotion";
import { QRButton } from "./Qr";

// import { wait } from "./wait";
// import { Box, Slider } from "./mui";
// import { LazySpikeLandComponent } from "./LazyLoadedComponent";

import {
  Fab,
  FullscreenIcon,
  Phone,
  Share,
  Tablet,
  ToggleButton as muiToggleButton,
  ToggleButtonGroup as muiToggleButtonGroup,
  Tv,
} from "./mui";

import type {
  ToggleButton as MuiToggleButton,
  ToggleButtonGroup as MuiToggleButtonGroup,
} from "./mui";

// const key = "css";
// const cache = createCache({ key });

// const Button = muiButton as typeof MuiButton;
const ToggleButtonGroup = muiToggleButtonGroup as typeof MuiToggleButtonGroup;
const ToggleButton = muiToggleButton as typeof MuiToggleButton;
const breakPoints = [680, 768, 1920];
const breakPointHeights = [1137, 1024, 1080];

const sizes = [10, 25, 50, 75, 100, 150];

const bg = `rgba(${Math.random() * 128 + 64}, ${Math.random() * 128 + 64}, ${
  Math.random() * 128 + 64
}, ${!navigator.userAgent.includes("Firefox") ? 0.3 : 0.7})`;

interface DraggableWindowProps {
  // onRestore: (() => void);
  hashCode: number;
  position?: string;
  room: string;
}

export const DraggableWindow: FC<DraggableWindowProps> = (
  {
    // onRestore,
    room,
    hashCode,
  },
) => {
  const [scaleRange, changeScaleRange] = useState(100);

  const startPositions = { bottom: 0, right: 0 };


  const [{ bottom, right }, setPositions] = useState(startPositions);
  const [width, setWidth] = useState(window.innerWidth * devicePixelRatio);
  const [height, setHeight] = useState(window.innerHeight * devicePixelRatio);
  const top = height - bottom;
  const ref = useRef<HTMLDivElement>(null);

  const Zbody = useMemo(() => {
    const zbodyRef = useRef<HTMLDivElement>(null);

    return (
      <div
        id="zbody"
        ref={zbodyRef}
      />
    );
  }, []);

  

  const scale = scaleRange / 100;
  const [isFullScreen, setFullScreen] = useState(true);


  useEffect(() => {
    const reveal = async () => {
    
      setPositions({
        bottom: window.innerHeight * 0.2,
        right: window.innerWidth * 0.2,
      });

      if (window.innerWidth / devicePixelRatio < 600) {
        changeScaleRange(50);
        setWidth(breakPoints[0]);
        setHeight(breakPointHeights[0]);

      }

      if (window.innerWidth / devicePixelRatio < 1200) {
        changeScaleRange(75);
        setWidth(breakPoints[0]);
        setHeight(breakPointHeights[0]);

      } else if (window.innerWidth / devicePixelRatio < 1800) {
        setWidth(breakPoints[1]);
        setHeight(breakPointHeights[1]);

        changeScaleRange(50);
      } else if (window.innerWidth / devicePixelRatio < 2500) {
        setWidth(breakPoints[1]);
        setHeight(breakPointHeights[1]);

        changeScaleRange(75);
      } else if (window.innerWidth / devicePixelRatio > 2500) {
        setWidth(breakPoints[1]);
        setHeight(breakPointHeights[1]);

        changeScaleRange(100);
      }

      setPositions({
        bottom: 20,
        right: 20,
      });
      setFullScreen(false);
      requestAnimationFrame(() => document.querySelector("#root")?.remove());
    };

    reveal();
  }, []);


  const internal = (
    <div
      css={css` 
              display: flex;
              
                `}
    >
      <div
        css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
      >
        <ToggleButtonGroup
          value={scaleRange}
          size="small"
          exclusive
          onChange={(_e: unknown, newScale: number) => {
            newScale && changeScaleRange(newScale);
          }}
        >
          {sizes.map((size) => (
            <ToggleButton
              key={size}
              value={size}
            >
              <span
                css={css`
                       color: ${
                  size === scaleRange
                    ? "rgba(255,255,255,.8)"
                    : "rgba(0,0,0,.3)"
                };
                       `}
              >
                {size}%
              </span>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        {/* <span>{width}*{height}</span> */}

        <motion.div
          initial={{
            width: window.innerWidth,
            height: window.innerHeight,
          }}
          animate={{
            width: width * scale / devicePixelRatio,
            height: height * scale / devicePixelRatio,
            borderRadius: isFullScreen ? 0 : 8,
            // Opacity: isFullScreen ? 1 : 0.7,
          }}
          css={css`
                width: ${width * scale / devicePixelRatio};
                height: ${height * scale / devicePixelRatio};
                display: block;
                overflow: hidden;


                /* background-color: red; */
            `}
        >
          {
            /* {errorText && errorText.trim() !== "" && (
            <pre
              css={css`
                    position: absolute;
                    z-index:3;
                    color: rgb(255, 240, 240);
                    padding: 24px;
                    font-size: 14pt;
                    background-color: rgb(255, 0, 0);
                    flex: 0 0 auto;
                    overflow: auto;
                    margin: 0;
                    font-family: monospace;
                    white-space: pre-wrap;
                `}
            > */
          }
          {/* {isStable && errorText && errorText.trim()} */}
          {/* {isStable && errorText && errorText.trim() !== "" && */}
          {
            /* (
                  <div
                    css={css`
                          text-align: right;
                        `}
                  >
                    <Button
                      onClick={() => {
                        onRestore();
                        setErrorText("");
                      }}
                    >
                      <span>Restore</span>
                    </Button>
                  </div>
                )} */
          }
          {/* </pre> */}
          {/* )} */}

          <motion.div
            initial={{
              transformOrigin: "0px 0px",
              width: window.innerWidth / devicePixelRatio,
              height: window.innerHeight / devicePixelRatio,
              scale: scaleRange / 100,
            }}
            animate={{
              transformOrigin: "0px 0px",

              width: width / devicePixelRatio,
              height: height / devicePixelRatio,
              scale: scaleRange / 100,
            }}
            css={css`
                  overflow:overlay;
                  overflow-y: hidden;
                  >div{
                    height: 100%;
                    background: rgba(128,128,128.0.5);
                  } 
              `}
          >
          

            <Zbody />

          </motion.div>
        </motion.div>
        <ToggleButtonGroup
          value={width}
          size="small"
          exclusive
          onChange={(_e: unknown, newSize: number) => {
            if (newSize) {
              setHeight(breakPointHeights[breakPoints.indexOf(newSize)]);
              setWidth(newSize);
            }
          }}
        >
          {breakPoints.map((size) => (
            <ToggleButton
              key={`size-${size}`}
              value={size}
            >
              {size === 680
                ? (
                  <Phone
                    css={css`
                        color: ${
                      width === 680 ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.3)"
                    };
                        `}
                  />
                )
                : (size === 768
                  ? (
                    <Tablet
                      css={css`
                        color: ${
                        width === 768
                          ? "rgba(255,255,255,.8)"
                          : "rgba(0,0,0,.3)"
                      };
                        `}
                    />
                  )
                  : (
                    <Tv
                      css={css`
                        color: ${
                        width === 1920
                          ? "rgba(255,255,255,.8)"
                          : "rgba(0,0,0,.3)"
                      };
                      `}
                    />
                  ))}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>

      <div
        css={css`
              display: flex;
              align-items: center;          
              flex-direction: column;
              padding: 16px;
              `}
      >
        <Fab
          key="fullscreen"
          onClick={() => {
            setFullScreen(true);
          }}
        >
          <FullscreenIcon key="fs" />
        </Fab>

        <QRButton
          url={`https://spike.land/live/${room}/public`}
          key={`qr-${hashCode}`}
        />

        <Fab
          key="Share"
          onClick={() => open(`https://spike.land/live/${room}/public`)}
        >
          <Share />
        </Fab>
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ padding: 0, top: 0, right: 0 }}
      animate={{
        top: 20,
        padding: 8,
        right,
      }}
      css={css`
            background-color:${bg};
            backdrop-filter: blur(15px);
            border-radius: 16px;
            z-index: 10;
            white-space: normal;
            position: fixed;
          `}
      dragElastic={0.5}
      dragConstraints={{
        left: 0,
        right: width - 20 - width / 6,
        bottom: innerHeight,
      }}
      dragMomentum={false}
      drag={!isFullScreen}
    >
      {internal}
    </motion.div>
  );
};
