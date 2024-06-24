import { css, keyframes } from "@emotion/react";
import { lazy, Suspense, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";
import DraggableWindow from "./DraggableWindow";
import { reveal } from "./reveal";

// Define a type for the gradient colors
type GradientColor = {
  color: string;
  percentage: number;
};

// Define a function to create the gradient string
const createGradientString = (colors: GradientColor[]): string => {
  return colors.map((color) => `${color.color} 0, ${color.color} ${color.percentage}%`).join(", ");
};

// Define the gradient colors
const gradientColors: GradientColor[] = [
  { color: "#fedc00", percentage: 5.5555555556 },
  { color: "#fcb712", percentage: 11.1111111111 },
  { color: "#f7921e", percentage: 16.6666666667 },
  { color: "#e87f24", percentage: 22.2222222222 },
  { color: "#dd6227", percentage: 27.7777777778 },
  { color: "#dc4c27", percentage: 33.3333333333 },
  { color: "#ca3435", percentage: 38.8888888889 },
  { color: "#b82841", percentage: 44.4444444444 },
  { color: "#953751", percentage: 50 },
  { color: "#364c88", percentage: 55.5555555556 },
  { color: "#16599d", percentage: 61.1111111111 },
  { color: "#02609e", percentage: 66.6666666667 },
  { color: "#0073a9", percentage: 72.2222222222 },
  { color: "#008aa4", percentage: 77.7777777778 },
  { color: "#239a87", percentage: 83.3333333333 },
  { color: "#7cba6d", percentage: 88.8888888889 },
  { color: "#becc2f", percentage: 94.4444444444 },
  { color: "#e0d81d", percentage: 100 },
];

const Rainbow = () => {
  const rotateAnimation = keyframes`
    0% { background-position: 0% 50%; } 
    100% { background-position: 100% 50%; }
  `;

  const gradientStyle = css`
    height: 100vh;
    width: 100vw;
    background-blend-mode: overlay;
    background: 
      repeating-radial-gradient(
        circle at bottom left,
        ${createGradientString(gradientColors)}
      ),
      repeating-radial-gradient(
        circle at bottom right,
        ${createGradientString(gradientColors)}
      );
    background-size: 200% 200%;
    animation: ${rotateAnimation} 10s forwards;
    animation-delay: 2s;
  `;

  return <div css={gradientStyle}></div>;
};

const RainbowContainer: FC<{ children: ReactNode }> = ({ children }) => (
  <div
    css={css`
      height: 100%;
      width: 100%;
    `}
  >
    <Rainbow />
    {children}
  </div>
);

export const AppToRender: FC<{ codeSpace: string }> = ({ codeSpace }) => {
  const sp = new URLSearchParams(location.search);
  const onlyEdit = sp.has("edit");
  const [hideRest, setHideRest] = useState(true);

  const Editor = lazy(() => import("./Editor"));

  // Use useEffect to reveal the content after the iframe loads
  useEffect(() => {
    if (!onlyEdit) {
      const iframe = document.querySelector(`iframe[src="/live/${codeSpace}/"]`);
      if (iframe) {
        iframe.addEventListener("load", () => {
          setHideRest(false);
          reveal();
        });
      }
    }
  }, [codeSpace, onlyEdit]);

  return (
    <>
      {!onlyEdit && (
        <DraggableWindow codeSpace={codeSpace}>
          <iframe
            css={css`height: 100%; width: 100%; border: 0;`}
            src={`https://testing.spike.land/live/${codeSpace}/`}
          />
        </DraggableWindow>
      )}

      {!hideRest && (
        <RainbowContainer>
          <Suspense fallback={<></>}>
            <Editor codeSpace={codeSpace} />
          </Suspense>
        </RainbowContainer>
      )}
    </>
  );
};
