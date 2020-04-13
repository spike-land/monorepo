FROM devimage

# docker.Dockerfile
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - \
    && add-apt-repository \
         "deb [arch=amd64] https://download.docker.com/linux/ubuntu eoan test" \
    && apt-get install --no-install-recommends -y \
        docker-ce \
        docker-ce-cli \
    && curl -L  \
        https://github.com/docker/compose/releases/download/1.25.5/docker-compose-`uname -s`-`uname -m` \
        -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose \
    && usermod -G docker -a ${USER} \
    && apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/* 

ENV COMPOSE_DOCKER_CLI_BUILD=1
ENV DOCKER_BUILDKIT=1