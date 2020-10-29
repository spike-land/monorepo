const { DevcontainerGenerator } = require("@devcontainer/generator");
const { writeFile } = require("fs").promises;

const run = async () => {
  const devGenerator = new DevcontainerGenerator("groovy");

  devGenerator.setXfce();
  devGenerator.setRemoteDesktop("noVNC")
  devGenerator.setChrome();
  devGenerator.setNodeVersion("lts");
  devGenerator.setZsh();
  devGenerator.setVscode();

  const { Dockerfile, README } = await devGenerator.generate();

  await writeFile(`${__dirname}/Dockerfile`, Dockerfile);

  await writeFile(`${__dirname}/README.md`, README);
};

run();
