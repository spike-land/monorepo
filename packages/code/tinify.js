browserify("entry.js")
  .transform("unassertify", { global: true })
  .transform("@goto-bus-stop/envify", { global: true })
  .transform("uglifyify", { global: true })
  .plugin("common-shakeify")
  .plugin("browser-pack-flat/plugin")
  .bundle()
  .pipe(require("minify-stream")({ sourceMap: false }))
  .pipe(fs.createWriteStream("./output.js"));
