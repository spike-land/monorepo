const { DevcontainerGenerator } = require("@devcontainer/generator");
const { writeFile } = require("fs").promises;

const run = async () => {
  const devGenerator = new DevcontainerGenerator("ubuntu:hirsute");

  devGenerator.setNodeVersion("current");
  devGenerator.setXfce();
  devGenerator.setDeno();
  devGenerator.setZsh();
  devGenerator.setDocker();
  devGenerator.setVscode();
  devGenerator.setRemoteDesktop("noVNC");
  devGenerator.setChrome();

  const { Dockerfile, README } = await devGenerator.generate();

  await writeFile(`${__dirname}/Dockerfile`, Dockerfile);

  await writeFile(`${__dirname}/README.md`, README);
};

run();
