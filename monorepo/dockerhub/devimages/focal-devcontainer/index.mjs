import { DevcontainerGenerator } from "@spike.land/devcontainer-generator";
import { promises } from "fs";
const { writeFile } = promises;

const run = async () => {
  const devGenerator = new DevcontainerGenerator("focal");

  devGenerator.setNodeVersion("current");
  devGenerator.setXfce();
  devGenerator.setZsh();
  devGenerator.setRemoteDesktop("noVNC");
  // devGenerator.setChrome();
  // devGenerator.setVscode();

  const { Dockerfile, README } = await devGenerator.generate();

  await writeFile(`./Dockerfile`, Dockerfile);

  await writeFile(`./README.md`, README);
};

run();
