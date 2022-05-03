/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { motion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { QRious } from "@spike.land/qrious";

import { Fab, QrCode } from "./mui";

const QR: FC<{ url: string }> = ({ url }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const load = () => {
      const options = {
        size: 200,
        element: canvasRef.current!,
        foregroundAlpha: 0.9,
        foreground: "white",
        backgroundAlpha: 1,
        padding: 16,
        background: "#1e1e1e",
        value: url,
      };
      //@ts-ignore
      new QRious(options);
    };

    load();
  }, [url]);

  return (
    <canvas
      css={css`
        border-radius: 16px;
        margin-bottom: 8px;
  `}
      ref={canvasRef}
    />
  );
};

export const QRButton: FC<{ url: string }> = ({ url }) => {
  const [showQR, setQR] = useState(false);
  return (
    <motion.div
      animate={{
        width: showQR ? 200 : 56,
        height: showQR ? 220 : 48,
      }}
      onClick={(e) => {
        setQR(!showQR);
      }}
      css={css`
                margin-bottom: 12px;
              `}
    >
      {showQR ? <QR key={url} url={url + "/edit/"} /> : (
        <Fab
          onClick={() => {
            setQR(!showQR);
          }}
        >
          <QrCode />
        </Fab>
      )}
    </motion.div>
  );
};
