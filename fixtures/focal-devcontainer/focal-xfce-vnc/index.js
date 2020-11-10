const { DevcontainerGenerator } = require("@devcontainer/generator");
const { writeFile } = require("fs").promises;

const run = async () => {
  const devGenerator = new DevcontainerGenerator("ubuntu:groovy");

  devGenerator.setXfce();
  devGenerator.setRemoteDesktop("noVNC");
  devGenerator.setChrome();
  devGenerator.setNodeVersion("lts");

  const { Dockerfile, README } = await devGenerator.generate();

  await writeFile(`${__dirname}/Dockerfile`, Dockerfile);

  await writeFile(`${__dirname}/README.md`, README);
};

run();
