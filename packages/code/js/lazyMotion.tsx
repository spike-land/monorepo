/** @jsxImportSource @emotion/react */

import type { motion as motionT, MotionProps } from "framer-motion";
import { Fragment, ReactNode, useEffect, useState } from "react";
import type { FC } from "react";

// const MotionMockDiv: FC<MotionProps & HTMLAttributes<HTMLDivElement>> = ({
//   children,
//   ...props
// }) => <div {...props}>{children}</div>;

const moduleCache: {
  motion: null | typeof motionT;
} = {
  motion: null,
};

export const motion: FC<MotionProps & { children: ReactNode }> = (
  { children, ...props },
) => {
  const [m, setMotionDiv] = useState<typeof motionT | { div: null }>({
    div: null,
  });

  useEffect(() => {
    (async () => {
      if (moduleCache.motion === null) {
        moduleCache.motion = (await import("framer-motion")).motion;
      }

      setMotionDiv(moduleCache.motion);
    })();
  }, []);

  const ChCont = <Fragment>{children}</Fragment>;

  let strProps = {};
  type Props = typeof props;
  type KeyOfProps = keyof Props;
  Object.keys(props).map((prop: string) =>
    strProps = {
      ...strProps,
      ...(typeof props[prop as KeyOfProps] === "string"
        ? { [prop]: props[prop as KeyOfProps] }
        : {}),
    }
  );

  if (m.div) {
    return <m.div {...props}>{ChCont}</m.div>;
  }
  // @ts-ignore
  return <div {...strProps}>{ChCont}</div>;
};
