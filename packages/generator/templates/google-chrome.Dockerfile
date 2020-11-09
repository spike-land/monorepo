FROM devimage

### chromium.Dockerfile
RUN  curl -sSL  https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update && apt-get install -y --no-install-recommends google-chrome-stable \
     && apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/* \
  && mv /usr/bin/google-chrome /usr/bin/google-chrome-bin \
  && echo "/usr/bin/google-chrome-bin --no-sandbox" > /usr/bin/google-chrome \
  && chmod +x /usr/bin/google-chrome
