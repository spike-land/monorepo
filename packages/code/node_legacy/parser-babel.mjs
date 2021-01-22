var t = function (t, e) {
    const s = new SyntaxError(
      t + " (" + e.start.line + ":" + e.start.column + ")",
    );
    return s.loc = e, s;
  },
  e = (t) =>
    "string" == typeof t
      ? t.replace(
        (({ onlyFirst: t = !1 } = {}) => {
          const e = [
            "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
            "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
          ].join("|");
          return new RegExp(e, t ? void 0 : "g");
        })(),
        "",
      )
      : t;
const s = (t) =>
  !Number.isNaN(t) &&
  (t >= 4352 &&
    (t <= 4447 || 9001 === t || 9002 === t ||
      11904 <= t && t <= 12871 && 12351 !== t || 12880 <= t && t <= 19903 ||
      19968 <= t && t <= 42182 || 43360 <= t && t <= 43388 ||
      44032 <= t && t <= 55203 || 63744 <= t && t <= 64255 ||
      65040 <= t && t <= 65049 || 65072 <= t && t <= 65131 ||
      65281 <= t && t <= 65376 || 65504 <= t && t <= 65510 ||
      110592 <= t && t <= 110593 || 127488 <= t && t <= 127569 ||
      131072 <= t && t <= 262141));
var r = s, i = s;
r.default = i;
const n = (t) => {
  if (
    "string" !=
      typeof (t = t.replace(
        /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g,
        "  ",
      )) || 0 === t.length
  ) {
    return 0;
  }
  t = e(t);
  let s = 0;
  for (let e = 0; e < t.length; e++) {
    const i = t.codePointAt(e);
    i <= 31 || i >= 127 && i <= 159 ||
      (i >= 768 && i <= 879 || (i > 65535 && e++, s += r(i) ? 2 : 1));
  }
  return s;
};
var a = n, o = n;
a.default = o;
var u = (t) => {
  if ("string" != typeof t) throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
function h(t, e) {
  return e || (e = t.slice(0)),
    Object.freeze(
      Object.defineProperties(t, { raw: { value: Object.freeze(e) } }),
    );
}
var c = "undefined" != typeof global
  ? global
  : "undefined" != typeof self
  ? self
  : "undefined" != typeof window
  ? window
  : {};
function p() {
  throw new Error("setTimeout has not been defined");
}
function l() {
  throw new Error("clearTimeout has not been defined");
}
var d = p, D = l;
function m(t) {
  if (d === setTimeout) return setTimeout(t, 0);
  if ((d === p || !d) && setTimeout) return d = setTimeout, setTimeout(t, 0);
  try {
    return d(t, 0);
  } catch (e) {
    try {
      return d.call(null, t, 0);
    } catch (e) {
      return d.call(this, t, 0);
    }
  }
}
"function" == typeof c.setTimeout && (d = setTimeout),
  "function" == typeof c.clearTimeout && (D = clearTimeout);
var f, y = [], E = !1, A = -1;
function C() {
  E && f && (E = !1, f.length ? y = f.concat(y) : A = -1, y.length && x());
}
function x() {
  if (!E) {
    var t = m(C);
    E = !0;
    for (var e = y.length; e;) {
      for (f = y, y = []; ++A < e;) f && f[A].run();
      A = -1, e = y.length;
    }
    f = null,
      E = !1,
      function (t) {
        if (D === clearTimeout) return clearTimeout(t);
        if ((D === l || !D) && clearTimeout) {
          return D = clearTimeout, clearTimeout(t);
        }
        try {
          D(t);
        } catch (e) {
          try {
            return D.call(null, t);
          } catch (e) {
            return D.call(this, t);
          }
        }
      }(t);
  }
}
function F(t, e) {
  this.fun = t, this.array = e;
}
F.prototype.run = function () {
  this.fun.apply(null, this.array);
};
function g() {}
var b = g, P = g, T = g, w = g, B = g, S = g, N = g;
var I = c.performance || {},
  v = I.now || I.mozNow || I.msNow || I.oNow || I.webkitNow || function () {
    return (new Date()).getTime();
  };
var k = new Date();
var L = {
  nextTick: function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) {for (var s = 1; s < arguments.length; s++) {
        e[s - 1] = arguments[s];
      }}
    y.push(new F(t, e)), 1 !== y.length || E || m(x);
  },
  title: "browser",
  browser: !0,
  env: {},
  argv: [],
  version: "",
  versions: {},
  on: b,
  addListener: P,
  once: T,
  off: w,
  removeListener: B,
  removeAllListeners: S,
  emit: N,
  binding: function (t) {
    throw new Error("process.binding is not supported");
  },
  cwd: function () {
    return "/";
  },
  chdir: function (t) {
    throw new Error("process.chdir is not supported");
  },
  umask: function () {
    return 0;
  },
  hrtime: function (t) {
    var e = .001 * v.call(I), s = Math.floor(e), r = Math.floor(e % 1 * 1e9);
    return t && (s -= t[0], (r -= t[1]) < 0 && (s--, r += 1e9)), [s, r];
  },
  platform: "browser",
  release: {},
  config: {},
  uptime: function () {
    return (new Date() - k) / 1e3;
  },
};
var O =
  "object" == typeof L && L.env && L.env.NODE_DEBUG &&
    /\bsemver\b/i.test(L.env.NODE_DEBUG)
    ? (...t) => console.error("SEMVER", ...t)
    : () => {};
var M = {
  SEMVER_SPEC_VERSION: "2.0.0",
  MAX_LENGTH: 256,
  MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
  MAX_SAFE_COMPONENT_LENGTH: 16,
};
function R(t, e, s) {
  return t(
    s = {
      path: e,
      exports: {},
      require: function (t, e) {
        return function () {
          throw new Error(
            "Dynamic requires are not currently supported by @rollup/plugin-commonjs",
          );
        }(null == e && s.path);
      },
    },
    s.exports,
  ),
    s.exports;
}
function _(t) {
  return t && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var j = R(
  (function (t, e) {
    const { MAX_SAFE_COMPONENT_LENGTH: s } = M,
      r = (e = t.exports = {}).re = [],
      i = e.src = [],
      n = e.t = {};
    let a = 0;
    const o = (t, e, s) => {
      const o = a++;
      O(o, e), n[t] = o, i[o] = e, r[o] = new RegExp(e, s ? "g" : void 0);
    };
    o("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
      o("NUMERICIDENTIFIERLOOSE", "[0-9]+"),
      o("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"),
      o(
        "MAINVERSION",
        "(".concat(i[n.NUMERICIDENTIFIER], ")\\.") +
          "(".concat(i[n.NUMERICIDENTIFIER], ")\\.") +
          "(".concat(i[n.NUMERICIDENTIFIER], ")"),
      ),
      o(
        "MAINVERSIONLOOSE",
        "(".concat(i[n.NUMERICIDENTIFIERLOOSE], ")\\.") +
          "(".concat(i[n.NUMERICIDENTIFIERLOOSE], ")\\.") +
          "(".concat(i[n.NUMERICIDENTIFIERLOOSE], ")"),
      ),
      o(
        "PRERELEASEIDENTIFIER",
        "(?:".concat(i[n.NUMERICIDENTIFIER], "|").concat(
          i[n.NONNUMERICIDENTIFIER],
          ")",
        ),
      ),
      o(
        "PRERELEASEIDENTIFIERLOOSE",
        "(?:".concat(i[n.NUMERICIDENTIFIERLOOSE], "|").concat(
          i[n.NONNUMERICIDENTIFIER],
          ")",
        ),
      ),
      o(
        "PRERELEASE",
        "(?:-(".concat(i[n.PRERELEASEIDENTIFIER], "(?:\\.").concat(
          i[n.PRERELEASEIDENTIFIER],
          ")*))",
        ),
      ),
      o(
        "PRERELEASELOOSE",
        "(?:-?(".concat(i[n.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(
          i[n.PRERELEASEIDENTIFIERLOOSE],
          ")*))",
        ),
      ),
      o("BUILDIDENTIFIER", "[0-9A-Za-z-]+"),
      o(
        "BUILD",
        "(?:\\+(".concat(i[n.BUILDIDENTIFIER], "(?:\\.").concat(
          i[n.BUILDIDENTIFIER],
          ")*))",
        ),
      ),
      o(
        "FULLPLAIN",
        "v?".concat(i[n.MAINVERSION]).concat(i[n.PRERELEASE], "?").concat(
          i[n.BUILD],
          "?",
        ),
      ),
      o("FULL", "^".concat(i[n.FULLPLAIN], "$")),
      o(
        "LOOSEPLAIN",
        "[v=\\s]*".concat(i[n.MAINVERSIONLOOSE]).concat(
          i[n.PRERELEASELOOSE],
          "?",
        ).concat(i[n.BUILD], "?"),
      ),
      o("LOOSE", "^".concat(i[n.LOOSEPLAIN], "$")),
      o("GTLT", "((?:<|>)?=?)"),
      o(
        "XRANGEIDENTIFIERLOOSE",
        "".concat(i[n.NUMERICIDENTIFIERLOOSE], "|x|X|\\*"),
      ),
      o("XRANGEIDENTIFIER", "".concat(i[n.NUMERICIDENTIFIER], "|x|X|\\*")),
      o(
        "XRANGEPLAIN",
        "[v=\\s]*(".concat(i[n.XRANGEIDENTIFIER], ")") +
          "(?:\\.(".concat(i[n.XRANGEIDENTIFIER], ")") +
          "(?:\\.(".concat(i[n.XRANGEIDENTIFIER], ")") +
          "(?:".concat(i[n.PRERELEASE], ")?").concat(i[n.BUILD], "?") + ")?)?",
      ),
      o(
        "XRANGEPLAINLOOSE",
        "[v=\\s]*(".concat(i[n.XRANGEIDENTIFIERLOOSE], ")") +
          "(?:\\.(".concat(i[n.XRANGEIDENTIFIERLOOSE], ")") +
          "(?:\\.(".concat(i[n.XRANGEIDENTIFIERLOOSE], ")") +
          "(?:".concat(i[n.PRERELEASELOOSE], ")?").concat(i[n.BUILD], "?") +
          ")?)?",
      ),
      o("XRANGE", "^".concat(i[n.GTLT], "\\s*").concat(i[n.XRANGEPLAIN], "$")),
      o(
        "XRANGELOOSE",
        "^".concat(i[n.GTLT], "\\s*").concat(i[n.XRANGEPLAINLOOSE], "$"),
      ),
      o(
        "COERCE",
        "".concat("(^|[^\\d])(\\d{1,").concat(s, "})") +
          "(?:\\.(\\d{1,".concat(s, "}))?") +
          "(?:\\.(\\d{1,".concat(s, "}))?") + "(?:$|[^\\d])",
      ),
      o("COERCERTL", i[n.COERCE], !0),
      o("LONETILDE", "(?:~>?)"),
      o("TILDETRIM", "(\\s*)".concat(i[n.LONETILDE], "\\s+"), !0),
      e.tildeTrimReplace = "$1~",
      o("TILDE", "^".concat(i[n.LONETILDE]).concat(i[n.XRANGEPLAIN], "$")),
      o(
        "TILDELOOSE",
        "^".concat(i[n.LONETILDE]).concat(i[n.XRANGEPLAINLOOSE], "$"),
      ),
      o("LONECARET", "(?:\\^)"),
      o("CARETTRIM", "(\\s*)".concat(i[n.LONECARET], "\\s+"), !0),
      e.caretTrimReplace = "$1^",
      o("CARET", "^".concat(i[n.LONECARET]).concat(i[n.XRANGEPLAIN], "$")),
      o(
        "CARETLOOSE",
        "^".concat(i[n.LONECARET]).concat(i[n.XRANGEPLAINLOOSE], "$"),
      ),
      o(
        "COMPARATORLOOSE",
        "^".concat(i[n.GTLT], "\\s*(").concat(i[n.LOOSEPLAIN], ")$|^$"),
      ),
      o(
        "COMPARATOR",
        "^".concat(i[n.GTLT], "\\s*(").concat(i[n.FULLPLAIN], ")$|^$"),
      ),
      o(
        "COMPARATORTRIM",
        "(\\s*)".concat(i[n.GTLT], "\\s*(").concat(i[n.LOOSEPLAIN], "|").concat(
          i[n.XRANGEPLAIN],
          ")",
        ),
        !0,
      ),
      e.comparatorTrimReplace = "$1$2$3",
      o(
        "HYPHENRANGE",
        "^\\s*(".concat(i[n.XRANGEPLAIN], ")") + "\\s+-\\s+" +
          "(".concat(i[n.XRANGEPLAIN], ")") + "\\s*$",
      ),
      o(
        "HYPHENRANGELOOSE",
        "^\\s*(".concat(i[n.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" +
          "(".concat(i[n.XRANGEPLAINLOOSE], ")") + "\\s*$",
      ),
      o("STAR", "(<|>)?=?\\s*\\*"),
      o("GTE0", "^\\s*>=\\s*0.0.0\\s*$"),
      o("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
  }),
);
const U = /^[0-9]+$/,
  q = (t, e) => {
    const s = U.test(t), r = U.test(e);
    return s && r && (t = +t, e = +e),
      t === e ? 0 : s && !r ? -1 : r && !s ? 1 : t < e ? -1 : 1;
  };
var V = { compareIdentifiers: q, rcompareIdentifiers: (t, e) => q(e, t) };
const { MAX_LENGTH: z, MAX_SAFE_INTEGER: H } = M,
  { re: W, t: G } = j,
  { compareIdentifiers: X } = V;
class K {
  constructor(t, e) {
    if (
      e && "object" == typeof e || (e = { loose: !!e, includePrerelease: !1 }),
        t instanceof K
    ) {
      if (
        t.loose === !!e.loose && t.includePrerelease === !!e.includePrerelease
      ) {
        return t;
      }
      t = t.version;
    } else if ("string" != typeof t) {
      throw new TypeError("Invalid Version: ".concat(t));
    }
    if (t.length > z) {
      throw new TypeError("version is longer than ".concat(z, " characters"));
    }
    O("SemVer", t, e),
      this.options = e,
      this.loose = !!e.loose,
      this.includePrerelease = !!e.includePrerelease;
    const s = t.trim().match(e.loose ? W[G.LOOSE] : W[G.FULL]);
    if (!s) throw new TypeError("Invalid Version: ".concat(t));
    if (
      this.raw = t,
        this.major = +s[1],
        this.minor = +s[2],
        this.patch = +s[3],
        this.major > H || this.major < 0
    ) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > H || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > H || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    s[4]
      ? this.prerelease = s[4].split(".").map(
        ((t) => {
          if (/^[0-9]+$/.test(t)) {
            const e = +t;
            if (e >= 0 && e < H) return e;
          }
          return t;
        }),
      )
      : this.prerelease = [],
      this.build = s[5] ? s[5].split(".") : [],
      this.format();
  }
  format() {
    return this.version = "".concat(this.major, ".").concat(this.minor, ".")
      .concat(this.patch),
      this.prerelease.length &&
      (this.version += "-".concat(this.prerelease.join("."))),
      this.version;
  }
  toString() {
    return this.version;
  }
  compare(t) {
    if (O("SemVer.compare", this.version, this.options, t), !(t instanceof K)) {
      if ("string" == typeof t && t === this.version) return 0;
      t = new K(t, this.options);
    }
    return t.version === this.version
      ? 0
      : this.compareMain(t) || this.comparePre(t);
  }
  compareMain(t) {
    return t instanceof K || (t = new K(t, this.options)),
      X(this.major, t.major) || X(this.minor, t.minor) ||
      X(this.patch, t.patch);
  }
  comparePre(t) {
    if (
      t instanceof K || (t = new K(t, this.options)),
        this.prerelease.length && !t.prerelease.length
    ) {
      return -1;
    }
    if (!this.prerelease.length && t.prerelease.length) return 1;
    if (!this.prerelease.length && !t.prerelease.length) return 0;
    let e = 0;
    do {
      const s = this.prerelease[e], r = t.prerelease[e];
      if (
        O("prerelease compare", e, s, r), void 0 === s && void 0 === r
      ) {
        return 0;
      }
      if (void 0 === r) return 1;
      if (void 0 === s) return -1;
      if (s !== r) return X(s, r);
    } while (++e);
  }
  compareBuild(t) {
    t instanceof K || (t = new K(t, this.options));
    let e = 0;
    do {
      const s = this.build[e], r = t.build[e];
      if (
        O("prerelease compare", e, s, r), void 0 === s && void 0 === r
      ) {
        return 0;
      }
      if (void 0 === r) return 1;
      if (void 0 === s) return -1;
      if (s !== r) return X(s, r);
    } while (++e);
  }
  inc(t, e) {
    switch (t) {
      case "premajor":
        this.prerelease.length = 0,
          this.patch = 0,
          this.minor = 0,
          this.major++,
          this.inc("pre", e);
        break;
      case "preminor":
        this.prerelease.length = 0,
          this.patch = 0,
          this.minor++,
          this.inc("pre", e);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", e), this.inc("pre", e);
        break;
      case "prerelease":
        0 === this.prerelease.length && this.inc("patch", e),
          this.inc("pre", e);
        break;
      case "major":
        0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length ||
        this.major++,
          this.minor = 0,
          this.patch = 0,
          this.prerelease = [];
        break;
      case "minor":
        0 === this.patch && 0 !== this.prerelease.length || this.minor++,
          this.patch = 0,
          this.prerelease = [];
        break;
      case "patch":
        0 === this.prerelease.length && this.patch++, this.prerelease = [];
        break;
      case "pre":
        if (0 === this.prerelease.length) this.prerelease = [0];
        else {
          let t = this.prerelease.length;
          for (; --t >= 0;) {
            "number" == typeof this.prerelease[t] &&
              (this.prerelease[t]++, t = -2);
          }
          -1 === t && this.prerelease.push(0);
        }
        e &&
          (this.prerelease[0] === e
            ? isNaN(this.prerelease[1]) && (this.prerelease = [e, 0])
            : this.prerelease = [e, 0]);
        break;
      default:
        throw new Error("invalid increment argument: ".concat(t));
    }
    return this.format(), this.raw = this.version, this;
  }
}
var J = K;
var $ = (t, e, s) => new J(t, s).compare(new J(e, s));
var Y = (t, e, s) => $(t, e, s) < 0;
var Q = (t, e, s) => $(t, e, s) >= 0,
  Z = "2.2.1",
  tt = R(
    (function (t, e) {
      function s() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      }
      function r() {
        return "undefined" != typeof WeakMap
          ? new WeakMap()
          : {
            add: s,
            delete: s,
            get: s,
            set: s,
            has: function (t) {
              return !1;
            },
          };
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = Object.prototype.hasOwnProperty,
        n = function (t, e) {
          return i.call(t, e);
        };
      function a(t, e) {
        for (var s in e) n(e, s) && (t[s] = e[s]);
        return t;
      }
      var o = /^[ \t]*(?:\r\n|\r|\n)/,
        u = /(?:\r\n|\r|\n)[ \t]*$/,
        h = /^(?:[\r\n]|$)/,
        c = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/,
        p = /^[ \t]*[\r\n][ \t\r\n]*$/;
      function l(t, e, s) {
        var r = 0, i = t[0].match(c);
        i && (r = i[1].length);
        var n = new RegExp("(\\r\\n|\\r|\\n).{0," + r + "}", "g");
        e && (t = t.slice(1));
        var a = s.newline,
          h = s.trimLeadingNewline,
          p = s.trimTrailingNewline,
          l = "string" == typeof a,
          d = t.length;
        return t.map(
          (function (t, e) {
            return t = t.replace(n, "$1"),
              0 === e && h && (t = t.replace(o, "")),
              e === d - 1 && p && (t = t.replace(u, "")),
              l && (t = t.replace(
                /\r\n|\n|\r/g,
                (function (t) {
                  return a;
                }),
              )),
              t;
          }),
        );
      }
      function d(t, e) {
        for (var s = "", r = 0, i = t.length; r < i; r++) {s += t[r],
            r < i - 1 && (s += e[r]);}
        return s;
      }
      function D(t) {
        return n(t, "raw") && n(t, "length");
      }
      var m = function t(e) {
        var s = r(), i = r();
        return a(
          (function r(n) {
            for (var o = [], u = 1; u < arguments.length; u++) {o[u - 1] =
                arguments[u];}
            if (D(n)) {
              var c = n,
                f = (o[0] === r || o[0] === m) && p.test(c[0]) && h.test(c[1]),
                y = f ? i : s,
                E = y.get(c);
              if (E || (E = l(c, f, e), y.set(c, E)), 0 === o.length) {
                return E[0];
              }
              var A = d(E, f ? o.slice(1) : o);
              return A;
            }
            return t(a(a({}, e), n || {}));
          }),
          {
            string: function (t) {
              return l([t], !1, e)[0];
            },
          },
        );
      }({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
      e.outdent = m, e.default = m;
      try {
        t.exports = m,
          Object.defineProperty(m, "__esModule", { value: !0 }),
          m.default = m,
          m.outdent = m;
      } catch (t) {}
    }),
  );
function et() {
  const t = h([
    "\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    ",
  ]);
  return et = function () {
    return t;
  },
    t;
}
function st() {
  const t = h([
    "\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    ",
  ]);
  return st = function () {
    return t;
  },
    t;
}
function rt() {
  const t = h([
    "\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    ",
  ]);
  return rt = function () {
    return t;
  },
    t;
}
function it() {
  const t = h([
    "\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    ",
  ]);
  return it = function () {
    return t;
  },
    t;
}
function nt() {
  const t = h([
    "\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        ",
  ]);
  return nt = function () {
    return t;
  },
    t;
}
function at() {
  const t = h([
    "\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    ",
  ]);
  return at = function () {
    return t;
  },
    t;
}
const { outdent: ot } = tt,
  ut = {
    cursorOffset: {
      since: "1.4.0",
      category: "Special",
      type: "int",
      default: -1,
      range: { start: -1, end: 1 / 0, step: 1 },
      description: ot(at()),
      cliCategory: "Editor",
    },
    endOfLine: {
      since: "1.15.0",
      category: "Global",
      type: "choice",
      default: [{ since: "1.15.0", value: "auto" }, {
        since: "2.0.0",
        value: "lf",
      }],
      description: "Which end of line characters to apply.",
      choices: [{
        value: "lf",
        description:
          "Line Feed only (\\n), common on Linux and macOS as well as inside git repos",
      }, {
        value: "crlf",
        description:
          "Carriage Return + Line Feed characters (\\r\\n), common on Windows",
      }, {
        value: "cr",
        description: "Carriage Return character only (\\r), used very rarely",
      }, { value: "auto", description: ot(nt()) }],
    },
    filepath: {
      since: "1.4.0",
      category: "Special",
      type: "path",
      description:
        "Specify the input filepath. This will be used to do parser inference.",
      cliName: "stdin-filepath",
      cliCategory: "Other",
      cliDescription: "Path to the file to pretend that stdin comes from.",
    },
    insertPragma: {
      since: "1.8.0",
      category: "Special",
      type: "boolean",
      default: !1,
      description: "Insert @format pragma into file's first docblock comment.",
      cliCategory: "Other",
    },
    parser: {
      since: "0.0.10",
      category: "Global",
      type: "choice",
      default: [{ since: "0.0.10", value: "babylon" }, {
        since: "1.13.0",
        value: void 0,
      }],
      description: "Which parser to use.",
      exception: (t) => "string" == typeof t || "function" == typeof t,
      choices: [
        { value: "flow", description: "Flow" },
        { value: "babel", since: "1.16.0", description: "JavaScript" },
        { value: "babel-flow", since: "1.16.0", description: "Flow" },
        { value: "babel-ts", since: "2.0.0", description: "TypeScript" },
        { value: "typescript", since: "1.4.0", description: "TypeScript" },
        { value: "espree", since: "2.2.0", description: "JavaScript" },
        { value: "meriyah", since: "2.2.0", description: "JavaScript" },
        { value: "css", since: "1.7.1", description: "CSS" },
        { value: "less", since: "1.7.1", description: "Less" },
        { value: "scss", since: "1.7.1", description: "SCSS" },
        { value: "json", since: "1.5.0", description: "JSON" },
        { value: "json5", since: "1.13.0", description: "JSON5" },
        {
          value: "json-stringify",
          since: "1.13.0",
          description: "JSON.stringify",
        },
        { value: "graphql", since: "1.5.0", description: "GraphQL" },
        { value: "markdown", since: "1.8.0", description: "Markdown" },
        { value: "mdx", since: "1.15.0", description: "MDX" },
        { value: "vue", since: "1.10.0", description: "Vue" },
        { value: "yaml", since: "1.14.0", description: "YAML" },
        { value: "glimmer", since: null, description: "Handlebars" },
        { value: "html", since: "1.15.0", description: "HTML" },
        { value: "angular", since: "1.15.0", description: "Angular" },
        {
          value: "lwc",
          since: "1.17.0",
          description: "Lightning Web Components",
        },
      ],
    },
    plugins: {
      since: "1.10.0",
      type: "path",
      array: !0,
      default: [{ value: [] }],
      category: "Global",
      description:
        "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
      exception: (t) => "string" == typeof t || "object" == typeof t,
      cliName: "plugin",
      cliCategory: "Config",
    },
    pluginSearchDirs: {
      since: "1.13.0",
      type: "path",
      array: !0,
      default: [{ value: [] }],
      category: "Global",
      description: ot(it()),
      exception: (t) => "string" == typeof t || "object" == typeof t,
      cliName: "plugin-search-dir",
      cliCategory: "Config",
    },
    printWidth: {
      since: "0.0.0",
      category: "Global",
      type: "int",
      default: 80,
      description: "The line length where Prettier will try wrap.",
      range: { start: 0, end: 1 / 0, step: 1 },
    },
    rangeEnd: {
      since: "1.4.0",
      category: "Special",
      type: "int",
      default: 1 / 0,
      range: { start: 0, end: 1 / 0, step: 1 },
      description: ot(rt()),
      cliCategory: "Editor",
    },
    rangeStart: {
      since: "1.4.0",
      category: "Special",
      type: "int",
      default: 0,
      range: { start: 0, end: 1 / 0, step: 1 },
      description: ot(st()),
      cliCategory: "Editor",
    },
    requirePragma: {
      since: "1.7.0",
      category: "Special",
      type: "boolean",
      default: !1,
      description: ot(et()),
      cliCategory: "Other",
    },
    tabWidth: {
      type: "int",
      category: "Global",
      default: 2,
      description: "Number of spaces per indentation level.",
      range: { start: 0, end: 1 / 0, step: 1 },
    },
    useTabs: {
      since: "1.0.0",
      category: "Global",
      type: "boolean",
      default: !1,
      description: "Indent with tabs instead of spaces.",
    },
    embeddedLanguageFormatting: {
      since: "2.1.0",
      category: "Global",
      type: "choice",
      default: [{ since: "2.1.0", value: "auto" }],
      description:
        "Control how Prettier formats quoted code embedded in the file.",
      choices: [{
        value: "auto",
        description:
          "Format embedded code if Prettier can automatically identify it.",
      }, {
        value: "off",
        description: "Never automatically format embedded code.",
      }],
    },
  };
const ht = { compare: $, lt: Y, gte: Q },
  ct = Z,
  pt =
    {
      CATEGORY_CONFIG: "Config",
      CATEGORY_EDITOR: "Editor",
      CATEGORY_FORMAT: "Format",
      CATEGORY_OTHER: "Other",
      CATEGORY_OUTPUT: "Output",
      CATEGORY_GLOBAL: "Global",
      CATEGORY_SPECIAL: "Special",
      options: ut,
    }.options;
var lt = {
  getSupportInfo: function (
    {
      plugins: t = [],
      showUnreleased: e = !1,
      showDeprecated: s = !1,
      showInternal: r = !1,
    } = {},
  ) {
    const i = ct.split("-", 1)[0],
      n = t.reduce(((t, e) => t.concat(e.languages || [])), []).filter(h),
      a = (o = Object.assign(
        {},
        ...t.map((({ options: t }) => t)),
        pt,
      ),
        u = "name",
        Object.entries(o).map((([t, e]) => Object.assign({ [u]: t }, e))))
        .filter(
          ((t) => h(t) && c(t)),
        ).sort(((t, e) => t.name === e.name ? 0 : t.name < e.name ? -1 : 1))
        .map(
          (function (t) {
            if (r) return t;
            return function (t, e) {
              if (null == t) return {};
              var s, r, i = {}, n = Object.keys(t);
              for (r = 0; r < n.length; r++) {s = n[r],
                  e.indexOf(s) >= 0 || (i[s] = t[s]);}
              return i;
            }(t, ["cliName", "cliCategory", "cliDescription"]);
          }),
        ).map(
          ((e) => {
            e = Object.assign({}, e),
              Array.isArray(e.default) && (e.default = 1 === e.default.length
                ? e.default[0].value
                : e.default.filter(h).sort(
                  ((t, e) => ht.compare(e.since, t.since)),
                )[0].value),
              Array.isArray(e.choices) &&
              (e.choices = e.choices.filter(((t) => h(t) && c(t))),
                "parser" === e.name && function (t, e, s) {
                  const r = new Set(t.choices.map(((t) => t.value)));
                  for (const i of e) {
                    if (i.parsers) {
                      for (const e of i.parsers) {
                        if (!r.has(e)) {
                          r.add(e);
                          const n = s.find(
                            ((t) => t.parsers && t.parsers[e]),
                          );
                          let a = i.name;
                          n && n.name &&
                          (a += " (plugin: ".concat(n.name, ")")),
                            t.choices.push({ value: e, description: a });
                        }
                      }
                    }
                  }
                }(e, n, t));
            const s = t.filter(
              ((t) => t.defaultOptions && void 0 !== t.defaultOptions[e.name]),
            ).reduce(((t, s) => (t[s.name] = s.defaultOptions[e.name], t)), {});
            return Object.assign({}, e, { pluginDefaults: s });
          }),
        );
    var o, u;
    return { languages: n, options: a };
    function h(t) {
      return e || !("since" in t) || t.since && ht.gte(i, t.since);
    }
    function c(t) {
      return s || !("deprecated" in t) ||
        t.deprecated && ht.lt(i, t.deprecated);
    }
  },
};
const { getSupportInfo: dt } = lt, Dt = /[^\x20-\x7F]/;
function mt(t) {
  return (e, s, r) => {
    const i = r && r.backwards;
    if (!1 === s) return !1;
    const { length: n } = e;
    let a = s;
    for (; a >= 0 && a < n;) {
      const s = e.charAt(a);
      if (t instanceof RegExp) if (!t.test(s)) return a;
      else if (!t.includes(s)) return a;
      i ? a-- : a++;
    }
    return (-1 === a || a === n) && a;
  };
}
const ft = mt(/\s/), yt = mt(" \t"), Et = mt(",; \t"), At = mt(/[^\n\r]/);
function Ct(t, e) {
  if (!1 === e) return !1;
  if ("/" === t.charAt(e) && "*" === t.charAt(e + 1)) {
    for (let s = e + 2; s < t.length; ++s) {
      if ("*" === t.charAt(s) && "/" === t.charAt(s + 1)) {
        return s + 2;
      }
    }
  }
  return e;
}
function xt(t, e) {
  return !1 !== e &&
    ("/" === t.charAt(e) && "/" === t.charAt(e + 1) ? At(t, e) : e);
}
function Ft(t, e, s) {
  const r = s && s.backwards;
  if (!1 === e) return !1;
  const i = t.charAt(e);
  if (r) {
    if ("\r" === t.charAt(e - 1) && "\n" === i) return e - 2;
    if ("\n" === i || "\r" === i || "\u2028" === i || "\u2029" === i) {
      return e - 1;
    }
  } else {
    if ("\r" === i && "\n" === t.charAt(e + 1)) return e + 2;
    if ("\n" === i || "\r" === i || "\u2028" === i || "\u2029" === i) {
      return e + 1;
    }
  }
  return e;
}
function gt(t, e, s) {
  const r = yt(t, (s = s || {}).backwards ? e - 1 : e, s);
  return r !== Ft(t, r, s);
}
function bt(t, e) {
  let s = null, r = e;
  for (; r !== s;) s = r, r = Et(t, r), r = Ct(t, r), r = yt(t, r);
  return r = xt(t, r), r = Ft(t, r), !1 !== r && gt(t, r);
}
function Pt(t, e) {
  let s = null, r = e;
  for (; r !== s;) {
    s = r, r = yt(t, r), r = Ct(t, r), r = xt(t, r), r = Ft(t, r);
  }
  return r;
}
function Tt(t, e, s) {
  return Pt(t, s(e));
}
function wt(t, e, s) {
  let r = 0;
  for (let i = s = s || 0; i < t.length; ++i) {
    "\t" === t[i]
      ? r = r + e - r % e
      : r++;
  }
  return r;
}
function Bt(t, e) {
  const s = t.slice(1, -1),
    r = { quote: '"', regex: /"/g },
    i = { quote: "'", regex: /'/g },
    n = "'" === e ? i : r,
    a = n === i ? r : i;
  let o = n.quote;
  if (s.includes(n.quote) || s.includes(a.quote)) {
    o = (s.match(n.regex) || []).length > (s.match(a.regex) || []).length
      ? a.quote
      : n.quote;
  }
  return o;
}
function St(t, e, s) {
  const r = '"' === e ? "'" : '"',
    i = t.replace(
      /\\([\S\s])|(["'])/g,
      ((t, i, n) =>
        i === r
          ? i
          : n === e
          ? "\\" + n
          : n || (s && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(i)
            ? i
            : "\\" + i)),
    );
  return e + i + e;
}
function Nt(t, e) {
  (t.comments || (t.comments = [])).push(e),
    e.printed = !1,
    "JSXText" === t.type && (e.printed = !0);
}
var It = {
    inferParserByLanguage: function (t, e) {
      const { languages: s } = dt({ plugins: e.plugins }),
        r = s.find((({ name: e }) => e.toLowerCase() === t)) ||
          s.find((({ aliases: e }) => Array.isArray(e) && e.includes(t))) ||
          s.find(
            (({ extensions: e }) =>
              Array.isArray(e) && e.includes(".".concat(t))),
          );
      return r && r.parsers[0];
    },
    replaceEndOfLineWith: function (t, e) {
      const s = [];
      for (const r of t.split("\n")) 0 !== s.length && s.push(e), s.push(r);
      return s;
    },
    getStringWidth: function (t) {
      return t ? Dt.test(t) ? a(t) : t.length : 0;
    },
    getMaxContinuousCount: function (t, e) {
      const s = t.match(new RegExp("(".concat(u(e), ")+"), "g"));
      return null === s
        ? 0
        : s.reduce(((t, s) => Math.max(t, s.length / e.length)), 0);
    },
    getMinNotPresentContinuousCount: function (t, e) {
      const s = t.match(new RegExp("(".concat(u(e), ")+"), "g"));
      if (null === s) return 0;
      const r = new Map();
      let i = 0;
      for (const t of s) {
        const s = t.length / e.length;
        r.set(s, !0), s > i && (i = s);
      }
      for (let t = 1; t < i; t++) if (!r.get(t)) return t;
      return i + 1;
    },
    getPenultimate: (t) => t[t.length - 2],
    getLast: (t) => t[t.length - 1],
    getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Pt,
    getNextNonSpaceNonCommentCharacterIndex: Tt,
    getNextNonSpaceNonCommentCharacter: function (t, e, s) {
      return t.charAt(Tt(t, e, s));
    },
    skip: mt,
    skipWhitespace: ft,
    skipSpaces: yt,
    skipToLineEnd: Et,
    skipEverythingButNewLine: At,
    skipInlineComment: Ct,
    skipTrailingComment: xt,
    skipNewline: Ft,
    isNextLineEmptyAfterIndex: bt,
    isNextLineEmpty: function (t, e, s) {
      return bt(t, s(e));
    },
    isPreviousLineEmpty: function (t, e, s) {
      let r = s(e) - 1;
      return r = yt(t, r, { backwards: !0 }),
        r = Ft(t, r, { backwards: !0 }),
        r = yt(t, r, { backwards: !0 }),
        r !== Ft(t, r, { backwards: !0 });
    },
    hasNewline: gt,
    hasNewlineInRange: function (t, e, s) {
      for (let r = e; r < s; ++r) if ("\n" === t.charAt(r)) return !0;
      return !1;
    },
    hasSpaces: function (t, e, s) {
      return yt(t, (s = s || {}).backwards ? e - 1 : e, s) !== e;
    },
    getAlignmentSize: wt,
    getIndentSize: function (t, e) {
      const s = t.lastIndexOf("\n");
      return -1 === s ? 0 : wt(t.slice(s + 1).match(/^[\t ]*/)[0], e);
    },
    getPreferredQuote: Bt,
    printString: function (t, e, s) {
      const r = t.slice(1, -1),
        i = !r.includes('"') && !r.includes("'"),
        n = "json" === e.parser
          ? '"'
          : e.__isInHtmlAttribute
          ? "'"
          : Bt(t, e.singleQuote ? "'" : '"');
      return s ? i ? n + r + n : t
      : St(
        r,
        n,
        !("css" === e.parser || "less" === e.parser || "scss" === e.parser ||
          e.embeddedInHtml),
      );
    },
    printNumber: function (t) {
      return t.toLowerCase().replace(
        /^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/,
        "$1$2$3",
      ).replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.")
        .replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
    },
    isNodeIgnoreComment: function (t) {
      return "prettier-ignore" === t.value.trim();
    },
    makeString: St,
    addLeadingComment: function (t, e) {
      e.leading = !0, e.trailing = !1, Nt(t, e);
    },
    addDanglingComment: function (t, e, s) {
      e.leading = !1, e.trailing = !1, s && (e.marker = s), Nt(t, e);
    },
    addTrailingComment: function (t, e) {
      e.leading = !1, e.trailing = !0, Nt(t, e);
    },
    isFrontMatterNode: function (t) {
      return t && "front-matter" === t.type;
    },
    getShebang: function (t) {
      if (!t.startsWith("#!")) return "";
      const e = t.indexOf("\n");
      return -1 === e ? t : t.slice(0, e);
    },
  },
  vt = Object.freeze({
    __proto__: null,
    default: {
      EOL: "\n",
      platform: () => "browser",
      cpus: () => [{ model: "Prettier" }],
    },
  });
const kt = (t) => {
  if ("string" != typeof t) throw new TypeError("Expected a string");
  const e = t.match(/(?:\r?\n)/g) || [];
  if (0 === e.length) return;
  const s = e.filter(((t) => "\r\n" === t)).length;
  return s > e.length - s ? "\r\n" : "\n";
};
var Lt = kt;
Lt.graceful = (t) => "string" == typeof t && kt(t) || "\n";
var Ot = _(vt),
  Mt = R(
    (function (t, e) {
      function s() {
        const t = Ot;
        return s = function () {
          return t;
        },
          t;
      }
      function r() {
        const t = (e = Lt) && e.__esModule ? e : { default: e };
        var e;
        return r = function () {
          return t;
        },
          t;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        e.extract = function (t) {
          const e = t.match(a);
          return e ? e[0].trimLeft() : "";
        },
        e.strip = function (t) {
          const e = t.match(a);
          return e && e[0] ? t.substring(e[0].length) : t;
        },
        e.parse = function (t) {
          return d(t).pragmas;
        },
        e.parseWithComments = d,
        e.print = function ({ comments: t = "", pragmas: e = {} }) {
          const i = (0, r().default)(t) || s().EOL,
            n = " *",
            a = Object.keys(e),
            o = a.map(((t) => D(t, e[t]))).reduce(((t, e) => t.concat(e)), [])
              .map(((t) => " * " + t + i)).join("");
          if (!t) {
            if (0 === a.length) return "";
            if (1 === a.length && !Array.isArray(e[a[0]])) {
              const t = e[a[0]];
              return "".concat("/**", " ").concat(D(a[0], t)[0]).concat(" */");
            }
          }
          const u =
            t.split(i).map(((t) => "".concat(n, " ").concat(t))).join(i) + i;
          return "/**" + i + (t ? u : "") + (t && a.length ? n + i : "") + o +
            " */";
        };
      const i = /\*\/$/,
        n = /^\/\*\*/,
        a = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/,
        o = /(^|\s+)\/\/([^\r\n]*)/g,
        u = /^(\r?\n)+/,
        h =
          /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g,
        c = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g,
        p = /(\r?\n|^) *\* ?/g,
        l = [];
      function d(t) {
        const e = (0, r().default)(t) || s().EOL;
        t = t.replace(n, "").replace(i, "").replace(p, "$1");
        let a = "";
        for (; a !== t;) {
          a = t, t = t.replace(h, "".concat(e, "$1 $2").concat(e));
        }
        t = t.replace(u, "").trimRight();
        const d = Object.create(null),
          D = t.replace(c, "").replace(u, "").trimRight();
        let m;
        for (; m = c.exec(t);) {
          const t = m[2].replace(o, "");
          "string" == typeof d[m[1]] || Array.isArray(d[m[1]])
            ? d[m[1]] = l.concat(d[m[1]], t) : d[m[1]] = t;
        }
        return { comments: D, pragmas: d };
      }
      function D(t, e) {
        return l.concat(e).map(((e) => "@".concat(t, " ").concat(e).trim()));
      }
    }),
  );
var Rt = {
  guessEndOfLine: function (t) {
    const e = t.indexOf("\r");
    return e >= 0 ? "\n" === t.charAt(e + 1) ? "crlf" : "cr" : "lf";
  },
  convertEndOfLineToChars: function (t) {
    switch (t) {
      case "cr":
        return "\r";
      case "crlf":
        return "\r\n";
      default:
        return "\n";
    }
  },
  countEndOfLineChars: function (t, e) {
    let s;
    if ("\n" === e) s = /\n/g;
    else if ("\r" === e) s = /\r/g;
    else {
      if ("\r\n" !== e) {
        throw new Error('Unexpected "eol" '.concat(JSON.stringify(e), "."));
      }
      s = /\r\n/g;
    }
    const r = t.match(s);
    return r ? r.length : 0;
  },
  normalizeEndOfLine: function (t) {
    return t.replace(/\r\n?/g, "\n");
  },
};
const { parseWithComments: _t, strip: jt, extract: Ut, print: qt } = Mt,
  { getShebang: Vt } = It,
  { normalizeEndOfLine: zt } = Rt;
function Ht(t) {
  const e = Vt(t);
  e && (t = t.slice(e.length + 1));
  const s = Ut(t), { pragmas: r, comments: i } = _t(s);
  return { shebang: e, text: t, pragmas: r, comments: i };
}
var Wt = {
  hasPragma: function (t) {
    const e = Object.keys(Ht(t).pragmas);
    return e.includes("prettier") || e.includes("format");
  },
  insertPragma: function (t) {
    const { shebang: e, text: s, pragmas: r, comments: i } = Ht(t),
      n = jt(s),
      a = qt({
        pragmas: Object.assign({ format: "" }, r),
        comments: i.trimStart(),
      });
    return (e ? "".concat(e, "\n") : "") + zt(a) + (n.startsWith("\n")
      ? "\n"
      : "\n\n") +
      n;
  },
};
function Gt(t, e) {
  const { ignoreDecorators: s } = e || {};
  if (!s) {
    const e = t.declaration && t.declaration.decorators || t.decorators;
    if (e && e.length > 0) return Gt(e[0]);
  }
  return t.range ? t.range[0] : t.start;
}
function Xt(t) {
  const e = t.range ? t.range[1] : t.end;
  return t.typeAnnotation ? Math.max(e, Xt(t.typeAnnotation)) : e;
}
function Kt(t, e) {
  return Gt(t) === Gt(e);
}
var Jt = {
    locStart: Gt,
    locEnd: Xt,
    composeLoc: function (t, e = t) {
      const s = Gt(t);
      return [s, "number" == typeof e ? s + e : Xt(e)];
    },
    hasSameLocStart: Kt,
    hasSameLoc: function (t, e) {
      return Kt(t, e) && function (t, e) {
        return Xt(t) === Xt(e);
      }(t, e);
    },
  },
  $t = R(
    (function (t) {
      !function () {
        function e(t) {
          if (null == t) return !1;
          switch (t.type) {
            case "BlockStatement":
            case "BreakStatement":
            case "ContinueStatement":
            case "DebuggerStatement":
            case "DoWhileStatement":
            case "EmptyStatement":
            case "ExpressionStatement":
            case "ForInStatement":
            case "ForStatement":
            case "IfStatement":
            case "LabeledStatement":
            case "ReturnStatement":
            case "SwitchStatement":
            case "ThrowStatement":
            case "TryStatement":
            case "VariableDeclaration":
            case "WhileStatement":
            case "WithStatement":
              return !0;
          }
          return !1;
        }
        function s(t) {
          switch (t.type) {
            case "IfStatement":
              return null != t.alternate ? t.alternate : t.consequent;
            case "LabeledStatement":
            case "ForStatement":
            case "ForInStatement":
            case "WhileStatement":
            case "WithStatement":
              return t.body;
          }
          return null;
        }
        t.exports = {
          isExpression: function (t) {
            if (null == t) return !1;
            switch (t.type) {
              case "ArrayExpression":
              case "AssignmentExpression":
              case "BinaryExpression":
              case "CallExpression":
              case "ConditionalExpression":
              case "FunctionExpression":
              case "Identifier":
              case "Literal":
              case "LogicalExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ObjectExpression":
              case "SequenceExpression":
              case "ThisExpression":
              case "UnaryExpression":
              case "UpdateExpression":
                return !0;
            }
            return !1;
          },
          isStatement: e,
          isIterationStatement: function (t) {
            if (null == t)return !1;
            switch (t.type) {
              case "DoWhileStatement":
              case "ForInStatement":
              case "ForStatement":
              case "WhileStatement":
                return !0;
            }
            return !1;
          },
          isSourceElement: function (t) {
            return e(t) || null != t && "FunctionDeclaration" === t.type;
          },
          isProblematicIfStatement: function (t) {
            var e;
            if ("IfStatement" !== t.type)return !1;
            if (null == t.alternate) return !1;
            e = t.consequent;
            do {
              if ("IfStatement" === e.type && null == e.alternate) { 
                return !0;
              }
              e = s(e);
            } while (e);
            return !1;
          },
          trailingStatement: s,
        };
      }();
    }),
  ),
  Yt = R(
    (function (t) {
      !function () {
        var e, s, r, i, n, a;
        function o(t) {
          return t <= 65535 ? String.fromCharCode(t)
          : String.fromCharCode(Math.floor((t - 65536) / 1024) + 55296) +
            String.fromCharCode((t - 65536) % 1024 + 56320);
        }
        for (
          s = {
            NonAsciiIdentifierStart:
              /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            NonAsciiIdentifierPart:
              /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
          },
            e = {
              NonAsciiIdentifierStart:
                /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
              NonAsciiIdentifierPart:
                /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
            },
            r = [
              5760,
              8192,
              8193,
              8194,
              8195,
              8196,
              8197,
              8198,
              8199,
              8200,
              8201,
              8202,
              8239,
              8287,
              12288,
              65279,
            ],
            i = new Array(128),
            a = 0;
          a < 128;
          ++a
        ) {
          i[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || 36 === a ||
            95 === a;
        }
        for (n = new Array(128), a = 0; a < 128; ++a) {
          n[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 ||
            a >= 48 && a <= 57 || 36 === a || 95 === a;
        }
        t.exports = {
          isDecimalDigit: function (t) {
            return 48 <= t && t <= 57;
          },
          isHexDigit: function (t) {
            return 48 <= t && t <= 57 || 97 <= t && t <= 102 ||
              65 <= t && t <= 70;
          },
          isOctalDigit: function (t) {
            return t >= 48 && t <= 55;
          },
          isWhiteSpace: function (t) {
            return 32 === t || 9 === t || 11 === t || 12 === t || 160 === t ||
              t >= 5760 && r.indexOf(t) >= 0;
          },
          isLineTerminator: function (t) {
            return 10 === t || 13 === t || 8232 === t || 8233 === t;
          },
          isIdentifierStartES5: function (t) {
            return t < 128 ? i[t] : s.NonAsciiIdentifierStart.test(o(t));
          },
          isIdentifierPartES5: function (t) {
            return t < 128 ? n[t] : s.NonAsciiIdentifierPart.test(o(t));
          },
          isIdentifierStartES6: function (t) {
            return t < 128 ? i[t] : e.NonAsciiIdentifierStart.test(o(t));
          },
          isIdentifierPartES6: function (t) {
            return t < 128 ? n[t] : e.NonAsciiIdentifierPart.test(o(t));
          },
        };
      }();
    }),
  ),
  Qt = R(
    (function (t) {
      !function () {
        var e = Yt;
        function s(t, e) {
          return !(!e && "yield" === t) && r(t, e);
        }
        function r(t, e) {
          if (
            e && function (t) {
              switch (t) {
                case "implements":
                case "interface":
                case "package":
                case "private":
                case "protected":
                case "public":
                case "static":
                case "let":
                  return !0;
                default:
                  return !1;
              }
            }(t)
          ) {
            return !0;
          }
          switch (t.length) {
            case 2:
              return "if" === t || "in" === t || "do" === t;
            case 3:
              return "var" === t || "for" === t || "new" === t || "try" === t;
            case 4:
              return "this" === t || "else" === t || "case" === t ||
                "void" === t || "with" === t || "enum" === t;
            case 5:
              return "while" === t || "break" === t || "catch" === t ||
                "throw" === t || "const" === t || "yield" === t ||
                "class" === t || "super" === t;
            case 6:
              return "return" === t || "typeof" === t || "delete" === t ||
                "switch" === t || "export" === t || "import" === t;
            case 7:
              return "default" === t || "finally" === t || "extends" === t;
            case 8:
              return "function" === t || "continue" === t || "debugger" === t;
            case 10:
              return "instanceof" === t;
            default:
              return !1;
          }
        }
        function i(t, e) {
          return "null" === t || "true" === t || "false" === t || s(t, e);
        }
        function n(t, e) {
          return "null" === t || "true" === t || "false" === t || r(t, e);
        }
        function a(t) {
          var s, r, i;
          if (0 === t.length) return !1;
          if (i = t.charCodeAt(0), !e.isIdentifierStartES5(i)) return !1;
          for (s = 1, r = t.length; s < r; ++s) {
            if (i = t.charCodeAt(s), !e.isIdentifierPartES5(i)) return !1;
          }
          return !0;
        }
        function o(t) {
          var s, r, i, n, a;
          if (0 === t.length) { 
            return !1;
          }
          for (a = e.isIdentifierStartES6, s = 0, r = t.length; s < r; ++s) {
            if (55296 <= (i = t.charCodeAt(s)) && i <= 56319) {
              if (++s >= r) return !1;
              if (!(56320 <= (n = t.charCodeAt(s)) && n <= 57343)) return !1;
              i = 1024 * (i - 55296) + (n - 56320) + 65536;
            }
            if (!a(i)) return !1;
            a = e.isIdentifierPartES6;
          }
          return !0;
        }
        t.exports = {
          isKeywordES5: s,
          isKeywordES6: r,
          isReservedWordES5: i,
          isReservedWordES6: n,
          isRestrictedWord: function (t) {
            return "eval" === t || "arguments" === t;
          },
          isIdentifierNameES5: a,
          isIdentifierNameES6: o,
          isIdentifierES5: function (t, e) {
            return a(t) && !i(t, e);
          },
          isIdentifierES6: function (t, e) {
            return o(t) && !n(t, e);
          },
        };
      }();
    }),
  );
const Zt = R(
    (function (t, e) {
      e.ast = $t, e.code = Yt, e.keyword = Qt;
    }),
  ).keyword.isIdentifierNameES5,
  { getLast: te, hasNewline: ee, hasNewlineInRange: se, skipWhitespace: re } =
    It,
  { locStart: ie, locEnd: ne, hasSameLocStart: ae } = Jt,
  oe = new RegExp("^".concat("(?:(?=.)\\s)", "*:")),
  ue = new RegExp("^".concat("(?:(?=.)\\s)", "*::"));
function he(t, e) {
  if (!t || "object" != typeof t) return !1;
  if (Array.isArray(t)) return t.some(((t) => he(t, e)));
  const s = e(t);
  return "boolean" == typeof s ? s : Object.keys(t).some(((s) => he(t[s], e)));
}
function ce(t) {
  return "AssignmentExpression" === t.type || "BinaryExpression" === t.type ||
    "LogicalExpression" === t.type || "NGPipeExpression" === t.type ||
    "ConditionalExpression" === t.type || "CallExpression" === t.type ||
    "OptionalCallExpression" === t.type || "MemberExpression" === t.type ||
    "OptionalMemberExpression" === t.type || "SequenceExpression" === t.type ||
    "TaggedTemplateExpression" === t.type || "BindExpression" === t.type ||
    "UpdateExpression" === t.type && !t.prefix || "TSAsExpression" === t.type ||
    "TSNonNullExpression" === t.type;
}
function pe(t) {
  return "Block" === t.type || "CommentBlock" === t.type ||
    "MultiLine" === t.type;
}
const le = new Set([
  "ExportDefaultDeclaration",
  "ExportDefaultSpecifier",
  "DeclareExportDeclaration",
  "ExportNamedDeclaration",
  "ExportAllDeclaration",
]);
function de(t) {
  return t && le.has(t.type);
}
function De(t) {
  return "BooleanLiteral" === t.type || "DirectiveLiteral" === t.type ||
    "Literal" === t.type || "NullLiteral" === t.type ||
    "NumericLiteral" === t.type || "BigIntLiteral" === t.type ||
    "DecimalLiteral" === t.type || "RegExpLiteral" === t.type ||
    "StringLiteral" === t.type || "TemplateLiteral" === t.type ||
    "TSTypeLiteral" === t.type || "JSXText" === t.type;
}
function me(t) {
  return "NumericLiteral" === t.type ||
    "Literal" === t.type && "number" == typeof t.value;
}
function fe(t) {
  return "StringLiteral" === t.type ||
    "Literal" === t.type && "string" == typeof t.value;
}
function ye(t) {
  return "FunctionExpression" === t.type ||
    "ArrowFunctionExpression" === t.type;
}
function Ee(t) {
  return !("CallExpression" !== t.type && "OptionalCallExpression" !== t.type ||
    "Identifier" !== t.callee.type ||
    "async" !== t.callee.name && "inject" !== t.callee.name &&
      "fakeAsync" !== t.callee.name);
}
function Ae(t) {
  return "JSXElement" === t.type || "JSXFragment" === t.type;
}
function Ce(t) {
  return "get" === t.kind || "set" === t.kind;
}
function xe(t) {
  return Ce(t) || ae(t, t.value);
}
const Fe = new Set([
  "BinaryExpression",
  "LogicalExpression",
  "NGPipeExpression",
]);
const ge = new Set([
  "AnyTypeAnnotation",
  "TSAnyKeyword",
  "NullLiteralTypeAnnotation",
  "TSNullKeyword",
  "ThisTypeAnnotation",
  "TSThisType",
  "NumberTypeAnnotation",
  "TSNumberKeyword",
  "VoidTypeAnnotation",
  "TSVoidKeyword",
  "BooleanTypeAnnotation",
  "TSBooleanKeyword",
  "BigIntTypeAnnotation",
  "TSBigIntKeyword",
  "SymbolTypeAnnotation",
  "TSSymbolKeyword",
  "StringTypeAnnotation",
  "TSStringKeyword",
  "BooleanLiteralTypeAnnotation",
  "StringLiteralTypeAnnotation",
  "BigIntLiteralTypeAnnotation",
  "NumberLiteralTypeAnnotation",
  "TSLiteralType",
  "TSTemplateLiteralType",
  "EmptyTypeAnnotation",
  "MixedTypeAnnotation",
  "TSNeverKeyword",
  "TSObjectKeyword",
  "TSUndefinedKeyword",
  "TSUnknownKeyword",
]);
const be = /^(skip|[fx]?(it|describe|test))$/;
function Pe(t) {
  return "CallExpression" === t.type || "OptionalCallExpression" === t.type;
}
const Te = new RegExp("([ \n\r\t]+)"), we = new RegExp("[^ \n\r\t]");
function Be(t) {
  return De(t) && (we.test(ve(t)) || !/\n/.test(ve(t)));
}
function Se(t, e) {
  if (Ae(e)) return Ve(e);
  return e.comments && e.comments.some(((e) => e.leading && ee(t, ne(e))));
}
function Ne(t) {
  return /^(\d+|\d+\.\d+)$/.test(t);
}
function Ie(t) {
  return t.quasis.some(((t) => t.value.raw.includes("\n")));
}
function ve(t) {
  return t.extra ? t.extra.raw : t.raw;
}
const ke = { "==": !0, "!=": !0, "===": !0, "!==": !0 },
  Le = { "*": !0, "/": !0, "%": !0 },
  Oe = { ">>": !0, ">>>": !0, "<<": !0 };
const Me = {};
function Re(t) {
  return Me[t];
}
[
  ["|>"],
  ["??"],
  ["||"],
  ["&&"],
  ["|"],
  ["^"],
  ["&"],
  ["==", "===", "!=", "!=="],
  ["<", ">", "<=", ">=", "in", "instanceof"],
  [">>", "<<", ">>>"],
  ["+", "-"],
  ["*", "/", "%"],
  ["**"],
].forEach(
  ((t, e) => {
    t.forEach(
      ((t) => {
        Me[t] = e;
      }),
    );
  }),
);
const _e = new WeakMap();
function je(t) {
  if (_e.has(t)) return _e.get(t);
  const e = [];
  return t.this && e.push(t.this),
    Array.isArray(t.parameters)
      ? e.push(...t.parameters)
      : Array.isArray(t.params) && e.push(...t.params),
    t.rest && e.push(t.rest),
    _e.set(t, e),
    e;
}
const Ue = new WeakMap();
function qe(t) {
  return "prettier-ignore" === t.value.trim();
}
function Ve(t) {
  return t &&
    (t.comments && t.comments.length > 0 &&
        t.comments.some(((t) => qe(t) && !t.unignore)) || t.prettierIgnore);
}
function ze(t) {
  return Ve(t.getValue());
}
var He = {
  classChildNeedsASIProtection: function (t) {
    if (t) {
      if (t.static || t.accessibility) return !1;
      if (!t.computed) {
        const e = t.key && t.key.name;
        if ("in" === e || "instanceof" === e) return !0;
      }
      switch (t.type) {
        case "ClassProperty":
        case "FieldDefinition":
        case "TSAbstractClassProperty":
          return t.computed;
        case "MethodDefinition":
        case "TSAbstractMethodDefinition":
        case "ClassMethod":
        case "ClassPrivateMethod": {
          const e = t.value ? t.value.async : t.async,
            s = t.value ? t.value.generator : t.generator;
          return !e && "get" !== t.kind && "set" !== t.kind &&
            !(!t.computed && !s);
        }
        case "TSIndexSignature":
          return !0;
        default:
          return !1;
      }
    }
  },
  classPropMayCauseASIProblems: function (t) {
    const e = t.getNode();
    if ("ClassProperty" !== e.type && "FieldDefinition" !== e.type) return !1;
    const s = e.key && e.key.name;
    return !("static" !== s && "get" !== s && "set" !== s || e.value ||
      e.typeAnnotation) || void 0;
  },
  getFunctionParameters: je,
  iterateFunctionParametersPath: function (t, e) {
    const s = t.getValue();
    let r = 0;
    const i = (t) => e(t, r++);
    s.this && t.call(i, "this"),
      Array.isArray(s.parameters)
        ? t.each(i, "parameters")
        : Array.isArray(s.params) && t.each(i, "params"),
      s.rest && t.call(i, "rest");
  },
  getCallArguments: function (t) {
    if (Ue.has(t)) return Ue.get(t);
    const e = "ImportExpression" === t.type ? [t.source] : t.arguments;
    return Ue.set(t, e), e;
  },
  iterateCallArgumentsPath: function (t, e) {
    "ImportExpression" === t.getValue().type
      ? t.call(((t) => e(t, 0)), "source") : t.each(e, "arguments");
  },
  hasRestParameter: function (t) {
    if (t.rest) return !0;
    const e = je(t);
    return e.length > 0 && "RestElement" === te(e).type;
  },
  getLeftSidePathName: function (t, e) {
    if (e.expressions) return ["expressions", 0];
    if (e.left) return ["left"];
    if (e.test) return ["test"];
    if (e.object) return ["object"];
    if (e.callee) return ["callee"];
    if (e.tag) return ["tag"];
    if (e.argument) return ["argument"];
    if (e.expression) return ["expression"];
    throw new Error("Unexpected node has no left side.");
  },
  getParentExportDeclaration: function (t) {
    const e = t.getParentNode();
    return "declaration" === t.getName() && de(e) ? e : null;
  },
  getTypeScriptMappedTypeModifier: function (t, e) {
    return "+" === t ? "+" + e : "-" === t ? "-" + e : e;
  },
  hasDanglingComments: function (t) {
    return t.comments && t.comments.some(((t) => !t.leading && !t.trailing));
  },
  hasFlowAnnotationComment: function (t) {
    return t && pe(t[0]) && ue.test(t[0].value);
  },
  hasFlowShorthandAnnotationComment: function (t) {
    return t.extra && t.extra.parenthesized && t.trailingComments &&
      pe(t.trailingComments[0]) && oe.test(t.trailingComments[0].value);
  },
  hasLeadingComment: function (t) {
    return t.comments && t.comments.some(((t) => t.leading));
  },
  hasLeadingOwnLineComment: Se,
  hasNakedLeftSide: ce,
  hasNewlineBetweenOrAfterDecorators: function (t, e) {
    return se(e.originalText, ie(t.decorators[0]), ne(te(t.decorators))) ||
      ee(e.originalText, ne(te(t.decorators)));
  },
  hasNgSideEffect: function (t) {
    return he(
      t.getValue(),
      ((t) => {
        switch (t.type) {
          case void 0:
            return !1;
          case "CallExpression":
          case "OptionalCallExpression":
          case "AssignmentExpression":
            return !0;
        }
      }),
    );
  },
  hasNode: he,
  hasPrettierIgnore: function (t) {
    return ze(t) || function (t) {
      const e = t.getValue(), s = t.getParentNode();
      if (!(s && e && Ae(e) && Ae(s))) return !1;
      let r = null;
      for (let t = s.children.indexOf(e); t > 0; t--) {
        const e = s.children[t - 1];
        if ("JSXText" !== e.type || Be(e)) {
          r = e;
          break;
        }
      }
      return r && "JSXExpressionContainer" === r.type &&
        "JSXEmptyExpression" === r.expression.type && r.expression.comments &&
        r.expression.comments.some(((t) => qe(t)));
    }(t);
  },
  hasTrailingComment: function (t) {
    return t.comments && t.comments.some(((t) => t.trailing));
  },
  hasTrailingLineComment: function (t) {
    return t.comments && t.comments.some(((t) => t.trailing && !pe(t)));
  },
  hasIgnoreComment: ze,
  hasNodeIgnoreComment: Ve,
  identity: function (t) {
    return t;
  },
  isBinaryish: function (t) {
    return Fe.has(t.type);
  },
  isBlockComment: pe,
  isLineComment: function (t) {
    return "Line" === t.type || "CommentLine" === t.type ||
      "SingleLine" === t.type || "HashbangComment" === t.type ||
      "HTMLOpen" === t.type || "HTMLClose" === t.type;
  },
  isPrettierIgnoreComment: qe,
  isCallOrOptionalCallExpression: Pe,
  isEmptyJSXElement: function (t) {
    if (0 === t.children.length) return !0;
    if (t.children.length > 1) return !1;
    const e = t.children[0];
    return De(e) && !Be(e);
  },
  isExportDeclaration: de,
  isFlowAnnotationComment: function (t, e) {
    const s = ie(e), r = re(t, ne(e));
    return !1 !== r && "/*" === t.slice(s, s + 2) && "*/" === t.slice(r, r + 2);
  },
  isFunctionCompositionArgs: function (t) {
    if (t.length <= 1) return !1;
    let e = 0;
    for (const s of t) {
      if (ye(s)) if (e += 1, e > 1) return !0;
      else if (Pe(s)) for (const t of s.arguments) if (ye(t)) return !0;
    }
    return !1;
  },
  isFunctionNotation: xe,
  isFunctionOrArrowExpression: ye,
  isGetterOrSetter: Ce,
  isJestEachTemplateLiteral: function (t, e) {
    const s = /^[fx]?(describe|it|test)$/;
    return "TaggedTemplateExpression" === e.type && e.quasi === t &&
      "MemberExpression" === e.tag.type &&
      "Identifier" === e.tag.property.type && "each" === e.tag.property.name &&
      ("Identifier" === e.tag.object.type && s.test(e.tag.object.name) ||
        "MemberExpression" === e.tag.object.type &&
          "Identifier" === e.tag.object.property.type &&
          ("only" === e.tag.object.property.name ||
            "skip" === e.tag.object.property.name) &&
          "Identifier" === e.tag.object.object.type &&
          s.test(e.tag.object.object.name));
  },
  isJSXNode: Ae,
  isJSXWhitespaceExpression: function (t) {
    return "JSXExpressionContainer" === t.type && De(t.expression) &&
      " " === t.expression.value && !t.expression.comments;
  },
  isLastStatement: function (t) {
    const e = t.getParentNode();
    if (!e) return !0;
    const s = t.getValue(),
      r = (e.body || e.consequent).filter(((t) => "EmptyStatement" !== t.type));
    return r[r.length - 1] === s;
  },
  isLiteral: De,
  isLongCurriedCallExpression: function (t) {
    const e = t.getValue(), s = t.getParentNode();
    return Pe(e) && Pe(s) && s.callee === e &&
      e.arguments.length > s.arguments.length && s.arguments.length > 0;
  },
  isSimpleCallArgument: function t(e, s) {
    if (s >= 2) return !1;
    const r = (e) => t(e, s + 1),
      i = "Literal" === e.type && "regex" in e && e.regex.pattern ||
        "RegExpLiteral" === e.type && e.pattern;
    return !(i && i.length > 5) &&
      ("Literal" === e.type || "BigIntLiteral" === e.type ||
        "DecimalLiteral" === e.type || "BooleanLiteral" === e.type ||
        "NullLiteral" === e.type || "NumericLiteral" === e.type ||
        "RegExpLiteral" === e.type || "StringLiteral" === e.type ||
        "Identifier" === e.type || "ThisExpression" === e.type ||
        "Super" === e.type || "PrivateName" === e.type ||
        "ArgumentPlaceholder" === e.type || "Import" === e.type ||
        ("TemplateLiteral" === e.type
          ? e.expressions.every(r)
          : "ObjectExpression" === e.type
          ? e.properties.every(
            ((t) => !t.computed && (t.shorthand || t.value && r(t.value))),
          )
          : "ArrayExpression" === e.type
          ? e.elements.every(((t) => null === t || r(t)))
          : "ImportExpression" === e.type
          ? r(e.source)
          : "CallExpression" === e.type ||
              "OptionalCallExpression" === e.type || "NewExpression" === e.type
          ? t(e.callee, s) && e.arguments.every(r)
          : "MemberExpression" === e.type ||
              "OptionalMemberExpression" === e.type
          ? t(e.object, s) && t(e.property, s)
          : "UnaryExpression" !== e.type ||
              "!" !== e.operator && "-" !== e.operator
          ? "TSNonNullExpression" === e.type && t(e.expression, s)
          : t(e.argument, s)));
  },
  isMeaningfulJSXText: Be,
  isMemberExpressionChain: function t(e) {
    return ("MemberExpression" === e.type ||
      "OptionalMemberExpression" === e.type) &&
      ("Identifier" === e.object.type || t(e.object));
  },
  isMemberish: function (t) {
    return "MemberExpression" === t.type ||
      "OptionalMemberExpression" === t.type ||
      "BindExpression" === t.type && Boolean(t.object);
  },
  isNgForOf: function (t, e, s) {
    return "NGMicrosyntaxKeyedExpression" === t.type && "of" === t.key.name &&
      1 === e && "NGMicrosyntaxLet" === s.body[0].type &&
      null === s.body[0].value;
  },
  isNumericLiteral: me,
  isObjectType: function (t) {
    return "ObjectTypeAnnotation" === t.type || "TSTypeLiteral" === t.type;
  },
  isObjectTypePropertyAFunction: function (t) {
    return !("ObjectTypeProperty" !== t.type &&
        "ObjectTypeInternalSlot" !== t.type ||
      "FunctionTypeAnnotation" !== t.value.type || t.static || xe(t));
  },
  isSimpleType: function (t) {
    return !!t &&
      (!("GenericTypeAnnotation" !== t.type && "TSTypeReference" !== t.type ||
        t.typeParameters) || !!ge.has(t.type));
  },
  isSimpleNumber: Ne,
  isSimpleTemplateLiteral: function (t) {
    let e = "expressions";
    "TSTemplateLiteralType" === t.type && (e = "types");
    const s = t[e];
    return 0 !== s.length && s.every(
      ((t) => {
        if (t.comments) return !1;
        if ("Identifier" === t.type || "ThisExpression" === t.type) return !0;
        if (
          "MemberExpression" === t.type || "OptionalMemberExpression" === t.type
        ) {
          let e = t;
          for (
            ;
            "MemberExpression" === e.type ||
            "OptionalMemberExpression" === e.type;
          ) {
            if (
              "Identifier" !== e.property.type &&
              "Literal" !== e.property.type &&
              "StringLiteral" !== e.property.type &&
              "NumericLiteral" !== e.property.type
            ) {
              return !1;
            }
            if (e = e.object, e.comments) return !1;
          }
          return "Identifier" === e.type || "ThisExpression" === e.type;
        }
        return !1;
      }),
    );
  },
  isStringLiteral: fe,
  isStringPropSafeToUnquote: function (t, e) {
    return "json" !== e.parser && fe(t.key) &&
      ve(t.key).slice(1, -1) === t.key.value &&
      (Zt(t.key.value) &&
          !(("typescript" === e.parser || "babel-ts" === e.parser) &&
            "ClassProperty" === t.type) ||
        Ne(t.key.value) && String(Number(t.key.value)) === t.key.value &&
          ("babel" === e.parser || "espree" === e.parser ||
            "meriyah" === e.parser));
  },
  isTemplateOnItsOwnLine: function (t, e) {
    return ("TemplateLiteral" === t.type && Ie(t) ||
      "TaggedTemplateExpression" === t.type && Ie(t.quasi)) &&
      !ee(e, ie(t), { backwards: !0 });
  },
  isTestCall: function t(e, s) {
    if ("CallExpression" !== e.type) return !1;
    if (1 === e.arguments.length) {
      if (Ee(e) && s && t(s)) return ye(e.arguments[0]);
      if (
        "Identifier" === (r = e).callee.type &&
        /^(before|after)(Each|All)$/.test(r.callee.name) &&
        1 === r.arguments.length
      ) {
        return Ee(e.arguments[0]);
      }
    } else if (
      (2 === e.arguments.length || 3 === e.arguments.length) &&
      ("Identifier" === e.callee.type && be.test(e.callee.name) ||
        function (t) {
          return ("MemberExpression" === t.callee.type ||
            "OptionalMemberExpression" === t.callee.type) &&
            "Identifier" === t.callee.object.type &&
            "Identifier" === t.callee.property.type &&
            be.test(t.callee.object.name) &&
            ("only" === t.callee.property.name ||
              "skip" === t.callee.property.name);
        }(e)) &&
      (function (t) {
        return "TemplateLiteral" === t.type;
      }(e.arguments[0]) || fe(e.arguments[0]))
    ) {
      return !(e.arguments[2] && !me(e.arguments[2])) &&
        ((2 === e.arguments.length ? ye(e.arguments[1]) : function (t) {
          return "FunctionExpression" === t.type ||
            "ArrowFunctionExpression" === t.type &&
              "BlockStatement" === t.body.type;
        }(e.arguments[1]) && je(e.arguments[1]).length <= 1) ||
          Ee(e.arguments[1]));
    }
    var r;
    return !1;
  },
  isTheOnlyJSXElementInMarkdown: function (t, e) {
    if ("markdown" !== t.parentParser && "mdx" !== t.parentParser) return !1;
    const s = e.getNode();
    if (!s.expression || !Ae(s.expression)) return !1;
    const r = e.getParentNode();
    return "Program" === r.type && 1 === r.body.length;
  },
  isTSXFile: function (t) {
    return t.filepath && /\.tsx$/i.test(t.filepath);
  },
  isTypeAnnotationAFunction: function (t) {
    return !("TypeAnnotation" !== t.type && "TSTypeAnnotation" !== t.type ||
      "FunctionTypeAnnotation" !== t.typeAnnotation.type || t.static ||
      ae(t, t.typeAnnotation));
  },
  matchJsxWhitespaceRegex: Te,
  needsHardlineAfterDanglingComment: function (t) {
    if (!t.comments) return !1;
    const e = te(t.comments.filter(((t) => !t.leading && !t.trailing)));
    return e && !pe(e);
  },
  rawText: ve,
  returnArgumentHasLeadingComment: function (t, e) {
    if (Se(t.originalText, e)) return !0;
    if (ce(e)) {
      let r, i = e;
      for (
        ;
        r = (s = i).expressions
          ? s.expressions[0]
          : s.left || s.test || s.callee || s.object || s.tag || s.argument ||
            s.expression;
      ) {
        if (i = r, Se(t.originalText, i)) return !0;
      }
    }
    var s;
    return !1;
  },
  shouldPrintComma: function (t, e = "es5") {
    return "es5" === t.trailingComma && "es5" === e ||
      "all" === t.trailingComma && ("all" === e || "es5" === e);
  },
  isBitwiseOperator: function (t) {
    return !!Oe[t] || "|" === t || "^" === t || "&" === t;
  },
  shouldFlatten: function (t, e) {
    return Re(e) === Re(t) &&
      ("**" !== t &&
        ((!ke[t] || !ke[e]) &&
          (!("%" === e && Le[t] || "%" === t && Le[e]) &&
            ((e === t || !Le[e] || !Le[t]) && (!Oe[t] || !Oe[e])))));
  },
  startsWithNoLookaheadToken: function t(e, s) {
    switch (
      (e = function (t) {
        for (; t.left;) t = t.left;
        return t;
      }(e)).type
    ) {
      case "FunctionExpression":
      case "ClassExpression":
      case "DoExpression":
        return s;
      case "ObjectExpression":
        return !0;
      case "MemberExpression":
      case "OptionalMemberExpression":
        return t(e.object, s);
      case "TaggedTemplateExpression":
        return "FunctionExpression" !== e.tag.type && t(e.tag, s);
      case "CallExpression":
      case "OptionalCallExpression":
        return "FunctionExpression" !== e.callee.type && t(e.callee, s);
      case "ConditionalExpression":
        return t(e.test, s);
      case "UpdateExpression":
        return !e.prefix && t(e.argument, s);
      case "BindExpression":
        return e.object && t(e.object, s);
      case "SequenceExpression":
        return t(e.expressions[0], s);
      case "TSAsExpression":
        return t(e.expression, s);
      default:
        return !1;
    }
  },
  getPrecedence: Re,
};
const {
    getLast: We,
    hasNewline: Ge,
    getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Xe,
    getNextNonSpaceNonCommentCharacter: Ke,
    hasNewlineInRange: Je,
    addLeadingComment: $e,
    addTrailingComment: Ye,
    addDanglingComment: Qe,
    getNextNonSpaceNonCommentCharacterIndex: Ze,
  } = It,
  {
    isBlockComment: ts,
    getFunctionParameters: es,
    isPrettierIgnoreComment: ss,
    isJSXNode: rs,
    hasFlowShorthandAnnotationComment: is,
    hasFlowAnnotationComment: ns,
    hasIgnoreComment: as,
  } = He,
  { locStart: os, locEnd: us } = Jt;
function hs(t, e) {
  const s = (t.body || t.properties).find(
    (({ type: t }) => "EmptyStatement" !== t),
  );
  s ? $e(s, e) : Qe(t, e);
}
function cs(t, e) {
  "BlockStatement" === t.type ? hs(t, e) : $e(t, e);
}
function ps(t, e) {
  const { precedingNode: s, enclosingNode: r, followingNode: i } = t;
  if (!r || "IfStatement" !== r.type || !i) return !1;
  return ")" === Ke(e, t, us)
    ? (Ye(s, t), !0)
    : s === r.consequent && i === r.alternate
    ? ("BlockStatement" === s.type ? Ye(s, t) : Qe(r, t), !0)
    : "BlockStatement" === i.type
    ? (hs(i, t), !0)
    : "IfStatement" === i.type
    ? (cs(i.consequent, t), !0)
    : r.consequent === i && ($e(i, t), !0);
}
function ls(t, e) {
  const { precedingNode: s, enclosingNode: r, followingNode: i } = t;
  if (!r || "WhileStatement" !== r.type || !i) return !1;
  return ")" === Ke(e, t, us)
    ? (Ye(s, t), !0)
    : "BlockStatement" === i.type
    ? (hs(i, t), !0)
    : r.body === i && ($e(i, t), !0);
}
function ds(t) {
  const { precedingNode: e, enclosingNode: s, followingNode: r } = t;
  return !(!s || "TryStatement" !== s.type && "CatchClause" !== s.type || !r) &&
    ("CatchClause" === s.type && e
      ? (Ye(e, t), !0)
      : "BlockStatement" === r.type
      ? (hs(r, t), !0)
      : "TryStatement" === r.type
      ? (cs(r.finalizer, t), !0)
      : "CatchClause" === r.type && (cs(r.body, t), !0));
}
function Ds(t) {
  const { precedingNode: e, enclosingNode: s, followingNode: r } = t;
  if (
    s &&
    ("ClassDeclaration" === s.type || "ClassExpression" === s.type ||
      "DeclareClass" === s.type || "DeclareInterface" === s.type ||
      "InterfaceDeclaration" === s.type || "TSInterfaceDeclaration" === s.type)
  ) {
    if (
      s.decorators && s.decorators.length > 0 && (!r || "Decorator" !== r.type)
    ) {
      return Ye(s.decorators[s.decorators.length - 1], t), !0;
    }
    if (s.body && r === s.body) return hs(s.body, t), !0;
    if (r) {
      for (const i of ["implements", "extends", "mixins"]) {
        if (s[i] && r === s[i][0]) {
          return !e ||
              e !== s.id && e !== s.typeParameters && e !== s.superClass
            ? Qe(s, t, i)
            : Ye(e, t),
            !0;
        }
      }
    }
  }
  return !1;
}
function ms(t, e) {
  const { precedingNode: s, enclosingNode: r } = t;
  return (r && s &&
      ("Property" === r.type || "TSDeclareMethod" === r.type ||
        "TSAbstractMethodDefinition" === r.type) &&
      "Identifier" === s.type && r.key === s && ":" !== Ke(e, s, us) ||
    !(!s || !r || "Decorator" !== s.type ||
      "ClassMethod" !== r.type && "ClassProperty" !== r.type &&
        "FieldDefinition" !== r.type && "TSAbstractClassProperty" !== r.type &&
        "TSAbstractMethodDefinition" !== r.type &&
        "TSDeclareMethod" !== r.type && "MethodDefinition" !== r.type)) &&
    (Ye(s, t), !0);
}
function fs(t, e) {
  const { precedingNode: s, enclosingNode: r, followingNode: i } = t;
  if (
    s && "FunctionTypeParam" === s.type && r &&
    "FunctionTypeAnnotation" === r.type && i && "FunctionTypeParam" !== i.type
  ) {
    return Ye(s, t), !0;
  }
  if (
    s && ("Identifier" === s.type || "AssignmentPattern" === s.type) && r &&
    xs(r) && ")" === Ke(e, t, us)
  ) {
    return Ye(s, t), !0;
  }
  if (
    r && "FunctionDeclaration" === r.type && i && "BlockStatement" === i.type
  ) {
    const s = (() => {
      const t = es(r);
      if (0 !== t.length) return Xe(e, us(We(t)));
      const s = Xe(e, us(r.id));
      return !1 !== s && Xe(e, s + 1);
    })();
    if (os(t) > s) return hs(i, t), !0;
  }
  return !1;
}
function ys(t) {
  const { enclosingNode: e } = t;
  return !(!e || "ImportSpecifier" !== e.type) && ($e(e, t), !0);
}
function Es(t) {
  const { enclosingNode: e } = t;
  return !(!e || "LabeledStatement" !== e.type) && ($e(e, t), !0);
}
function As(t, e, s) {
  const { enclosingNode: r } = t;
  return e && e.body && 0 === e.body.length
    ? (s ? Qe(e, t) : $e(e, t), !0)
    : !(!r || "Program" !== r.type || 0 !== r.body.length || !r.directives ||
      0 !== r.directives.length) && (s ? Qe(r, t) : $e(r, t), !0);
}
function Cs(t) {
  const { enclosingNode: e, followingNode: s } = t;
  if (
    ss(t) && e && "TSMappedType" === e.type && s &&
    "TSTypeParameter" === s.type && s.constraint
  ) {
    return e.prettierIgnore = !0, t.unignore = !0, !0;
  }
}
function xs(t) {
  return "ArrowFunctionExpression" === t.type ||
    "FunctionExpression" === t.type || "FunctionDeclaration" === t.type ||
    "ObjectMethod" === t.type || "ClassMethod" === t.type ||
    "TSDeclareFunction" === t.type || "TSCallSignatureDeclaration" === t.type ||
    "TSConstructSignatureDeclaration" === t.type ||
    "TSMethodSignature" === t.type || "TSConstructorType" === t.type ||
    "TSFunctionType" === t.type || "TSDeclareMethod" === t.type;
}
function Fs(t) {
  return ts(t) && "*" === t.value[0] && /@type\b/.test(t.value);
}
var gs = {
  handleOwnLineComment: function (t, e, s, r, i) {
    return Cs(t) || fs(t, e) || function (t) {
      const { enclosingNode: e, followingNode: s } = t;
      if (
        e &&
        ("MemberExpression" === e.type ||
          "OptionalMemberExpression" === e.type) &&
        s && "Identifier" === s.type
      ) {
        return $e(e, t), !0;
      }
      return !1;
    }(t) || ps(t, e) || ls(t, e) || ds(t) || Ds(t) || ys(t) || function (t) {
      const { enclosingNode: e } = t;
      if (e && ("ForInStatement" === e.type || "ForOfStatement" === e.type)) {
        return $e(e, t), !0;
      }
      return !1;
    }(t) || function (t) {
      const { precedingNode: e, enclosingNode: s, followingNode: r } = t;
      if (s && ("UnionTypeAnnotation" === s.type || "TSUnionType" === s.type)) {
        return ss(t) && (r.prettierIgnore = !0, t.unignore = !0),
          !!e && (Ye(e, t), !0);
      }
      r && ("UnionTypeAnnotation" === r.type || "TSUnionType" === r.type) &&
        ss(t) && (r.types[0].prettierIgnore = !0, t.unignore = !0);
      return !1;
    }(t) || As(t, r, i) || function (t, e) {
      const { precedingNode: s, enclosingNode: r } = t;
      if (
        s && "ImportSpecifier" === s.type && r &&
        "ImportDeclaration" === r.type && Ge(e, us(t))
      ) {
        return Ye(s, t), !0;
      }
      return !1;
    }(t, e) || function (t) {
      const { enclosingNode: e } = t;
      if (e && "AssignmentPattern" === e.type) {
        return $e(e, t), !0;
      }
      return !1;
    }(t) || ms(t, e) || Es(t);
  },
  handleEndOfLineComment: function (t, e, s, r, i) {
    return function (t) {
      const { followingNode: e } = t;
      if (e && Fs(t)) return $e(e, t), !0;
      return !1;
    }(t) || fs(t, e) || function (t, e) {
      const { precedingNode: s, enclosingNode: r, followingNode: i } = t,
        n = s && !Je(e, us(s), os(t));
      if (
        (!s || !n) && r &&
        ("ConditionalExpression" === r.type ||
          "TSConditionalType" === r.type) &&
        i
      ) {
        return $e(i, t), !0;
      }
      return !1;
    }(t, e) || ys(t) || ps(t, e) || ls(t, e) || ds(t) || Ds(t) || Es(t) ||
      function (t) {
        const { precedingNode: e, enclosingNode: s } = t;
        if (
          s &&
          ("CallExpression" === s.type ||
            "OptionalCallExpression" === s.type) &&
          e && s.callee === e && s.arguments.length > 0
        ) {
          return $e(s.arguments[0], t), !0;
        }
        return !1;
      }(t) || function (t) {
      const { enclosingNode: e } = t;
      if (e && ("Property" === e.type || "ObjectProperty" === e.type)) {
        return $e(e, t), !0;
      }
      return !1;
    }(t) || As(t, r, i) || function (t) {
      const { enclosingNode: e } = t;
      if (e && "TypeAlias" === e.type) return $e(e, t), !0;
      return !1;
    }(t) || function (t) {
      const { enclosingNode: e, followingNode: s } = t;
      if (
        e &&
        ("VariableDeclarator" === e.type ||
          "AssignmentExpression" === e.type) &&
        s &&
        ("ObjectExpression" === s.type || "ArrayExpression" === s.type ||
          "TemplateLiteral" === s.type ||
          "TaggedTemplateExpression" === s.type || ts(t))
      ) {
        return $e(s, t), !0;
      }
      return !1;
    }(t);
  },
  handleRemainingComment: function (t, e, s, r, i) {
    return !!(Cs(t) || ps(t, e) || ls(t, e) || function (t) {
      const { precedingNode: e, enclosingNode: s } = t;
      if (
        s && ("ObjectProperty" === s.type || "Property" === s.type) &&
        s.shorthand && s.key === e && "AssignmentPattern" === s.value.type
      ) {
        return Ye(s.value.left, t), !0;
      }
      return !1;
    }(t) || function (t, e) {
      if (")" !== Ke(e, t, us)) return !1;
      const { enclosingNode: s } = t;
      if (
        s &&
        (xs(s) && 0 === es(s).length ||
          ("CallExpression" === s.type || "OptionalCallExpression" === s.type ||
              "NewExpression" === s.type) && 0 === s.arguments.length)
      ) {
        return Qe(s, t), !0;
      }
      if (s && "MethodDefinition" === s.type && 0 === es(s.value).length) {
        return Qe(s.value, t), !0;
      }
      return !1;
    }(t, e) || ms(t, e) || As(t, r, i) || function (t, e) {
      const { enclosingNode: s } = t;
      if (!s || "ArrowFunctionExpression" !== s.type) return !1;
      const r = Ze(e, t, us);
      if (!1 !== r && "=>" === e.slice(r, r + 2)) return Qe(s, t), !0;
      return !1;
    }(t, e) || function (t, e) {
      if ("(" !== Ke(e, t, us)) return !1;
      const { precedingNode: s, enclosingNode: r } = t;
      if (
        s && r &&
        ("FunctionDeclaration" === r.type || "FunctionExpression" === r.type ||
          "ClassMethod" === r.type || "MethodDefinition" === r.type ||
          "ObjectMethod" === r.type)
      ) {
        return Ye(s, t), !0;
      }
      return !1;
    }(t, e) || function (t) {
      const { precedingNode: e, enclosingNode: s, followingNode: r } = t;
      if (!s || "TSMappedType" !== s.type) return !1;
      if (r && "TSTypeParameter" === r.type && r.name) return $e(r.name, t), !0;
      if (e && "TSTypeParameter" === e.type && e.constraint) {
        return Ye(e.constraint, t), !0;
      }
      return !1;
    }(t) || function (t) {
      const { enclosingNode: e } = t;
      if (
        e && ("ContinueStatement" === e.type || "BreakStatement" === e.type) &&
        !e.label
      ) {
        return Ye(e, t), !0;
      }
      return !1;
    }(t) || function (t, e) {
      const { enclosingNode: s, followingNode: r } = t;
      if (
        !r && s &&
        ("TSMethodSignature" === s.type || "TSDeclareFunction" === s.type ||
          "TSAbstractMethodDefinition" === s.type) &&
        ";" === Ke(e, t, us)
      ) {
        return Ye(s, t), !0;
      }
      return !1;
    }(t, e));
  },
  hasLeadingComment: function (
    t,
    e = (() => !0),
  ) {
    return t.leadingComments ? t.leadingComments.some(e)
    : !!t.comments && t.comments.some(((t) => t.leading && e(t)));
  },
  isTypeCastComment: Fs,
  getGapRegex: function (t) {
    if (
      t && "BinaryExpression" !== t.type && "LogicalExpression" !== t.type
    ) {
      return /^[\s&(|]*$/;
    }
  },
  getCommentChildNodes: function (t, e) {
    if (
      ("typescript" === e.parser || "flow" === e.parser ||
        "espree" === e.parser || "meriyah" === e.parser) &&
      "MethodDefinition" === t.type && t.value &&
      "FunctionExpression" === t.value.type && 0 === es(t.value).length &&
      !t.value.returnType &&
      (!t.value.typeParameters || 0 === t.value.typeParameters.length) &&
      t.value.body
    ) {
      return [...t.decorators || [], t.key, t.value.body];
    }
  },
  willPrintOwnComments: function (t) {
    const e = t.getValue(), s = t.getParentNode();
    return (e &&
        (rs(e) || is(e) ||
          s &&
            ("CallExpression" === s.type ||
              "OptionalCallExpression" === s.type) &&
            (ns(e.leadingComments) || ns(e.trailingComments))) ||
      s &&
        ("JSXSpreadAttribute" === s.type || "JSXSpreadChild" === s.type ||
          "UnionTypeAnnotation" === s.type || "TSUnionType" === s.type ||
          ("ClassDeclaration" === s.type || "ClassExpression" === s.type) &&
            s.superClass === e)) &&
      (!as(t) || "UnionTypeAnnotation" === s.type || "TSUnionType" === s.type);
  },
};
const { getLast: bs, getNextNonSpaceNonCommentCharacter: Ps, getShebang: Ts } =
    It,
  { composeLoc: ws, locStart: Bs, locEnd: Ss } = Jt,
  { isTypeCastComment: Ns } = gs;
function Is(t) {
  return "CallExpression" === t.type
    ? (t.type = "OptionalCallExpression", t.callee = Is(t.callee))
    : "MemberExpression" === t.type
    ? (t.type = "OptionalMemberExpression", t.object = Is(t.object))
    : "TSNonNullExpression" === t.type && (t.expression = Is(t.expression)),
    t;
}
function vs(t, e) {
  let s;
  if (Array.isArray(t)) s = t.entries();
  else {
    if (!t || "object" != typeof t || "string" != typeof t.type) return t;
    s = Object.entries(t);
  }
  for (const [r, i] of s) t[r] = vs(i, e);
  return Array.isArray(t) ? t : e(t) || t;
}
function ks(t) {
  return "LogicalExpression" === t.type &&
    "LogicalExpression" === t.right.type && t.operator === t.right.operator;
}
function Ls(t) {
  return ks(t)
    ? Ls({
      type: "LogicalExpression",
      operator: t.operator,
      left: Ls({
        type: "LogicalExpression",
        operator: t.operator,
        left: t.left,
        right: t.right.left,
        range: ws(t.left, t.right.left),
      }),
      right: t.right.right,
      range: ws(t),
    })
    : t;
}
var Os = function (e, s) {
    if (
      "typescript" !== s.parser && "flow" !== s.parser &&
        "espree" !== s.parser || function (t, e) {
        const s = Ts(e.originalText);
        s &&
          t.comments.unshift({
            type: "Line",
            value: s.slice(2),
            range: [0, s.length],
          });
      }(e, s), "typescript" === s.parser && s.originalText.includes("@")
    ) {
      const { esTreeNodeToTSNodeMap: r, tsNodeToESTreeNodeMap: i } =
        s.tsParseResult;
      e = vs(
        e,
        ((e) => {
          const s = r.get(e);
          if (!s) return;
          const n = s.decorators;
          if (!Array.isArray(n)) return;
          const a = i.get(s);
          if (a !== e) return;
          const o = a.decorators;
          if (
            !Array.isArray(o) || o.length !== n.length || n.some(
              ((t) => {
                const e = i.get(t);
                return !e || !o.includes(e);
              }),
            )
          ) {
            const { start: e, end: s } = a.loc;
            throw t(
              "Leading decorators must be attached to a class declaration",
              {
                start: { line: e.line, column: e.column + 1 },
                end: { line: s.line, column: s.column + 1 },
              },
            );
          }
        }),
      );
    }
    if (
      "typescript" !== s.parser && "flow" !== s.parser &&
      "espree" !== s.parser && "meriyah" !== s.parser
    ) {
      const t = new Set();
      e = vs(
        e,
        ((e) => {
          e.leadingComments && e.leadingComments.some(Ns) && t.add(Bs(e));
        }),
      ),
        e = vs(
          e,
          ((e) => {
            if ("ParenthesizedExpression" === e.type) {
              const { expression: s } = e;
              if ("TypeCastExpression" === s.type) return s.range = e.range, s;
              const r = Bs(e);
              if (!t.has(r)) {
                return s.extra = Object.assign({}, s.extra, {
                  parenthesized: !0,
                }),
                  s;
              }
            }
          }),
        );
    }
    return e = vs(
      e,
      ((t) => {
        switch (t.type) {
          case "ChainExpression":
            return Is(t.expression);
          case "LogicalExpression":
            if (ks(t)) return Ls(t);
            break;
          case "VariableDeclaration": {
            const e = bs(t.declarations);
            e && e.init && function (t, e) {
              if (";" === s.originalText[Ss(e)]) return;
              t.range = ws(t, e);
            }(t, e);
            break;
          }
          case "TSParenthesizedType":
            return t.typeAnnotation.range = ws(t), t.typeAnnotation;
          case "TSUnionType":
          case "TSIntersectionType":
            if (1 === t.types.length) {
              const [e] = t.types;
              return e.range = ws(t), e;
            }
            break;
          case "TSTypeParameter":
            "string" == typeof t.name &&
              (t.name = {
                type: "Identifier",
                name: t.name,
                range: ws(t, t.name.length),
              });
            break;
          case "SequenceExpression": {
            const e = bs(t.expressions);
            Ss(t) > Ss(e) && (t.range = ws(t, e));
            break;
          }
          case "ClassProperty":
            t.key && "TSPrivateIdentifier" === t.key.type &&
              "?" === Ps(s.originalText, t.key, Ss) && (t.optional = !0);
        }
      }),
    );
  },
  Ms = R(
    (function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 });
      const s = !0, r = !0, i = !0, n = !0;
      class a {
        constructor(t, e = {}) {
          this.label = void 0,
            this.keyword = void 0,
            this.beforeExpr = void 0,
            this.startsExpr = void 0,
            this.rightAssociative = void 0,
            this.isLoop = void 0,
            this.isAssign = void 0,
            this.prefix = void 0,
            this.postfix = void 0,
            this.binop = void 0,
            this.updateContext = void 0,
            this.label = t,
            this.keyword = e.keyword,
            this.beforeExpr = !!e.beforeExpr,
            this.startsExpr = !!e.startsExpr,
            this.rightAssociative = !!e.rightAssociative,
            this.isLoop = !!e.isLoop,
            this.isAssign = !!e.isAssign,
            this.prefix = !!e.prefix,
            this.postfix = !!e.postfix,
            this.binop = null != e.binop ? e.binop : null,
            this.updateContext = null;
        }
      }
      const o = new Map();
      function u(t, e = {}) {
        e.keyword = t;
        const s = new a(t, e);
        return o.set(t, s), s;
      }
      function h(t, e) {
        return new a(t, { beforeExpr: s, binop: e });
      }
      const c = {
          num: new a("num", { startsExpr: r }),
          bigint: new a("bigint", { startsExpr: r }),
          decimal: new a("decimal", { startsExpr: r }),
          regexp: new a("regexp", { startsExpr: r }),
          string: new a("string", { startsExpr: r }),
          name: new a("name", { startsExpr: r }),
          eof: new a("eof"),
          bracketL: new a("[", { beforeExpr: s, startsExpr: r }),
          bracketHashL: new a("#[", { beforeExpr: s, startsExpr: r }),
          bracketBarL: new a("[|", { beforeExpr: s, startsExpr: r }),
          bracketR: new a("]"),
          bracketBarR: new a("|]"),
          braceL: new a("{", { beforeExpr: s, startsExpr: r }),
          braceBarL: new a("{|", { beforeExpr: s, startsExpr: r }),
          braceHashL: new a("#{", { beforeExpr: s, startsExpr: r }),
          braceR: new a("}"),
          braceBarR: new a("|}"),
          parenL: new a("(", { beforeExpr: s, startsExpr: r }),
          parenR: new a(")"),
          comma: new a(",", { beforeExpr: s }),
          semi: new a(";", { beforeExpr: s }),
          colon: new a(":", { beforeExpr: s }),
          doubleColon: new a("::", { beforeExpr: s }),
          dot: new a("."),
          question: new a("?", { beforeExpr: s }),
          questionDot: new a("?."),
          arrow: new a("=>", { beforeExpr: s }),
          template: new a("template"),
          ellipsis: new a("...", { beforeExpr: s }),
          backQuote: new a("`", { startsExpr: r }),
          dollarBraceL: new a("${", { beforeExpr: s, startsExpr: r }),
          at: new a("@"),
          hash: new a("#", { startsExpr: r }),
          interpreterDirective: new a("#!..."),
          eq: new a("=", { beforeExpr: s, isAssign: true }),
          assign: new a("_=", { beforeExpr: s, isAssign: true }),
          incDec: new a("++/--", { prefix: n, postfix: !0, startsExpr: r }),
          bang: new a("!", { beforeExpr: s, prefix: n, startsExpr: r }),
          tilde: new a("~", { beforeExpr: s, prefix: n, startsExpr: r }),
          pipeline: h("|>", 0),
          nullishCoalescing: h("??", 1),
          logicalOR: h("||", 1),
          logicalAND: h("&&", 2),
          bitwiseOR: h("|", 3),
          bitwiseXOR: h("^", 4),
          bitwiseAND: h("&", 5),
          equality: h("==/!=/===/!==", 6),
          relational: h("</>/<=/>=", 7),
          bitShift: h("<</>>/>>>", 8),
          plusMin: new a("+/-", {
            beforeExpr: s,
            binop: 9,
            prefix: n,
            startsExpr: r,
          }),
          modulo: new a("%", { beforeExpr: s, binop: 10, startsExpr: r }),
          star: new a("*", { binop: 10 }),
          slash: h("/", 10),
          exponent: new a("**", {
            beforeExpr: s,
            binop: 11,
            rightAssociative: !0,
          }),
          _break: u("break"),
          _case: u("case", { beforeExpr: s }),
          _catch: u("catch"),
          _continue: u("continue"),
          _debugger: u("debugger"),
          _default: u("default", { beforeExpr: s }),
          _do: u("do", { isLoop: i, beforeExpr: s }),
          _else: u("else", { beforeExpr: s }),
          _finally: u("finally"),
          _for: u("for", { isLoop: i }),
          _function: u("function", { startsExpr: r }),
          _if: u("if"),
          _return: u("return", { beforeExpr: s }),
          _switch: u("switch"),
          _throw: u("throw", { beforeExpr: s, prefix: n, startsExpr: r }),
          _try: u("try"),
          _var: u("var"),
          _const: u("const"),
          _while: u("while", { isLoop: i }),
          _with: u("with"),
          _new: u("new", { beforeExpr: s, startsExpr: r }),
          _this: u("this", { startsExpr: r }),
          _super: u("super", { startsExpr: r }),
          _class: u("class", { startsExpr: r }),
          _extends: u("extends", { beforeExpr: s }),
          _export: u("export"),
          _import: u("import", { startsExpr: r }),
          _null: u("null", { startsExpr: r }),
          _true: u("true", { startsExpr: r }),
          _false: u("false", { startsExpr: r }),
          _in: u("in", { beforeExpr: s, binop: 7 }),
          _instanceof: u("instanceof", { beforeExpr: s, binop: 7 }),
          _typeof: u("typeof", { beforeExpr: s, prefix: n, startsExpr: r }),
          _void: u("void", { beforeExpr: s, prefix: n, startsExpr: r }),
          _delete: u("delete", { beforeExpr: s, prefix: n, startsExpr: r }),
        },
        p = 128,
        l = 128,
        d = 1024,
        D = 64,
        m = /\r\n?|[\n\u2028\u2029]/,
        f = new RegExp(m.source, "g");
      function y(t) {
        switch (t) {
          case 10:
          case 13:
          case 8232:
          case 8233:
            return !0;
          default:
            return !1;
        }
      }
      const E = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
      function A(t) {
        switch (t) {
          case 9:
          case 11:
          case 12:
          case 32:
          case 160:
          case 5760:
          case 8192:
          case 8193:
          case 8194:
          case 8195:
          case 8196:
          case 8197:
          case 8198:
          case 8199:
          case 8200:
          case 8201:
          case 8202:
          case 8239:
          case 8287:
          case 12288:
          case 65279:
            return !0;
          default:
            return !1;
        }
      }
      class C {
        constructor(t, e) {
          this.line = void 0,
            this.column = void 0,
            this.line = t,
            this.column = e;
        }
      }
      class x {
        constructor(t, e) {
          this.start = void 0,
            this.end = void 0,
            this.filename = void 0,
            this.identifierName = void 0,
            this.start = t,
            this.end = e;
        }
      }
      function F(t) {
        return t[t.length - 1];
      }
      const g = Object.freeze({
        AccessorIsGenerator: "A %0ter cannot be a generator",
        ArgumentsInClass:
          "'arguments' is only allowed in functions and class methods",
        AsyncFunctionInSingleStatementContext:
          "Async functions can only be declared at the top level or inside a block",
        AwaitBindingIdentifier:
          "Can not use 'await' as identifier inside an async function",
        AwaitExpressionFormalParameter:
          "await is not allowed in async function parameters",
        AwaitNotInAsyncContext:
          "'await' is only allowed within async functions and at the top levels of modules",
        AwaitNotInAsyncFunction:
          "'await' is only allowed within async functions",
        BadGetterArity: "getter must not have any formal parameters",
        BadSetterArity: "setter must have exactly one formal parameter",
        BadSetterRestParameter:
          "setter function argument must not be a rest parameter",
        ConstructorClassField:
          "Classes may not have a field named 'constructor'",
        ConstructorClassPrivateField:
          "Classes may not have a private field named '#constructor'",
        ConstructorIsAccessor: "Class constructor may not be an accessor",
        ConstructorIsAsync: "Constructor can't be an async function",
        ConstructorIsGenerator: "Constructor can't be a generator",
        DeclarationMissingInitializer: "%0 require an initialization value",
        DecoratorBeforeExport:
          "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax",
        DecoratorConstructor:
          "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
        DecoratorExportClass:
          "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.",
        DecoratorSemicolon: "Decorators must not be followed by a semicolon",
        DecoratorStaticBlock: "Decorators can't be used with a static block",
        DeletePrivateField: "Deleting a private field is not allowed",
        DestructureNamedImport:
          "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
        DuplicateConstructor: "Duplicate constructor in the same class",
        DuplicateDefaultExport: "Only one default export allowed per module.",
        DuplicateExport:
          "`%0` has already been exported. Exported identifiers must be unique.",
        DuplicateProto: "Redefinition of __proto__ property",
        DuplicateRegExpFlags: "Duplicate regular expression flag",
        DuplicateStaticBlock: "Duplicate static block in the same class",
        ElementAfterRest: "Rest element must be last element",
        EscapedCharNotAnIdentifier: "Invalid Unicode escape",
        ExportBindingIsString:
          "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { %0 as '%1' } from 'some-module'`?",
        ExportDefaultFromAsIdentifier:
          "'from' is not allowed as an identifier after 'export default'",
        ForInOfLoopInitializer:
          "%0 loop variable declaration may not have an initializer",
        GeneratorInSingleStatementContext:
          "Generators can only be declared at the top level or inside a block",
        IllegalBreakContinue: "Unsyntactic %0",
        IllegalLanguageModeDirective:
          "Illegal 'use strict' directive in function with non-simple parameter list",
        IllegalReturn: "'return' outside of function",
        ImportBindingIsString:
          'A string literal cannot be used as an imported binding.\n- Did you mean `import { "%0" as foo }`?',
        ImportCallArgumentTrailingComma:
          "Trailing comma is disallowed inside import(...) arguments",
        ImportCallArity: "import() requires exactly %0",
        ImportCallNotNewExpression: "Cannot use new with import(...)",
        ImportCallSpreadArgument: "... is not allowed in import()",
        ImportMetaOutsideModule:
          "import.meta may appear only with 'sourceType: \"module\"'",
        ImportOutsideModule:
          "'import' and 'export' may appear only with 'sourceType: \"module\"'",
        InvalidBigIntLiteral: "Invalid BigIntLiteral",
        InvalidCodePoint: "Code point out of bounds",
        InvalidDecimal: "Invalid decimal",
        InvalidDigit: "Expected number in radix %0",
        InvalidEscapeSequence: "Bad character escape sequence",
        InvalidEscapeSequenceTemplate: "Invalid escape sequence in template",
        InvalidEscapedReservedWord: "Escape sequence in keyword %0",
        InvalidIdentifier: "Invalid identifier %0",
        InvalidLhs: "Invalid left-hand side in %0",
        InvalidLhsBinding: "Binding invalid left-hand side in %0",
        InvalidNumber: "Invalid number",
        InvalidOrMissingExponent:
          "Floating-point numbers require a valid exponent after the 'e'",
        InvalidOrUnexpectedToken: "Unexpected character '%0'",
        InvalidParenthesizedAssignment:
          "Invalid parenthesized assignment pattern",
        InvalidPrivateFieldResolution: "Private name #%0 is not defined",
        InvalidPropertyBindingPattern: "Binding member expression",
        InvalidRecordProperty:
          "Only properties and spread elements are allowed in record definitions",
        InvalidRestAssignmentPattern: "Invalid rest operator's argument",
        LabelRedeclaration: "Label '%0' is already declared",
        LetInLexicalBinding:
          "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
        LineTerminatorBeforeArrow: "No line break is allowed before '=>'",
        MalformedRegExpFlags: "Invalid regular expression flag",
        MissingClassName: "A class name is required",
        MissingEqInAssignment:
          "Only '=' operator can be used for specifying default value.",
        MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX",
        MixingCoalesceWithLogical:
          "Nullish coalescing operator(??) requires parens when mixing with logical operators",
        ModuleAttributeDifferentFromType:
          "The only accepted module attribute is `type`",
        ModuleAttributeInvalidValue:
          "Only string literals are allowed as module attribute values",
        ModuleAttributesWithDuplicateKeys:
          'Duplicate key "%0" is not allowed in module attributes',
        ModuleExportNameHasLoneSurrogate:
          "An export name cannot include a lone surrogate, found '\\u%0'",
        ModuleExportUndefined: "Export '%0' is not defined",
        MultipleDefaultsInSwitch: "Multiple default clauses",
        NewlineAfterThrow: "Illegal newline after throw",
        NoCatchOrFinally: "Missing catch or finally clause",
        NumberIdentifier: "Identifier directly after number",
        NumericSeparatorInEscapeSequence:
          "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences",
        ObsoleteAwaitStar:
          "await* has been removed from the async functions proposal. Use Promise.all() instead.",
        OptionalChainingNoNew:
          "constructors in/after an Optional Chain are not allowed",
        OptionalChainingNoTemplate:
          "Tagged Template Literals are not allowed in optionalChain",
        ParamDupe: "Argument name clash",
        PatternHasAccessor: "Object pattern can't contain getter or setter",
        PatternHasMethod: "Object pattern can't contain methods",
        PipelineBodyNoArrow:
          'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized',
        PipelineBodySequenceExpression:
          "Pipeline body may not be a comma-separated sequence expression",
        PipelineHeadSequenceExpression:
          "Pipeline head should not be a comma-separated sequence expression",
        PipelineTopicUnused:
          "Pipeline is in topic style but does not use topic reference",
        PrimaryTopicNotAllowed:
          "Topic reference was used in a lexical context without topic binding",
        PrimaryTopicRequiresSmartPipeline:
          "Primary Topic Reference found but pipelineOperator not passed 'smart' for 'proposal' option.",
        PrivateInExpectedIn:
          "Private names are only allowed in property accesses (`obj.#%0`) or in `in` expressions (`#%0 in obj`)",
        PrivateNameRedeclaration: "Duplicate private name #%0",
        RecordExpressionBarIncorrectEndSyntaxType:
          "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
        RecordExpressionBarIncorrectStartSyntaxType:
          "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
        RecordExpressionHashIncorrectStartSyntaxType:
          "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'",
        RecordNoProto: "'__proto__' is not allowed in Record expressions",
        RestTrailingComma: "Unexpected trailing comma after rest element",
        SloppyFunction:
          "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
        StaticPrototype: "Classes may not have static property named prototype",
        StrictDelete: "Deleting local variable in strict mode",
        StrictEvalArguments: "Assigning to '%0' in strict mode",
        StrictEvalArgumentsBinding: "Binding '%0' in strict mode",
        StrictFunction:
          "In strict mode code, functions can only be declared at top level or inside a block",
        StrictNumericEscape:
          "The only valid numeric escape in strict mode is '\\0'",
        StrictOctalLiteral:
          "Legacy octal literals are not allowed in strict mode",
        StrictWith: "'with' in strict mode",
        SuperNotAllowed:
          "super() is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
        SuperPrivateField: "Private fields can't be accessed on super",
        TrailingDecorator: "Decorators must be attached to a class element",
        TupleExpressionBarIncorrectEndSyntaxType:
          "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
        TupleExpressionBarIncorrectStartSyntaxType:
          "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
        TupleExpressionHashIncorrectStartSyntaxType:
          "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'",
        UnexpectedArgumentPlaceholder: "Unexpected argument placeholder",
        UnexpectedAwaitAfterPipelineBody:
          'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal',
        UnexpectedDigitAfterHash: "Unexpected digit after hash token",
        UnexpectedImportExport:
          "'import' and 'export' may only appear at the top level",
        UnexpectedKeyword: "Unexpected keyword '%0'",
        UnexpectedLeadingDecorator:
          "Leading decorators must be attached to a class declaration",
        UnexpectedLexicalDeclaration:
          "Lexical declaration cannot appear in a single-statement context",
        UnexpectedNewTarget: "new.target can only be used in functions",
        UnexpectedNumericSeparator:
          "A numeric separator is only allowed between two digits",
        UnexpectedPrivateField:
          "Private names can only be used as the name of a class element (i.e. class C { #p = 42; #m() {} } )\n or a property of member expression (i.e. this.#p).",
        UnexpectedReservedWord: "Unexpected reserved word '%0'",
        UnexpectedSuper: "super is only allowed in object methods and classes",
        UnexpectedToken: "Unexpected token '%0'",
        UnexpectedTokenUnaryExponentiation:
          "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
        UnsupportedBind: "Binding should be performed on object property.",
        UnsupportedDecoratorExport:
          "A decorated export must export a class declaration",
        UnsupportedDefaultExport:
          "Only expressions, functions or classes are allowed as the `default` export.",
        UnsupportedImport: "import can only be used in import() or import.meta",
        UnsupportedMetaProperty: "The only valid meta property for %0 is %0.%1",
        UnsupportedParameterDecorator:
          "Decorators cannot be used to decorate parameters",
        UnsupportedPropertyDecorator:
          "Decorators cannot be used to decorate object literal properties",
        UnsupportedSuper:
          "super can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop])",
        UnterminatedComment: "Unterminated comment",
        UnterminatedRegExp: "Unterminated regular expression",
        UnterminatedString: "Unterminated string constant",
        UnterminatedTemplate: "Unterminated template",
        VarRedeclaration: "Identifier '%0' has already been declared",
        YieldBindingIdentifier:
          "Can not use 'yield' as identifier inside a generator",
        YieldInParameter:
          "Yield expression is not allowed in formal parameters",
        ZeroDigitNumericSeparator:
          "Numeric separator can not be used after leading 0",
      });
      function b(t) {
        return null != t && "Property" === t.type && "init" === t.kind &&
          !1 === t.method;
      }
      class P {
        constructor(t, e, s, r) {
          this.token = void 0,
            this.isExpr = void 0,
            this.preserveSpace = void 0,
            this.override = void 0,
            this.token = t,
            this.isExpr = !!e,
            this.preserveSpace = !!s,
            this.override = r;
        }
      }
      const T = {
        braceStatement: new P("{", !1),
        braceExpression: new P("{", !0),
        recordExpression: new P("#{", !0),
        templateQuasi: new P("${", !1),
        parenStatement: new P("(", !1),
        parenExpression: new P("(", !0),
        template: new P("`", !0, !0, ((t) => t.readTmplToken())),
        functionExpression: new P("function", !0),
        functionStatement: new P("function", !1),
      };
      c.parenR.updateContext = c.braceR.updateContext = function () {
        if (
          1 === this.state.context.length
        ) {
          return void (this.state.exprAllowed = !0);
        }
        let t = this.state.context.pop();
        t === T.braceStatement && "function" === this.curContext().token &&
        (t = this.state.context.pop()), this.state.exprAllowed = !t.isExpr;
      },
        c.name.updateContext = function (t) {
          let e = !1;
          t !== c.dot &&
          ("of" !== this.state.value || this.state.exprAllowed ||
            t === c._function || t === c._class || (e = !0)),
            this.state.exprAllowed = e,
            this.state.isIterator && (this.state.isIterator = !1);
        },
        c.braceL.updateContext = function (t) {
          this.state.context.push(
            this.braceIsBlock(t) ? T.braceStatement : T.braceExpression,
          ), this.state.exprAllowed = !0;
        },
        c.dollarBraceL.updateContext = function () {
          this.state.context.push(T.templateQuasi), this.state.exprAllowed = !0;
        },
        c.parenL.updateContext = function (t) {
          const e = t === c._if || t === c._for || t === c._with ||
            t === c._while;
          this.state.context.push(e ? T.parenStatement : T.parenExpression),
            this.state.exprAllowed = !0;
        },
        c.incDec.updateContext = function () {},
        c._function.updateContext = c._class.updateContext = function (t) {
          !t.beforeExpr || t === c.semi || t === c._else ||
            t === c._return && this.hasPrecedingLineBreak() ||
            (t === c.colon || t === c.braceL) && this.curContext() === T.b_stat
            ? this.state.context.push(T.functionStatement)
            : this.state.context.push(T.functionExpression),
            this.state.exprAllowed = !1;
        },
        c.backQuote.updateContext = function () {
          this.curContext() === T.template
            ? this.state.context.pop()
            : this.state.context.push(T.template), this.state.exprAllowed = !1;
        },
        c.braceHashL.updateContext = function () {
          this.state.context.push(T.recordExpression),
            this.state.exprAllowed = !0;
        };
      let w =
          "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08c7\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9ffc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7ca\ua7f5-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",
        B =
          "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf\u1ac0\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
      const S = new RegExp("[" + w + "]"), N = new RegExp("[" + w + B + "]");
      w = B = null;
      const I = [
          0,
          11,
          2,
          25,
          2,
          18,
          2,
          1,
          2,
          14,
          3,
          13,
          35,
          122,
          70,
          52,
          268,
          28,
          4,
          48,
          48,
          31,
          14,
          29,
          6,
          37,
          11,
          29,
          3,
          35,
          5,
          7,
          2,
          4,
          43,
          157,
          19,
          35,
          5,
          35,
          5,
          39,
          9,
          51,
          157,
          310,
          10,
          21,
          11,
          7,
          153,
          5,
          3,
          0,
          2,
          43,
          2,
          1,
          4,
          0,
          3,
          22,
          11,
          22,
          10,
          30,
          66,
          18,
          2,
          1,
          11,
          21,
          11,
          25,
          71,
          55,
          7,
          1,
          65,
          0,
          16,
          3,
          2,
          2,
          2,
          28,
          43,
          28,
          4,
          28,
          36,
          7,
          2,
          27,
          28,
          53,
          11,
          21,
          11,
          18,
          14,
          17,
          111,
          72,
          56,
          50,
          14,
          50,
          14,
          35,
          349,
          41,
          7,
          1,
          79,
          28,
          11,
          0,
          9,
          21,
          107,
          20,
          28,
          22,
          13,
          52,
          76,
          44,
          33,
          24,
          27,
          35,
          30,
          0,
          3,
          0,
          9,
          34,
          4,
          0,
          13,
          47,
          15,
          3,
          22,
          0,
          2,
          0,
          36,
          17,
          2,
          24,
          85,
          6,
          2,
          0,
          2,
          3,
          2,
          14,
          2,
          9,
          8,
          46,
          39,
          7,
          3,
          1,
          3,
          21,
          2,
          6,
          2,
          1,
          2,
          4,
          4,
          0,
          19,
          0,
          13,
          4,
          159,
          52,
          19,
          3,
          21,
          2,
          31,
          47,
          21,
          1,
          2,
          0,
          185,
          46,
          42,
          3,
          37,
          47,
          21,
          0,
          60,
          42,
          14,
          0,
          72,
          26,
          230,
          43,
          117,
          63,
          32,
          7,
          3,
          0,
          3,
          7,
          2,
          1,
          2,
          23,
          16,
          0,
          2,
          0,
          95,
          7,
          3,
          38,
          17,
          0,
          2,
          0,
          29,
          0,
          11,
          39,
          8,
          0,
          22,
          0,
          12,
          45,
          20,
          0,
          35,
          56,
          264,
          8,
          2,
          36,
          18,
          0,
          50,
          29,
          113,
          6,
          2,
          1,
          2,
          37,
          22,
          0,
          26,
          5,
          2,
          1,
          2,
          31,
          15,
          0,
          328,
          18,
          190,
          0,
          80,
          921,
          103,
          110,
          18,
          195,
          2749,
          1070,
          4050,
          582,
          8634,
          568,
          8,
          30,
          114,
          29,
          19,
          47,
          17,
          3,
          32,
          20,
          6,
          18,
          689,
          63,
          129,
          74,
          6,
          0,
          67,
          12,
          65,
          1,
          2,
          0,
          29,
          6135,
          9,
          1237,
          43,
          8,
          8952,
          286,
          50,
          2,
          18,
          3,
          9,
          395,
          2309,
          106,
          6,
          12,
          4,
          8,
          8,
          9,
          5991,
          84,
          2,
          70,
          2,
          1,
          3,
          0,
          3,
          1,
          3,
          3,
          2,
          11,
          2,
          0,
          2,
          6,
          2,
          64,
          2,
          3,
          3,
          7,
          2,
          6,
          2,
          27,
          2,
          3,
          2,
          4,
          2,
          0,
          4,
          6,
          2,
          339,
          3,
          24,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          30,
          2,
          24,
          2,
          7,
          2357,
          44,
          11,
          6,
          17,
          0,
          370,
          43,
          1301,
          196,
          60,
          67,
          8,
          0,
          1205,
          3,
          2,
          26,
          2,
          1,
          2,
          0,
          3,
          0,
          2,
          9,
          2,
          3,
          2,
          0,
          2,
          0,
          7,
          0,
          5,
          0,
          2,
          0,
          2,
          0,
          2,
          2,
          2,
          1,
          2,
          0,
          3,
          0,
          2,
          0,
          2,
          0,
          2,
          0,
          2,
          0,
          2,
          1,
          2,
          0,
          3,
          3,
          2,
          6,
          2,
          3,
          2,
          3,
          2,
          0,
          2,
          9,
          2,
          16,
          6,
          2,
          2,
          4,
          2,
          16,
          4421,
          42717,
          35,
          4148,
          12,
          221,
          3,
          5761,
          15,
          7472,
          3104,
          541,
          1507,
          4938,
        ],
        v = [
          509,
          0,
          227,
          0,
          150,
          4,
          294,
          9,
          1368,
          2,
          2,
          1,
          6,
          3,
          41,
          2,
          5,
          0,
          166,
          1,
          574,
          3,
          9,
          9,
          370,
          1,
          154,
          10,
          176,
          2,
          54,
          14,
          32,
          9,
          16,
          3,
          46,
          10,
          54,
          9,
          7,
          2,
          37,
          13,
          2,
          9,
          6,
          1,
          45,
          0,
          13,
          2,
          49,
          13,
          9,
          3,
          2,
          11,
          83,
          11,
          7,
          0,
          161,
          11,
          6,
          9,
          7,
          3,
          56,
          1,
          2,
          6,
          3,
          1,
          3,
          2,
          10,
          0,
          11,
          1,
          3,
          6,
          4,
          4,
          193,
          17,
          10,
          9,
          5,
          0,
          82,
          19,
          13,
          9,
          214,
          6,
          3,
          8,
          28,
          1,
          83,
          16,
          16,
          9,
          82,
          12,
          9,
          9,
          84,
          14,
          5,
          9,
          243,
          14,
          166,
          9,
          71,
          5,
          2,
          1,
          3,
          3,
          2,
          0,
          2,
          1,
          13,
          9,
          120,
          6,
          3,
          6,
          4,
          0,
          29,
          9,
          41,
          6,
          2,
          3,
          9,
          0,
          10,
          10,
          47,
          15,
          406,
          7,
          2,
          7,
          17,
          9,
          57,
          21,
          2,
          13,
          123,
          5,
          4,
          0,
          2,
          1,
          2,
          6,
          2,
          0,
          9,
          9,
          49,
          4,
          2,
          1,
          2,
          4,
          9,
          9,
          330,
          3,
          19306,
          9,
          135,
          4,
          60,
          6,
          26,
          9,
          1014,
          0,
          2,
          54,
          8,
          3,
          82,
          0,
          12,
          1,
          19628,
          1,
          5319,
          4,
          4,
          5,
          9,
          7,
          3,
          6,
          31,
          3,
          149,
          2,
          1418,
          49,
          513,
          54,
          5,
          49,
          9,
          0,
          15,
          0,
          23,
          4,
          2,
          14,
          1361,
          6,
          2,
          16,
          3,
          6,
          2,
          1,
          2,
          4,
          262,
          6,
          10,
          9,
          419,
          13,
          1495,
          6,
          110,
          6,
          6,
          9,
          4759,
          9,
          787719,
          239,
        ];
      function k(t, e) {
        let s = 65536;
        for (let r = 0, i = e.length; r < i; r += 2) {
          if (s += e[r], s > t)return !1;
          if (s += e[r + 1], s >= t)return !0;
        }
        return !1;
      }
      function L(t) {
        return t < 65
          ? 36 === t
          : t <= 90 || (t < 97 ? 95 === t : t <= 122 || (t <= 65535
            ? t >= 170 && S.test(String.fromCharCode(t))
            : k(t, I)));
      }
      function O(t) {
        return t < 48
          ? 36 === t
          : t < 58 || !(t < 65) && (t <= 90 || (t < 97
                ? 95 === t
                : t <= 122 || (t <= 65535
                  ? t >= 170 && N.test(String.fromCharCode(t))
                  : k(t, I) || k(t, v))));
      }
      const M = [
          "implements",
          "interface",
          "let",
          "package",
          "private",
          "protected",
          "public",
          "static",
          "yield",
        ],
        R = ["eval", "arguments"],
        _ = new Set([
          "break",
          "case",
          "catch",
          "continue",
          "debugger",
          "default",
          "do",
          "else",
          "finally",
          "for",
          "function",
          "if",
          "return",
          "switch",
          "throw",
          "try",
          "var",
          "const",
          "while",
          "with",
          "new",
          "this",
          "super",
          "class",
          "extends",
          "export",
          "import",
          "null",
          "true",
          "false",
          "in",
          "instanceof",
          "typeof",
          "void",
          "delete",
        ]),
        j = new Set(M),
        U = new Set(R);
      function q(t, e) {
        return e && "await" === t || "enum" === t;
      }
      function V(t, e) {
        return q(t, e) || j.has(t);
      }
      function z(t) {
        return U.has(t);
      }
      function H(t, e) {
        return V(t, e) || z(t);
      }
      function W(t) {
        return _.has(t);
      }
      const G = /^in(stanceof)?$/;
      const X = new Set([
          "_",
          "any",
          "bool",
          "boolean",
          "empty",
          "extends",
          "false",
          "interface",
          "mixed",
          "null",
          "number",
          "static",
          "string",
          "true",
          "typeof",
          "void",
        ]),
        K = Object.freeze({
          AmbiguousConditionalArrow:
            "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
          AmbiguousDeclareModuleKind:
            "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module",
          AssignReservedType: "Cannot overwrite reserved type %0",
          DeclareClassElement:
            "The `declare` modifier can only appear on class fields.",
          DeclareClassFieldInitializer:
            "Initializers are not allowed in fields with the `declare` modifier.",
          DuplicateDeclareModuleExports:
            "Duplicate `declare module.exports` statement",
          EnumBooleanMemberNotInitialized:
            "Boolean enum members need to be initialized. Use either `%0 = true,` or `%0 = false,` in enum `%1`.",
          EnumDuplicateMemberName:
            "Enum member names need to be unique, but the name `%0` has already been used before in enum `%1`.",
          EnumInconsistentMemberValues:
            "Enum `%0` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.",
          EnumInvalidExplicitType:
            "Enum type `%1` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
          EnumInvalidExplicitTypeUnknownSupplied:
            "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
          EnumInvalidMemberInitializerPrimaryType:
            "Enum `%0` has type `%2`, so the initializer of `%1` needs to be a %2 literal.",
          EnumInvalidMemberInitializerSymbolType:
            "Symbol enum members cannot be initialized. Use `%1,` in enum `%0`.",
          EnumInvalidMemberInitializerUnknownType:
            "The enum member initializer for `%1` needs to be a literal (either a boolean, number, or string) in enum `%0`.",
          EnumInvalidMemberName:
            "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `%0`, consider using `%1`, in enum `%2`.",
          EnumNumberMemberNotInitialized:
            "Number enum members need to be initialized, e.g. `%1 = 1` in enum `%0`.",
          EnumStringMemberInconsistentlyInitailized:
            "String enum members need to consistently either all use initializers, or use no initializers, in enum `%0`.",
          ImportTypeShorthandOnlyInPureImport:
            "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements",
          InexactInsideExact:
            "Explicit inexact syntax cannot appear inside an explicit exact object type",
          InexactInsideNonObject:
            "Explicit inexact syntax cannot appear in class or interface definitions",
          InexactVariance: "Explicit inexact syntax cannot have variance",
          InvalidNonTypeImportInDeclareModule:
            "Imports within a `declare module` body must always be `import type` or `import typeof`",
          MissingTypeParamDefault:
            "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
          NestedDeclareModule:
            "`declare module` cannot be used inside another `declare module`",
          NestedFlowComment:
            "Cannot have a flow comment inside another flow comment",
          OptionalBindingPattern:
            "A binding pattern parameter cannot be optional in an implementation signature.",
          SpreadVariance: "Spread properties cannot have variance",
          TypeBeforeInitializer:
            "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`",
          TypeCastInPattern:
            "The type cast expression is expected to be wrapped with parenthesis",
          UnexpectedExplicitInexactInObject:
            "Explicit inexact syntax must appear at the end of an inexact object",
          UnexpectedReservedType: "Unexpected reserved type %0",
          UnexpectedReservedUnderscore:
            "`_` is only allowed as a type argument to call or new",
          UnexpectedSpaceBetweenModuloChecks:
            "Spaces between `%` and `checks` are not allowed here.",
          UnexpectedSpreadType:
            "Spread operator cannot appear in class or interface definitions",
          UnexpectedSubtractionOperand:
            'Unexpected token, expected "number" or "bigint"',
          UnexpectedTokenAfterTypeParameter:
            "Expected an arrow function after this type parameter declaration",
          UnexpectedTypeParameterBeforeAsyncArrowFunction:
            "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`",
          UnsupportedDeclareExportKind:
            "`declare export %0` is not supported. Use `%1` instead",
          UnsupportedStatementInDeclareModule:
            "Only declares and type imports are allowed inside declare module",
          UnterminatedFlowComment: "Unterminated flow-comment",
        });
      function J(t) {
        return "type" === t.importKind || "typeof" === t.importKind;
      }
      function $(t) {
        return (t.type === c.name || !!t.type.keyword) && "from" !== t.value;
      }
      const Y = {
        const: "declare export var",
        let: "declare export var",
        type: "export type",
        interface: "export interface",
      };
      const Q = /\*?\s*@((?:no)?flow)\b/;
      const Z = {
          quot: '"',
          amp: "&",
          apos: "'",
          lt: "<",
          gt: ">",
          nbsp: "\xa0",
          iexcl: "\xa1",
          cent: "\xa2",
          pound: "\xa3",
          curren: "\xa4",
          yen: "\xa5",
          brvbar: "\xa6",
          sect: "\xa7",
          uml: "\xa8",
          copy: "\xa9",
          ordf: "\xaa",
          laquo: "\xab",
          not: "\xac",
          shy: "\xad",
          reg: "\xae",
          macr: "\xaf",
          deg: "\xb0",
          plusmn: "\xb1",
          sup2: "\xb2",
          sup3: "\xb3",
          acute: "\xb4",
          micro: "\xb5",
          para: "\xb6",
          middot: "\xb7",
          cedil: "\xb8",
          sup1: "\xb9",
          ordm: "\xba",
          raquo: "\xbb",
          frac14: "\xbc",
          frac12: "\xbd",
          frac34: "\xbe",
          iquest: "\xbf",
          Agrave: "\xc0",
          Aacute: "\xc1",
          Acirc: "\xc2",
          Atilde: "\xc3",
          Auml: "\xc4",
          Aring: "\xc5",
          AElig: "\xc6",
          Ccedil: "\xc7",
          Egrave: "\xc8",
          Eacute: "\xc9",
          Ecirc: "\xca",
          Euml: "\xcb",
          Igrave: "\xcc",
          Iacute: "\xcd",
          Icirc: "\xce",
          Iuml: "\xcf",
          ETH: "\xd0",
          Ntilde: "\xd1",
          Ograve: "\xd2",
          Oacute: "\xd3",
          Ocirc: "\xd4",
          Otilde: "\xd5",
          Ouml: "\xd6",
          times: "\xd7",
          Oslash: "\xd8",
          Ugrave: "\xd9",
          Uacute: "\xda",
          Ucirc: "\xdb",
          Uuml: "\xdc",
          Yacute: "\xdd",
          THORN: "\xde",
          szlig: "\xdf",
          agrave: "\xe0",
          aacute: "\xe1",
          acirc: "\xe2",
          atilde: "\xe3",
          auml: "\xe4",
          aring: "\xe5",
          aelig: "\xe6",
          ccedil: "\xe7",
          egrave: "\xe8",
          eacute: "\xe9",
          ecirc: "\xea",
          euml: "\xeb",
          igrave: "\xec",
          iacute: "\xed",
          icirc: "\xee",
          iuml: "\xef",
          eth: "\xf0",
          ntilde: "\xf1",
          ograve: "\xf2",
          oacute: "\xf3",
          ocirc: "\xf4",
          otilde: "\xf5",
          ouml: "\xf6",
          divide: "\xf7",
          oslash: "\xf8",
          ugrave: "\xf9",
          uacute: "\xfa",
          ucirc: "\xfb",
          uuml: "\xfc",
          yacute: "\xfd",
          thorn: "\xfe",
          yuml: "\xff",
          OElig: "\u0152",
          oelig: "\u0153",
          Scaron: "\u0160",
          scaron: "\u0161",
          Yuml: "\u0178",
          fnof: "\u0192",
          circ: "\u02c6",
          tilde: "\u02dc",
          Alpha: "\u0391",
          Beta: "\u0392",
          Gamma: "\u0393",
          Delta: "\u0394",
          Epsilon: "\u0395",
          Zeta: "\u0396",
          Eta: "\u0397",
          Theta: "\u0398",
          Iota: "\u0399",
          Kappa: "\u039a",
          Lambda: "\u039b",
          Mu: "\u039c",
          Nu: "\u039d",
          Xi: "\u039e",
          Omicron: "\u039f",
          Pi: "\u03a0",
          Rho: "\u03a1",
          Sigma: "\u03a3",
          Tau: "\u03a4",
          Upsilon: "\u03a5",
          Phi: "\u03a6",
          Chi: "\u03a7",
          Psi: "\u03a8",
          Omega: "\u03a9",
          alpha: "\u03b1",
          beta: "\u03b2",
          gamma: "\u03b3",
          delta: "\u03b4",
          epsilon: "\u03b5",
          zeta: "\u03b6",
          eta: "\u03b7",
          theta: "\u03b8",
          iota: "\u03b9",
          kappa: "\u03ba",
          lambda: "\u03bb",
          mu: "\u03bc",
          nu: "\u03bd",
          xi: "\u03be",
          omicron: "\u03bf",
          pi: "\u03c0",
          rho: "\u03c1",
          sigmaf: "\u03c2",
          sigma: "\u03c3",
          tau: "\u03c4",
          upsilon: "\u03c5",
          phi: "\u03c6",
          chi: "\u03c7",
          psi: "\u03c8",
          omega: "\u03c9",
          thetasym: "\u03d1",
          upsih: "\u03d2",
          piv: "\u03d6",
          ensp: "\u2002",
          emsp: "\u2003",
          thinsp: "\u2009",
          zwnj: "\u200c",
          zwj: "\u200d",
          lrm: "\u200e",
          rlm: "\u200f",
          ndash: "\u2013",
          mdash: "\u2014",
          lsquo: "\u2018",
          rsquo: "\u2019",
          sbquo: "\u201a",
          ldquo: "\u201c",
          rdquo: "\u201d",
          bdquo: "\u201e",
          dagger: "\u2020",
          Dagger: "\u2021",
          bull: "\u2022",
          hellip: "\u2026",
          permil: "\u2030",
          prime: "\u2032",
          Prime: "\u2033",
          lsaquo: "\u2039",
          rsaquo: "\u203a",
          oline: "\u203e",
          frasl: "\u2044",
          euro: "\u20ac",
          image: "\u2111",
          weierp: "\u2118",
          real: "\u211c",
          trade: "\u2122",
          alefsym: "\u2135",
          larr: "\u2190",
          uarr: "\u2191",
          rarr: "\u2192",
          darr: "\u2193",
          harr: "\u2194",
          crarr: "\u21b5",
          lArr: "\u21d0",
          uArr: "\u21d1",
          rArr: "\u21d2",
          dArr: "\u21d3",
          hArr: "\u21d4",
          forall: "\u2200",
          part: "\u2202",
          exist: "\u2203",
          empty: "\u2205",
          nabla: "\u2207",
          isin: "\u2208",
          notin: "\u2209",
          ni: "\u220b",
          prod: "\u220f",
          sum: "\u2211",
          minus: "\u2212",
          lowast: "\u2217",
          radic: "\u221a",
          prop: "\u221d",
          infin: "\u221e",
          ang: "\u2220",
          and: "\u2227",
          or: "\u2228",
          cap: "\u2229",
          cup: "\u222a",
          int: "\u222b",
          there4: "\u2234",
          sim: "\u223c",
          cong: "\u2245",
          asymp: "\u2248",
          ne: "\u2260",
          equiv: "\u2261",
          le: "\u2264",
          ge: "\u2265",
          sub: "\u2282",
          sup: "\u2283",
          nsub: "\u2284",
          sube: "\u2286",
          supe: "\u2287",
          oplus: "\u2295",
          otimes: "\u2297",
          perp: "\u22a5",
          sdot: "\u22c5",
          lceil: "\u2308",
          rceil: "\u2309",
          lfloor: "\u230a",
          rfloor: "\u230b",
          lang: "\u2329",
          rang: "\u232a",
          loz: "\u25ca",
          spades: "\u2660",
          clubs: "\u2663",
          hearts: "\u2665",
          diams: "\u2666",
        },
        tt = /^[\da-fA-F]+$/,
        et = /^\d+$/,
        st = Object.freeze({
          AttributeIsEmpty:
            "JSX attributes must only be assigned a non-empty expression",
          MissingClosingTagFragment:
            "Expected corresponding JSX closing tag for <>",
          MissingClosingTagElement:
            "Expected corresponding JSX closing tag for <%0>",
          UnsupportedJsxValue:
            "JSX value should be either an expression or a quoted JSX text",
          UnterminatedJsxContent: "Unterminated JSX contents",
          UnwrappedAdjacentJSXElements:
            "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?",
        });
      function rt(t) {
        return !!t &&
          ("JSXOpeningFragment" === t.type || "JSXClosingFragment" === t.type);
      }
      function it(t) {
        if ("JSXIdentifier" === t.type) return t.name;
        if ("JSXNamespacedName" === t.type) {
          return t.namespace.name + ":" + t.name.name;
        }
        if ("JSXMemberExpression" === t.type) {
          return it(t.object) + "." + it(t.property);
        }
        throw new Error("Node had unexpected type: " + t.type);
      }
      T.j_oTag = new P("<tag", !1),
        T.j_cTag = new P("</tag", !1),
        T.j_expr = new P("<tag>...</tag>", !0, !0),
        c.jsxName = new a("jsxName"),
        c.jsxText = new a("jsxText", { beforeExpr: !0 }),
        c.jsxTagStart = new a("jsxTagStart", { startsExpr: !0 }),
        c.jsxTagEnd = new a("jsxTagEnd"),
        c.jsxTagStart.updateContext = function () {
          this.state.context.push(T.j_expr),
            this.state.context.push(T.j_oTag),
            this.state.exprAllowed = !1;
        },
        c.jsxTagEnd.updateContext = function (t) {
          const e = this.state.context.pop();
          e === T.j_oTag && t === c.slash || e === T.j_cTag
            ? (this.state.context.pop(),
              this.state.exprAllowed = this.curContext() === T.j_expr)
            : this.state.exprAllowed = !0;
        };
      class nt {
        constructor(t) {
          this.flags = void 0,
            this.var = [],
            this.lexical = [],
            this.functions = [],
            this.flags = t;
        }
      }
      class at {
        constructor(t, e) {
          this.scopeStack = [],
            this.undefinedExports = new Map(),
            this.undefinedPrivateNames = new Map(),
            this.raise = t,
            this.inModule = e;
        }
        get inFunction() {
          return (2 & this.currentVarScope().flags) > 0;
        }
        get allowSuper() {
          return (16 & this.currentThisScope().flags) > 0;
        }
        get allowDirectSuper() {
          return (32 & this.currentThisScope().flags) > 0;
        }
        get inClass() {
          return (64 & this.currentThisScope().flags) > 0;
        }
        get inNonArrowFunction() {
          return (2 & this.currentThisScope().flags) > 0;
        }
        get treatFunctionsAsVar() {
          return this.treatFunctionsAsVarInScope(this.currentScope());
        }
        createScope(t) {
          return new nt(t);
        }
        enter(t) {
          this.scopeStack.push(this.createScope(t));
        }
        exit() {
          this.scopeStack.pop();
        }
        treatFunctionsAsVarInScope(t) {
          return !!(2 & t.flags || !this.inModule && 1 & t.flags);
        }
        declareName(t, e, s) {
          let r = this.currentScope();
          if (8 & e || 16 & e) {
            this.checkRedeclarationInScope(r, t, e, s),
              16 & e
                ? r.functions.push(t)
                : r.lexical.push(t),
              8 & e && this.maybeExportDefined(r, t);
          } else if (4 & e) {
            for (
              let i = this.scopeStack.length - 1;
              i >= 0 &&
              (r = this.scopeStack[i],
                this.checkRedeclarationInScope(r, t, e, s),
                r.var.push(t),
                this.maybeExportDefined(r, t),
                !(131 & r.flags));
              --i
            );
          }
          this.inModule && 1 & r.flags && this.undefinedExports.delete(t);
        }
        maybeExportDefined(t, e) {
          this.inModule && 1 & t.flags && this.undefinedExports.delete(e);
        }
        checkRedeclarationInScope(t, e, s, r) {
          this.isRedeclaredInScope(t, e, s) &&
            this.raise(r, g.VarRedeclaration, e);
        }
        isRedeclaredInScope(t, e, s) {
          return !!(1 & s) && (8 & s
            ? t.lexical.indexOf(e) > -1 || t.functions.indexOf(e) > -1 ||
              t.var.indexOf(e) > -1
            : 16 & s
            ? t.lexical.indexOf(e) > -1 ||
              !this.treatFunctionsAsVarInScope(t) && t.var.indexOf(e) > -1
            : t.lexical.indexOf(e) > -1 &&
                !(8 & t.flags && t.lexical[0] === e) ||
              !this.treatFunctionsAsVarInScope(t) &&
                t.functions.indexOf(e) > -1);
        }
        checkLocalExport(t) {
          -1 === this.scopeStack[0].lexical.indexOf(t.name) &&
            -1 === this.scopeStack[0].var.indexOf(t.name) &&
            -1 === this.scopeStack[0].functions.indexOf(t.name) &&
            this.undefinedExports.set(t.name, t.start);
        }
        currentScope() {
          return this.scopeStack[this.scopeStack.length - 1];
        }
        currentVarScope() {
          for (let t = this.scopeStack.length - 1;; t--) {
            const e = this.scopeStack[t];
            if (131 & e.flags)return e;
          }
        }
        currentThisScope() {
          for (let t = this.scopeStack.length - 1;; t--) {
            const e = this.scopeStack[t];
            if ((131 & e.flags || 64 & e.flags) && !(4 & e.flags)) return e;
          }
        }
      }
      class ot extends nt {
        constructor(...t) {
          super(...t),
            this.types = [],
            this.enums = [],
            this.constEnums = [],
            this.classes = [],
            this.exportOnlyBindings = [];
        }
      }
      class ut extends at {
        createScope(t) {
          return new ot(t);
        }
        declareName(t, e, s) {
          const r = this.currentScope();
          if (e & d) {return this.maybeExportDefined(r, t),
              void r.exportOnlyBindings.push(t);}
          super.declareName(...arguments),
            2 & e &&
            (1 & e ||
              (this.checkRedeclarationInScope(r, t, e, s),
                this.maybeExportDefined(r, t)),
              r.types.push(t)),
            256 & e && r.enums.push(t),
            512 & e && r.constEnums.push(t),
            e & l && r.classes.push(t);
        }
        isRedeclaredInScope(t, e, s) {
          if (t.enums.indexOf(e) > -1) {
            if (256 & s) return !!(512 & s) !== t.constEnums.indexOf(e) > -1;
            return !0;
          }
          return s & l && t.classes.indexOf(e) > -1
            ? t.lexical.indexOf(e) > -1 && !!(1 & s)
            : !!(2 & s && t.types.indexOf(e) > -1) ||
              super.isRedeclaredInScope(...arguments);
        }
        checkLocalExport(t) {
          -1 === this.scopeStack[0].types.indexOf(t.name) &&
            -1 === this.scopeStack[0].exportOnlyBindings.indexOf(t.name) &&
            super.checkLocalExport(t);
        }
      }
      class ht {
        constructor() {
          this.stacks = [];
        }
        enter(t) {
          this.stacks.push(t);
        }
        exit() {
          this.stacks.pop();
        }
        currentFlags() {
          return this.stacks[this.stacks.length - 1];
        }
        get hasAwait() {
          return (2 & this.currentFlags()) > 0;
        }
        get hasYield() {
          return (1 & this.currentFlags()) > 0;
        }
        get hasReturn() {
          return (4 & this.currentFlags()) > 0;
        }
        get hasIn() {
          return (8 & this.currentFlags()) > 0;
        }
      }
      function ct(t, e) {
        return (t ? 2 : 0) | (e ? 1 : 0);
      }
      function pt(t) {
        if (null == t) throw new Error("Unexpected ".concat(t, " value."));
        return t;
      }
      function lt(t) {
        if (!t) throw new Error("Assert fail");
      }
      const dt = Object.freeze({
        ClassMethodHasDeclare:
          "Class methods cannot have the 'declare' modifier",
        ClassMethodHasReadonly:
          "Class methods cannot have the 'readonly' modifier",
        ConstructorHasTypeParameters:
          "Type parameters cannot appear on a constructor declaration.",
        DeclareClassFieldHasInitializer:
          "Initializers are not allowed in ambient contexts.",
        DeclareFunctionHasImplementation:
          "An implementation cannot be declared in ambient contexts.",
        DuplicateModifier: "Duplicate modifier: '%0'",
        EmptyHeritageClauseType: "'%0' list cannot be empty.",
        EmptyTypeArguments: "Type argument list cannot be empty.",
        EmptyTypeParameters: "Type parameter list cannot be empty.",
        IndexSignatureHasAbstract:
          "Index signatures cannot have the 'abstract' modifier",
        IndexSignatureHasAccessibility:
          "Index signatures cannot have an accessibility modifier ('%0')",
        IndexSignatureHasStatic:
          "Index signatures cannot have the 'static' modifier",
        IndexSignatureHasDeclare:
          "Index signatures cannot have the 'declare' modifier",
        InvalidTupleMemberLabel:
          "Tuple members must be labeled with a simple identifier.",
        MixedLabeledAndUnlabeledElements:
          "Tuple members must all have names or all not have names.",
        OptionalTypeBeforeRequired:
          "A required element cannot follow an optional element.",
        PatternIsOptional:
          "A binding pattern parameter cannot be optional in an implementation signature.",
        PrivateElementHasAbstract:
          "Private elements cannot have the 'abstract' modifier.",
        PrivateElementHasAccessibility:
          "Private elements cannot have an accessibility modifier ('%0')",
        TypeAnnotationAfterAssign:
          "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`",
        UnexpectedParameterModifier:
          "A parameter property is only allowed in a constructor implementation.",
        UnexpectedReadonly:
          "'readonly' type modifier is only permitted on array and tuple literal types.",
        UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
        UnexpectedTypeCastInParameter:
          "Unexpected type cast in parameter position.",
        UnsupportedImportTypeArgument:
          "Argument in a type import must be a string literal",
        UnsupportedParameterPropertyKind:
          "A parameter property may not be declared using a binding pattern.",
        UnsupportedSignatureParameterKind:
          "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got %0",
      });
      c.placeholder = new a("%%", { startsExpr: !0 });
      function Dt(t, e) {
        return t.some(((t) => Array.isArray(t) ? t[0] === e : t === e));
      }
      function mt(t, e, s) {
        const r = t.find(
          ((t) => Array.isArray(t) ? t[0] === e : t === e),
        );
        return r && Array.isArray(r) ? r[1][s] : null;
      }
      const ft = ["minimal", "smart", "fsharp"], yt = ["hash", "bar"];
      const Et = {
          estree: (t) =>
            class extends t {
              estreeParseRegExpLiteral({ pattern: t, flags: e }) {
                let s = null;
                try {
                  s = new RegExp(t, e);
                } catch (t) {}
                const r = this.estreeParseLiteral(s);
                return r.regex = { pattern: t, flags: e }, r;
              }
              estreeParseBigIntLiteral(t) {
                const e = "undefined" != typeof BigInt ? BigInt(t) : null,
                  s = this.estreeParseLiteral(e);
                return s.bigint = String(s.value || t), s;
              }
              estreeParseDecimalLiteral(t) {
                const e = this.estreeParseLiteral(null);
                return e.decimal = String(e.value || t), e;
              }
              estreeParseLiteral(t) {
                return this.parseLiteral(t, "Literal");
              }
              directiveToStmt(t) {
                const e = t.value,
                  s = this.startNodeAt(t.start, t.loc.start),
                  r = this.startNodeAt(e.start, e.loc.start);
                return r.value = e.value,
                  r.raw = e.extra.raw,
                  s.expression = this.finishNodeAt(
                    r,
                    "Literal",
                    e.end,
                    e.loc.end,
                  ),
                  s.directive = e.extra.raw.slice(1, -1),
                  this.finishNodeAt(s, "ExpressionStatement", t.end, t.loc.end);
              }
              initFunction(t, e) {
                super.initFunction(t, e), t.expression = !1;
              }
              checkDeclaration(t) {
                b(t)
                  ? this.checkDeclaration(t.value)
                  : super.checkDeclaration(t);
              }
              getObjectOrClassMethodParams(t) {
                return t.value.params;
              }
              checkLVal(t, e = 64, s, r, i) {
                switch (t.type) {
                  case "ObjectPattern":
                    t.properties.forEach(
                      ((t) => {
                        this.checkLVal(
                          "Property" === t.type
                            ? t.value
                            : t,
                          e,
                          s,
                          "object destructuring pattern",
                          i,
                        );
                      }),
                    );
                    break;
                  default:
                    super.checkLVal(t, e, s, r, i);
                }
              }
              checkProto(t, e, s, r) {
                t.method || super.checkProto(t, e, s, r);
              }
              isValidDirective(t) {
                var e;
                return "ExpressionStatement" === t.type &&
                  "Literal" === t.expression.type &&
                  "string" == typeof t.expression.value &&
                  !(null == (e = t.expression.extra) ? void 0
                  : e.parenthesized);
              }
              stmtToDirective(t) {
                const e = super.stmtToDirective(t), s = t.expression.value;
                return e.value.value = s, e;
              }
              parseBlockBody(t, e, s, r) {
                super.parseBlockBody(t, e, s, r);
                const i = t.directives.map(((t) => this.directiveToStmt(t)));
                t.body = i.concat(t.body), delete t.directives;
              }
              pushClassMethod(t, e, s, r, i, n) {
                this.parseMethod(e, s, r, i, n, "ClassMethod", !0),
                  e.typeParameters &&
                  (e.value.typeParameters = e.typeParameters,
                    delete e.typeParameters),
                  t.body.push(e);
              }
              parseExprAtom(t) {
                switch (this.state.type) {
                  case c.num:
                  case c.string:
                    return this.estreeParseLiteral(this.state.value);
                  case c.regexp:
                    return this.estreeParseRegExpLiteral(this.state.value);
                  case c.bigint:
                    return this.estreeParseBigIntLiteral(this.state.value);
                  case c.decimal:
                    return this.estreeParseDecimalLiteral(this.state.value);
                  case c._null:
                    return this.estreeParseLiteral(null);
                  case c._true:
                    return this.estreeParseLiteral(!0);
                  case c._false:
                    return this.estreeParseLiteral(!1);
                  default:
                    return super.parseExprAtom(t);
                }
              }
              parseLiteral(t, e, s, r) {
                const i = super.parseLiteral(t, e, s, r);
                return i.raw = i.extra.raw, delete i.extra, i;
              }
              parseFunctionBody(t, e, s = !1) {
                super.parseFunctionBody(t, e, s),
                  t.expression = "BlockStatement" !== t.body.type;
              }
              parseMethod(t, e, s, r, i, n, a = !1) {
                let o = this.startNode();
                return o.kind = t.kind,
                  o = super.parseMethod(o, e, s, r, i, n, a),
                  o.type = "FunctionExpression",
                  delete o.kind,
                  t.value = o,
                  n = "ClassMethod" === n ? "MethodDefinition" : n,
                  this.finishNode(t, n);
              }
              parseObjectMethod(t, e, s, r, i) {
                const n = super.parseObjectMethod(t, e, s, r, i);
                return n &&
                  (n.type = "Property",
                    "method" === n.kind && (n.kind = "init"),
                    n.shorthand = !1),
                  n;
              }
              parseObjectProperty(t, e, s, r, i) {
                const n = super.parseObjectProperty(t, e, s, r, i);
                return n && (n.kind = "init", n.type = "Property"), n;
              }
              toAssignable(t) {
                return b(t) ? (this.toAssignable(t.value), t)
                : super.toAssignable(t);
              }
              toAssignableObjectExpressionProp(t, e) {
                if ("get" === t.kind || "set" === t.kind) {
                  throw this.raise(t.key.start, g.PatternHasAccessor);
                }
                if (t.method) throw this.raise(t.key.start, g.PatternHasMethod);
                super.toAssignableObjectExpressionProp(t, e);
              }
              finishCallExpression(t, e) {
                return super.finishCallExpression(t, e),
                  "Import" === t.callee.type &&
                  (t.type = "ImportExpression",
                    t.source = t.arguments[0],
                    delete t.arguments,
                    delete t.callee),
                  t;
              }
              toReferencedArguments(t) {
                "ImportExpression" !== t.type && super.toReferencedArguments(t);
              }
              parseExport(t) {
                switch (super.parseExport(t), t.type) {
                  case "ExportAllDeclaration":
                    t.exported = null;
                    break;
                  case "ExportNamedDeclaration":
                    1 === t.specifiers.length &&
                      "ExportNamespaceSpecifier" === t.specifiers[0].type &&
                      (t.type = "ExportAllDeclaration",
                        t.exported = t.specifiers[0].exported,
                        delete t.specifiers);
                }
                return t;
              }
              parseSubscript(t, e, s, r, i) {
                const n = super.parseSubscript(t, e, s, r, i);
                if (i.optionalChainMember) {
                  if (
                    "OptionalMemberExpression" !== n.type &&
                      "OptionalCallExpression" !== n.type ||
                    (n.type = n.type.substring(8)), i.stop
                  ) {
                    const t = this.startNodeAtNode(n);
                    return t.expression = n,
                      this.finishNode(t, "ChainExpression");
                  }
                } else {
                  "MemberExpression" !== n.type &&
                      "CallExpression" !== n.type || (n.optional = !1);
                }
                return n;
              }
            },
          jsx: (t) =>
            class extends t {
              jsxReadToken() {
                let t = "", e = this.state.pos;
                for (;;) {
                  if (this.state.pos >= this.length) {
                    throw this.raise(
                      this.state.start,
                      st.UnterminatedJsxContent,
                    );
                  }
                  const s = this.input.charCodeAt(this.state.pos);
                  switch (s) {
                    case 60:
                    case 123:
                      return this.state.pos === this.state.start
                        ? 60 === s && this.state.exprAllowed
                          ? (++this.state.pos, this.finishToken(c.jsxTagStart))
                          : super.getTokenFromCode(s)
                        : (t += this.input.slice(e, this.state.pos),
                          this.finishToken(c.jsxText, t));
                    case 38:
                      t += this.input.slice(e, this.state.pos),
                        t += this.jsxReadEntity(),
                        e = this.state.pos;
                      break;
                    default:
                      y(s)
                        ? (t += this.input.slice(e, this.state.pos),
                          t += this.jsxReadNewLine(!0),
                          e = this.state.pos)
                        : ++this.state.pos;
                  }
                }
              }
              jsxReadNewLine(t) {
                const e = this.input.charCodeAt(this.state.pos);
                let s;
                return ++this.state.pos,
                  13 === e && 10 === this.input.charCodeAt(this.state.pos)
                    ? (++this.state.pos,
                      s = t
                        ? "\n"
                        : "\r\n")
                    : s = String.fromCharCode(e),
                  ++this.state.curLine,
                  this.state.lineStart = this.state.pos,
                  s;
              }
              jsxReadString(t) {
                let e = "", s = ++this.state.pos;
                for (;;) {
                  if (this.state.pos >= this.length) {
                    throw this.raise(this.state.start, g.UnterminatedString);
                  }
                  const r = this.input.charCodeAt(this.state.pos);
                  if (r === t) break;
                  38 === r
                    ? (e += this.input.slice(s, this.state.pos),
                      e += this.jsxReadEntity(),
                      s = this.state.pos)
                    : y(r)
                    ? (e += this.input.slice(s, this.state.pos),
                      e += this.jsxReadNewLine(!1),
                      s = this.state.pos)
                    : ++this.state.pos;
                }
                return e += this.input.slice(s, this.state.pos++),
                  this.finishToken(c.string, e);
              }
              jsxReadEntity() {
                let t, e = "", s = 0, r = this.input[this.state.pos];
                const i = ++this.state.pos;
                for (; this.state.pos < this.length && s++ < 10;) {
                  if (r = this.input[this.state.pos++], ";" === r) {
                    "#" === e[0]
                      ? "x" === e[1]
                        ? (e = e.substr(2),
                          tt.test(e) &&
                          (t = String.fromCodePoint(parseInt(e, 16))))
                        : (e = e.substr(1),
                          et.test(e) &&
                          (t = String.fromCodePoint(parseInt(e, 10))))
                      : t = Z[e];
                    break;
                  }
                  e += r;
                }
                return t || (this.state.pos = i, "&");
              }
              jsxReadWord() {
                let t;
                const e = this.state.pos;
                do {
                  t = this.input.charCodeAt(++this.state.pos);
                } while (O(t) || 45 === t);
                return this.finishToken(
                  c.jsxName,
                  this.input.slice(e, this.state.pos),
                );
              }
              jsxParseIdentifier() {
                const t = this.startNode();
                return this.match(c.jsxName)
                  ? t.name = this.state.value
                  : this.state.type.keyword
                  ? t.name = this.state.type.keyword
                  : this.unexpected(),
                  this.next(),
                  this.finishNode(t, "JSXIdentifier");
              }
              jsxParseNamespacedName() {
                const t = this.state.start,
                  e = this.state.startLoc,
                  s = this.jsxParseIdentifier();
                if (!this.eat(c.colon)) return s;
                const r = this.startNodeAt(t, e);
                return r.namespace = s,
                  r.name = this.jsxParseIdentifier(),
                  this.finishNode(r, "JSXNamespacedName");
              }
              jsxParseElementName() {
                const t = this.state.start, e = this.state.startLoc;
                let s = this.jsxParseNamespacedName();
                if ("JSXNamespacedName" === s.type) return s;
                for (; this.eat(c.dot);) {
                  const r = this.startNodeAt(t, e);
                  r.object = s,
                    r.property = this.jsxParseIdentifier(),
                    s = this.finishNode(r, "JSXMemberExpression");
                }
                return s;
              }
              jsxParseAttributeValue() {
                let t;
                switch (this.state.type) {
                  case c.braceL:
                    return t = this.startNode(),
                      this.next(),
                      t = this.jsxParseExpressionContainer(t),
                      "JSXEmptyExpression" === t.expression.type &&
                      this.raise(t.start, st.AttributeIsEmpty),
                      t;
                  case c.jsxTagStart:
                  case c.string:
                    return this.parseExprAtom();
                  default:
                    throw this.raise(this.state.start, st.UnsupportedJsxValue);
                }
              }
              jsxParseEmptyExpression() {
                const t = this.startNodeAt(
                  this.state.lastTokEnd,
                  this.state.lastTokEndLoc,
                );
                return this.finishNodeAt(
                  t,
                  "JSXEmptyExpression",
                  this.state.start,
                  this.state.startLoc,
                );
              }
              jsxParseSpreadChild(t) {
                return this.next(),
                  t.expression = this.parseExpression(),
                  this.expect(c.braceR),
                  this.finishNode(t, "JSXSpreadChild");
              }
              jsxParseExpressionContainer(t) {
                return this.match(c.braceR)
                  ? t.expression = this.jsxParseEmptyExpression()
                  : t.expression = this.parseExpression(),
                  this.expect(c.braceR),
                  this.finishNode(t, "JSXExpressionContainer");
              }
              jsxParseAttribute() {
                const t = this.startNode();
                return this.eat(c.braceL)
                  ? (this.expect(c.ellipsis),
                    t.argument = this.parseMaybeAssignAllowIn(),
                    this.expect(c.braceR),
                    this.finishNode(t, "JSXSpreadAttribute"))
                  : (t.name = this.jsxParseNamespacedName(),
                    t.value = this.eat(c.eq)
                      ? this.jsxParseAttributeValue()
                      : null,
                    this.finishNode(t, "JSXAttribute"));
              }
              jsxParseOpeningElementAt(t, e) {
                const s = this.startNodeAt(t, e);
                return this.match(c.jsxTagEnd)
                  ? (this.expect(c.jsxTagEnd),
                    this.finishNode(s, "JSXOpeningFragment"))
                  : (s.name = this.jsxParseElementName(),
                    this.jsxParseOpeningElementAfterName(s));
              }
              jsxParseOpeningElementAfterName(t) {
                const e = [];
                for (; !this.match(c.slash) && !this.match(c.jsxTagEnd);) {
                  e.push(this.jsxParseAttribute());
                }
                return t.attributes = e,
                  t.selfClosing = this.eat(c.slash),
                  this.expect(c.jsxTagEnd),
                  this.finishNode(t, "JSXOpeningElement");
              }
              jsxParseClosingElementAt(t, e) {
                const s = this.startNodeAt(t, e);
                return this.match(c.jsxTagEnd)
                  ? (this.expect(c.jsxTagEnd),
                    this.finishNode(s, "JSXClosingFragment"))
                  : (s.name = this.jsxParseElementName(),
                    this.expect(c.jsxTagEnd),
                    this.finishNode(s, "JSXClosingElement"));
              }
              jsxParseElementAt(t, e) {
                const s = this.startNodeAt(t, e),
                  r = [],
                  i = this.jsxParseOpeningElementAt(t, e);
                let n = null;
                if (!i.selfClosing) {
                  t:
                  for (;;) {
                    switch (this.state.type) {
                      case c.jsxTagStart:
                        if (
                          t = this.state.start,
                            e = this.state.startLoc,
                            this.next(),
                            this.eat(c.slash)
                        ) {
                          n = this.jsxParseClosingElementAt(t, e);
                          break t;
                        }
                        r.push(this.jsxParseElementAt(t, e));
                        break;
                      case c.jsxText:
                        r.push(this.parseExprAtom());
                        break;
                      case c.braceL: {
                        const t = this.startNode();
                        this.next(),
                          this.match(c.ellipsis)
                            ? r.push(this.jsxParseSpreadChild(t))
                            : r.push(this.jsxParseExpressionContainer(t));
                        break;
                      }
                      default:
                        throw this.unexpected();
                    }
                  }
                  rt(i) && !rt(n)
                    ? this.raise(n.start, st.MissingClosingTagFragment)
                    : !rt(i) && rt(n)
                    ? this.raise(
                      n.start,
                      st.MissingClosingTagElement,
                      it(i.name),
                    )
                    : rt(i) || rt(n) ||
                      it(n.name) !== it(i.name) &&
                        this.raise(
                          n.start,
                          st.MissingClosingTagElement,
                          it(i.name),
                        );
                }
                if (
                  rt(i)
                    ? (s.openingFragment = i, s.closingFragment = n)
                    : (s.openingElement = i, s.closingElement = n),
                    s.children = r,
                    this.isRelational("<")
                ) {
                  throw this.raise(
                    this.state.start,
                    st.UnwrappedAdjacentJSXElements,
                  );
                }
                return rt(i)
                  ? this.finishNode(s, "JSXFragment")
                  : this.finishNode(s, "JSXElement");
              }
              jsxParseElement() {
                const t = this.state.start, e = this.state.startLoc;
                return this.next(), this.jsxParseElementAt(t, e);
              }
              parseExprAtom(t) {
                return this.match(c.jsxText)
                  ? this.parseLiteral(this.state.value, "JSXText")
                  : this.match(c.jsxTagStart)
                  ? this.jsxParseElement()
                  : this.isRelational("<") &&
                      33 !== this.input.charCodeAt(this.state.pos)
                  ? (this.finishToken(c.jsxTagStart), this.jsxParseElement())
                  : super.parseExprAtom(t);
              }
              getTokenFromCode(t) {
                if (this.state.inPropertyName) return super.getTokenFromCode(t);
                const e = this.curContext();
                if (e === T.j_expr) return this.jsxReadToken();
                if (e === T.j_oTag || e === T.j_cTag) {
                  if (L(t)) return this.jsxReadWord();
                  if (62 === t) {return ++this.state.pos,
                      this.finishToken(c.jsxTagEnd);}
                  if ((34 === t || 39 === t) && e === T.j_oTag) {
                    return this.jsxReadString(t);
                  }
                }
                return 60 === t && this.state.exprAllowed &&
                    33 !== this.input.charCodeAt(this.state.pos + 1)
                  ? (++this.state.pos, this.finishToken(c.jsxTagStart))
                  : super.getTokenFromCode(t);
              }
              updateContext(t) {
                if (this.match(c.braceL)) {
                  const e = this.curContext();
                  e === T.j_oTag
                    ? this.state.context.push(T.braceExpression)
                    : e === T.j_expr
                    ? this.state.context.push(T.templateQuasi)
                    : super.updateContext(t), this.state.exprAllowed = !0;
                } else {
                  if (!this.match(c.slash) || t !== c.jsxTagStart) {
                    return super.updateContext(t);
                  }
                  this.state.context.length -= 2,
                    this.state.context.push(T.j_cTag),
                    this.state.exprAllowed = !1;
                }
              }
            },
          flow: (t) =>
            class extends t {
              constructor(t, e) {
                super(t, e), this.flowPragma = void 0, this.flowPragma = void 0;
              }
              shouldParseTypes() {
                return this.getPluginOption("flow", "all") ||
                  "flow" === this.flowPragma;
              }
              shouldParseEnums() {
                return !!this.getPluginOption("flow", "enums");
              }
              finishToken(t, e) {
                return t !== c.string && t !== c.semi &&
                  t !== c.interpreterDirective && void 0 === this.flowPragma &&
                  (this.flowPragma = null),
                  super.finishToken(t, e);
              }
              addComment(t) {
                if (void 0 === this.flowPragma) {
                  const e = Q.exec(t.value);
                  if (e) {
                    if ("flow" === e[1]) this.flowPragma = "flow";
                    else {
                      if ("noflow" !== e[1]) {
                        throw new Error("Unexpected flow pragma");
                      }
                      this.flowPragma = "noflow";
                    }
                  } else;
                }
                return super.addComment(t);
              }
              flowParseTypeInitialiser(t) {
                const e = this.state.inType;
                this.state.inType = !0, this.expect(t || c.colon);
                const s = this.flowParseType();
                return this.state.inType = e, s;
              }
              flowParsePredicate() {
                const t = this.startNode(),
                  e = this.state.startLoc,
                  s = this.state.start;
                this.expect(c.modulo);
                const r = this.state.startLoc;
                return this.expectContextual("checks"),
                  e.line === r.line && e.column === r.column - 1 ||
                  this.raise(s, K.UnexpectedSpaceBetweenModuloChecks),
                  this.eat(c.parenL)
                    ? (t.value = this.parseExpression(),
                      this.expect(c.parenR),
                      this.finishNode(t, "DeclaredPredicate"))
                    : this.finishNode(t, "InferredPredicate");
              }
              flowParseTypeAndPredicateInitialiser() {
                const t = this.state.inType;
                this.state.inType = !0, this.expect(c.colon);
                let e = null, s = null;
                return this.match(c.modulo)
                  ? (this.state.inType = t, s = this.flowParsePredicate())
                  : (e = this.flowParseType(),
                    this.state.inType = t,
                    this.match(c.modulo) && (s = this.flowParsePredicate())),
                  [e, s];
              }
              flowParseDeclareClass(t) {
                return this.next(),
                  this.flowParseInterfaceish(t, !0),
                  this.finishNode(t, "DeclareClass");
              }
              flowParseDeclareFunction(t) {
                this.next();
                const e = t.id = this.parseIdentifier(),
                  s = this.startNode(),
                  r = this.startNode();
                this.isRelational("<")
                  ? s.typeParameters = this.flowParseTypeParameterDeclaration()
                  : s.typeParameters = null, this.expect(c.parenL);
                const i = this.flowParseFunctionTypeParams();
                return s.params = i.params,
                  s.rest = i.rest,
                  this.expect(c.parenR),
                  [s.returnType, t.predicate] = this
                    .flowParseTypeAndPredicateInitialiser(),
                  r.typeAnnotation = this.finishNode(
                    s,
                    "FunctionTypeAnnotation",
                  ),
                  e.typeAnnotation = this.finishNode(r, "TypeAnnotation"),
                  this.resetEndLocation(e),
                  this.semicolon(),
                  this.finishNode(t, "DeclareFunction");
              }
              flowParseDeclare(t, e) {
                if (this.match(c._class)) return this.flowParseDeclareClass(t);
                if (this.match(c._function)) {
                  return this.flowParseDeclareFunction(t);
                }
                if (this.match(c._var)) return this.flowParseDeclareVariable(t);
                if (this.eatContextual("module")) {
                  return this.match(c.dot)
                    ? this.flowParseDeclareModuleExports(t)
                    : (e &&
                      this.raise(
                        this.state.lastTokStart,
                        K.NestedDeclareModule,
                      ),
                      this.flowParseDeclareModule(t));
                }
                if (this.isContextual("type")) {
                  return this.flowParseDeclareTypeAlias(t);
                }
                if (this.isContextual("opaque")) {
                  return this.flowParseDeclareOpaqueType(t);
                }
                if (this.isContextual("interface")) {
                  return this.flowParseDeclareInterface(t);
                }
                if (this.match(c._export)) {
                  return this.flowParseDeclareExportDeclaration(t, e);
                }
                throw this.unexpected();
              }
              flowParseDeclareVariable(t) {
                return this.next(),
                  t.id = this.flowParseTypeAnnotatableIdentifier(!0),
                  this.scope.declareName(t.id.name, 5, t.id.start),
                  this.semicolon(),
                  this.finishNode(t, "DeclareVariable");
              }
              flowParseDeclareModule(t) {
                this.scope.enter(0),
                  this.match(c.string)
                    ? t.id = this.parseExprAtom()
                    : t.id = this.parseIdentifier();
                const e = t.body = this.startNode(), s = e.body = [];
                for (this.expect(c.braceL); !this.match(c.braceR);) {
                  let t = this.startNode();
                  this.match(c._import)
                    ? (this.next(),
                      this.isContextual("type") || this.match(c._typeof) ||
                      this.raise(
                        this.state.lastTokStart,
                        K.InvalidNonTypeImportInDeclareModule,
                      ),
                      this.parseImport(t))
                    : (this.expectContextual(
                      "declare",
                      K.UnsupportedStatementInDeclareModule,
                    ),
                      t = this.flowParseDeclare(t, !0)), s.push(t);
                }
                this.scope.exit(),
                  this.expect(c.braceR),
                  this.finishNode(e, "BlockStatement");
                let r = null, i = !1;
                return s.forEach(
                  ((t) => {
                    !function (t) {
                        return "DeclareExportAllDeclaration" === t.type ||
                          "DeclareExportDeclaration" === t.type &&
                            (!t.declaration ||
                              "TypeAlias" !== t.declaration.type &&
                                "InterfaceDeclaration" !== t.declaration.type);
                      }(t)
                      ? "DeclareModuleExports" === t.type &&
                        (i &&
                          this.raise(t.start, K.DuplicateDeclareModuleExports),
                          "ES" === r &&
                          this.raise(t.start, K.AmbiguousDeclareModuleKind),
                          r = "CommonJS",
                          i = !0)
                      : ("CommonJS" === r &&
                        this.raise(t.start, K.AmbiguousDeclareModuleKind),
                        r = "ES");
                  }),
                ),
                  t.kind = r || "CommonJS",
                  this.finishNode(t, "DeclareModule");
              }
              flowParseDeclareExportDeclaration(t, e) {
                if (this.expect(c._export), this.eat(c._default)) {
                  return this.match(c._function) || this.match(c._class)
                    ? t.declaration = this.flowParseDeclare(this.startNode())
                    : (t.declaration = this.flowParseType(), this.semicolon()),
                    t.default = !0,
                    this.finishNode(t, "DeclareExportDeclaration");
                }
                if (
                  this.match(c._const) || this.isLet() ||
                  (this.isContextual("type") ||
                      this.isContextual("interface")) && !e
                ) {
                  const t = this.state.value, e = Y[t];
                  throw this.raise(
                    this.state.start,
                    K.UnsupportedDeclareExportKind,
                    t,
                    e,
                  );
                }
                if (
                  this.match(c._var) || this.match(c._function) ||
                  this.match(c._class) || this.isContextual("opaque")
                ) {
                  return t.declaration = this.flowParseDeclare(
                    this.startNode(),
                  ),
                    t.default = !1,
                    this.finishNode(t, "DeclareExportDeclaration");
                }
                if (
                  this.match(c.star) || this.match(c.braceL) ||
                  this.isContextual("interface") || this.isContextual("type") ||
                  this.isContextual("opaque")
                ) {
                  return "ExportNamedDeclaration" ===
                      (t = this.parseExport(t)).type &&
                    (t.type = "ExportDeclaration",
                      t.default = !1,
                      delete t.exportKind),
                    t.type = "Declare" + t.type,
                    t;
                }
                throw this.unexpected();
              }
              flowParseDeclareModuleExports(t) {
                return this.next(),
                  this.expectContextual("exports"),
                  t.typeAnnotation = this.flowParseTypeAnnotation(),
                  this.semicolon(),
                  this.finishNode(t, "DeclareModuleExports");
              }
              flowParseDeclareTypeAlias(t) {
                return this.next(),
                  this.flowParseTypeAlias(t),
                  t.type = "DeclareTypeAlias",
                  t;
              }
              flowParseDeclareOpaqueType(t) {
                return this.next(),
                  this.flowParseOpaqueType(t, !0),
                  t.type = "DeclareOpaqueType",
                  t;
              }
              flowParseDeclareInterface(t) {
                return this.next(),
                  this.flowParseInterfaceish(t),
                  this.finishNode(t, "DeclareInterface");
              }
              flowParseInterfaceish(t, e = !1) {
                if (
                  t.id = this.flowParseRestrictedIdentifier(!e, !0),
                    this.scope.declareName(t.id.name, e ? 17 : 9, t.id.start),
                    this.isRelational("<")
                      ? t.typeParameters = this
                        .flowParseTypeParameterDeclaration()
                      : t.typeParameters = null,
                    t.extends = [],
                    t.implements = [],
                    t.mixins = [],
                    this.eat(c._extends)
                ) {
                  do {
                    t.extends.push(this.flowParseInterfaceExtends());
                  } while (!e && this.eat(c.comma));
                }
                if (this.isContextual("mixins")) {
                  this.next();
                  do {
                    t.mixins.push(this.flowParseInterfaceExtends());
                  } while (this.eat(c.comma));
                }
                if (this.isContextual("implements")) {
                  this.next();
                  do {
                    t.implements.push(this.flowParseInterfaceExtends());
                  } while (this.eat(c.comma));
                }
                t.body = this.flowParseObjectType({
                  allowStatic: e,
                  allowExact: !1,
                  allowSpread: !1,
                  allowProto: e,
                  allowInexact: !1,
                });
              }
              flowParseInterfaceExtends() {
                const t = this.startNode();
                return t.id = this.flowParseQualifiedTypeIdentifier(),
                  this.isRelational("<")
                    ? t.typeParameters = this
                      .flowParseTypeParameterInstantiation()
                    : t.typeParameters = null,
                  this.finishNode(t, "InterfaceExtends");
              }
              flowParseInterface(t) {
                return this.flowParseInterfaceish(t),
                  this.finishNode(t, "InterfaceDeclaration");
              }
              checkNotUnderscore(t) {
                "_" === t &&
                  this.raise(this.state.start, K.UnexpectedReservedUnderscore);
              }
              checkReservedType(t, e, s) {
                X.has(t) &&
                  this.raise(
                    e,
                    s ? K.AssignReservedType : K.UnexpectedReservedType,
                    t,
                  );
              }
              flowParseRestrictedIdentifier(t, e) {
                return this.checkReservedType(
                  this.state.value,
                  this.state.start,
                  e,
                ),
                  this.parseIdentifier(t);
              }
              flowParseTypeAlias(t) {
                return t.id = this.flowParseRestrictedIdentifier(!1, !0),
                  this.scope.declareName(t.id.name, 9, t.id.start),
                  this.isRelational("<")
                    ? t.typeParameters = this
                      .flowParseTypeParameterDeclaration()
                    : t.typeParameters = null,
                  t.right = this.flowParseTypeInitialiser(c.eq),
                  this.semicolon(),
                  this.finishNode(t, "TypeAlias");
              }
              flowParseOpaqueType(t, e) {
                return this.expectContextual("type"),
                  t.id = this.flowParseRestrictedIdentifier(!0, !0),
                  this.scope.declareName(t.id.name, 9, t.id.start),
                  this.isRelational("<")
                    ? t.typeParameters = this
                      .flowParseTypeParameterDeclaration()
                    : t.typeParameters = null,
                  t.supertype = null,
                  this.match(c.colon) &&
                  (t.supertype = this.flowParseTypeInitialiser(c.colon)),
                  t.impltype = null,
                  e || (t.impltype = this.flowParseTypeInitialiser(c.eq)),
                  this.semicolon(),
                  this.finishNode(t, "OpaqueType");
              }
              flowParseTypeParameter(t = !1) {
                const e = this.state.start,
                  s = this.startNode(),
                  r = this.flowParseVariance(),
                  i = this.flowParseTypeAnnotatableIdentifier();
                return s.name = i.name,
                  s.variance = r,
                  s.bound = i.typeAnnotation,
                  this.match(c.eq)
                    ? (this.eat(c.eq), s.default = this.flowParseType())
                    : t && this.raise(e, K.MissingTypeParamDefault),
                  this.finishNode(s, "TypeParameter");
              }
              flowParseTypeParameterDeclaration() {
                const t = this.state.inType, e = this.startNode();
                e.params = [],
                  this.state.inType = !0,
                  this.isRelational("<") || this.match(c.jsxTagStart)
                    ? this.next()
                    : this.unexpected();
                let s = !1;
                do {
                  const t = this.flowParseTypeParameter(s);
                  e.params.push(t),
                    t.default && (s = !0),
                    this.isRelational(">") || this.expect(c.comma);
                } while (!this.isRelational(">"));
                return this.expectRelational(">"),
                  this.state.inType = t,
                  this.finishNode(e, "TypeParameterDeclaration");
              }
              flowParseTypeParameterInstantiation() {
                const t = this.startNode(), e = this.state.inType;
                t.params = [],
                  this.state.inType = !0,
                  this.expectRelational("<");
                const s = this.state.noAnonFunctionType;
                for (
                  this.state.noAnonFunctionType = !1; !this.isRelational(">");
                ) {
                  t.params.push(this.flowParseType()),
                    this.isRelational(">") || this.expect(c.comma);
                }
                return this.state.noAnonFunctionType = s,
                  this.expectRelational(">"),
                  this.state.inType = e,
                  this.finishNode(t, "TypeParameterInstantiation");
              }
              flowParseTypeParameterInstantiationCallOrNew() {
                const t = this.startNode(), e = this.state.inType;
                for (
                  t.params = [],
                    this.state.inType = !0,
                    this.expectRelational("<");
                  !this.isRelational(">");
                ) {
                  t.params.push(this.flowParseTypeOrImplicitInstantiation()),
                    this.isRelational(">") || this.expect(c.comma);
                }
                return this.expectRelational(">"),
                  this.state.inType = e,
                  this.finishNode(t, "TypeParameterInstantiation");
              }
              flowParseInterfaceType() {
                const t = this.startNode();
                if (
                  this.expectContextual("interface"),
                    t.extends = [],
                    this.eat(c._extends)
                ) {
                  do {
                    t.extends.push(this.flowParseInterfaceExtends());
                  } while (this.eat(c.comma));
                }
                return t.body = this.flowParseObjectType({
                  allowStatic: !1,
                  allowExact: !1,
                  allowSpread: !1,
                  allowProto: !1,
                  allowInexact: !1,
                }),
                  this.finishNode(t, "InterfaceTypeAnnotation");
              }
              flowParseObjectPropertyKey() {
                return this.match(c.num) || this.match(c.string)
                  ? this.parseExprAtom() : this.parseIdentifier(!0);
              }
              flowParseObjectTypeIndexer(t, e, s) {
                return t.static = e,
                  this.lookahead().type === c.colon
                    ? (t.id = this.flowParseObjectPropertyKey(),
                      t.key = this.flowParseTypeInitialiser())
                    : (t.id = null, t.key = this.flowParseType()),
                  this.expect(c.bracketR),
                  t.value = this.flowParseTypeInitialiser(),
                  t.variance = s,
                  this.finishNode(t, "ObjectTypeIndexer");
              }
              flowParseObjectTypeInternalSlot(t, e) {
                return t.static = e,
                  t.id = this.flowParseObjectPropertyKey(),
                  this.expect(c.bracketR),
                  this.expect(c.bracketR),
                  this.isRelational("<") || this.match(c.parenL)
                    ? (t.method = !0,
                      t.optional = !1,
                      t.value = this.flowParseObjectTypeMethodish(
                        this.startNodeAt(t.start, t.loc.start),
                      ))
                    : (t.method = !1,
                      this.eat(c.question) && (t.optional = !0),
                      t.value = this.flowParseTypeInitialiser()),
                  this.finishNode(t, "ObjectTypeInternalSlot");
              }
              flowParseObjectTypeMethodish(t) {
                for (
                  t.params = [],
                    t.rest = null,
                    t.typeParameters = null,
                    this.isRelational("<") &&
                    (t.typeParameters = this
                      .flowParseTypeParameterDeclaration()),
                    this.expect(c.parenL);
                  !this.match(c.parenR) && !this.match(c.ellipsis);
                ) {
                  t.params.push(this.flowParseFunctionTypeParam()),
                    this.match(c.parenR) || this.expect(c.comma);
                }
                return this.eat(c.ellipsis) &&
                  (t.rest = this.flowParseFunctionTypeParam()),
                  this.expect(c.parenR),
                  t.returnType = this.flowParseTypeInitialiser(),
                  this.finishNode(t, "FunctionTypeAnnotation");
              }
              flowParseObjectTypeCallProperty(t, e) {
                const s = this.startNode();
                return t.static = e,
                  t.value = this.flowParseObjectTypeMethodish(s),
                  this.finishNode(t, "ObjectTypeCallProperty");
              }
              flowParseObjectType(
                {
                  allowStatic: t,
                  allowExact: e,
                  allowSpread: s,
                  allowProto: r,
                  allowInexact: i,
                },
              ) {
                const n = this.state.inType;
                this.state.inType = !0;
                const a = this.startNode();
                let o, u;
                a.callProperties = [],
                  a.properties = [],
                  a.indexers = [],
                  a.internalSlots = [];
                let h = !1;
                for (
                  e && this.match(c.braceBarL)
                    ? (this.expect(c.braceBarL), o = c.braceBarR, u = !0)
                    : (this.expect(c.braceL), o = c.braceR, u = !1),
                    a.exact = u;
                  !this.match(o);
                ) {
                  let e = !1, n = null, o = null;
                  const p = this.startNode();
                  if (r && this.isContextual("proto")) {
                    const e = this.lookahead();
                    e.type !== c.colon && e.type !== c.question &&
                      (this.next(), n = this.state.start, t = !1);
                  }
                  if (t && this.isContextual("static")) {
                    const t = this.lookahead();
                    t.type !== c.colon && t.type !== c.question &&
                      (this.next(), e = !0);
                  }
                  const l = this.flowParseVariance();
                  if (this.eat(c.bracketL)) {
                    null != n && this.unexpected(n),
                      this.eat(c.bracketL)
                        ? (l && this.unexpected(l.start),
                          a.internalSlots.push(
                            this.flowParseObjectTypeInternalSlot(p, e),
                          ))
                        : a.indexers.push(
                          this.flowParseObjectTypeIndexer(p, e, l),
                        );
                  } else if (this.match(c.parenL) || this.isRelational("<")) {
                    null != n && this.unexpected(n),
                      l && this.unexpected(l.start),
                      a.callProperties.push(
                        this.flowParseObjectTypeCallProperty(p, e),
                      );
                  } else {
                    let t = "init";
                    if (this.isContextual("get") || this.isContextual("set")) {
                      const e = this.lookahead();
                      e.type !== c.name && e.type !== c.string &&
                          e.type !== c.num ||
                        (t = this.state.value, this.next());
                    }
                    const r = this.flowParseObjectTypeProperty(
                      p,
                      e,
                      n,
                      l,
                      t,
                      s,
                      null != i ? i : !u,
                    );
                    null === r ? (h = !0, o = this.state.lastTokStart)
                    : a.properties.push(r);
                  }
                  this.flowObjectTypeSemicolon(),
                    !o || this.match(c.braceR) || this.match(c.braceBarR) ||
                    this.raise(o, K.UnexpectedExplicitInexactInObject);
                }
                this.expect(o), s && (a.inexact = h);
                const p = this.finishNode(a, "ObjectTypeAnnotation");
                return this.state.inType = n, p;
              }
              flowParseObjectTypeProperty(t, e, s, r, i, n, a) {
                if (this.eat(c.ellipsis)) {
                  return this.match(c.comma) || this.match(c.semi) ||
                      this.match(c.braceR) || this.match(c.braceBarR)
                    ? (n
                      ? a ||
                        this.raise(
                          this.state.lastTokStart,
                          K.InexactInsideExact,
                        )
                      : this.raise(
                        this.state.lastTokStart,
                        K.InexactInsideNonObject,
                      ),
                      r && this.raise(r.start, K.InexactVariance),
                      null)
                    : (n ||
                      this.raise(
                        this.state.lastTokStart,
                        K.UnexpectedSpreadType,
                      ),
                      null != s && this.unexpected(s),
                      r && this.raise(r.start, K.SpreadVariance),
                      t.argument = this.flowParseType(),
                      this.finishNode(t, "ObjectTypeSpreadProperty"));
                }
                {
                  t.key = this.flowParseObjectPropertyKey(),
                    t.static = e,
                    t.proto = null != s,
                    t.kind = i;
                  let n = !1;
                  return this.isRelational("<") || this.match(c.parenL)
                    ? (t.method = !0,
                      null != s && this.unexpected(s),
                      r && this.unexpected(r.start),
                      t.value = this.flowParseObjectTypeMethodish(
                        this.startNodeAt(t.start, t.loc.start),
                      ),
                      "get" !== i && "set" !== i ||
                      this.flowCheckGetterSetterParams(t))
                    : ("init" !== i && this.unexpected(),
                      t.method = !1,
                      this.eat(c.question) && (n = !0),
                      t.value = this.flowParseTypeInitialiser(),
                      t.variance = r),
                    t.optional = n,
                    this.finishNode(t, "ObjectTypeProperty");
                }
              }
              flowCheckGetterSetterParams(t) {
                const e = "get" === t.kind ? 0 : 1, s = t.start;
                t.value.params.length + (t.value.rest ? 1 : 0) !== e &&
                ("get" === t.kind
                  ? this.raise(s, g.BadGetterArity)
                  : this.raise(s, g.BadSetterArity)),
                  "set" === t.kind && t.value.rest &&
                  this.raise(s, g.BadSetterRestParameter);
              }
              flowObjectTypeSemicolon() {
                this.eat(c.semi) || this.eat(c.comma) || this.match(c.braceR) ||
                  this.match(c.braceBarR) || this.unexpected();
              }
              flowParseQualifiedTypeIdentifier(t, e, s) {
                t = t || this.state.start, e = e || this.state.startLoc;
                let r = s || this.flowParseRestrictedIdentifier(!0);
                for (; this.eat(c.dot);) {
                  const s = this.startNodeAt(t, e);
                  s.qualification = r,
                    s.id = this.flowParseRestrictedIdentifier(!0),
                    r = this.finishNode(s, "QualifiedTypeIdentifier");
                }
                return r;
              }
              flowParseGenericType(t, e, s) {
                const r = this.startNodeAt(t, e);
                return r.typeParameters = null,
                  r.id = this.flowParseQualifiedTypeIdentifier(t, e, s),
                  this.isRelational("<") &&
                  (r.typeParameters = this
                    .flowParseTypeParameterInstantiation()),
                  this.finishNode(r, "GenericTypeAnnotation");
              }
              flowParseTypeofType() {
                const t = this.startNode();
                return this.expect(c._typeof),
                  t.argument = this.flowParsePrimaryType(),
                  this.finishNode(t, "TypeofTypeAnnotation");
              }
              flowParseTupleType() {
                const t = this.startNode();
                for (
                  t.types = [], this.expect(c.bracketL);
                  this.state.pos < this.length && !this.match(c.bracketR) &&
                  (t.types.push(this.flowParseType()), !this.match(c.bracketR));
                ) {
                  this.expect(c.comma);
                }
                return this.expect(c.bracketR),
                  this.finishNode(t, "TupleTypeAnnotation");
              }
              flowParseFunctionTypeParam() {
                let t = null, e = !1, s = null;
                const r = this.startNode(), i = this.lookahead();
                return i.type === c.colon || i.type === c.question
                  ? (t = this.parseIdentifier(),
                    this.eat(c.question) && (e = !0),
                    s = this.flowParseTypeInitialiser())
                  : s = this.flowParseType(),
                  r.name = t,
                  r.optional = e,
                  r.typeAnnotation = s,
                  this.finishNode(r, "FunctionTypeParam");
              }
              reinterpretTypeAsFunctionTypeParam(t) {
                const e = this.startNodeAt(t.start, t.loc.start);
                return e.name = null,
                  e.optional = !1,
                  e.typeAnnotation = t,
                  this.finishNode(e, "FunctionTypeParam");
              }
              flowParseFunctionTypeParams(t = []) {
                let e = null;
                for (; !this.match(c.parenR) && !this.match(c.ellipsis);) {
                  t.push(this.flowParseFunctionTypeParam()),
                    this.match(c.parenR) || this.expect(c.comma);
                }
                return this.eat(c.ellipsis) &&
                  (e = this.flowParseFunctionTypeParam()),
                  { params: t, rest: e };
              }
              flowIdentToTypeAnnotation(t, e, s, r) {
                switch (r.name) {
                  case "any":
                    return this.finishNode(s, "AnyTypeAnnotation");
                  case "bool":
                  case "boolean":
                    return this.finishNode(s, "BooleanTypeAnnotation");
                  case "mixed":
                    return this.finishNode(s, "MixedTypeAnnotation");
                  case "empty":
                    return this.finishNode(s, "EmptyTypeAnnotation");
                  case "number":
                    return this.finishNode(s, "NumberTypeAnnotation");
                  case "string":
                    return this.finishNode(s, "StringTypeAnnotation");
                  case "symbol":
                    return this.finishNode(s, "SymbolTypeAnnotation");
                  default:
                    return this.checkNotUnderscore(r.name),
                      this.flowParseGenericType(t, e, r);
                }
              }
              flowParsePrimaryType() {
                const t = this.state.start,
                  e = this.state.startLoc,
                  s = this.startNode();
                let r, i, n = !1;
                const a = this.state.noAnonFunctionType;
                switch (this.state.type) {
                  case c.name:
                    return this.isContextual("interface")
                      ? this.flowParseInterfaceType()
                      : this.flowIdentToTypeAnnotation(
                        t,
                        e,
                        s,
                        this.parseIdentifier(),
                      );
                  case c.braceL:
                    return this.flowParseObjectType({
                      allowStatic: !1,
                      allowExact: !1,
                      allowSpread: !0,
                      allowProto: !1,
                      allowInexact: !0,
                    });
                  case c.braceBarL:
                    return this.flowParseObjectType({
                      allowStatic: !1,
                      allowExact: !0,
                      allowSpread: !0,
                      allowProto: !1,
                      allowInexact: !1,
                    });
                  case c.bracketL:
                    return this.state.noAnonFunctionType = !1,
                      i = this.flowParseTupleType(),
                      this.state.noAnonFunctionType = a,
                      i;
                  case c.relational:
                    if ("<" === this.state.value) {
                      return s.typeParameters = this
                        .flowParseTypeParameterDeclaration(),
                        this.expect(c.parenL),
                        r = this.flowParseFunctionTypeParams(),
                        s.params = r.params,
                        s.rest = r.rest,
                        this.expect(c.parenR),
                        this.expect(c.arrow),
                        s.returnType = this.flowParseType(),
                        this.finishNode(s, "FunctionTypeAnnotation");
                    }
                    break;
                  case c.parenL:
                    if (
                      this.next(),
                        !this.match(c.parenR) && !this.match(c.ellipsis)
                    ) {
                      if (this.match(c.name)) {
                        const t = this.lookahead().type;
                        n = t !== c.question && t !== c.colon;
                      } else { 
                        n = !0;
                      }
                    }
                    if (n) {
                      if (
                        this.state.noAnonFunctionType = !1,
                          i = this.flowParseType(),
                          this.state.noAnonFunctionType = a,
                          this.state.noAnonFunctionType ||
                          !(this.match(c.comma) ||
                            this.match(c.parenR) &&
                              this.lookahead().type === c.arrow)
                      ) {
                        return this.expect(c.parenR), i;
                      }
                      this.eat(c.comma);
                    }
                    return r = i
                      ? this.flowParseFunctionTypeParams([
                        this.reinterpretTypeAsFunctionTypeParam(i),
                      ])
                      : this.flowParseFunctionTypeParams(),
                      s.params = r.params,
                      s.rest = r.rest,
                      this.expect(c.parenR),
                      this.expect(c.arrow),
                      s.returnType = this.flowParseType(),
                      s.typeParameters = null,
                      this.finishNode(s, "FunctionTypeAnnotation");
                  case c.string:
                    return this.parseLiteral(
                      this.state.value,
                      "StringLiteralTypeAnnotation",
                    );
                  case c._true:
                  case c._false:
                    return s.value = this.match(c._true),
                      this.next(),
                      this.finishNode(s, "BooleanLiteralTypeAnnotation");
                  case c.plusMin:
                    if ("-" === this.state.value) {
                      if (this.next(), this.match(c.num)) {
                        return this.parseLiteral(
                          -this.state.value,
                          "NumberLiteralTypeAnnotation",
                          s.start,
                          s.loc.start,
                        );
                      }
                      if (this.match(c.bigint)) {
                        return this.parseLiteral(
                          -this.state.value,
                          "BigIntLiteralTypeAnnotation",
                          s.start,
                          s.loc.start,
                        );
                      }
                      throw this.raise(
                        this.state.start,
                        K.UnexpectedSubtractionOperand,
                      );
                    }
                    throw this.unexpected();
                  case c.num:
                    return this.parseLiteral(
                      this.state.value,
                      "NumberLiteralTypeAnnotation",
                    );
                  case c.bigint:
                    return this.parseLiteral(
                      this.state.value,
                      "BigIntLiteralTypeAnnotation",
                    );
                  case c._void:
                    return this.next(),
                      this.finishNode(s, "VoidTypeAnnotation");
                  case c._null:
                    return this.next(),
                      this.finishNode(s, "NullLiteralTypeAnnotation");
                  case c._this:
                    return this.next(),
                      this.finishNode(s, "ThisTypeAnnotation");
                  case c.star:
                    return this.next(),
                      this.finishNode(s, "ExistsTypeAnnotation");
                  default:
                    if ("typeof" === this.state.type.keyword) {return this
                        .flowParseTypeofType();}
                    if (this.state.type.keyword) {
                      const t = this.state.type.label;
                      return this.next(), super.createIdentifier(s, t);
                    }
                }
                throw this.unexpected();
              }
              flowParsePostfixType() {
                const t = this.state.start, e = this.state.startLoc;
                let s = this.flowParsePrimaryType();
                for (; this.match(c.bracketL) && !this.canInsertSemicolon();) {
                  const r = this.startNodeAt(t, e);
                  r.elementType = s,
                    this.expect(c.bracketL),
                    this.expect(c.bracketR),
                    s = this.finishNode(r, "ArrayTypeAnnotation");
                }
                return s;
              }
              flowParsePrefixType() {
                const t = this.startNode();
                return this.eat(c.question)
                  ? (t.typeAnnotation = this.flowParsePrefixType(),
                    this.finishNode(t, "NullableTypeAnnotation"))
                  : this.flowParsePostfixType();
              }
              flowParseAnonFunctionWithoutParens() {
                const t = this.flowParsePrefixType();
                if (!this.state.noAnonFunctionType && this.eat(c.arrow)) {
                  const e = this.startNodeAt(t.start, t.loc.start);
                  return e.params = [
                    this.reinterpretTypeAsFunctionTypeParam(t),
                  ],
                    e.rest = null,
                    e.returnType = this.flowParseType(),
                    e.typeParameters = null,
                    this.finishNode(e, "FunctionTypeAnnotation");
                }
                return t;
              }
              flowParseIntersectionType() {
                const t = this.startNode();
                this.eat(c.bitwiseAND);
                const e = this.flowParseAnonFunctionWithoutParens();
                for (t.types = [e]; this.eat(c.bitwiseAND);) {
                  t.types.push(this.flowParseAnonFunctionWithoutParens());
                }
                return 1 === t.types.length
                  ? e
                  : this.finishNode(t, "IntersectionTypeAnnotation");
              }
              flowParseUnionType() {
                const t = this.startNode();
                this.eat(c.bitwiseOR);
                const e = this.flowParseIntersectionType();
                for (t.types = [e]; this.eat(c.bitwiseOR);) {
                  t.types.push(this.flowParseIntersectionType());
                }
                return 1 === t.types.length
                  ? e
                  : this.finishNode(t, "UnionTypeAnnotation");
              }
              flowParseType() {
                const t = this.state.inType;
                this.state.inType = !0;
                const e = this.flowParseUnionType();
                return this.state.inType = t,
                  this.state.exprAllowed = this.state.exprAllowed ||
                    this.state.noAnonFunctionType,
                  e;
              }
              flowParseTypeOrImplicitInstantiation() {
                if (this.state.type === c.name && "_" === this.state.value) {
                  const t = this.state.start,
                    e = this.state.startLoc,
                    s = this.parseIdentifier();
                  return this.flowParseGenericType(t, e, s);
                }
                return this.flowParseType();
              }
              flowParseTypeAnnotation() {
                const t = this.startNode();
                return t.typeAnnotation = this.flowParseTypeInitialiser(),
                  this.finishNode(t, "TypeAnnotation");
              }
              flowParseTypeAnnotatableIdentifier(t) {
                const e = t ? this.parseIdentifier()
                : this.flowParseRestrictedIdentifier();
                return this.match(c.colon) &&
                  (e.typeAnnotation = this.flowParseTypeAnnotation(),
                    this.resetEndLocation(e)),
                  e;
              }
              typeCastToParameter(t) {
                return t.expression.typeAnnotation = t.typeAnnotation,
                  this.resetEndLocation(
                    t.expression,
                    t.typeAnnotation.end,
                    t.typeAnnotation.loc.end,
                  ),
                  t.expression;
              }
              flowParseVariance() {
                let t = null;
                return this.match(c.plusMin) &&
                  (t = this.startNode(),
                    "+" === this.state.value
                      ? t.kind = "plus"
                      : t.kind = "minus",
                    this.next(),
                    this.finishNode(t, "Variance")),
                  t;
              }
              parseFunctionBody(t, e, s = !1) {
                return e
                  ? this.forwardNoArrowParamsConversionAt(
                    t,
                    (() => super.parseFunctionBody(t, !0, s)),
                  )
                  : super.parseFunctionBody(t, !1, s);
              }
              parseFunctionBodyAndFinish(t, e, s = !1) {
                if (this.match(c.colon)) {
                  const e = this.startNode();
                  [e.typeAnnotation, t.predicate] = this
                    .flowParseTypeAndPredicateInitialiser(),
                    t.returnType = e.typeAnnotation
                      ? this.finishNode(e, "TypeAnnotation")
                      : null;
                }
                super.parseFunctionBodyAndFinish(t, e, s);
              }
              parseStatement(t, e) {
                if (
                  this.state.strict && this.match(c.name) &&
                  "interface" === this.state.value
                ) {
                  const t = this.lookahead();
                  if (t.type === c.name || W(t.value)) {
                    const t = this.startNode();
                    return this.next(), this.flowParseInterface(t);
                  }
                } else if (
                  this.shouldParseEnums() && this.isContextual("enum")
                ) {
                  const t = this.startNode();
                  return this.next(), this.flowParseEnumDeclaration(t);
                }
                const s = super.parseStatement(t, e);
                return void 0 !== this.flowPragma || this.isValidDirective(s) ||
                  (this.flowPragma = null),
                  s;
              }
              parseExpressionStatement(t, e) {
                if ("Identifier" === e.type) {
                  if ("declare" === e.name) {
                    if (
                      this.match(c._class) || this.match(c.name) ||
                      this.match(c._function) || this.match(c._var) ||
                      this.match(c._export)
                    ) {
                      return this.flowParseDeclare(t);
                    }
                  } else if (this.match(c.name)) {
                    if ("interface" === e.name) {return this.flowParseInterface(
                        t,
                      );}
                    if ("type" === e.name) return this.flowParseTypeAlias(t);
                    if ("opaque" === e.name) {return this.flowParseOpaqueType(
                        t,
                        !1,
                      );}
                  }
                }
                return super.parseExpressionStatement(t, e);
              }
              shouldParseExportDeclaration() {
                return this.isContextual("type") ||
                  this.isContextual("interface") ||
                  this.isContextual("opaque") ||
                  this.shouldParseEnums() && this.isContextual("enum") ||
                  super.shouldParseExportDeclaration();
              }
              isExportDefaultSpecifier() {
                return (!this.match(c.name) ||
                  !("type" === this.state.value ||
                    "interface" === this.state.value ||
                    "opaque" === this.state.value ||
                    this.shouldParseEnums() && "enum" === this.state.value)) &&
                  super.isExportDefaultSpecifier();
              }
              parseExportDefaultExpression() {
                if (this.shouldParseEnums() && this.isContextual("enum")) {
                  const t = this.startNode();
                  return this.next(), this.flowParseEnumDeclaration(t);
                }
                return super.parseExportDefaultExpression();
              }
              parseConditional(t, e, s, r) {
                if (!this.match(c.question)) return t;
                if (r) {
                  const i = this.tryParse(
                    (() => super.parseConditional(t, e, s)),
                  );
                  return i.node
                    ? (i.error && (this.state = i.failState), i.node)
                    : (r.start = i.error.pos || this.state.start, t);
                }
                this.expect(c.question);
                const i = this.state.clone(),
                  n = this.state.noArrowAt,
                  a = this.startNodeAt(e, s);
                let { consequent: o, failed: u } = this
                    .tryParseConditionalConsequent(),
                  [h, p] = this.getArrowLikeExpressions(o);
                if (u || p.length > 0) {
                  const t = [...n];
                  if (p.length > 0) {
                    this.state = i, this.state.noArrowAt = t;
                    for (let e = 0; e < p.length; e++) t.push(p[e].start);
                    ({ consequent: o, failed: u } = this
                      .tryParseConditionalConsequent()),
                      [h, p] = this.getArrowLikeExpressions(o);
                  }
                  u && h.length > 1 &&
                  this.raise(i.start, K.AmbiguousConditionalArrow),
                    u && 1 === h.length &&
                    (this.state = i,
                      this.state.noArrowAt = t.concat(h[0].start),
                      ({ consequent: o, failed: u } = this
                        .tryParseConditionalConsequent()));
                }
                return this.getArrowLikeExpressions(o, !0),
                  this.state.noArrowAt = n,
                  this.expect(c.colon),
                  a.test = t,
                  a.consequent = o,
                  a.alternate = this.forwardNoArrowParamsConversionAt(
                    a,
                    (() => this.parseMaybeAssign(void 0, void 0, void 0)),
                  ),
                  this.finishNode(a, "ConditionalExpression");
              }
              tryParseConditionalConsequent() {
                this.state.noArrowParamsConversionAt.push(this.state.start);
                const t = this.parseMaybeAssignAllowIn(),
                  e = !this.match(c.colon);
                return this.state.noArrowParamsConversionAt.pop(),
                  { consequent: t, failed: e };
              }
              getArrowLikeExpressions(t, e) {
                const s = [t], r = [];
                for (; 0 !== s.length;) {
                  const t = s.pop();
                  "ArrowFunctionExpression" === t.type
                    ? (t.typeParameters || !t.returnType
                      ? this.finishArrowValidation(t)
                      : r.push(t),
                      s.push(t.body))
                    : "ConditionalExpression" === t.type &&
                      (s.push(t.consequent), s.push(t.alternate));
                }
                return e
                  ? (r.forEach(((t) => this.finishArrowValidation(t))), [r, []])
                  : function (t, e) {
                    const s = [], r = [];
                    for (let i = 0; i < t.length; i++) {
                      (e(t[i], i, t) ? s : r).push(t[i]);
                    }
                    return [s, r];
                  }(
                    r,
                    ((t) => t.params.every(((t) => this.isAssignable(t, !0)))),
                  );
              }
              finishArrowValidation(t) {
                var e;
                this.toAssignableList(
                  t.params,
                  null == (e = t.extra) ? void 0 : e.trailingComma,
                ),
                  this.scope.enter(6),
                  super.checkParams(t, !1, !0),
                  this.scope.exit();
              }
              forwardNoArrowParamsConversionAt(t, e) {
                let s;
                return -1 !==
                    this.state.noArrowParamsConversionAt.indexOf(t.start)
                  ? (this.state.noArrowParamsConversionAt.push(
                    this.state.start,
                  ),
                    s = e(),
                    this.state.noArrowParamsConversionAt.pop())
                  : s = e(),
                  s;
              }
              parseParenItem(t, e, s) {
                if (
                  t = super.parseParenItem(t, e, s),
                    this.eat(c.question) &&
                    (t.optional = !0, this.resetEndLocation(t)),
                    this.match(c.colon)
                ) {
                  const r = this.startNodeAt(e, s);
                  return r.expression = t,
                    r.typeAnnotation = this.flowParseTypeAnnotation(),
                    this.finishNode(r, "TypeCastExpression");
                }
                return t;
              }
              assertModuleNodeAllowed(t) {
                "ImportDeclaration" === t.type &&
                    ("type" === t.importKind || "typeof" === t.importKind) ||
                  "ExportNamedDeclaration" === t.type &&
                    "type" === t.exportKind ||
                  "ExportAllDeclaration" === t.type &&
                    "type" === t.exportKind ||
                  super.assertModuleNodeAllowed(t);
              }
              parseExport(t) {
                const e = super.parseExport(t);
                return "ExportNamedDeclaration" !== e.type &&
                    "ExportAllDeclaration" !== e.type ||
                  (e.exportKind = e.exportKind || "value"),
                  e;
              }
              parseExportDeclaration(t) {
                if (this.isContextual("type")) {
                  t.exportKind = "type";
                  const e = this.startNode();
                  return this.next(),
                    this.match(c.braceL)
                      ? (t.specifiers = this.parseExportSpecifiers(),
                        this.parseExportFrom(t),
                        null)
                      : this.flowParseTypeAlias(e);
                }
                if (this.isContextual("opaque")) {
                  t.exportKind = "type";
                  const e = this.startNode();
                  return this.next(), this.flowParseOpaqueType(e, !1);
                }
                if (this.isContextual("interface")) {
                  t.exportKind = "type";
                  const e = this.startNode();
                  return this.next(), this.flowParseInterface(e);
                }
                if (this.shouldParseEnums() && this.isContextual("enum")) {
                  t.exportKind = "value";
                  const e = this.startNode();
                  return this.next(), this.flowParseEnumDeclaration(e);
                }
                return super.parseExportDeclaration(t);
              }
              eatExportStar(t) {
                return !!super.eatExportStar(...arguments) ||
                  !(!this.isContextual("type") ||
                      this.lookahead().type !== c.star) &&
                    (t.exportKind = "type", this.next(), this.next(), !0);
              }
              maybeParseExportNamespaceSpecifier(t) {
                const e = this.state.start,
                  s = super.maybeParseExportNamespaceSpecifier(t);
                return s && "type" === t.exportKind && this.unexpected(e), s;
              }
              parseClassId(t, e, s) {
                super.parseClassId(t, e, s),
                  this.isRelational("<") &&
                  (t.typeParameters = this.flowParseTypeParameterDeclaration());
              }
              parseClassMember(t, e, s) {
                const r = this.state.start;
                if (this.isContextual("declare")) {
                  if (this.parseClassMemberFromModifier(t, e)) return;
                  e.declare = !0;
                }
                super.parseClassMember(t, e, s),
                  e.declare &&
                  ("ClassProperty" !== e.type &&
                      "ClassPrivateProperty" !== e.type
                    ? this.raise(r, K.DeclareClassElement)
                    : e.value &&
                      this.raise(
                        e.value.start,
                        K.DeclareClassFieldInitializer,
                      ));
              }
              getTokenFromCode(t) {
                const e = this.input.charCodeAt(this.state.pos + 1);
                return 123 === t && 124 === e ? this.finishOp(c.braceBarL, 2)
                : !this.state.inType || 62 !== t && 60 !== t
                  ? this.state.inType && 63 === t ? this.finishOp(c.question, 1)
                  : function (t, e) {
                      return 64 === t && 64 === e;
                    }(t, e)
                    ? (this.state.isIterator = !0, super.readWord())
                    : super.getTokenFromCode(t)
                  : this.finishOp(c.relational, 1);
              }
              isAssignable(t, e) {
                switch (t.type) {
                  case "Identifier":
                  case "ObjectPattern":
                  case "ArrayPattern":
                  case "AssignmentPattern":
                    return !0;
                  case "ObjectExpression": {
                    const e = t.properties.length - 1;
                    return t.properties.every(
                      ((t, s) =>
                        "ObjectMethod" !== t.type &&
                        (s === e || "SpreadElement" === t.type) &&
                        this.isAssignable(t)),
                    );
                  }
                  case "ObjectProperty":
                    return this.isAssignable(t.value);
                  case "SpreadElement":
                    return this.isAssignable(t.argument);
                  case "ArrayExpression":
                    return t.elements.every(((t) => this.isAssignable(t)));
                  case "AssignmentExpression":
                    return "=" === t.operator;
                  case "ParenthesizedExpression":
                  case "TypeCastExpression":
                    return this.isAssignable(t.expression);
                  case "MemberExpression":
                  case "OptionalMemberExpression":
                    return !e;
                  default:
                    return !1;
                }
              }
              toAssignable(t) {
                return "TypeCastExpression" === t.type
                  ? super.toAssignable(this.typeCastToParameter(t))
                  : super.toAssignable(t);
              }
              toAssignableList(t, e) {
                for (let e = 0; e < t.length; e++) {
                  const s = t[e];
                  "TypeCastExpression" === (null == s ? void 0 : s.type) &&
                    (t[e] = this.typeCastToParameter(s));
                }
                return super.toAssignableList(t, e);
              }
              toReferencedList(t, e) {
                for (let r = 0; r < t.length; r++) {
                  var s;
                  const i = t[r];
                  i && "TypeCastExpression" === i.type &&
                    !(null == (s = i.extra) ? void 0 : s.parenthesized) &&
                    (t.length > 1 || !e) &&
                    this.raise(i.typeAnnotation.start, K.TypeCastInPattern);
                }
                return t;
              }
              parseArrayLike(t, e, s, r) {
                const i = super.parseArrayLike(t, e, s, r);
                return e && !this.state.maybeInArrowParameters &&
                  this.toReferencedList(i.elements),
                  i;
              }
              checkLVal(t, e = 64, s, r) {
                if ("TypeCastExpression" !== t.type) {
                  return super.checkLVal(t, e, s, r);
                }
              }
              parseClassProperty(t) {
                return this.match(c.colon) &&
                  (t.typeAnnotation = this.flowParseTypeAnnotation()),
                  super.parseClassProperty(t);
              }
              parseClassPrivateProperty(t) {
                return this.match(c.colon) &&
                  (t.typeAnnotation = this.flowParseTypeAnnotation()),
                  super.parseClassPrivateProperty(t);
              }
              isClassMethod() {
                return this.isRelational("<") || super.isClassMethod();
              }
              isClassProperty() {
                return this.match(c.colon) || super.isClassProperty();
              }
              isNonstaticConstructor(t) {
                return !this.match(c.colon) && super.isNonstaticConstructor(t);
              }
              pushClassMethod(t, e, s, r, i, n) {
                e.variance && this.unexpected(e.variance.start),
                  delete e.variance,
                  this.isRelational("<") &&
                  (e.typeParameters = this.flowParseTypeParameterDeclaration()),
                  super.pushClassMethod(t, e, s, r, i, n);
              }
              pushClassPrivateMethod(t, e, s, r) {
                e.variance && this.unexpected(e.variance.start),
                  delete e.variance,
                  this.isRelational("<") &&
                  (e.typeParameters = this.flowParseTypeParameterDeclaration()),
                  super.pushClassPrivateMethod(t, e, s, r);
              }
              parseClassSuper(t) {
                if (
                  super.parseClassSuper(t),
                    t.superClass && this.isRelational("<") &&
                    (t.superTypeParameters = this
                      .flowParseTypeParameterInstantiation()),
                    this.isContextual("implements")
                ) {
                  this.next();
                  const e = t.implements = [];
                  do {
                    const t = this.startNode();
                    t.id = this.flowParseRestrictedIdentifier(!0),
                      this.isRelational("<")
                        ? t.typeParameters = this
                          .flowParseTypeParameterInstantiation()
                        : t.typeParameters = null,
                      e.push(this.finishNode(t, "ClassImplements"));
                  } while (this.eat(c.comma));
                }
              }
              parsePropertyName(t, e) {
                const s = this.flowParseVariance(),
                  r = super.parsePropertyName(t, e);
                return t.variance = s, r;
              }
              parseObjPropValue(t, e, s, r, i, n, a, o) {
                let u;
                t.variance && this.unexpected(t.variance.start),
                  delete t.variance,
                  this.isRelational("<") && !a &&
                  (u = this.flowParseTypeParameterDeclaration(),
                    this.match(c.parenL) || this.unexpected()),
                  super.parseObjPropValue(t, e, s, r, i, n, a, o),
                  u && ((t.value || t).typeParameters = u);
              }
              parseAssignableListItemTypes(t) {
                return this.eat(c.question) &&
                  ("Identifier" !== t.type &&
                    this.raise(t.start, K.OptionalBindingPattern),
                    t.optional = !0),
                  this.match(c.colon) &&
                  (t.typeAnnotation = this.flowParseTypeAnnotation()),
                  this.resetEndLocation(t),
                  t;
              }
              parseMaybeDefault(t, e, s) {
                const r = super.parseMaybeDefault(t, e, s);
                return "AssignmentPattern" === r.type && r.typeAnnotation &&
                  r.right.start < r.typeAnnotation.start &&
                  this.raise(r.typeAnnotation.start, K.TypeBeforeInitializer),
                  r;
              }
              shouldParseDefaultImport(t) {
                return J(t) ? $(this.state) : super.shouldParseDefaultImport(t);
              }
              parseImportSpecifierLocal(t, e, s, r) {
                e.local = J(t)
                  ? this.flowParseRestrictedIdentifier(!0, !0)
                  : this.parseIdentifier(),
                  this.checkLVal(e.local, 9, void 0, r),
                  t.specifiers.push(this.finishNode(e, s));
              }
              maybeParseDefaultImportSpecifier(t) {
                t.importKind = "value";
                let e = null;
                if (
                  this.match(c._typeof)
                    ? e = "typeof"
                    : this.isContextual("type") && (e = "type"), e
                ) {
                  const s = this.lookahead();
                  "type" === e && s.type === c.star && this.unexpected(s.start),
                    ($(s) || s.type === c.braceL || s.type === c.star) &&
                    (this.next(), t.importKind = e);
                }
                return super.maybeParseDefaultImportSpecifier(t);
              }
              parseImportSpecifier(t) {
                const e = this.startNode(),
                  s = this.state.start,
                  r = this.parseModuleExportName();
                let i = null;
                "Identifier" === r.type && ("type" === r.name
                  ? i = "type"
                  : "typeof" === r.name && (i = "typeof"));
                let n = !1;
                if (
                  this.isContextual("as") && !this.isLookaheadContextual("as")
                ) {
                  const t = this.parseIdentifier(!0);
                  null === i || this.match(c.name) || this.state.type.keyword
                    ? (e.imported = r,
                      e.importKind = null,
                      e.local = this.parseIdentifier())
                    : (e.imported = t, e.importKind = i, e.local = t.__clone());
                } else if (
                  null !== i && (this.match(c.name) || this.state.type.keyword)
                ) {
                  e.imported = this.parseIdentifier(!0),
                    e.importKind = i,
                    this.eatContextual("as")
                      ? e.local = this.parseIdentifier()
                      : (n = !0, e.local = e.imported.__clone());
                } else {
                  if ("StringLiteral" === r.type) {
                    throw this.raise(e.start, g.ImportBindingIsString, r.value);
                  }
                  n = !0,
                    e.imported = r,
                    e.importKind = null,
                    e.local = e.imported.__clone();
                }
                const a = J(t), o = J(e);
                a && o && this.raise(s, K.ImportTypeShorthandOnlyInPureImport),
                  (a || o) &&
                  this.checkReservedType(e.local.name, e.local.start, !0),
                  !n || a || o ||
                  this.checkReservedWord(e.local.name, e.start, !0, !0),
                  this.checkLVal(e.local, 9, void 0, "import specifier"),
                  t.specifiers.push(this.finishNode(e, "ImportSpecifier"));
              }
              parseFunctionParams(t, e) {
                const s = t.kind;
                "get" !== s && "set" !== s && this.isRelational("<") &&
                (t.typeParameters = this.flowParseTypeParameterDeclaration()),
                  super.parseFunctionParams(t, e);
              }
              parseVarId(t, e) {
                super.parseVarId(t, e),
                  this.match(c.colon) &&
                  (t.id.typeAnnotation = this.flowParseTypeAnnotation(),
                    this.resetEndLocation(t.id));
              }
              parseAsyncArrowFromCallExpression(t, e) {
                if (this.match(c.colon)) {
                  const e = this.state.noAnonFunctionType;
                  this.state.noAnonFunctionType = !0,
                    t.returnType = this.flowParseTypeAnnotation(),
                    this.state.noAnonFunctionType = e;
                }
                return super.parseAsyncArrowFromCallExpression(t, e);
              }
              shouldParseAsyncArrow() {
                return this.match(c.colon) || super.shouldParseAsyncArrow();
              }
              parseMaybeAssign(t, e, s) {
                var r;
                let i, n = null;
                if (
                  this.hasPlugin("jsx") &&
                  (this.match(c.jsxTagStart) || this.isRelational("<"))
                ) {
                  if (
                    n = this.state.clone(),
                      i = this.tryParse(
                        (() => super.parseMaybeAssign(t, e, s)),
                        n,
                      ),
                      !i.error
                  ) {
                    return i.node;
                  }
                  const { context: r } = this.state;
                  r[r.length - 1] === T.j_oTag ? r.length -= 2
                  : r[r.length - 1] === T.j_expr && (r.length -= 1);
                }
                if (
                  (null == (r = i) ? void 0 : r.error) || this.isRelational("<")
                ) {
                  var a, o;
                  let r;
                  n = n || this.state.clone();
                  const u = this.tryParse(
                    ((i) => {
                      var n;
                      r = this.flowParseTypeParameterDeclaration();
                      const a = this.forwardNoArrowParamsConversionAt(
                        r,
                        (() => {
                          const i = super.parseMaybeAssign(t, e, s);
                          return this.resetStartLocationFromNode(i, r), i;
                        }),
                      );
                      "ArrowFunctionExpression" !== a.type &&
                        (null == (n = a.extra)
                          ? void 0
                          : n.parenthesized) &&
                        i();
                      const o = this.maybeUnwrapTypeCastExpression(a);
                      return o.typeParameters = r,
                        this.resetStartLocationFromNode(o, r),
                        a;
                    }),
                    n,
                  );
                  let h = null;
                  if (
                    u.node &&
                    "ArrowFunctionExpression" ===
                      this.maybeUnwrapTypeCastExpression(u.node).type
                  ) {
                    if (!u.error && !u.aborted) {
                      return u.node.async &&
                        this.raise(
                          r.start,
                          K.UnexpectedTypeParameterBeforeAsyncArrowFunction,
                        ),
                        u.node;
                    }
                    h = u.node;
                  }
                  if (null == (a = i) ? void 0 : a.node) {
                    return this.state = i.failState, i.node;
                  }
                  if (h) return this.state = u.failState, h;
                  if (null == (o = i) ? void 0 : o.thrown) throw i.error;
                  if (u.thrown) throw u.error;
                  throw this.raise(
                    r.start,
                    K.UnexpectedTokenAfterTypeParameter,
                  );
                }
                return super.parseMaybeAssign(t, e, s);
              }
              parseArrow(t) {
                if (this.match(c.colon)) {
                  const e = this.tryParse(
                    (() => {
                      const e = this.state.noAnonFunctionType;
                      this.state.noAnonFunctionType = !0;
                      const s = this.startNode();
                      return [s.typeAnnotation, t.predicate] = this
                        .flowParseTypeAndPredicateInitialiser(),
                        this.state.noAnonFunctionType = e,
                        this.canInsertSemicolon() && this.unexpected(),
                        this.match(c.arrow) || this.unexpected(),
                        s;
                    }),
                  );
                  if (e.thrown) return null;
                  e.error && (this.state = e.failState),
                    t.returnType = e.node.typeAnnotation
                      ? this.finishNode(e.node, "TypeAnnotation")
                      : null;
                }
                return super.parseArrow(t);
              }
              shouldParseArrow() {
                return this.match(c.colon) || super.shouldParseArrow();
              }
              setArrowFunctionParameters(t, e) {
                -1 !== this.state.noArrowParamsConversionAt.indexOf(t.start)
                  ? t.params = e
                  : super.setArrowFunctionParameters(t, e);
              }
              checkParams(t, e, s) {
                if (
                  !s ||
                  -1 === this.state.noArrowParamsConversionAt.indexOf(t.start)
                ) {
                  return super.checkParams(...arguments);
                }
              }
              parseParenAndDistinguishExpression(t) {
                return super.parseParenAndDistinguishExpression(
                  t && -1 === this.state.noArrowAt.indexOf(this.state.start),
                );
              }
              parseSubscripts(t, e, s, r) {
                if (
                  "Identifier" === t.type && "async" === t.name &&
                  -1 !== this.state.noArrowAt.indexOf(e)
                ) {
                  this.next();
                  const r = this.startNodeAt(e, s);
                  r.callee = t,
                    r.arguments = this.parseCallExpressionArguments(
                      c.parenR,
                      !1,
                    ),
                    t = this.finishNode(r, "CallExpression");
                } else if (
                  "Identifier" === t.type && "async" === t.name &&
                  this.isRelational("<")
                ) {
                  const i = this.state.clone(),
                    n = this.tryParse(
                      ((t) =>
                        this.parseAsyncArrowWithTypeParameters(e, s) || t()),
                      i,
                    );
                  if (!n.error && !n.aborted) return n.node;
                  const a = this.tryParse(
                    (() => super.parseSubscripts(t, e, s, r)),
                    i,
                  );
                  if (a.node && !a.error) return a.node;
                  if (n.node) return this.state = n.failState, n.node;
                  if (a.node) return this.state = a.failState, a.node;
                  throw n.error || a.error;
                }
                return super.parseSubscripts(t, e, s, r);
              }
              parseSubscript(t, e, s, r, i) {
                if (this.match(c.questionDot) && this.isLookaheadToken_lt()) {
                  if (i.optionalChainMember = !0, r) return i.stop = !0, t;
                  this.next();
                  const n = this.startNodeAt(e, s);
                  return n.callee = t,
                    n.typeArguments = this
                      .flowParseTypeParameterInstantiation(),
                    this.expect(c.parenL),
                    n.arguments = this.parseCallExpressionArguments(
                      c.parenR,
                      !1,
                    ),
                    n.optional = !0,
                    this.finishCallExpression(n, !0);
                }
                if (!r && this.shouldParseTypes() && this.isRelational("<")) {
                  const r = this.startNodeAt(e, s);
                  r.callee = t;
                  const n = this.tryParse(
                    (() => (r.typeArguments = this
                      .flowParseTypeParameterInstantiationCallOrNew(),
                      this.expect(c.parenL),
                      r.arguments = this.parseCallExpressionArguments(
                        c.parenR,
                        !1,
                      ),
                      i.optionalChainMember && (r.optional = !1),
                      this.finishCallExpression(r, i.optionalChainMember))),
                  );
                  if (n.node) {
                    return n.error && (this.state = n.failState), n.node;
                  }
                }
                return super.parseSubscript(t, e, s, r, i);
              }
              parseNewArguments(t) {
                let e = null;
                this.shouldParseTypes() && this.isRelational("<") &&
                (e = this.tryParse(
                  (() => this.flowParseTypeParameterInstantiationCallOrNew()),
                ).node),
                  t.typeArguments = e,
                  super.parseNewArguments(t);
              }
              parseAsyncArrowWithTypeParameters(t, e) {
                const s = this.startNodeAt(t, e);
                if (this.parseFunctionParams(s), this.parseArrow(s)) {
                  return this.parseArrowExpression(s, void 0, !0);
                }
              }
              readToken_mult_modulo(t) {
                const e = this.input.charCodeAt(this.state.pos + 1);
                if (42 === t && 47 === e && this.state.hasFlowComment) {
                  return this.state.hasFlowComment = !1,
                    this.state.pos += 2,
                    void this.nextToken();
                }
                super.readToken_mult_modulo(t);
              }
              readToken_pipe_amp(t) {
                const e = this.input.charCodeAt(this.state.pos + 1);
                124 !== t || 125 !== e
                  ? super.readToken_pipe_amp(t)
                  : this.finishOp(c.braceBarR, 2);
              }
              parseTopLevel(t, e) {
                const s = super.parseTopLevel(t, e);
                return this.state.hasFlowComment &&
                  this.raise(this.state.pos, K.UnterminatedFlowComment),
                  s;
              }
              skipBlockComment() {
                if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
                  return this.state.hasFlowComment &&
                    this.unexpected(null, K.NestedFlowComment),
                    this.hasFlowCommentCompletion(),
                    this.state.pos += this.skipFlowComment(),
                    void (this.state.hasFlowComment = !0);
                }
                if (this.state.hasFlowComment) {
                  const t = this.input.indexOf("*-/", this.state.pos += 2);
                  if (-1 === t) {
                    throw this.raise(this.state.pos - 2, g.UnterminatedComment);
                  }
                  this.state.pos = t + 3;
                } else {
                  super.skipBlockComment();
                }
              }
              skipFlowComment() {
                const { pos: t } = this.state;
                let e = 2;
                for (; [32, 9].includes(this.input.charCodeAt(t + e));) e++;
                const s = this.input.charCodeAt(e + t),
                  r = this.input.charCodeAt(e + t + 1);
                return 58 === s && 58 === r
                  ? e + 2
                  : "flow-include" === this.input.slice(e + t, e + t + 12)
                  ? e + 12
                  : 58 === s && 58 !== r && e;
              }
              hasFlowCommentCompletion() {
                if (-1 === this.input.indexOf("*/", this.state.pos)) {
                  throw this.raise(this.state.pos, g.UnterminatedComment);
                }
              }
              flowEnumErrorBooleanMemberNotInitialized(
                t,
                { enumName: e, memberName: s },
              ) {
                this.raise(t, K.EnumBooleanMemberNotInitialized, s, e);
              }
              flowEnumErrorInvalidMemberName(
                t,
                { enumName: e, memberName: s },
              ) {
                const r = s[0].toUpperCase() + s.slice(1);
                this.raise(t, K.EnumInvalidMemberName, s, r, e);
              }
              flowEnumErrorDuplicateMemberName(
                t,
                { enumName: e, memberName: s },
              ) {
                this.raise(t, K.EnumDuplicateMemberName, s, e);
              }
              flowEnumErrorInconsistentMemberValues(t, { enumName: e }) {
                this.raise(t, K.EnumInconsistentMemberValues, e);
              }
              flowEnumErrorInvalidExplicitType(
                t,
                { enumName: e, suppliedType: s },
              ) {
                return this.raise(
                  t,
                  null === s ? K.EnumInvalidExplicitTypeUnknownSupplied
                  : K.EnumInvalidExplicitType,
                  e,
                  s,
                );
              }
              flowEnumErrorInvalidMemberInitializer(
                t,
                { enumName: e, explicitType: s, memberName: r },
              ) {
                let i = null;
                switch (s) {
                  case "boolean":
                  case "number":
                  case "string":
                    i = K.EnumInvalidMemberInitializerPrimaryType;
                    break;
                  case "symbol":
                    i = K.EnumInvalidMemberInitializerSymbolType;
                    break;
                  default:
                    i = K.EnumInvalidMemberInitializerUnknownType;
                }
                return this.raise(t, i, e, r, s);
              }
              flowEnumErrorNumberMemberNotInitialized(
                t,
                { enumName: e, memberName: s },
              ) {
                this.raise(t, K.EnumNumberMemberNotInitialized, e, s);
              }
              flowEnumErrorStringMemberInconsistentlyInitailized(
                t,
                { enumName: e },
              ) {
                this.raise(t, K.EnumStringMemberInconsistentlyInitailized, e);
              }
              flowEnumMemberInit() {
                const t = this.state.start,
                  e = () => this.match(c.comma) || this.match(c.braceR);
                switch (this.state.type) {
                  case c.num: {
                    const s = this.parseLiteral(
                      this.state.value,
                      "NumericLiteral",
                    );
                    return e() ? { type: "number", pos: s.start, value: s }
                    : { type: "invalid", pos: t };
                  }
                  case c.string: {
                    const s = this.parseLiteral(
                      this.state.value,
                      "StringLiteral",
                    );
                    return e() ? { type: "string", pos: s.start, value: s }
                    : { type: "invalid", pos: t };
                  }
                  case c._true:
                  case c._false: {
                    const s = this.parseBooleanLiteral();
                    return e() ? { type: "boolean", pos: s.start, value: s }
                    : { type: "invalid", pos: t };
                  }
                  default:
                    return { type: "invalid", pos: t };
                }
              }
              flowEnumMemberRaw() {
                const t = this.state.start;
                return {
                  id: this.parseIdentifier(!0),
                  init: this.eat(c.eq) ? this.flowEnumMemberInit()
                  : { type: "none", pos: t },
                };
              }
              flowEnumCheckExplicitTypeMismatch(t, e, s) {
                const { explicitType: r } = e;
                null !== r && r !== s &&
                  this.flowEnumErrorInvalidMemberInitializer(t, e);
              }
              flowEnumMembers({ enumName: t, explicitType: e }) {
                const s = new Set(),
                  r = {
                    booleanMembers: [],
                    numberMembers: [],
                    stringMembers: [],
                    defaultedMembers: [],
                  };
                for (; !this.match(c.braceR);) {
                  const i = this.startNode(),
                    { id: n, init: a } = this.flowEnumMemberRaw(),
                    o = n.name;
                  if ("" === o) continue;
                  /^[a-z]/.test(o) &&
                  this.flowEnumErrorInvalidMemberName(n.start, {
                    enumName: t,
                    memberName: o,
                  }),
                    s.has(o) &&
                    this.flowEnumErrorDuplicateMemberName(n.start, {
                      enumName: t,
                      memberName: o,
                    }),
                    s.add(o);
                  const u = { enumName: t, explicitType: e, memberName: o };
                  switch (i.id = n, a.type) {
                    case "boolean":
                      this.flowEnumCheckExplicitTypeMismatch(
                        a.pos,
                        u,
                        "boolean",
                      ),
                        i.init = a.value,
                        r.booleanMembers.push(
                          this.finishNode(i, "EnumBooleanMember"),
                        );
                      break;
                    case "number":
                      this.flowEnumCheckExplicitTypeMismatch(
                        a.pos,
                        u,
                        "number",
                      ),
                        i.init = a.value,
                        r.numberMembers.push(
                          this.finishNode(i, "EnumNumberMember"),
                        );
                      break;
                    case "string":
                      this.flowEnumCheckExplicitTypeMismatch(
                        a.pos,
                        u,
                        "string",
                      ),
                        i.init = a.value,
                        r.stringMembers.push(
                          this.finishNode(i, "EnumStringMember"),
                        );
                      break;
                    case "invalid":
                      throw this.flowEnumErrorInvalidMemberInitializer(
                        a.pos,
                        u,
                      );
                    case "none":
                      switch (e) {
                        case "boolean":
                          this.flowEnumErrorBooleanMemberNotInitialized(
                            a.pos,
                            u,
                          );
                          break;
                        case "number":
                          this.flowEnumErrorNumberMemberNotInitialized(
                            a.pos,
                            u,
                          );
                          break;
                        default:
                          r.defaultedMembers.push(
                            this.finishNode(i, "EnumDefaultedMember"),
                          );
                      }
                  }
                  this.match(c.braceR) || this.expect(c.comma);
                }
                return r;
              }
              flowEnumStringMembers(t, e, { enumName: s }) {
                if (0 === t.length) return e;
                if (0 === e.length) return t;
                if (e.length > t.length) {
                  for (let e = 0; e < t.length; e++) {
                    const r = t[e];
                    this.flowEnumErrorStringMemberInconsistentlyInitailized(
                      r.start,
                      { enumName: s },
                    );
                  }
                  return e;
                }
                for (let t = 0; t < e.length; t++) {
                  const r = e[t];
                  this.flowEnumErrorStringMemberInconsistentlyInitailized(
                    r.start,
                    { enumName: s },
                  );
                }
                return t;
              }
              flowEnumParseExplicitType({ enumName: t }) {
                if (this.eatContextual("of")) {
                  if (!this.match(c.name)) {
                    throw this.flowEnumErrorInvalidExplicitType(
                      this.state.start,
                      { enumName: t, suppliedType: null },
                    );
                  }
                  const { value: e } = this.state;
                  return this.next(),
                    "boolean" !== e && "number" !== e && "string" !== e &&
                    "symbol" !== e &&
                    this.flowEnumErrorInvalidExplicitType(this.state.start, {
                      enumName: t,
                      suppliedType: e,
                    }),
                    e;
                }
                return null;
              }
              flowEnumBody(t, { enumName: e, nameLoc: s }) {
                const r = this.flowEnumParseExplicitType({ enumName: e });
                this.expect(c.braceL);
                const i = this.flowEnumMembers({
                  enumName: e,
                  explicitType: r,
                });
                switch (r) {
                  case "boolean":
                    return t.explicitType = !0,
                      t.members = i.booleanMembers,
                      this.expect(c.braceR),
                      this.finishNode(t, "EnumBooleanBody");
                  case "number":
                    return t.explicitType = !0,
                      t.members = i.numberMembers,
                      this.expect(c.braceR),
                      this.finishNode(t, "EnumNumberBody");
                  case "string":
                    return t.explicitType = !0,
                      t.members = this.flowEnumStringMembers(
                        i.stringMembers,
                        i.defaultedMembers,
                        { enumName: e },
                      ),
                      this.expect(c.braceR),
                      this.finishNode(t, "EnumStringBody");
                  case "symbol":
                    return t.members = i.defaultedMembers,
                      this.expect(c.braceR),
                      this.finishNode(t, "EnumSymbolBody");
                  default: {
                    const r =
                      () => (t.members = [],
                        this.expect(c.braceR),
                        this.finishNode(t, "EnumStringBody"));
                    t.explicitType = !1;
                    const n = i.booleanMembers.length,
                      a = i.numberMembers.length,
                      o = i.stringMembers.length,
                      u = i.defaultedMembers.length;
                    if (n || a || o || u) {
                      if (n || a) {
                        if (!a && !o && n >= u) {
                          for (
                            let t = 0, s = i.defaultedMembers; t < s.length; t++
                          ) {
                            const r = s[t];
                            this.flowEnumErrorBooleanMemberNotInitialized(
                              r.start,
                              { enumName: e, memberName: r.id.name },
                            );
                          }
                          return t.members = i.booleanMembers,
                            this.expect(c.braceR),
                            this.finishNode(t, "EnumBooleanBody");
                        }
                        if (!n && !o && a >= u) {
                          for (
                            let t = 0, s = i.defaultedMembers; t < s.length; t++
                          ) {
                            const r = s[t];
                            this.flowEnumErrorNumberMemberNotInitialized(
                              r.start,
                              { enumName: e, memberName: r.id.name },
                            );
                          }
                          return t.members = i.numberMembers,
                            this.expect(c.braceR),
                            this.finishNode(t, "EnumNumberBody");
                        }
                        return this.flowEnumErrorInconsistentMemberValues(s, {
                          enumName: e,
                        }),
                          r();
                      }
                      return t.members = this.flowEnumStringMembers(
                        i.stringMembers,
                        i.defaultedMembers,
                        { enumName: e },
                      ),
                        this.expect(c.braceR),
                        this.finishNode(t, "EnumStringBody");
                    }
                    return r();
                  }
                }
              }
              flowParseEnumDeclaration(t) {
                const e = this.parseIdentifier();
                return t.id = e,
                  t.body = this.flowEnumBody(this.startNode(), {
                    enumName: e.name,
                    nameLoc: e.start,
                  }),
                  this.finishNode(t, "EnumDeclaration");
              }
              updateContext(t) {
                this.match(c.name) && "of" === this.state.value &&
                  t === c.name &&
                  "interface" ===
                    this.input.slice(
                      this.state.lastTokStart,
                      this.state.lastTokEnd,
                    )
                  ? this.state.exprAllowed = !1
                  : super.updateContext(t);
              }
              isLookaheadToken_lt() {
                const t = this.nextTokenStart();
                if (60 === this.input.charCodeAt(t)) {
                  const e = this.input.charCodeAt(t + 1);
                  return 60 !== e && 61 !== e;
                }
                return !1;
              }
              maybeUnwrapTypeCastExpression(t) {
                return "TypeCastExpression" === t.type ? t.expression : t;
              }
            },
          typescript: (t) =>
            class extends t {
              getScopeHandler() {
                return ut;
              }
              tsIsIdentifier() {
                return this.match(c.name);
              }
              tsNextTokenCanFollowModifier() {
                return this.next(),
                  !(this.hasPrecedingLineBreak() || this.match(c.parenL) ||
                    this.match(c.parenR) || this.match(c.colon) ||
                    this.match(c.eq) || this.match(c.question) ||
                    this.match(c.bang));
              }
              tsParseModifier(t) {
                if (!this.match(c.name)) return;
                const e = this.state.value;
                return -1 !== t.indexOf(e) &&
                    this.tsTryParse(
                      this.tsNextTokenCanFollowModifier.bind(this),
                    )
                  ? e
                  : void 0;
              }
              tsParseModifiers(t, e) {
                for (;;) {
                  const s = this.state.start, r = this.tsParseModifier(e);
                  if (!r) break;
                  Object.hasOwnProperty.call(t, r) &&
                  this.raise(s, dt.DuplicateModifier, r), t[r] = !0;
                }
              }
              tsIsListTerminator(t) {
                switch (t) {
                  case "EnumMembers":
                  case "TypeMembers":
                    return this.match(c.braceR);
                  case "HeritageClauseElement":
                    return this.match(c.braceL);
                  case "TupleElementTypes":
                    return this.match(c.bracketR);
                  case "TypeParametersOrArguments":
                    return this.isRelational(">");
                }
                throw new Error("Unreachable");
              }
              tsParseList(t, e) {
                const s = [];
                for (; !this.tsIsListTerminator(t);) s.push(e());
                return s;
              }
              tsParseDelimitedList(t, e) {
                return pt(this.tsParseDelimitedListWorker(t, e, !0));
              }
              tsParseDelimitedListWorker(t, e, s) {
                const r = [];
                for (; !this.tsIsListTerminator(t);) {
                  const i = e();
                  if (null == i) return;
                  if (r.push(i), !this.eat(c.comma)) {
                    if (this.tsIsListTerminator(t)) break;
                    return void (s && this.expect(c.comma));
                  }
                }
                return r;
              }
              tsParseBracketedList(t, e, s, r) {
                r || (s ? this.expect(c.bracketL) : this.expectRelational("<"));
                const i = this.tsParseDelimitedList(t, e);
                return s ? this.expect(c.bracketR) : this.expectRelational(">"),
                  i;
              }
              tsParseImportType() {
                const t = this.startNode();
                return this.expect(c._import),
                  this.expect(c.parenL),
                  this.match(c.string) ||
                  this.raise(
                    this.state.start,
                    dt.UnsupportedImportTypeArgument,
                  ),
                  t.argument = this.parseExprAtom(),
                  this.expect(c.parenR),
                  this.eat(c.dot) && (t.qualifier = this.tsParseEntityName(!0)),
                  this.isRelational("<") &&
                  (t.typeParameters = this.tsParseTypeArguments()),
                  this.finishNode(t, "TSImportType");
              }
              tsParseEntityName(t) {
                let e = this.parseIdentifier();
                for (; this.eat(c.dot);) {
                  const s = this.startNodeAtNode(e);
                  s.left = e,
                    s.right = this.parseIdentifier(t),
                    e = this.finishNode(s, "TSQualifiedName");
                }
                return e;
              }
              tsParseTypeReference() {
                const t = this.startNode();
                return t.typeName = this.tsParseEntityName(!1),
                  !this.hasPrecedingLineBreak() && this.isRelational("<") &&
                  (t.typeParameters = this.tsParseTypeArguments()),
                  this.finishNode(t, "TSTypeReference");
              }
              tsParseThisTypePredicate(t) {
                this.next();
                const e = this.startNodeAtNode(t);
                return e.parameterName = t,
                  e.typeAnnotation = this.tsParseTypeAnnotation(!1),
                  this.finishNode(e, "TSTypePredicate");
              }
              tsParseThisTypeNode() {
                const t = this.startNode();
                return this.next(), this.finishNode(t, "TSThisType");
              }
              tsParseTypeQuery() {
                const t = this.startNode();
                return this.expect(c._typeof),
                  this.match(c._import)
                    ? t.exprName = this.tsParseImportType()
                    : t.exprName = this.tsParseEntityName(!0),
                  this.finishNode(t, "TSTypeQuery");
              }
              tsParseTypeParameter() {
                const t = this.startNode();
                return t.name = this.parseIdentifierName(t.start),
                  t.constraint = this.tsEatThenParseType(c._extends),
                  t.default = this.tsEatThenParseType(c.eq),
                  this.finishNode(t, "TSTypeParameter");
              }
              tsTryParseTypeParameters() {
                if (this.isRelational("<")) return this.tsParseTypeParameters();
              }
              tsParseTypeParameters() {
                const t = this.startNode();
                return this.isRelational("<") || this.match(c.jsxTagStart)
                  ? this.next()
                  : this.unexpected(),
                  t.params = this.tsParseBracketedList(
                    "TypeParametersOrArguments",
                    this.tsParseTypeParameter.bind(this),
                    !1,
                    !0,
                  ),
                  0 === t.params.length &&
                  this.raise(t.start, dt.EmptyTypeParameters),
                  this.finishNode(t, "TSTypeParameterDeclaration");
              }
              tsTryNextParseConstantContext() {
                return this.lookahead().type === c._const
                  ? (this.next(), this.tsParseTypeReference()) : null;
              }
              tsFillSignature(t, e) {
                const s = t === c.arrow;
                e.typeParameters = this.tsTryParseTypeParameters(),
                  this.expect(c.parenL),
                  e.parameters = this.tsParseBindingListForSignature(),
                  (s || this.match(t)) &&
                  (e.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(
                    t,
                  ));
              }
              tsParseBindingListForSignature() {
                return this.parseBindingList(c.parenR, 41).map(
                  ((t) => ("Identifier" !== t.type &&
                    "RestElement" !== t.type && "ObjectPattern" !== t.type &&
                    "ArrayPattern" !== t.type &&
                    this.raise(
                      t.start,
                      dt.UnsupportedSignatureParameterKind,
                      t.type,
                    ),
                    t)),
                );
              }
              tsParseTypeMemberSemicolon() {
                this.eat(c.comma) || this.semicolon();
              }
              tsParseSignatureMember(t, e) {
                return this.tsFillSignature(c.colon, e),
                  this.tsParseTypeMemberSemicolon(),
                  this.finishNode(e, t);
              }
              tsIsUnambiguouslyIndexSignature() {
                return this.next(), this.eat(c.name) && this.match(c.colon);
              }
              tsTryParseIndexSignature(t) {
                if (
                  !this.match(c.bracketL) ||
                  !this.tsLookAhead(
                    this.tsIsUnambiguouslyIndexSignature.bind(this),
                  )
                ) {
                  return;
                }
                this.expect(c.bracketL);
                const e = this.parseIdentifier();
                e.typeAnnotation = this.tsParseTypeAnnotation(),
                  this.resetEndLocation(e),
                  this.expect(c.bracketR),
                  t.parameters = [e];
                const s = this.tsTryParseTypeAnnotation();
                return s && (t.typeAnnotation = s),
                  this.tsParseTypeMemberSemicolon(),
                  this.finishNode(t, "TSIndexSignature");
              }
              tsParsePropertyOrMethodSignature(t, e) {
                this.eat(c.question) && (t.optional = !0);
                const s = t;
                if (e || !this.match(c.parenL) && !this.isRelational("<")) {
                  const t = s;
                  e && (t.readonly = !0);
                  const r = this.tsTryParseTypeAnnotation();
                  return r && (t.typeAnnotation = r),
                    this.tsParseTypeMemberSemicolon(),
                    this.finishNode(t, "TSPropertySignature");
                }
                {
                  const t = s;
                  return this.tsFillSignature(c.colon, t),
                    this.tsParseTypeMemberSemicolon(),
                    this.finishNode(t, "TSMethodSignature");
                }
              }
              tsParseTypeMember() {
                const t = this.startNode();
                if (this.match(c.parenL) || this.isRelational("<")) {
                  return this.tsParseSignatureMember(
                    "TSCallSignatureDeclaration",
                    t,
                  );
                }
                if (this.match(c._new)) {
                  const e = this.startNode();
                  return this.next(),
                    this.match(c.parenL) || this.isRelational("<")
                      ? this.tsParseSignatureMember(
                        "TSConstructSignatureDeclaration",
                        t,
                      )
                      : (t.key = this.createIdentifier(e, "new"),
                        this.tsParsePropertyOrMethodSignature(t, !1));
                }
                const e = !!this.tsParseModifier(["readonly"]),
                  s = this.tsTryParseIndexSignature(t);
                return s ? (e && (t.readonly = !0), s)
                : (this.parsePropertyName(t, !1),
                  this.tsParsePropertyOrMethodSignature(t, e));
              }
              tsParseTypeLiteral() {
                const t = this.startNode();
                return t.members = this.tsParseObjectTypeMembers(),
                  this.finishNode(t, "TSTypeLiteral");
              }
              tsParseObjectTypeMembers() {
                this.expect(c.braceL);
                const t = this.tsParseList(
                  "TypeMembers",
                  this.tsParseTypeMember.bind(this),
                );
                return this.expect(c.braceR), t;
              }
              tsIsStartOfMappedType() {
                return this.next(),
                  this.eat(c.plusMin)
                    ? this.isContextual("readonly")
                    : (this.isContextual("readonly") && this.next(),
                      !!this.match(c.bracketL) &&
                      (this.next(),
                        !!this.tsIsIdentifier() &&
                        (this.next(), this.match(c._in))));
              }
              tsParseMappedTypeParameter() {
                const t = this.startNode();
                return t.name = this.parseIdentifierName(t.start),
                  t.constraint = this.tsExpectThenParseType(c._in),
                  this.finishNode(t, "TSTypeParameter");
              }
              tsParseMappedType() {
                const t = this.startNode();
                return this.expect(c.braceL),
                  this.match(c.plusMin)
                    ? (t.readonly = this.state.value,
                      this.next(),
                      this.expectContextual("readonly"))
                    : this.eatContextual("readonly") && (t.readonly = !0),
                  this.expect(c.bracketL),
                  t.typeParameter = this.tsParseMappedTypeParameter(),
                  t.nameType = this.eatContextual("as")
                    ? this.tsParseType()
                    : null,
                  this.expect(c.bracketR),
                  this.match(c.plusMin)
                    ? (t.optional = this.state.value,
                      this.next(),
                      this.expect(c.question))
                    : this.eat(c.question) && (t.optional = !0),
                  t.typeAnnotation = this.tsTryParseType(),
                  this.semicolon(),
                  this.expect(c.braceR),
                  this.finishNode(t, "TSMappedType");
              }
              tsParseTupleType() {
                const t = this.startNode();
                t.elementTypes = this.tsParseBracketedList(
                  "TupleElementTypes",
                  this.tsParseTupleElementType.bind(this),
                  !0,
                  !1,
                );
                let e = !1, s = null;
                return t.elementTypes.forEach(
                  ((t) => {
                    var r;
                    let { type: i } = t;
                    !e || "TSRestType" === i || "TSOptionalType" === i ||
                    "TSNamedTupleMember" === i && t.optional ||
                    this.raise(t.start, dt.OptionalTypeBeforeRequired),
                      e = e || "TSNamedTupleMember" === i && t.optional ||
                        "TSOptionalType" === i,
                      "TSRestType" === i && (i = (t = t.typeAnnotation).type);
                    const n = "TSNamedTupleMember" === i;
                    s = null != (r = s) ? r : n,
                      s !== n &&
                      this.raise(t.start, dt.MixedLabeledAndUnlabeledElements);
                  }),
                ),
                  this.finishNode(t, "TSTupleType");
              }
              tsParseTupleElementType() {
                const { start: t, startLoc: e } = this.state,
                  s = this.eat(c.ellipsis);
                let r = this.tsParseType();
                const i = this.eat(c.question);
                if (this.eat(c.colon)) {
                  const t = this.startNodeAtNode(r);
                  t.optional = i,
                    "TSTypeReference" !== r.type || r.typeParameters ||
                      "Identifier" !== r.typeName.type
                      ? (this.raise(r.start, dt.InvalidTupleMemberLabel),
                        t.label = r)
                      : t.label = r.typeName,
                    t.elementType = this.tsParseType(),
                    r = this.finishNode(t, "TSNamedTupleMember");
                } else if (i) {
                  const t = this.startNodeAtNode(r);
                  t.typeAnnotation = r,
                    r = this.finishNode(t, "TSOptionalType");
                }
                if (s) {
                  const s = this.startNodeAt(t, e);
                  s.typeAnnotation = r, r = this.finishNode(s, "TSRestType");
                }
                return r;
              }
              tsParseParenthesizedType() {
                const t = this.startNode();
                return this.expect(c.parenL),
                  t.typeAnnotation = this.tsParseType(),
                  this.expect(c.parenR),
                  this.finishNode(t, "TSParenthesizedType");
              }
              tsParseFunctionOrConstructorType(t) {
                const e = this.startNode();
                return "TSConstructorType" === t && this.expect(c._new),
                  this.tsFillSignature(c.arrow, e),
                  this.finishNode(e, t);
              }
              tsParseLiteralTypeNode() {
                const t = this.startNode();
                return t.literal = (() => {
                  switch (this.state.type) {
                    case c.num:
                    case c.bigint:
                    case c.string:
                    case c._true:
                    case c._false:
                      return this.parseExprAtom();
                    default:
                      throw this.unexpected();
                  }
                })(),
                  this.finishNode(t, "TSLiteralType");
              }
              tsParseTemplateLiteralType() {
                const t = this.startNode();
                return t.literal = this.parseTemplate(!1),
                  this.finishNode(t, "TSLiteralType");
              }
              parseTemplateSubstitution() {
                return this.state.inType ? this.tsParseType()
                : super.parseTemplateSubstitution();
              }
              tsParseThisTypeOrThisTypePredicate() {
                const t = this.tsParseThisTypeNode();
                return this.isContextual("is") && !this.hasPrecedingLineBreak()
                  ? this.tsParseThisTypePredicate(t) : t;
              }
              tsParseNonArrayType() {
                switch (this.state.type) {
                  case c.name:
                  case c._void:
                  case c._null: {
                    const t = this.match(c._void) ? "TSVoidKeyword"
                    : this.match(c._null) ? "TSNullKeyword" : function (t) {
                      switch (t) {
                        case "any":
                          return "TSAnyKeyword";
                        case "boolean":
                          return "TSBooleanKeyword";
                        case "bigint":
                          return "TSBigIntKeyword";
                        case "never":
                          return "TSNeverKeyword";
                        case "number":
                          return "TSNumberKeyword";
                        case "object":
                          return "TSObjectKeyword";
                        case "string":
                          return "TSStringKeyword";
                        case "symbol":
                          return "TSSymbolKeyword";
                        case "undefined":
                          return "TSUndefinedKeyword";
                        case "unknown":
                          return "TSUnknownKeyword";
                        default:
                          return;
                      }
                    }(this.state.value);
                    if (void 0 !== t && 46 !== this.lookaheadCharCode()) {
                      const e = this.startNode();
                      return this.next(), this.finishNode(e, t);
                    }
                    return this.tsParseTypeReference();
                  }
                  case c.string:
                  case c.num:
                  case c.bigint:
                  case c._true:
                  case c._false:
                    return this.tsParseLiteralTypeNode();
                  case c.plusMin:
                    if ("-" === this.state.value) {
                      const t = this.startNode(), e = this.lookahead();
                      if (e.type !== c.num && e.type !== c.bigint) {
                        throw this.unexpected();
                      }
                      return t.literal = this.parseMaybeUnary(),
                        this.finishNode(t, "TSLiteralType");
                    }
                    break;
                  case c._this:
                    return this.tsParseThisTypeOrThisTypePredicate();
                  case c._typeof:
                    return this.tsParseTypeQuery();
                  case c._import:
                    return this.tsParseImportType();
                  case c.braceL:
                    return this.tsLookAhead(
                        this.tsIsStartOfMappedType.bind(this),
                      ) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
                  case c.bracketL:
                    return this.tsParseTupleType();
                  case c.parenL:
                    return this.tsParseParenthesizedType();
                  case c.backQuote:
                    return this.tsParseTemplateLiteralType();
                }
                throw this.unexpected();
              }
              tsParseArrayTypeOrHigher() {
                let t = this.tsParseNonArrayType();
                for (; !this.hasPrecedingLineBreak() && this.eat(c.bracketL);) {
                  if (this.match(c.bracketR)) {
                    const e = this.startNodeAtNode(t);
                    e.elementType = t,
                      this.expect(c.bracketR),
                      t = this.finishNode(e, "TSArrayType");
                  } else {
                    const e = this.startNodeAtNode(t);
                    e.objectType = t,
                      e.indexType = this.tsParseType(),
                      this.expect(c.bracketR),
                      t = this.finishNode(e, "TSIndexedAccessType");
                  }
                }
                return t;
              }
              tsParseTypeOperator(t) {
                const e = this.startNode();
                return this.expectContextual(t),
                  e.operator = t,
                  e.typeAnnotation = this.tsParseTypeOperatorOrHigher(),
                  "readonly" === t && this.tsCheckTypeAnnotationForReadOnly(e),
                  this.finishNode(e, "TSTypeOperator");
              }
              tsCheckTypeAnnotationForReadOnly(t) {
                switch (t.typeAnnotation.type) {
                  case "TSTupleType":
                  case "TSArrayType":
                    return;
                  default:
                    this.raise(t.start, dt.UnexpectedReadonly);
                }
              }
              tsParseInferType() {
                const t = this.startNode();
                this.expectContextual("infer");
                const e = this.startNode();
                return e.name = this.parseIdentifierName(e.start),
                  t.typeParameter = this.finishNode(e, "TSTypeParameter"),
                  this.finishNode(t, "TSInferType");
              }
              tsParseTypeOperatorOrHigher() {
                const t = ["keyof", "unique", "readonly"].find(
                  ((t) => this.isContextual(t)),
                );
                return t ? this.tsParseTypeOperator(t)
                : this.isContextual("infer") ? this.tsParseInferType()
                : this.tsParseArrayTypeOrHigher();
              }
              tsParseUnionOrIntersectionType(t, e, s) {
                this.eat(s);
                let r = e();
                if (this.match(s)) {
                  const i = [r];
                  for (; this.eat(s);) i.push(e());
                  const n = this.startNodeAtNode(r);
                  n.types = i, r = this.finishNode(n, t);
                }
                return r;
              }
              tsParseIntersectionTypeOrHigher() {
                return this.tsParseUnionOrIntersectionType(
                  "TSIntersectionType",
                  this.tsParseTypeOperatorOrHigher.bind(this),
                  c.bitwiseAND,
                );
              }
              tsParseUnionTypeOrHigher() {
                return this.tsParseUnionOrIntersectionType(
                  "TSUnionType",
                  this.tsParseIntersectionTypeOrHigher.bind(this),
                  c.bitwiseOR,
                );
              }
              tsIsStartOfFunctionType() {
                return !!this.isRelational("<") ||
                  this.match(c.parenL) &&
                    this.tsLookAhead(
                      this.tsIsUnambiguouslyStartOfFunctionType.bind(this),
                    );
              }
              tsSkipParameterStart() {
                if (this.match(c.name) || this.match(c._this)) {
                  return this.next(), !0;
                }
                if (this.match(c.braceL)) {
                  let t = 1;
                  for (
                    this.next(); t > 0;
                  ) {
                    this.match(c.braceL) ? ++t : this.match(c.braceR) && --t,
                      this.next();
                  }
                  return !0;
                }
                if (this.match(c.bracketL)) {
                  let t = 1;
                  for (
                    this.next(); t > 0;
                  ) {
                    this.match(c.bracketL)
                      ? ++t
                      : this.match(c.bracketR) && --t, this.next();
                  }
                  return !0;
                }
                return !1;
              }
              tsIsUnambiguouslyStartOfFunctionType() {
                if (
                  this.next(), this.match(c.parenR) || this.match(c.ellipsis)
                ) {
                  return !0;
                }
                if (this.tsSkipParameterStart()) {
                  if (
                    this.match(c.colon) || this.match(c.comma) ||
                    this.match(c.question) || this.match(c.eq)
                  ) {
                    return !0;
                  }
                  if (
                    this.match(c.parenR) && (this.next(), this.match(c.arrow))
                  ) {
                    return !0;
                  }
                }
                return !1;
              }
              tsParseTypeOrTypePredicateAnnotation(t) {
                return this.tsInType(
                  (() => {
                    const e = this.startNode();
                    this.expect(t);
                    const s = !!this.tsTryParse(
                      this.tsParseTypePredicateAsserts.bind(this),
                    );
                    if (s && this.match(c._this)) {
                      let t = this.tsParseThisTypeOrThisTypePredicate();
                      if ("TSThisType" === t.type) {
                        const s = this.startNodeAtNode(e);
                        s.parameterName = t,
                          s.asserts = !0,
                          t = this.finishNode(s, "TSTypePredicate");
                      } else t.asserts = !0;
                      return e.typeAnnotation = t,
                        this.finishNode(e, "TSTypeAnnotation");
                    }
                    const r = this.tsIsIdentifier() &&
                      this.tsTryParse(
                        this.tsParseTypePredicatePrefix.bind(this),
                      );
                    if (!r) {
                      if (!s) return this.tsParseTypeAnnotation(!1, e);
                      const t = this.startNodeAtNode(e);
                      return t.parameterName = this.parseIdentifier(),
                        t.asserts = s,
                        e.typeAnnotation = this.finishNode(
                          t,
                          "TSTypePredicate",
                        ),
                        this.finishNode(e, "TSTypeAnnotation");
                    }
                    const i = this.tsParseTypeAnnotation(!1),
                      n = this.startNodeAtNode(e);
                    return n.parameterName = r,
                      n.typeAnnotation = i,
                      n.asserts = s,
                      e.typeAnnotation = this.finishNode(n, "TSTypePredicate"),
                      this.finishNode(e, "TSTypeAnnotation");
                  }),
                );
              }
              tsTryParseTypeOrTypePredicateAnnotation() {
                return this.match(c.colon)
                  ? this.tsParseTypeOrTypePredicateAnnotation(c.colon)
                  : void 0;
              }
              tsTryParseTypeAnnotation() {
                return this.match(c.colon) ? this.tsParseTypeAnnotation()
                : void 0;
              }
              tsTryParseType() {
                return this.tsEatThenParseType(c.colon);
              }
              tsParseTypePredicatePrefix() {
                const t = this.parseIdentifier();
                if (this.isContextual("is") && !this.hasPrecedingLineBreak()) {
                  return this.next(), t;
                }
              }
              tsParseTypePredicateAsserts() {
                if (
                  !this.match(c.name) || "asserts" !== this.state.value ||
                  this.hasPrecedingLineBreak()
                ) {
                  return !1;
                }
                const t = this.state.containsEsc;
                return this.next(),
                  !(!this.match(c.name) && !this.match(c._this)) &&
                  (t &&
                    this.raise(
                      this.state.lastTokStart,
                      g.InvalidEscapedReservedWord,
                      "asserts",
                    ),
                    !0);
              }
              tsParseTypeAnnotation(t = !0, e = this.startNode()) {
                return this.tsInType(
                  (() => {
                    t && this.expect(c.colon),
                      e.typeAnnotation = this.tsParseType();
                  }),
                ),
                  this.finishNode(e, "TSTypeAnnotation");
              }
              tsParseType() {
                lt(this.state.inType);
                const t = this.tsParseNonConditionalType();
                if (this.hasPrecedingLineBreak() || !this.eat(c._extends)) {
                  return t;
                }
                const e = this.startNodeAtNode(t);
                return e.checkType = t,
                  e.extendsType = this.tsParseNonConditionalType(),
                  this.expect(c.question),
                  e.trueType = this.tsParseType(),
                  this.expect(c.colon),
                  e.falseType = this.tsParseType(),
                  this.finishNode(e, "TSConditionalType");
              }
              tsParseNonConditionalType() {
                return this.tsIsStartOfFunctionType()
                  ? this.tsParseFunctionOrConstructorType("TSFunctionType")
                  : this.match(c._new)
                  ? this.tsParseFunctionOrConstructorType("TSConstructorType")
                  : this.tsParseUnionTypeOrHigher();
              }
              tsParseTypeAssertion() {
                const t = this.startNode(),
                  e = this.tsTryNextParseConstantContext();
                return t.typeAnnotation = e || this.tsNextThenParseType(),
                  this.expectRelational(">"),
                  t.expression = this.parseMaybeUnary(),
                  this.finishNode(t, "TSTypeAssertion");
              }
              tsParseHeritageClause(t) {
                const e = this.state.start,
                  s = this.tsParseDelimitedList(
                    "HeritageClauseElement",
                    this.tsParseExpressionWithTypeArguments.bind(this),
                  );
                return s.length || this.raise(e, dt.EmptyHeritageClauseType, t),
                  s;
              }
              tsParseExpressionWithTypeArguments() {
                const t = this.startNode();
                return t.expression = this.tsParseEntityName(!1),
                  this.isRelational("<") &&
                  (t.typeParameters = this.tsParseTypeArguments()),
                  this.finishNode(t, "TSExpressionWithTypeArguments");
              }
              tsParseInterfaceDeclaration(t) {
                t.id = this.parseIdentifier(),
                  this.checkLVal(
                    t.id,
                    130,
                    void 0,
                    "typescript interface declaration",
                  ),
                  t.typeParameters = this.tsTryParseTypeParameters(),
                  this.eat(c._extends) &&
                  (t.extends = this.tsParseHeritageClause("extends"));
                const e = this.startNode();
                return e.body = this.tsInType(
                  this.tsParseObjectTypeMembers.bind(this),
                ),
                  t.body = this.finishNode(e, "TSInterfaceBody"),
                  this.finishNode(t, "TSInterfaceDeclaration");
              }
              tsParseTypeAliasDeclaration(t) {
                return t.id = this.parseIdentifier(),
                  this.checkLVal(t.id, 2, void 0, "typescript type alias"),
                  t.typeParameters = this.tsTryParseTypeParameters(),
                  t.typeAnnotation = this.tsInType(
                    (() => {
                      if (
                        this.expect(c.eq),
                          this.isContextual("intrinsic") &&
                          this.lookahead().type !== c.dot
                      ) {
                        const t = this.startNode();
                        return this.next(),
                          this.finishNode(t, "TSIntrinsicKeyword");
                      }
                      return this.tsParseType();
                    }),
                  ),
                  this.semicolon(),
                  this.finishNode(t, "TSTypeAliasDeclaration");
              }
              tsInNoContext(t) {
                const e = this.state.context;
                this.state.context = [e[0]];
                try {
                  return t();
                } finally {
                  this.state.context = e;
                }
              }
              tsInType(t) {
                const e = this.state.inType;
                this.state.inType = !0;
                try {
                  return t();
                } finally {
                  this.state.inType = e;
                }
              }
              tsEatThenParseType(t) {
                return this.match(t)
                  ? this.tsNextThenParseType()
                  : void 0;
              }
              tsExpectThenParseType(t) {
                return this.tsDoThenParseType(
                  (() => this.expect(t)),
                );
              }
              tsNextThenParseType() {
                return this.tsDoThenParseType((() => this.next()));
              }
              tsDoThenParseType(t) {
                return this.tsInType((() => (t(), this.tsParseType())));
              }
              tsParseEnumMember() {
                const t = this.startNode();
                return t.id = this.match(c.string)
                  ? this.parseExprAtom()
                  : this.parseIdentifier(!0),
                  this.eat(c.eq) &&
                  (t.initializer = this.parseMaybeAssignAllowIn()),
                  this.finishNode(t, "TSEnumMember");
              }
              tsParseEnumDeclaration(t, e) {
                return e && (t.const = !0),
                  t.id = this.parseIdentifier(),
                  this.checkLVal(
                    t.id,
                    e ? 779 : 267,
                    void 0,
                    "typescript enum declaration",
                  ),
                  this.expect(c.braceL),
                  t.members = this.tsParseDelimitedList(
                    "EnumMembers",
                    this.tsParseEnumMember.bind(this),
                  ),
                  this.expect(c.braceR),
                  this.finishNode(t, "TSEnumDeclaration");
              }
              tsParseModuleBlock() {
                const t = this.startNode();
                return this.scope.enter(0),
                  this.expect(c.braceL),
                  this.parseBlockOrModuleBlockBody(
                    t.body = [],
                    void 0,
                    !0,
                    c.braceR,
                  ),
                  this.scope.exit(),
                  this.finishNode(t, "TSModuleBlock");
              }
              tsParseModuleOrNamespaceDeclaration(t, e = !1) {
                if (
                  t.id = this.parseIdentifier(),
                    e ||
                    this.checkLVal(
                      t.id,
                      1024,
                      null,
                      "module or namespace declaration",
                    ),
                    this.eat(c.dot)
                ) {
                  const e = this.startNode();
                  this.tsParseModuleOrNamespaceDeclaration(e, !0), t.body = e;
                } else {
                  this.scope.enter(p),
                    this.prodParam.enter(0),
                    t.body = this.tsParseModuleBlock(),
                    this.prodParam.exit(),
                    this.scope.exit();
                }
                return this.finishNode(t, "TSModuleDeclaration");
              }
              tsParseAmbientExternalModuleDeclaration(t) {
                return this.isContextual("global")
                  ? (t.global = !0, t.id = this.parseIdentifier())
                  : this.match(c.string)
                  ? t.id = this.parseExprAtom()
                  : this.unexpected(),
                  this.match(c.braceL)
                    ? (this.scope.enter(p),
                      this.prodParam.enter(0),
                      t.body = this.tsParseModuleBlock(),
                      this.prodParam.exit(),
                      this.scope.exit())
                    : this.semicolon(),
                  this.finishNode(t, "TSModuleDeclaration");
              }
              tsParseImportEqualsDeclaration(t, e) {
                return t.isExport = e || !1,
                  t.id = this.parseIdentifier(),
                  this.checkLVal(t.id, 9, void 0, "import equals declaration"),
                  this.expect(c.eq),
                  t.moduleReference = this.tsParseModuleReference(),
                  this.semicolon(),
                  this.finishNode(t, "TSImportEqualsDeclaration");
              }
              tsIsExternalModuleReference() {
                return this.isContextual("require") &&
                  40 === this.lookaheadCharCode();
              }
              tsParseModuleReference() {
                return this.tsIsExternalModuleReference()
                  ? this.tsParseExternalModuleReference()
                  : this.tsParseEntityName(!1);
              }
              tsParseExternalModuleReference() {
                const t = this.startNode();
                if (
                  this.expectContextual("require"),
                    this.expect(c.parenL),
                    !this.match(c.string)
                ) {
                  throw this.unexpected();
                }
                return t.expression = this.parseExprAtom(),
                  this.expect(c.parenR),
                  this.finishNode(t, "TSExternalModuleReference");
              }
              tsLookAhead(t) {
                const e = this.state.clone(), s = t();
                return this.state = e, s;
              }
              tsTryParseAndCatch(t) {
                const e = this.tryParse(((e) => t() || e()));
                if (!e.aborted && e.node) {
                  return e.error && (this.state = e.failState), e.node;
                }
              }
              tsTryParse(t) {
                const e = this.state.clone(), s = t();
                return void 0 !== s && !1 !== s
                  ? s
                  : void (this.state = e);
              }
              tsTryParseDeclare(t) {
                if (this.isLineTerminator()) return;
                let e, s = this.state.type;
                return this.isContextual("let") && (s = c._var, e = "let"),
                  this.tsInDeclareContext(
                    (() => {
                      switch (s) {
                        case c._function:
                          return t.declare = !0,
                            this.parseFunctionStatement(t, !1, !0);
                        case c._class:
                          return t.declare = !0, this.parseClass(t, !0, !1);
                        case c._const:
                          if (
                            this.match(c._const) &&
                            this.isLookaheadContextual("enum")
                          ) {
                            return this.expect(c._const),
                              this.expectContextual("enum"),
                              this.tsParseEnumDeclaration(t, !0);
                          }
                        case c._var:
                          return e = e || this.state.value,
                            this.parseVarStatement(t, e);
                        case c.name: {
                          const e = this.state.value;
                          return "global" === e
                            ? this.tsParseAmbientExternalModuleDeclaration(t)
                            : this.tsParseDeclaration(t, e, !0);
                        }
                      }
                    }),
                  );
              }
              tsTryParseExportDeclaration() {
                return this.tsParseDeclaration(
                  this.startNode(),
                  this.state.value,
                  !0,
                );
              }
              tsParseExpressionStatement(t, e) {
                switch (e.name) {
                  case "declare": {
                    const e = this.tsTryParseDeclare(t);
                    if (e) return e.declare = !0, e;
                    break;
                  }
                  case "global":
                    if (this.match(c.braceL)) {
                      this.scope.enter(p), this.prodParam.enter(0);
                      const s = t;
                      return s.global = !0,
                        s.id = e,
                        s.body = this.tsParseModuleBlock(),
                        this.scope.exit(),
                        this.prodParam.exit(),
                        this.finishNode(s, "TSModuleDeclaration");
                    }
                    break;
                  default:
                    return this.tsParseDeclaration(t, e.name, !1);
                }
              }
              tsParseDeclaration(t, e, s) {
                switch (e) {
                  case "abstract":
                    if (this.tsCheckLineTerminatorAndMatch(c._class, s)) {
                      const e = t;
                      return e.abstract = !0,
                        s &&
                        (this.next(),
                          this.match(c._class) ||
                          this.unexpected(null, c._class)),
                        this.parseClass(e, !0, !1);
                    }
                    break;
                  case "enum":
                    if (s || this.match(c.name)) {
                      return s && this.next(),
                        this.tsParseEnumDeclaration(t, !1);
                    }
                    break;
                  case "interface":
                    if (this.tsCheckLineTerminatorAndMatch(c.name, s)) {
                      return s && this.next(),
                        this.tsParseInterfaceDeclaration(t);
                    }
                    break;
                  case "module":
                    if (s && this.next(), this.match(c.string)) {
                      return this.tsParseAmbientExternalModuleDeclaration(t);
                    }
                    if (this.tsCheckLineTerminatorAndMatch(c.name, s)) {
                      return this.tsParseModuleOrNamespaceDeclaration(t);
                    }
                    break;
                  case "namespace":
                    if (this.tsCheckLineTerminatorAndMatch(c.name, s)) {
                      return s && this.next(),
                        this.tsParseModuleOrNamespaceDeclaration(t);
                    }
                    break;
                  case "type":
                    if (this.tsCheckLineTerminatorAndMatch(c.name, s)) {
                      return s && this.next(),
                        this.tsParseTypeAliasDeclaration(t);
                    }
                }
              }
              tsCheckLineTerminatorAndMatch(t, e) {
                return (e || this.match(t)) && !this.isLineTerminator();
              }
              tsTryParseGenericAsyncArrowFunction(t, e) {
                if (!this.isRelational("<")) { 
                  return;
                }
                const s = this.state.maybeInArrowParameters;
                this.state.maybeInArrowParameters = !0;
                const r = this.tsTryParseAndCatch(
                  (() => {
                    const s = this.startNodeAt(t, e);
                    return s.typeParameters = this.tsParseTypeParameters(),
                      super.parseFunctionParams(s),
                      s.returnType = this
                        .tsTryParseTypeOrTypePredicateAnnotation(),
                      this.expect(c.arrow),
                      s;
                  }),
                );
                return this.state.maybeInArrowParameters = s,
                  r
                    ? this.parseArrowExpression(r, null, !0)
                    : void 0;
              }
              tsParseTypeArguments() {
                const t = this.startNode();
                return t.params = this.tsInType(
                  (() =>
                    this.tsInNoContext(
                      (() => (this.expectRelational("<"),
                        this.tsParseDelimitedList(
                          "TypeParametersOrArguments",
                          this.tsParseType.bind(this),
                        ))),
                    )),
                ),
                  0 === t.params.length &&
                  this.raise(t.start, dt.EmptyTypeArguments),
                  this.state.exprAllowed = !1,
                  this.expectRelational(">"),
                  this.finishNode(t, "TSTypeParameterInstantiation");
              }
              tsIsDeclarationStart() {
                if (this.match(c.name)) {
                  switch (this.state.value) {
                    case "abstract":
                    case "declare":
                    case "enum":
                    case "interface":
                    case "module":
                    case "namespace":
                    case "type":
                      return !0;
                  }
                }
                return !1;
              }
              isExportDefaultSpecifier() {
                return !this.tsIsDeclarationStart() &&
                  super.isExportDefaultSpecifier();
              }
              parseAssignableListItem(t, e) {
                const s = this.state.start, r = this.state.startLoc;
                let i, n = !1;
                void 0 !== t &&
                  (i = this.parseAccessModifier(),
                    n = !!this.tsParseModifier(["readonly"]),
                    !1 === t && (i || n) &&
                    this.raise(s, dt.UnexpectedParameterModifier));
                const a = this.parseMaybeDefault();
                this.parseAssignableListItemTypes(a);
                const o = this.parseMaybeDefault(a.start, a.loc.start, a);
                if (i || n) {
                  const t = this.startNodeAt(s, r);
                  return e.length && (t.decorators = e),
                    i && (t.accessibility = i),
                    n && (t.readonly = n),
                    "Identifier" !== o.type && "AssignmentPattern" !== o.type &&
                    this.raise(t.start, dt.UnsupportedParameterPropertyKind),
                    t.parameter = o,
                    this.finishNode(t, "TSParameterProperty");
                }
                return e.length && (a.decorators = e), o;
              }
              parseFunctionBodyAndFinish(t, e, s = !1) {
                this.match(c.colon) &&
                  (t.returnType = this.tsParseTypeOrTypePredicateAnnotation(
                    c.colon,
                  ));
                const r = "FunctionDeclaration" === e
                  ? "TSDeclareFunction"
                  : "ClassMethod" === e
                  ? "TSDeclareMethod"
                  : void 0;
                r && !this.match(c.braceL) && this.isLineTerminator()
                  ? this.finishNode(t, r)
                  : "TSDeclareFunction" === r && this.state.isDeclareContext &&
                      (this.raise(t.start, dt.DeclareFunctionHasImplementation),
                        t.declare)
                  ? super.parseFunctionBodyAndFinish(t, r, s)
                  : super.parseFunctionBodyAndFinish(t, e, s);
              }
              registerFunctionStatementId(t) {
                !t.body && t.id
                  ? this.checkLVal(t.id, 1024, null, "function name")
                  : super.registerFunctionStatementId(...arguments);
              }
              tsCheckForInvalidTypeCasts(t) {
                t.forEach(
                  ((t) => {
                    "TSTypeCastExpression" === (null == t ? void 0 : t.type) &&
                      this.raise(
                        t.typeAnnotation.start,
                        dt.UnexpectedTypeAnnotation,
                      );
                  }),
                );
              }
              toReferencedList(t, e) {
                return this.tsCheckForInvalidTypeCasts(t), t;
              }
              parseArrayLike(...t) {
                const e = super.parseArrayLike(...t);
                return "ArrayExpression" === e.type &&
                  this.tsCheckForInvalidTypeCasts(e.elements),
                  e;
              }
              parseSubscript(t, e, s, r, i) {
                if (!this.hasPrecedingLineBreak() && this.match(c.bang)) {
                  this.state.exprAllowed = !1, this.next();
                  const r = this.startNodeAt(e, s);
                  return r.expression = t,
                    this.finishNode(r, "TSNonNullExpression");
                }
                if (this.isRelational("<")) {
                  const n = this.tsTryParseAndCatch(
                    (() => {
                      if (!r && this.atPossibleAsyncArrow(t)) {
                        const t = this.tsTryParseGenericAsyncArrowFunction(
                          e,
                          s,
                        );
                        if (t) return t;
                      }
                      const n = this.startNodeAt(e, s);
                      n.callee = t;
                      const a = this.tsParseTypeArguments();
                      if (a) {
                        if (!r && this.eat(c.parenL)) {
                          return n.arguments = this
                            .parseCallExpressionArguments(c.parenR, !1),
                            this.tsCheckForInvalidTypeCasts(n.arguments),
                            n.typeParameters = a,
                            this.finishCallExpression(n, i.optionalChainMember);
                        }
                        if (this.match(c.backQuote)) {
                          const r = this.parseTaggedTemplateExpression(
                            t,
                            e,
                            s,
                            i,
                          );
                          return r.typeParameters = a, r;
                        }
                      }
                      this.unexpected();
                    }),
                  );
                  if (n) return n;
                }
                return super.parseSubscript(t, e, s, r, i);
              }
              parseNewArguments(t) {
                if (this.isRelational("<")) {
                  const e = this.tsTryParseAndCatch(
                    (() => {
                      const t = this.tsParseTypeArguments();
                      return this.match(c.parenL) || this.unexpected(), t;
                    }),
                  );
                  e && (t.typeParameters = e);
                }
                super.parseNewArguments(t);
              }
              parseExprOp(t, e, s, r) {
                if (
                  pt(c._in.binop) > r && !this.hasPrecedingLineBreak() &&
                  this.isContextual("as")
                ) {
                  const i = this.startNodeAt(e, s);
                  i.expression = t;
                  const n = this.tsTryNextParseConstantContext();
                  return i.typeAnnotation = n || this.tsNextThenParseType(),
                    this.finishNode(i, "TSAsExpression"),
                    this.reScan_lt_gt(),
                    this.parseExprOp(i, e, s, r);
                }
                return super.parseExprOp(t, e, s, r);
              }
              checkReservedWord(t, e, s, r) {}
              checkDuplicateExports() {}
              parseImport(t) {
                if (
                  this.match(c.name) || this.match(c.star) ||
                  this.match(c.braceL)
                ) {
                  const e = this.lookahead();
                  if (this.match(c.name) && e.type === c.eq) {
                    return this.tsParseImportEqualsDeclaration(t);
                  }
                  !this.isContextual("type") || e.type === c.comma ||
                    e.type === c.name && "from" === e.value ||
                    (t.importKind = "type", this.next());
                }
                t.importKind || (t.importKind = "value");
                const e = super.parseImport(t);
                return "type" === e.importKind && e.specifiers.length > 1 &&
                  "ImportDefaultSpecifier" === e.specifiers[0].type &&
                  this.raise(
                    e.start,
                    "A type-only import can specify a default import or named bindings, but not both.",
                  ),
                  e;
              }
              parseExport(t) {
                if (this.match(c._import)) {
                  return this.expect(c._import),
                    this.tsParseImportEqualsDeclaration(t, !0);
                }
                if (this.eat(c.eq)) {
                  const e = t;
                  return e.expression = this.parseExpression(),
                    this.semicolon(),
                    this.finishNode(e, "TSExportAssignment");
                }
                if (this.eatContextual("as")) {
                  const e = t;
                  return this.expectContextual("namespace"),
                    e.id = this.parseIdentifier(),
                    this.semicolon(),
                    this.finishNode(e, "TSNamespaceExportDeclaration");
                }
                return this.isContextual("type") &&
                    this.lookahead().type === c.braceL
                  ? (this.next(), t.exportKind = "type")
                  : t.exportKind = "value",
                  super.parseExport(t);
              }
              isAbstractClass() {
                return this.isContextual("abstract") &&
                  this.lookahead().type === c._class;
              }
              parseExportDefaultExpression() {
                if (this.isAbstractClass()) {
                  const t = this.startNode();
                  return this.next(),
                    this.parseClass(t, !0, !0),
                    t.abstract = !0,
                    t;
                }
                if ("interface" === this.state.value) {
                  const t = this.tsParseDeclaration(
                    this.startNode(),
                    this.state.value,
                    !0,
                  );
                  if (t) return t;
                }
                return super.parseExportDefaultExpression();
              }
              parseStatementContent(t, e) {
                if (this.state.type === c._const) {
                  const t = this.lookahead();
                  if (t.type === c.name && "enum" === t.value) {
                    const t = this.startNode();
                    return this.expect(c._const),
                      this.expectContextual("enum"),
                      this.tsParseEnumDeclaration(t, !0);
                  }
                }
                return super.parseStatementContent(t, e);
              }
              parseAccessModifier() {
                return this.tsParseModifier(["public", "protected", "private"]);
              }
              parseClassMember(t, e, s) {
                this.tsParseModifiers(e, ["declare"]);
                const r = this.parseAccessModifier();
                r && (e.accessibility = r),
                  this.tsParseModifiers(e, ["declare"]);
                const i = () => {
                  super.parseClassMember(t, e, s);
                };
                e.declare ? this.tsInDeclareContext(i) : i();
              }
              parseClassMemberWithIsStatic(t, e, s, r) {
                this.tsParseModifiers(e, ["abstract", "readonly", "declare"]);
                const i = this.tsTryParseIndexSignature(e);
                if (i) {
                  return t.body.push(i),
                    e.abstract &&
                    this.raise(e.start, dt.IndexSignatureHasAbstract),
                    r && this.raise(e.start, dt.IndexSignatureHasStatic),
                    e.accessibility &&
                    this.raise(
                      e.start,
                      dt.IndexSignatureHasAccessibility,
                      e.accessibility,
                    ),
                    void (e.declare &&
                      this.raise(e.start, dt.IndexSignatureHasDeclare));
                }
                super.parseClassMemberWithIsStatic(t, e, s, r);
              }
              parsePostMemberNameModifiers(t) {
                this.eat(c.question) && (t.optional = !0),
                  t.readonly && this.match(c.parenL) &&
                  this.raise(t.start, dt.ClassMethodHasReadonly),
                  t.declare && this.match(c.parenL) &&
                  this.raise(t.start, dt.ClassMethodHasDeclare);
              }
              parseExpressionStatement(t, e) {
                return ("Identifier" === e.type
                  ? this.tsParseExpressionStatement(t, e)
                  : void 0) ||
                  super.parseExpressionStatement(t, e);
              }
              shouldParseExportDeclaration() {
                return !!this.tsIsDeclarationStart() ||
                  super.shouldParseExportDeclaration();
              }
              parseConditional(t, e, s, r) {
                if (!r || !this.match(c.question)) {
                  return super.parseConditional(t, e, s, r);
                }
                const i = this.tryParse(
                  (() => super.parseConditional(t, e, s)),
                );
                return i.node
                  ? (i.error && (this.state = i.failState), i.node)
                  : (r.start = i.error.pos || this.state.start, t);
              }
              parseParenItem(t, e, s) {
                if (
                  t = super.parseParenItem(t, e, s),
                    this.eat(c.question) &&
                    (t.optional = !0, this.resetEndLocation(t)),
                    this.match(c.colon)
                ) {
                  const r = this.startNodeAt(e, s);
                  return r.expression = t,
                    r.typeAnnotation = this.tsParseTypeAnnotation(),
                    this.finishNode(r, "TSTypeCastExpression");
                }
                return t;
              }
              parseExportDeclaration(t) {
                const e = this.state.start,
                  s = this.state.startLoc,
                  r = this.eatContextual("declare");
                let i;
                return this.match(c.name) &&
                  (i = this.tsTryParseExportDeclaration()),
                  i || (i = super.parseExportDeclaration(t)),
                  i &&
                  ("TSInterfaceDeclaration" === i.type ||
                    "TSTypeAliasDeclaration" === i.type || r) &&
                  (t.exportKind = "type"),
                  i && r && (this.resetStartLocation(i, e, s), i.declare = !0),
                  i;
              }
              parseClassId(t, e, s) {
                if ((!e || s) && this.isContextual("implements")) return;
                super.parseClassId(t, e, s, t.declare ? 1024 : 139);
                const r = this.tsTryParseTypeParameters();
                r && (t.typeParameters = r);
              }
              parseClassPropertyAnnotation(t) {
                !t.optional && this.eat(c.bang) && (t.definite = !0);
                const e = this.tsTryParseTypeAnnotation();
                e && (t.typeAnnotation = e);
              }
              parseClassProperty(t) {
                return this.parseClassPropertyAnnotation(t),
                  this.state.isDeclareContext && this.match(c.eq) &&
                  this.raise(
                    this.state.start,
                    dt.DeclareClassFieldHasInitializer,
                  ),
                  super.parseClassProperty(t);
              }
              parseClassPrivateProperty(t) {
                return t.abstract &&
                  this.raise(t.start, dt.PrivateElementHasAbstract),
                  t.accessibility &&
                  this.raise(
                    t.start,
                    dt.PrivateElementHasAccessibility,
                    t.accessibility,
                  ),
                  this.parseClassPropertyAnnotation(t),
                  super.parseClassPrivateProperty(t);
              }
              pushClassMethod(t, e, s, r, i, n) {
                const a = this.tsTryParseTypeParameters();
                a && i && this.raise(a.start, dt.ConstructorHasTypeParameters),
                  a && (e.typeParameters = a),
                  super.pushClassMethod(t, e, s, r, i, n);
              }
              pushClassPrivateMethod(t, e, s, r) {
                const i = this.tsTryParseTypeParameters();
                i && (e.typeParameters = i),
                  super.pushClassPrivateMethod(t, e, s, r);
              }
              parseClassSuper(t) {
                super.parseClassSuper(t),
                  t.superClass && this.isRelational("<") &&
                  (t.superTypeParameters = this.tsParseTypeArguments()),
                  this.eatContextual("implements") &&
                  (t.implements = this.tsParseHeritageClause("implements"));
              }
              parseObjPropValue(t, ...e) {
                const s = this.tsTryParseTypeParameters();
                s && (t.typeParameters = s), super.parseObjPropValue(t, ...e);
              }
              parseFunctionParams(t, e) {
                const s = this.tsTryParseTypeParameters();
                s && (t.typeParameters = s), super.parseFunctionParams(t, e);
              }
              parseVarId(t, e) {
                super.parseVarId(t, e),
                  "Identifier" === t.id.type && this.eat(c.bang) &&
                  (t.definite = !0);
                const s = this.tsTryParseTypeAnnotation();
                s && (t.id.typeAnnotation = s, this.resetEndLocation(t.id));
              }
              parseAsyncArrowFromCallExpression(t, e) {
                return this.match(c.colon) &&
                  (t.returnType = this.tsParseTypeAnnotation()),
                  super.parseAsyncArrowFromCallExpression(t, e);
              }
              parseMaybeAssign(...t) {
                var e, s, r, i, n, a, o;
                let u, h, p, l;
                if (this.match(c.jsxTagStart)) {
                  if (
                    u = this.state.clone(),
                      h = this.tryParse(
                        (() => super.parseMaybeAssign(...t)),
                        u,
                      ),
                      !h.error
                  ) {
                    return h.node;
                  }
                  const { context: e } = this.state;
                  e[e.length - 1] === T.j_oTag ? e.length -= 2
                  : e[e.length - 1] === T.j_expr && (e.length -= 1);
                }
                if (
                  !(null == (e = h) ? void 0 : e.error) &&
                  !this.isRelational("<")
                ) {
                  return super.parseMaybeAssign(...t);
                }
                u = u || this.state.clone();
                const d = this.tryParse(
                  ((e) => {
                    var s;
                    l = this.tsParseTypeParameters();
                    const r = super.parseMaybeAssign(...t);
                    return ("ArrowFunctionExpression" !== r.type ||
                      r.extra && r.extra.parenthesized) && e(),
                      0 !== (null == (s = l) ? void 0 : s.params.length) &&
                      this.resetStartLocationFromNode(r, l),
                      r.typeParameters = l,
                      r;
                  }),
                  u,
                );
                if (!d.error && !d.aborted) return d.node;
                if (
                  !h &&
                  (lt(!this.hasPlugin("jsx")),
                    p = this.tryParse((() => super.parseMaybeAssign(...t)), u),
                    !p.error)
                ) {
                  return p.node;
                }
                if (null == (s = h) ? void 0 : s.node) {
                  return this.state = h.failState, h.node;
                }
                if (d.node) return this.state = d.failState, d.node;
                if (
                  null == (r = p) ? void 0 : r.node
                ) {
                  return this.state = p.failState, p.node;
                }
                if (null == (i = h) ? void 0 : i.thrown) throw h.error;
                if (d.thrown) throw d.error;
                if (null == (n = p) ? void 0 : n.thrown) throw p.error;
                throw (null == (a = h) ? void 0 : a.error) || d.error ||
                  (null == (o = p) ? void 0 : o.error);
              }
              parseMaybeUnary(t) {
                return !this.hasPlugin("jsx") && this.isRelational("<")
                  ? this.tsParseTypeAssertion()
                  : super.parseMaybeUnary(t);
              }
              parseArrow(t) {
                if (this.match(c.colon)) {
                  const e = this.tryParse(
                    ((t) => {
                      const e = this.tsParseTypeOrTypePredicateAnnotation(
                        c.colon,
                      );
                      return !this.canInsertSemicolon() &&
                          this.match(c.arrow) || t(),
                        e;
                    }),
                  );
                  if (e.aborted) return;
                  e.thrown ||
                    (e.error && (this.state = e.failState),
                      t.returnType = e.node);
                }
                return super.parseArrow(t);
              }
              parseAssignableListItemTypes(t) {
                this.eat(c.question) &&
                  ("Identifier" === t.type || this.state.isDeclareContext ||
                    this.state.inType ||
                    this.raise(t.start, dt.PatternIsOptional),
                    t.optional = !0);
                const e = this.tsTryParseTypeAnnotation();
                return e && (t.typeAnnotation = e), this.resetEndLocation(t), t;
              }
              toAssignable(t) {
                switch (t.type) {
                  case "TSTypeCastExpression":
                    return super.toAssignable(this.typeCastToParameter(t));
                  case "TSParameterProperty":
                    return super.toAssignable(t);
                  case "TSAsExpression":
                  case "TSNonNullExpression":
                  case "TSTypeAssertion":
                    return t.expression = this.toAssignable(t.expression), t;
                  default:
                    return super.toAssignable(t);
                }
              }
              checkLVal(t, e = 64, s, r) {
                switch (t.type) {
                  case "TSTypeCastExpression":
                    return;
                  case "TSParameterProperty":
                    return void this.checkLVal(
                      t.parameter,
                      e,
                      s,
                      "parameter property",
                    );
                  case "TSAsExpression":
                  case "TSNonNullExpression":
                  case "TSTypeAssertion":
                    return void this.checkLVal(t.expression, e, s, r);
                  default:
                    return void super.checkLVal(t, e, s, r);
                }
              }
              parseBindingAtom() {
                switch (this.state.type) {
                  case c._this:
                    return this.parseIdentifier(!0);
                  default:
                    return super.parseBindingAtom();
                }
              }
              parseMaybeDecoratorArguments(t) {
                if (this.isRelational("<")) {
                  const e = this.tsParseTypeArguments();
                  if (this.match(c.parenL)) {
                    const s = super.parseMaybeDecoratorArguments(t);
                    return s.typeParameters = e, s;
                  }
                  this.unexpected(this.state.start, c.parenL);
                }
                return super.parseMaybeDecoratorArguments(t);
              }
              isClassMethod() {
                return this.isRelational("<") || super.isClassMethod();
              }
              isClassProperty() {
                return this.match(c.bang) || this.match(c.colon) ||
                  super.isClassProperty();
              }
              parseMaybeDefault(...t) {
                const e = super.parseMaybeDefault(...t);
                return "AssignmentPattern" === e.type && e.typeAnnotation &&
                  e.right.start < e.typeAnnotation.start &&
                  this.raise(
                    e.typeAnnotation.start,
                    dt.TypeAnnotationAfterAssign,
                  ),
                  e;
              }
              getTokenFromCode(t) {
                return !this.state.inType || 62 !== t && 60 !== t
                  ? super.getTokenFromCode(t) : this.finishOp(c.relational, 1);
              }
              reScan_lt_gt() {
                if (this.match(c.relational)) {
                  const t = this.input.charCodeAt(this.state.start);
                  60 !== t && 62 !== t ||
                    (this.state.pos -= 1, this.readToken_lt_gt(t));
                }
              }
              toAssignableList(t) {
                for (let e = 0; e < t.length; e++) {
                  const s = t[e];
                  if (s) {
                    switch (s.type) {
                      case "TSTypeCastExpression":
                        t[e] = this.typeCastToParameter(s);
                        break;
                      case "TSAsExpression":
                      case "TSTypeAssertion":
                        this.state.maybeInArrowParameters
                          ? this.raise(
                            s.start,
                            dt.UnexpectedTypeCastInParameter,
                          )
                          : t[e] = this.typeCastToParameter(s);
                    }
                  }
                }
                return super.toAssignableList(...arguments);
              }
              typeCastToParameter(t) {
                return t.expression.typeAnnotation = t.typeAnnotation,
                  this.resetEndLocation(
                    t.expression,
                    t.typeAnnotation.end,
                    t.typeAnnotation.loc.end,
                  ),
                  t.expression;
              }
              shouldParseArrow() {
                return this.match(c.colon) || super.shouldParseArrow();
              }
              shouldParseAsyncArrow() {
                return this.match(c.colon) || super.shouldParseAsyncArrow();
              }
              canHaveLeadingDecorator() {
                return super.canHaveLeadingDecorator() ||
                  this.isAbstractClass();
              }
              jsxParseOpeningElementAfterName(t) {
                if (this.isRelational("<")) {
                  const e = this.tsTryParseAndCatch(
                    (() => this.tsParseTypeArguments()),
                  );
                  e && (t.typeParameters = e);
                }
                return super.jsxParseOpeningElementAfterName(t);
              }
              getGetterSetterExpectedParamCount(t) {
                const e = super.getGetterSetterExpectedParamCount(t),
                  s = t.params[0];
                return s && "Identifier" === s.type && "this" === s.name ? e + 1
                : e;
              }
              parseCatchClauseParam() {
                const t = super.parseCatchClauseParam(),
                  e = this.tsTryParseTypeAnnotation();
                return e && (t.typeAnnotation = e, this.resetEndLocation(t)), t;
              }
              tsInDeclareContext(t) {
                const e = this.state.isDeclareContext;
                this.state.isDeclareContext = !0;
                try {
                  return t();
                } finally {
                  this.state.isDeclareContext = e;
                }
              }
            },
          v8intrinsic: (t) =>
            class extends t {
              parseV8Intrinsic() {
                if (this.match(c.modulo)) {
                  const t = this.state.start, e = this.startNode();
                  if (this.eat(c.modulo), this.match(c.name)) {
                    const t = this.parseIdentifierName(this.state.start),
                      s = this.createIdentifier(e, t);
                    if (
                      s.type = "V8IntrinsicIdentifier", this.match(c.parenL)
                    ) {
                      return s;
                    }
                  }
                  this.unexpected(t);
                }
              }
              parseExprAtom() {
                return this.parseV8Intrinsic() ||
                  super.parseExprAtom(...arguments);
              }
            },
          placeholders: (t) =>
            class extends t {
              parsePlaceholder(t) {
                if (this.match(c.placeholder)) {
                  const e = this.startNode();
                  return this.next(),
                    this.assertNoSpace("Unexpected space in placeholder."),
                    e.name = super.parseIdentifier(!0),
                    this.assertNoSpace("Unexpected space in placeholder."),
                    this.expect(c.placeholder),
                    this.finishPlaceholder(e, t);
                }
              }
              finishPlaceholder(t, e) {
                const s = !(!t.expectedNode || "Placeholder" !== t.type);
                return t.expectedNode = e,
                  s ? t : this.finishNode(t, "Placeholder");
              }
              getTokenFromCode(t) {
                return 37 === t &&
                    37 === this.input.charCodeAt(this.state.pos + 1)
                  ? this.finishOp(c.placeholder, 2)
                  : super.getTokenFromCode(...arguments);
              }
              parseExprAtom() {
                return this.parsePlaceholder("Expression") ||
                  super.parseExprAtom(...arguments);
              }
              parseIdentifier() {
                return this.parsePlaceholder("Identifier") ||
                  super.parseIdentifier(...arguments);
              }
              checkReservedWord(t) {
                void 0 !== t && super.checkReservedWord(...arguments);
              }
              parseBindingAtom() {
                return this.parsePlaceholder("Pattern") ||
                  super.parseBindingAtom(...arguments);
              }
              checkLVal(t) {
                "Placeholder" !== t.type && super.checkLVal(...arguments);
              }
              toAssignable(t) {
                return t && "Placeholder" === t.type &&
                    "Expression" === t.expectedNode
                  ? (t.expectedNode = "Pattern", t)
                  : super.toAssignable(...arguments);
              }
              verifyBreakContinue(t) {
                t.label && "Placeholder" === t.label.type ||
                  super.verifyBreakContinue(...arguments);
              }
              parseExpressionStatement(t, e) {
                if (
                  "Placeholder" !== e.type || e.extra && e.extra.parenthesized
                ) {
                  return super.parseExpressionStatement(...arguments);
                }
                if (this.match(c.colon)) {
                  const s = t;
                  return s.label = this.finishPlaceholder(e, "Identifier"),
                    this.next(),
                    s.body = this.parseStatement("label"),
                    this.finishNode(s, "LabeledStatement");
                }
                return this.semicolon(),
                  t.name = e.name,
                  this.finishPlaceholder(t, "Statement");
              }
              parseBlock() {
                return this.parsePlaceholder("BlockStatement") ||
                  super.parseBlock(...arguments);
              }
              parseFunctionId() {
                return this.parsePlaceholder("Identifier") ||
                  super.parseFunctionId(...arguments);
              }
              parseClass(t, e, s) {
                const r = e ? "ClassDeclaration" : "ClassExpression";
                this.next(), this.takeDecorators(t);
                const i = this.state.strict,
                  n = this.parsePlaceholder("Identifier");
                if (n) {
                  if (
                    this.match(c._extends) || this.match(c.placeholder) ||
                    this.match(c.braceL)
                  ) {
                    t.id = n;
                  } else {
                    if (s || !e) {
                      return t.id = null,
                        t.body = this.finishPlaceholder(n, "ClassBody"),
                        this.finishNode(t, r);
                    }
                    this.unexpected(null, "A class name is required");
                  }
                } else this.parseClassId(t, e, s);
                return this.parseClassSuper(t),
                  t.body = this.parsePlaceholder("ClassBody") ||
                    this.parseClassBody(!!t.superClass, i),
                  this.finishNode(t, r);
              }
              parseExport(t) {
                const e = this.parsePlaceholder("Identifier");
                if (!e) return super.parseExport(...arguments);
                if (!this.isContextual("from") && !this.match(c.comma)) {
                  return t.specifiers = [],
                    t.source = null,
                    t.declaration = this.finishPlaceholder(e, "Declaration"),
                    this.finishNode(t, "ExportNamedDeclaration");
                }
                this.expectPlugin("exportDefaultFrom");
                const s = this.startNode();
                return s.exported = e,
                  t.specifiers = [this.finishNode(s, "ExportDefaultSpecifier")],
                  super.parseExport(t);
              }
              isExportDefaultSpecifier() {
                if (this.match(c._default)) {
                  const t = this.nextTokenStart();
                  if (
                    this.isUnparsedContextual(t, "from") &&
                    this.input.startsWith(
                      c.placeholder.label,
                      this.nextTokenStartSince(t + 4),
                    )
                  ) {
                    return !0;
                  }
                }
                return super.isExportDefaultSpecifier();
              }
              maybeParseExportDefaultSpecifier(t) {
                return !!(t.specifiers && t.specifiers.length > 0) ||
                  super.maybeParseExportDefaultSpecifier(...arguments);
              }
              checkExport(t) {
                const { specifiers: e } = t;
                (null == e
                  ? void 0
                  : e.length) && (t.specifiers = e.filter(
                    ((t) => "Placeholder" === t.exported.type),
                  )),
                  super.checkExport(t),
                  t.specifiers = e;
              }
              parseImport(t) {
                const e = this.parsePlaceholder("Identifier");
                if (!e) return super.parseImport(...arguments);
                if (
                  t.specifiers = [],
                    !this.isContextual("from") && !this.match(c.comma)
                ) {
                  return t.source = this.finishPlaceholder(e, "StringLiteral"),
                    this.semicolon(),
                    this.finishNode(t, "ImportDeclaration");
                }
                const s = this.startNodeAtNode(e);
                if (
                  s.local = e,
                    this.finishNode(s, "ImportDefaultSpecifier"),
                    t.specifiers.push(s),
                    this.eat(c.comma)
                ) {
                  this.maybeParseStarImportSpecifier(t) ||
                    this.parseNamedImportSpecifiers(t);
                }
                return this.expectContextual("from"),
                  t.source = this.parseImportSource(),
                  this.semicolon(),
                  this.finishNode(t, "ImportDeclaration");
              }
              parseImportSource() {
                return this.parsePlaceholder("StringLiteral") ||
                  super.parseImportSource(...arguments);
              }
            },
        },
        At = Object.keys(Et),
        Ct = {
          sourceType: "script",
          sourceFilename: void 0,
          startLine: 1,
          allowAwaitOutsideFunction: !1,
          allowReturnOutsideFunction: !1,
          allowImportExportEverywhere: !1,
          allowSuperOutsideMethod: !1,
          allowUndeclaredExports: !1,
          plugins: [],
          strictMode: null,
          ranges: !1,
          tokens: !1,
          createParenthesizedExpressions: !1,
          errorRecovery: !1,
        };
      class xt {
        constructor() {
          this.strict = void 0,
            this.curLine = void 0,
            this.startLoc = void 0,
            this.endLoc = void 0,
            this.errors = [],
            this.potentialArrowAt = -1,
            this.noArrowAt = [],
            this.noArrowParamsConversionAt = [],
            this.maybeInArrowParameters = !1,
            this.inPipeline = !1,
            this.inType = !1,
            this.noAnonFunctionType = !1,
            this.inPropertyName = !1,
            this.hasFlowComment = !1,
            this.isIterator = !1,
            this.isDeclareContext = !1,
            this.topicContext = {
              maxNumOfResolvableTopics: 0,
              maxTopicIndex: null,
            },
            this.soloAwait = !1,
            this.inFSharpPipelineDirectBody = !1,
            this.labels = [],
            this.decoratorStack = [[]],
            this.comments = [],
            this.trailingComments = [],
            this.leadingComments = [],
            this.commentStack = [],
            this.commentPreviousNode = null,
            this.pos = 0,
            this.lineStart = 0,
            this.type = c.eof,
            this.value = null,
            this.start = 0,
            this.end = 0,
            this.lastTokEndLoc = null,
            this.lastTokStartLoc = null,
            this.lastTokStart = 0,
            this.lastTokEnd = 0,
            this.context = [T.braceStatement],
            this.exprAllowed = !0,
            this.containsEsc = !1,
            this.octalPositions = [],
            this.exportedIdentifiers = [],
            this.tokensLength = 0;
        }
        init(t) {
          this.strict = !1 !== t.strictMode && "module" === t.sourceType,
            this.curLine = t.startLine,
            this.startLoc = this.endLoc = this.curPosition();
        }
        curPosition() {
          return new C(this.curLine, this.pos - this.lineStart);
        }
        clone(t) {
          const e = new xt(), s = Object.keys(this);
          for (let r = 0, i = s.length; r < i; r++) {
            const i = s[r];
            let n = this[i];
            !t && Array.isArray(n) && (n = n.slice()), e[i] = n;
          }
          return e;
        }
      }
      var Ft = function (t) {
        return t >= 48 && t <= 57;
      };
      const gt = new Set(["g", "m", "s", "i", "y", "u"]),
        bt = {
          decBinOct: [46, 66, 69, 79, 95, 98, 101, 111],
          hex: [46, 88, 95, 120],
        },
        Pt = { bin: [48, 49] };
      Pt.oct = [...Pt.bin, 50, 51, 52, 53, 54, 55],
        Pt.dec = [...Pt.oct, 56, 57],
        Pt.hex = [...Pt.dec, 65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102];
      class Tt {
        constructor(t) {
          this.type = t.type,
            this.value = t.value,
            this.start = t.start,
            this.end = t.end,
            this.loc = new x(t.startLoc, t.endLoc);
        }
      }
      class wt {
        constructor() {
          this.shorthandAssign = -1, this.doubleProto = -1;
        }
      }
      class Bt {
        constructor(t, e, s) {
          this.type = void 0,
            this.start = void 0,
            this.end = void 0,
            this.loc = void 0,
            this.range = void 0,
            this.leadingComments = void 0,
            this.trailingComments = void 0,
            this.innerComments = void 0,
            this.extra = void 0,
            this.type = "",
            this.start = e,
            this.end = 0,
            this.loc = new x(s),
            (null == t ? void 0 : t.options.ranges) && (this.range = [e, 0]),
            (null == t ? void 0 : t.filename) &&
            (this.loc.filename = t.filename);
        }
        __clone() {
          const t = new Bt(), e = Object.keys(this);
          for (let s = 0, r = e.length; s < r; s++) {
            const r = e[s];
            "leadingComments" !== r && "trailingComments" !== r &&
              "innerComments" !== r && (t[r] = this[r]);
          }
          return t;
        }
      }
      const St = (t) =>
        "ParenthesizedExpression" === t.type ? St(t.expression) : t;
      class Nt {
        constructor(t = 0) {
          this.type = void 0, this.type = t;
        }
        canBeArrowParameterDeclaration() {
          return 2 === this.type || 1 === this.type;
        }
        isCertainlyParameterDeclaration() {
          return 3 === this.type;
        }
      }
      class It extends Nt {
        constructor(t) {
          super(t), this.errors = new Map();
        }
        recordDeclarationError(t, e) {
          this.errors.set(t, e);
        }
        clearDeclarationError(t) {
          this.errors.delete(t);
        }
        iterateErrors(t) {
          this.errors.forEach(t);
        }
      }
      class vt {
        constructor(t) {
          this.stack = [new Nt()], this.raise = t;
        }
        enter(t) {
          this.stack.push(t);
        }
        exit() {
          this.stack.pop();
        }
        recordParameterInitializerError(t, e) {
          const { stack: s } = this;
          let r = s.length - 1, i = s[r];
          for (; !i.isCertainlyParameterDeclaration();) {
            if (!i.canBeArrowParameterDeclaration()) return;
            i.recordDeclarationError(t, e), i = s[--r];
          }
          this.raise(t, e);
        }
        recordAsyncArrowParametersError(t, e) {
          const { stack: s } = this;
          let r = s.length - 1, i = s[r];
          for (
            ; i.canBeArrowParameterDeclaration();
          ) {
            2 === i.type && i.recordDeclarationError(t, e), i = s[--r];
          }
        }
        validateAsPattern() {
          const { stack: t } = this, e = t[t.length - 1];
          e.canBeArrowParameterDeclaration() && e.iterateErrors(
            ((e, s) => {
              this.raise(s, e);
              let r = t.length - 2, i = t[r];
              for (; i.canBeArrowParameterDeclaration();) {
                i.clearDeclarationError(s), i = t[--r];
              }
            }),
          );
        }
      }
      function kt() {
        return new Nt();
      }
      const Lt = { kind: "loop" },
        Ot = { kind: "switch" },
        Mt = /[\uD800-\uDFFF]/u;
      class Rt {
        constructor() {
          this.privateNames = new Set(),
            this.loneAccessors = new Map(),
            this.undefinedPrivateNames = new Map();
        }
      }
      class _t {
        constructor(t) {
          this.stack = [],
            this.undefinedPrivateNames = new Map(),
            this.raise = t;
        }
        current() {
          return this.stack[this.stack.length - 1];
        }
        enter() {
          this.stack.push(new Rt());
        }
        exit() {
          const t = this.stack.pop(), e = this.current();
          for (
            let s = 0, r = Array.from(t.undefinedPrivateNames);
            s < r.length;
            s++
          ) {
            const [t, i] = r[s];
            e
              ? e.undefinedPrivateNames.has(t) ||
                e.undefinedPrivateNames.set(t, i)
              : this.raise(i, g.InvalidPrivateFieldResolution, t);
          }
        }
        declarePrivateName(t, e, s) {
          const r = this.current();
          let i = r.privateNames.has(t);
          if (3 & e) {
            const s = i && r.loneAccessors.get(t);
            if (s) {
              const n = 4 & s, a = 4 & e;
              i = (3 & s) === (3 & e) || n !== a,
                i || r.loneAccessors.delete(t);
            } else i || r.loneAccessors.set(t, e);
          }
          i && this.raise(s, g.PrivateNameRedeclaration, t),
            r.privateNames.add(t),
            r.undefinedPrivateNames.delete(t);
        }
        usePrivateName(t, e) {
          let s;
          for (let e = 0, r = this.stack; e < r.length; e++) {
            if (s = r[e], s.privateNames.has(t)) {
              return;
            }
          }
          s ? s.undefinedPrivateNames.set(t, e)
          : this.raise(e, g.InvalidPrivateFieldResolution, t);
        }
      }
      class jt
        extends class
          extends class
            extends class
              extends class
                extends class
                  extends class extends class extends class extends class {
                    constructor() {
                      this.sawUnambiguousESM = !1,
                        this.ambiguousScriptDifferentAst = !1;
                    }
                    hasPlugin(t) {
                      return this.plugins.has(t);
                    }
                    getPluginOption(t, e) {
                      if (this.hasPlugin(t))return this.plugins.get(t)[e];
                    }
                  } {
                    addComment(t) {
                      this.filename && (t.loc.filename = this.filename),
                        this.state.trailingComments.push(t),
                        this.state.leadingComments.push(t);
                    }
                    adjustCommentsAfterTrailingComma(t, e, s) {
                      if (0 === this.state.leadingComments.length) return;
                      let r = null, i = e.length;
                      for (; null === r && i > 0;) r = e[--i];
                      if (null === r) return;
                      for (
                        let t = 0; t < this.state.leadingComments.length; t++
                      ) {
                        this.state.leadingComments[t].end <
                            this.state.commentPreviousNode.end &&
                          (this.state.leadingComments.splice(t, 1), t--);
                      }
                      const n = [];
                      for (
                        let e = 0; e < this.state.leadingComments.length; e++
                      ) {
                        const r = this.state.leadingComments[e];
                        r.end < t.end
                          ? (n.push(r),
                            s || (this.state.leadingComments.splice(e, 1), e--))
                          : (void 0 === t.trailingComments &&
                            (t.trailingComments = []),
                            t.trailingComments.push(r));
                      }
                      s && (this.state.leadingComments = []),
                        n.length > 0
                          ? r.trailingComments = n
                          : void 0 !== r.trailingComments &&
                            (r.trailingComments = []);
                    }
                    processComment(t) {
                      if ("Program" === t.type && t.body.length > 0) return;
                      const e = this.state.commentStack;
                      let s, r, i, n, a;
                      if (
                        this.state.trailingComments.length > 0
                      ) {
                        this.state.trailingComments[0].start >= t.end
                          ? (i = this.state.trailingComments,
                            this.state.trailingComments = [])
                          : this.state.trailingComments.length = 0;
                      } else if (e.length > 0) {
                        const s = F(e);
                        s.trailingComments &&
                          s.trailingComments[0].start >= t.end &&
                          (i = s.trailingComments, delete s.trailingComments);
                      }
                      for (
                        e.length > 0 && F(e).start >= t.start && (s = e.pop());
                        e.length > 0 && F(e).start >= t.start;
                      ) {
                        r = e.pop();
                      }
                      if (!r && s && (r = s), s) {
                        switch (t.type) {
                          case "ObjectExpression":
                            this.adjustCommentsAfterTrailingComma(
                              t,
                              t.properties,
                            );
                            break;
                          case "ObjectPattern":
                            this.adjustCommentsAfterTrailingComma(
                              t,
                              t.properties,
                              !0,
                            );
                            break;
                          case "CallExpression":
                            this.adjustCommentsAfterTrailingComma(
                              t,
                              t.arguments,
                            );
                            break;
                          case "ArrayExpression":
                            this.adjustCommentsAfterTrailingComma(
                              t,
                              t.elements,
                            );
                            break;
                          case "ArrayPattern":
                            this.adjustCommentsAfterTrailingComma(
                              t,
                              t.elements,
                              !0,
                            );
                        }
                      } else {
                        this.state.commentPreviousNode &&
                          ("ImportSpecifier" ===
                                  this.state.commentPreviousNode.type &&
                              "ImportSpecifier" !== t.type ||
                            "ExportSpecifier" ===
                                  this.state.commentPreviousNode.type &&
                              "ExportSpecifier" !== t.type) &&
                          this.adjustCommentsAfterTrailingComma(t, [
                            this.state.commentPreviousNode,
                          ]);
                      }
                      if (r) {
                        if (r.leadingComments) {
                          if (
                            r !== t && r.leadingComments.length > 0 &&
                            F(r.leadingComments).end <= t.start
                          ) {
                            t.leadingComments = r.leadingComments,
                              delete r.leadingComments;
                          } else {
                            for (
                              n = r.leadingComments.length - 2; n >= 0; --n
                            ) {
                              if (r.leadingComments[n].end <= t.start) {
                                t.leadingComments = r.leadingComments.splice(
                                  0,
                                  n + 1,
                                );
                                break;
                              }
                            }
                          }
                        }
                      } else if (this.state.leadingComments.length > 0) {
                        if (F(this.state.leadingComments).end <= t.start) {
                          if (this.state.commentPreviousNode) {
                            for (
                              a = 0; a < this.state.leadingComments.length; a++
                            ) {
                              this.state.leadingComments[a].end <
                                  this.state.commentPreviousNode.end &&
                                (this.state.leadingComments.splice(a, 1), a--);
                            }
                          }
                          this.state.leadingComments.length > 0 &&
                            (t.leadingComments = this.state.leadingComments,
                              this.state.leadingComments = []);
                        } else {
                          for (
                            n = 0;
                            n < this.state.leadingComments.length &&
                            !(this.state.leadingComments[n].end > t.start);
                            n++
                          );
                          const e = this.state.leadingComments.slice(0, n);
                          e.length && (t.leadingComments = e),
                            i = this.state.leadingComments.slice(n),
                            0 === i.length && (i = null);
                        }
                      }
                      if (this.state.commentPreviousNode = t, i) {
                        if (
                          i.length && i[0].start >= t.start && F(i).end <= t.end
                        ) {
                          t.innerComments = i;
                        } else {
                          const e = i.findIndex(((e) => e.end >= t.end));
                          e > 0
                            ? (t.innerComments = i.slice(0, e),
                              t.trailingComments = i.slice(e))
                            : t.trailingComments = i;
                        }
                      }
                      e.push(t);
                    }
                  } {
                    getLocationForPosition(t) {
                      let e;
                      return e = t === this.state.start
                        ? this.state.startLoc
                        : t === this.state.lastTokStart
                        ? this.state.lastTokStartLoc
                        : t === this.state.end
                        ? this.state.endLoc
                        : t === this.state.lastTokEnd
                        ? this.state.lastTokEndLoc
                        : function (t, e) {
                          let s, r = 1, i = 0;
                          for (
                            f.lastIndex = 0; (s = f.exec(t)) && s.index < e;
                          ) {
                            r++, i = f.lastIndex;
                          }
                          return new C(r, e - i);
                        }(this.input, t),
                        e;
                    }
                    raise(t, e, ...s) {
                      return this.raiseWithData(t, void 0, e, ...s);
                    }
                    raiseWithData(t, e, s, ...r) {
                      const i = this.getLocationForPosition(t),
                        n = s.replace(/%(\d+)/g, ((t, e) => r[e])) +
                          " (".concat(i.line, ":").concat(i.column, ")");
                      return this._raise(
                        Object.assign({ loc: i, pos: t }, e),
                        n,
                      );
                    }
                    _raise(t, e) {
                      const s = new SyntaxError(e);
                      if (
                        Object.assign(s, t), this.options.errorRecovery
                      ) {
                        return this.isLookahead || this.state.errors.push(s), s;
                      }
                      throw s;
                    }
                  } {
                    constructor(t, e) {
                      super(),
                        this.isLookahead = void 0,
                        this.tokens = [],
                        this.state = new xt(),
                        this.state.init(t),
                        this.input = e,
                        this.length = e.length,
                        this.isLookahead = !1;
                    }
                    pushToken(t) {
                      this.tokens.length = this.state.tokensLength,
                        this.tokens.push(t),
                        ++this.state.tokensLength;
                    }
                    next() {
                      this.isLookahead ||
                      (this.checkKeywordEscapes(),
                        this.options.tokens &&
                        this.pushToken(new Tt(this.state))),
                        this.state.lastTokEnd = this.state.end,
                        this.state.lastTokStart = this.state.start,
                        this.state.lastTokEndLoc = this.state.endLoc,
                        this.state.lastTokStartLoc = this.state.startLoc,
                        this.nextToken();
                    }
                    eat(t) {
                      return !!this.match(t) && (this.next(), !0);
                    }
                    match(t) {
                      return this.state.type === t;
                    }
                    lookahead() {
                      const t = this.state;
                      this.state = t.clone(!0),
                        this.isLookahead = !0,
                        this.next(),
                        this.isLookahead = !1;
                      const e = this.state;
                      return this.state = t, e;
                    }
                    nextTokenStart() {
                      return this.nextTokenStartSince(this.state.pos);
                    }
                    nextTokenStartSince(t) {
                      E.lastIndex = t;
                      return t + E.exec(this.input)[0].length;
                    }
                    lookaheadCharCode() {
                      return this.input.charCodeAt(this.nextTokenStart());
                    }
                    setStrict(t) {
                      if (
                        this.state.strict = t,
                          this.match(c.num) || this.match(c.string)
                      ) {
                        for (
                          this.state.pos = this.state.start;
                          this.state.pos < this.state.lineStart;
                        ) {
                          this.state.lineStart =
                            this.input.lastIndexOf(
                              "\n",
                              this.state.lineStart - 2,
                            ) + 1, --this.state.curLine;
                        }
                        this.nextToken();
                      }
                    }
                    curContext() {
                      return this.state.context[this.state.context.length - 1];
                    }
                    nextToken() {
                      const t = this.curContext();
                      if (
                        (null == t ? void 0 : t.preserveSpace) ||
                        this.skipSpace(),
                          this.state.octalPositions = [],
                          this.state.start = this.state.pos,
                          this.state.startLoc = this.state.curPosition(),
                          this.state.pos >= this.length
                      ) {
                        return void this.finishToken(c.eof);
                      }
                      const e = null == t ? void 0 : t.override;
                      e ? e(this)
                      : this.getTokenFromCode(
                        this.input.codePointAt(this.state.pos),
                      );
                    }
                    pushComment(t, e, s, r, i, n) {
                      const a = {
                        type: t ? "CommentBlock" : "CommentLine",
                        value: e,
                        start: s,
                        end: r,
                        loc: new x(i, n),
                      };
                      this.options.tokens && this.pushToken(a),
                        this.state.comments.push(a),
                        this.addComment(a);
                    }
                    skipBlockComment() {
                      const t = this.state.curPosition(),
                        e = this.state.pos,
                        s = this.input.indexOf("*/", this.state.pos + 2);
                      if (-1 === s)throw this.raise(e, g.UnterminatedComment);
                      let r;
                      for (
                        this.state.pos = s + 2, f.lastIndex = e;
                        (r = f.exec(this.input)) && r.index < this.state.pos;
                      ) {
                        ++this.state.curLine,
                          this.state.lineStart = r.index + r[0].length;
                      }
                      this.isLookahead ||
                        this.pushComment(
                          !0,
                          this.input.slice(e + 2, s),
                          e,
                          this.state.pos,
                          t,
                          this.state.curPosition(),
                        );
                    }
                    skipLineComment(t) {
                      const e = this.state.pos, s = this.state.curPosition();
                      let r = this.input.charCodeAt(this.state.pos += t);
                      if (this.state.pos < this.length) {
                        for (; !y(r) && ++this.state.pos < this.length;) {
                          r = this.input.charCodeAt(this.state.pos);
                        }
                      }
                      this.isLookahead ||
                        this.pushComment(
                          !1,
                          this.input.slice(e + t, this.state.pos),
                          e,
                          this.state.pos,
                          s,
                          this.state.curPosition(),
                        );
                    }
                    skipSpace() {
                      t:
                      for (; this.state.pos < this.length;) {
                        const t = this.input.charCodeAt(this.state.pos);
                        switch (t) {
                          case 32:
                          case 160:
                          case 9:
                            ++this.state.pos;
                            break;
                          case 13:
                            10 === this.input.charCodeAt(this.state.pos + 1) &&
                              ++this.state.pos;
                          case 10:
                          case 8232:
                          case 8233:
                            ++this.state.pos,
                              ++this.state.curLine,
                              this.state.lineStart = this.state.pos;
                            break;
                          case 47:
                            switch (this.input.charCodeAt(this.state.pos + 1)) {
                              case 42:
                                this.skipBlockComment();
                                break;
                              case 47:
                                this.skipLineComment(2);
                                break;
                              default:
                                break t;
                            }
                            break;
                          default:
                            if (!A(t))break t;
                            ++this.state.pos;
                        }
                      }
                    }
                    finishToken(t, e) {
                      this.state.end = this.state.pos,
                        this.state.endLoc = this.state.curPosition();
                      const s = this.state.type;
                      this.state.type = t,
                        this.state.value = e,
                        this.isLookahead || this.updateContext(s);
                    }
                    readToken_numberSign() {
                      if (
                        0 === this.state.pos && this.readToken_interpreter()
                      ) {
                        return;
                      }
                      const t = this.state.pos + 1,
                        e = this.input.charCodeAt(t);
                      if (e >= 48 && e <= 57) {
                        throw this.raise(
                          this.state.pos,
                          g.UnexpectedDigitAfterHash,
                        );
                      }
                      if (
                        123 === e ||
                        91 === e && this.hasPlugin("recordAndTuple")
                      ) {
                        if (
                          this.expectPlugin("recordAndTuple"),
                            "hash" !==
                              this.getPluginOption(
                                "recordAndTuple",
                                "syntaxType",
                              )
                        ) {
                          throw this.raise(
                            this.state.pos,
                            123 === e
                              ? g.RecordExpressionHashIncorrectStartSyntaxType
                              : g.TupleExpressionHashIncorrectStartSyntaxType,
                          );
                        }
                        123 === e
                          ? this.finishToken(c.braceHashL)
                          : this.finishToken(c.bracketHashL),
                          this.state.pos += 2;
                      } elsethis.finishOp(c.hash, 1);
                    }
                    readToken_dot() {
                      const t = this.input.charCodeAt(this.state.pos + 1);
                      t >= 48 && t <= 57 ? this.readNumber(!0)
                      : 46 === t &&
                          46 === this.input.charCodeAt(this.state.pos + 2)
                        ? (this.state.pos += 3, this.finishToken(c.ellipsis))
                        : (++this.state.pos, this.finishToken(c.dot));
                    }
                    readToken_slash() {
                      if (
                        this.state.exprAllowed && !this.state.inType
                      ) {
                        return ++this.state.pos, void this.readRegexp();
                      }
                      61 === this.input.charCodeAt(this.state.pos + 1)
                        ? this.finishOp(c.assign, 2)
                        : this.finishOp(c.slash, 1);
                    }
                    readToken_interpreter() {
                      if (0 !== this.state.pos || this.length < 2)return !1;
                      let t = this.input.charCodeAt(this.state.pos + 1);
                      if (33 !== t)return !1;
                      const e = this.state.pos;
                      for (
                        this.state.pos += 1;
                        !y(t) && ++this.state.pos < this.length;
                      ) {
                        t = this.input.charCodeAt(this.state.pos);
                      }
                      const s = this.input.slice(e + 2, this.state.pos);
                      return this.finishToken(c.interpreterDirective, s), !0;
                    }
                    readToken_mult_modulo(t) {
                      let e = 42 === t ? c.star : c.modulo,
                        s = 1,
                        r = this.input.charCodeAt(this.state.pos + 1);
                      const i = this.state.exprAllowed;
                      42 === t && 42 === r &&
                      (s++,
                        r = this.input.charCodeAt(this.state.pos + 2),
                        e = c.exponent),
                        61 !== r || i || (s++, e = c.assign),
                        this.finishOp(e, s);
                    }
                    readToken_pipe_amp(t) {
                      const e = this.input.charCodeAt(this.state.pos + 1);
                      if (e !== t) {
                        if (124 === t) {
                          if (62 === e)return void this.finishOp(c.pipeline, 2);
                          if (this.hasPlugin("recordAndTuple") && 125 === e) {
                            if (
                              "bar" !==
                                this.getPluginOption(
                                  "recordAndTuple",
                                  "syntaxType",
                                )
                            ) {
                              throw this.raise(
                                this.state.pos,
                                g.RecordExpressionBarIncorrectEndSyntaxType,
                              );
                            }
                            return void this.finishOp(c.braceBarR, 2);
                          }
                          if (this.hasPlugin("recordAndTuple") && 93 === e) {
                            if (
                              "bar" !==
                                this.getPluginOption(
                                  "recordAndTuple",
                                  "syntaxType",
                                )
                            ) {
                              throw this.raise(
                                this.state.pos,
                                g.TupleExpressionBarIncorrectEndSyntaxType,
                              );
                            }
                            return void this.finishOp(c.bracketBarR, 2);
                          }
                        }
                        61 !== e
                          ? this.finishOp(
                            124 === t ? c.bitwiseOR : c.bitwiseAND,
                            1,
                          ) : this.finishOp(c.assign, 2);
                      } else {
                        61 === this.input.charCodeAt(this.state.pos + 2)
                          ? this.finishOp(c.assign, 3)
                          : this.finishOp(
                            124 === t ? c.logicalOR : c.logicalAND,
                            2,
                          );
                      }
                    }
                    readToken_caret() {
                      61 === this.input.charCodeAt(this.state.pos + 1)
                        ? this.finishOp(c.assign, 2)
                        : this.finishOp(c.bitwiseXOR, 1);
                    }
                    readToken_plus_min(t) {
                      const e = this.input.charCodeAt(this.state.pos + 1);
                      if (e === t) {
                        return 45 !== e || this.inModule ||
                            62 !== this.input.charCodeAt(this.state.pos + 2) ||
                            0 !== this.state.lastTokEnd &&
                              !this.hasPrecedingLineBreak()
                          ? void this.finishOp(c.incDec, 2)
                          : (this.skipLineComment(3),
                            this.skipSpace(),
                            void this.nextToken());
                      }
                      61 === e ? this.finishOp(c.assign, 2)
                      : this.finishOp(c.plusMin, 1);
                    }
                    readToken_lt_gt(t) {
                      const e = this.input.charCodeAt(this.state.pos + 1);
                      let s = 1;
                      return e === t
                        ? (s =
                          62 === t &&
                            62 === this.input.charCodeAt(this.state.pos + 2)
                            ? 3
                            : 2,
                          61 === this.input.charCodeAt(this.state.pos + s)
                            ? void this.finishOp(c.assign, s + 1)
                            : void this.finishOp(c.bitShift, s))
                        : 33 !== e || 60 !== t || this.inModule ||
                            45 !== this.input.charCodeAt(this.state.pos + 2) ||
                            45 !== this.input.charCodeAt(this.state.pos + 3)
                        ? (61 === e && (s = 2),
                          void this.finishOp(c.relational, s))
                        : (this.skipLineComment(4),
                          this.skipSpace(),
                          void this.nextToken());
                    }
                    readToken_eq_excl(t) {
                      const e = this.input.charCodeAt(this.state.pos + 1);
                      if (61 !== e) {
                        return 61 === t && 62 === e
                          ? (this.state.pos += 2,
                            void this.finishToken(c.arrow))
                          : void this.finishOp(61 === t ? c.eq : c.bang, 1);
                      }
                      this.finishOp(
                        c.equality,
                        61 === this.input.charCodeAt(this.state.pos + 2)
                          ? 3
                          : 2,
                      );
                    }
                    readToken_question() {
                      const t = this.input.charCodeAt(this.state.pos + 1),
                        e = this.input.charCodeAt(this.state.pos + 2);
                      63 === t
                        ? 61 === e ? this.finishOp(c.assign, 3)
                        : this.finishOp(c.nullishCoalescing, 2)
                        : 46 !== t || e >= 48 && e <= 57
                        ? (++this.state.pos, this.finishToken(c.question))
                        : (this.state.pos += 2,
                          this.finishToken(c.questionDot));
                    }
                    getTokenFromCode(t) {
                      switch (t) {
                        case 46:
                          return void this.readToken_dot();
                        case 40:
                          return ++this.state.pos,
                            void this.finishToken(c.parenL);
                        case 41:
                          return ++this.state.pos,
                            void this.finishToken(c.parenR);
                        case 59:
                          return ++this.state.pos,
                            void this.finishToken(c.semi);
                        case 44:
                          return ++this.state.pos,
                            void this.finishToken(c.comma);
                        case 91:
                          if (
                            this.hasPlugin("recordAndTuple") &&
                            124 === this.input.charCodeAt(this.state.pos + 1)
                          ) {
                            if (
                              "bar" !==
                                this.getPluginOption(
                                  "recordAndTuple",
                                  "syntaxType",
                                )
                            ) {
                              throw this.raise(
                                this.state.pos,
                                g.TupleExpressionBarIncorrectStartSyntaxType,
                              );
                            }
                            this.finishToken(c.bracketBarL),
                              this.state.pos += 2;
                          } else++this.state.pos, this.finishToken(c.bracketL);
                          return;
                        case 93:
                          return ++this.state.pos,
                            void this.finishToken(c.bracketR);
                        case 123:
                          if (
                            this.hasPlugin("recordAndTuple") &&
                            124 === this.input.charCodeAt(this.state.pos + 1)
                          ) {
                            if (
                              "bar" !==
                                this.getPluginOption(
                                  "recordAndTuple",
                                  "syntaxType",
                                )
                            ) {
                              throw this.raise(
                                this.state.pos,
                                g.RecordExpressionBarIncorrectStartSyntaxType,
                              );
                            }
                            this.finishToken(c.braceBarL), this.state.pos += 2;
                          } else ++this.state.pos, this.finishToken(c.braceL);
                          return;
                        case 125:
                          return ++this.state.pos,
                            void this.finishToken(c.braceR);
                        case 58:
                          return void (this.hasPlugin("functionBind") &&
                              58 === this.input.charCodeAt(this.state.pos + 1)
                            ? this.finishOp(c.doubleColon, 2)
                            : (++this.state.pos, this.finishToken(c.colon)));
                        case 63:
                          return void this.readToken_question();
                        case 96:
                          return ++this.state.pos,
                            void this.finishToken(c.backQuote);
                        case 48: {
                          const t = this.input.charCodeAt(this.state.pos + 1);
                          if (120 === t || 88 === t) {
                            return void this.readRadixNumber(16);
                          }
                          if (111 === t || 79 === t) {
                            return void this.readRadixNumber(8);
                          }
                          if (98 === t || 66 === t) {
                            return void this.readRadixNumber(2);
                          }
                        }
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                          return void this.readNumber(!1);
                        case 34:
                        case 39:
                          return void this.readString(t);
                        case 47:
                          return void this.readToken_slash();
                        case 37:
                        case 42:
                          return void this.readToken_mult_modulo(t);
                        case 124:
                        case 38:
                          return void this.readToken_pipe_amp(t);
                        case 94:
                          return void this.readToken_caret();
                        case 43:
                        case 45:
                          return void this.readToken_plus_min(t);
                        case 60:
                        case 62:
                          return void this.readToken_lt_gt(t);
                        case 61:
                        case 33:
                          return void this.readToken_eq_excl(t);
                        case 126:
                          return void this.finishOp(c.tilde, 1);
                        case 64:
                          return ++this.state.pos, void this.finishToken(c.at);
                        case 35:
                          return void this.readToken_numberSign();
                        case 92:
                          return void this.readWord();
                        default:
                          if (L(t)) return void this.readWord();
                      }
                      throw this.raise(
                        this.state.pos,
                        g.InvalidOrUnexpectedToken,
                        String.fromCodePoint(t),
                      );
                    }
                    finishOp(t, e) {
                      const s = this.input.slice(
                        this.state.pos,
                        this.state.pos + e,
                      );
                      this.state.pos += e, this.finishToken(t, s);
                    }
                    readRegexp() {
                      const t = this.state.pos;
                      let e, s;
                      for (;;) {
                        if (this.state.pos >= this.length) {
                          throw this.raise(t, g.UnterminatedRegExp);
                        }
                        const r = this.input.charAt(this.state.pos);
                        if (m.test(r))throw this.raise(t, g.UnterminatedRegExp);
                        if (e) e = !1;
                        else {
                          if ("[" === r) s = !0;
                          else if ("]" === r && s) s = !1;
                          else if ("/" === r && !s) break;
                          e = "\\" === r;
                        }
                        ++this.state.pos;
                      }
                      const r = this.input.slice(t, this.state.pos);
                      ++this.state.pos;
                      let i = "";
                      for (; this.state.pos < this.length;) {
                        const t = this.input[this.state.pos],
                          e = this.input.codePointAt(this.state.pos);
                        if (gt.has(t)) {
                          i.indexOf(t) > -1 &&
                            this.raise(
                              this.state.pos + 1,
                              g.DuplicateRegExpFlags,
                            );
                        } else {
                          if (!O(e) && 92 !== e) break;
                          this.raise(
                            this.state.pos + 1,
                            g.MalformedRegExpFlags,
                          );
                        }
                        ++this.state.pos, i += t;
                      }
                      this.finishToken(c.regexp, { pattern: r, flags: i });
                    }
                    readInt(t, e, s, r = !0) {
                      const i = this.state.pos,
                        n = 16 === t ? bt.hex : bt.decBinOct,
                        a = 16 === t ? Pt.hex : 10 === t ? Pt.dec : 8 === t
                          ? Pt.oct
                          : Pt.bin;
                      let o = !1, u = 0;
                      for (
                        let i = 0,
                          h = null == e
                            ? 1 / 0
                            : e;
                        i < h;
                        ++i
                      ) {
                        const e = this.input.charCodeAt(this.state.pos);
                        let h;
                        if (95 !== e) {
                          if (
                            h = e >= 97 ? e - 97 + 10 : e >= 65
                              ? e - 65 + 10
                              : Ft(e)
                              ? e - 48
                              : 1 / 0, h >= t
                          ) {
                            if (this.options.errorRecovery && h <= 9) {
                              h = 0,
                                this.raise(
                                  this.state.start + i + 2,
                                  g.InvalidDigit,
                                  t,
                                );
                            } else {
                              if (!s) break;
                              h = 0, o = !0;
                            }
                          }
                          ++this.state.pos, u = u * t + h;
                        } else {
                          const t = this.input.charCodeAt(this.state.pos - 1),
                            e = this.input.charCodeAt(this.state.pos + 1);
                          (-1 === a.indexOf(e) || n.indexOf(t) > -1 ||
                            n.indexOf(e) > -1 || Number.isNaN(e)) &&
                          this.raise(
                            this.state.pos,
                            g.UnexpectedNumericSeparator,
                          ),
                            r ||
                            this.raise(
                              this.state.pos,
                              g.NumericSeparatorInEscapeSequence,
                            ),
                            ++this.state.pos;
                        }
                      }
                      return this.state.pos === i ||
                          null != e && this.state.pos - i !== e || o ? null : u;
                    }
                    readRadixNumber(t) {
                      const e = this.state.pos;
                      let s = !1;
                      this.state.pos += 2;
                      const r = this.readInt(t);
                      null == r &&
                        this.raise(this.state.start + 2, g.InvalidDigit, t);
                      const i = this.input.charCodeAt(this.state.pos);
                      if (110 === i) ++this.state.pos, s = !0;
                      else if (109 === i) throw this.raise(e, g.InvalidDecimal);
                      if (L(this.input.codePointAt(this.state.pos))) {throw this
                          .raise(this.state.pos, g.NumberIdentifier);}
                      if (s) {
                        const t = this.input.slice(e, this.state.pos).replace(
                          /[_n]/g,
                          "",
                        );
                        this.finishToken(c.bigint, t);
                      } else this.finishToken(c.num, r);
                    }
                    readNumber(t) {
                      const e = this.state.pos;
                      let s = !1, r = !1, i = !1, n = !1, a = !1;
                      t || null !== this.readInt(10) ||
                        this.raise(e, g.InvalidNumber);
                      const o = this.state.pos - e >= 2 &&
                        48 === this.input.charCodeAt(e);
                      if (o) {
                        const t = this.input.slice(e, this.state.pos);
                        if (this.state.strict) {
                          this.raise(e, g.StrictOctalLiteral);
                        } else {
                          const s = t.indexOf("_");
                          s > 0 &&
                            this.raise(s + e, g.ZeroDigitNumericSeparator);
                        }
                        a = o && !/[89]/.test(t);
                      }
                      let u = this.input.charCodeAt(this.state.pos);
                      if (
                        46 !== u || a ||
                        (++this.state.pos,
                          this.readInt(10),
                          s = !0,
                          u = this.input.charCodeAt(this.state.pos)),
                          69 !== u && 101 !== u || a ||
                          (u = this.input.charCodeAt(++this.state.pos),
                            43 !== u && 45 !== u || ++this.state.pos,
                            null === this.readInt(10) &&
                            this.raise(e, g.InvalidOrMissingExponent),
                            s = !0,
                            n = !0,
                            u = this.input.charCodeAt(this.state.pos)),
                          110 === u &&
                          ((s || o) && this.raise(e, g.InvalidBigIntLiteral),
                            ++this.state.pos,
                            r = !0),
                          109 === u &&
                          (this.expectPlugin("decimal", this.state.pos),
                            (n || o) && this.raise(e, g.InvalidDecimal),
                            ++this.state.pos,
                            i = !0),
                          L(this.input.codePointAt(this.state.pos))
                      ) {
                        throw this.raise(this.state.pos, g.NumberIdentifier);
                      }
                      const h = this.input.slice(e, this.state.pos).replace(
                        /[_mn]/g,
                        "",
                      );
                      if (r) return void this.finishToken(c.bigint, h);
                      if (i) return void this.finishToken(c.decimal, h);
                      const p = a ? parseInt(h, 8) : parseFloat(h);
                      this.finishToken(c.num, p);
                    }
                    readCodePoint(t) {
                      let e;
                      if (123 === this.input.charCodeAt(this.state.pos)) {
                        const s = ++this.state.pos;
                        if (
                          e = this.readHexChar(
                            this.input.indexOf("}", this.state.pos) -
                              this.state.pos,
                            !0,
                            t,
                          ),
                            ++this.state.pos,
                            null !== e && e > 1114111
                        ) {
                          if (!t) return null;
                          this.raise(s, g.InvalidCodePoint);
                        }
                      } else e = this.readHexChar(4, !1, t);
                      return e;
                    }
                    readString(t) {
                      let e = "", s = ++this.state.pos;
                      for (;;) {
                        if (this.state.pos >= this.length) {
                          throw this.raise(
                            this.state.start,
                            g.UnterminatedString,
                          );
                        }
                        const r = this.input.charCodeAt(this.state.pos);
                        if (r === t) break;
                        if (92 === r) {
                          e += this.input.slice(s, this.state.pos),
                            e += this.readEscapedChar(!1),
                            s = this.state.pos;
                        } else if (8232 === r || 8233 === r) {
                          ++this.state.pos,
                            ++this.state.curLine,
                            this.state.lineStart = this.state.pos;
                        } else {
                          if (y(r)) {
                            throw this.raise(
                              this.state.start,
                              g.UnterminatedString,
                            );
                          }
                          ++this.state.pos;
                        }
                      }
                      e += this.input.slice(s, this.state.pos++),
                        this.finishToken(c.string, e);
                    }
                    readTmplToken() {
                      let t = "", e = this.state.pos, s = !1;
                      for (;;) {
                        if (this.state.pos >= this.length) {
                          throw this.raise(
                            this.state.start,
                            g.UnterminatedTemplate,
                          );
                        }
                        const r = this.input.charCodeAt(this.state.pos);
                        if (
                          96 === r ||
                          36 === r &&
                            123 === this.input.charCodeAt(this.state.pos + 1)
                        ) {
                          return this.state.pos === this.state.start &&
                              this.match(c.template)
                            ? 36 === r
                              ? (this.state.pos += 2,
                                void this.finishToken(c.dollarBraceL))
                              : (++this.state.pos,
                                void this.finishToken(c.backQuote))
                            : (t += this.input.slice(e, this.state.pos),
                              void this.finishToken(c.template, s ? null : t));
                        }
                        if (92 === r) {
                          t += this.input.slice(e, this.state.pos);
                          const r = this.readEscapedChar(!0);
                          null === r ? s = !0 : t += r, e = this.state.pos;
                        } else if (y(r)) {
                          switch (
                            t += this.input.slice(e, this.state.pos),
                              ++this.state.pos,
                              r
                          ) {
                            case 13:
                              10 === this.input.charCodeAt(this.state.pos) &&
                                ++this.state.pos;
                            case 10:
                              t += "\n";
                              break;
                            default:
                              t += String.fromCharCode(r);
                          }
                          ++this.state.curLine,
                            this.state.lineStart = this.state.pos,
                            e = this.state.pos;
                        } else ++this.state.pos;
                      }
                    }
                    readEscapedChar(t) {
                      const e = !t, s = this.input.charCodeAt(++this.state.pos);
                      switch (++this.state.pos, s) {
                        case 110:
                          return "\n";
                        case 114:
                          return "\r";
                        case 120: {
                          const t = this.readHexChar(2, !1, e);
                          return null === t ? null : String.fromCharCode(t);
                        }
                        case 117: {
                          const t = this.readCodePoint(e);
                          return null === t ? null : String.fromCodePoint(t);
                        }
                        case 116:
                          return "\t";
                        case 98:
                          return "\b";
                        case 118:
                          return "\v";
                        case 102:
                          return "\f";
                        case 13:
                          10 === this.input.charCodeAt(this.state.pos) &&
                            ++this.state.pos;
                        case 10:
                          this.state.lineStart = this.state.pos,
                            ++this.state.curLine;
                        case 8232:
                        case 8233:
                          return "";
                        case 56:
                        case 57:
                          if (t) return null;
                          this.state.strict &&
                            this.raise(
                              this.state.pos - 1,
                              g.StrictNumericEscape,
                            );
                        default:
                          if (s >= 48 && s <= 55) {
                            const e = this.state.pos - 1;
                            let s =
                                this.input.substr(this.state.pos - 1, 3).match(
                                  /^[0-7]+/,
                                )[0],
                              r = parseInt(s, 8);
                            r > 255 && (s = s.slice(0, -1), r = parseInt(s, 8)),
                              this.state.pos += s.length - 1;
                            const i = this.input.charCodeAt(this.state.pos);
                            if ("0" !== s || 56 === i || 57 === i) {
                              if (t)return null;
                              this.state.strict
                                ? this.raise(e, g.StrictNumericEscape)
                                : this.state.octalPositions.push(e);
                            }
                            return String.fromCharCode(r);
                          }
                          return String.fromCharCode(s);
                      }
                    }
                    readHexChar(t, e, s) {
                      const r = this.state.pos, i = this.readInt(16, t, e, !1);
                      return null === i &&
                        (s
                          ? this.raise(r, g.InvalidEscapeSequence)
                          : this.state.pos = r - 1),
                        i;
                    }
                    readWord1() {
                      let t = "";
                      this.state.containsEsc = !1;
                      const e = this.state.pos;
                      let s = this.state.pos;
                      for (; this.state.pos < this.length;) {
                        const r = this.input.codePointAt(this.state.pos);
                        if (O(r))this.state.pos += r <= 65535 ? 1 : 2;
                        else if (this.state.isIterator && 64 === r) {
                          ++this.state.pos;
                        } else {
                          if (92 !== r) break;
                          {
                            this.state.containsEsc = !0,
                              t += this.input.slice(s, this.state.pos);
                            const r = this.state.pos,
                              i = this.state.pos === e
                                ? L
                                : O;
                            if (
                              117 !== this.input.charCodeAt(++this.state.pos)
                            ) {
                              this.raise(
                                this.state.pos,
                                g.MissingUnicodeEscape,
                              );
                              continue;
                            }
                            ++this.state.pos;
                            const n = this.readCodePoint(!0);
                            null !== n &&
                            (i(n) ||
                              this.raise(r, g.EscapedCharNotAnIdentifier),
                              t += String.fromCodePoint(n)), s = this.state.pos;
                          }
                        }
                      }
                      return t + this.input.slice(s, this.state.pos);
                    }
                    isIterator(t) {
                      return "@@iterator" === t || "@@asyncIterator" === t;
                    }
                    readWord() {
                      const t = this.readWord1(), e = o.get(t) || c.name;
                      !this.state.isIterator ||
                      this.isIterator(t) && this.state.inType ||
                      this.raise(this.state.pos, g.InvalidIdentifier, t),
                        this.finishToken(e, t);
                    }
                    checkKeywordEscapes() {
                      const t = this.state.type.keyword;
                      t && this.state.containsEsc &&
                        this.raise(
                          this.state.start,
                          g.InvalidEscapedReservedWord,
                          t,
                        );
                    }
                    braceIsBlock(t) {
                      const e = this.curContext();
                      return e === T.functionExpression ||
                        e === T.functionStatement ||
                        (t !== c.colon ||
                            e !== T.braceStatement && e !== T.braceExpression
                          ? t === c._return ||
                              t === c.name && this.state.exprAllowed
                            ? this.hasPrecedingLineBreak()
                            : t === c._else || t === c.semi || t === c.eof ||
                              t === c.parenR || t === c.arrow || (t === c.braceL
                                ? e === T.braceStatement
                                : t !== c._var && t !== c._const &&
                                  t !== c.name &&
                                  (t === c.relational ||
                                    !this.state.exprAllowed))
                          : !e.isExpr);
                    }
                    updateContext(t) {
                      const e = this.state.type;
                      let s;
                      !e.keyword || t !== c.dot && t !== c.questionDot
                        ? (s = e.updateContext) ? s.call(this, t)
                        : this.state.exprAllowed = e.beforeExpr
                        : this.state.exprAllowed = !1;
                    }
                  } {
                  addExtra(t, e, s) {
                    if (!t)return;
                    (t.extra = t.extra || {})[e] = s;
                  }
                  isRelational(t) {
                    return this.match(c.relational) && this.state.value === t;
                  }
                  expectRelational(t) {
                    this.isRelational(t) ? this.next()
                    : this.unexpected(null, c.relational);
                  }
                  isContextual(t) {
                    return this.match(c.name) && this.state.value === t &&
                      !this.state.containsEsc;
                  }
                  isUnparsedContextual(t, e) {
                    const s = t + e.length;
                    return this.input.slice(t, s) === e &&
                      (s === this.input.length || !O(this.input.charCodeAt(s)));
                  }
                  isLookaheadContextual(t) {
                    const e = this.nextTokenStart();
                    return this.isUnparsedContextual(e, t);
                  }
                  eatContextual(t) {
                    return this.isContextual(t) && this.eat(c.name);
                  }
                  expectContextual(t, e) {
                    this.eatContextual(t) || this.unexpected(null, e);
                  }
                  canInsertSemicolon() {
                    return this.match(c.eof) || this.match(c.braceR) ||
                      this.hasPrecedingLineBreak();
                  }
                  hasPrecedingLineBreak() {
                    return m.test(
                      this.input.slice(this.state.lastTokEnd, this.state.start),
                    );
                  }
                  isLineTerminator() {
                    return this.eat(c.semi) || this.canInsertSemicolon();
                  }
                  semicolon() {
                    this.isLineTerminator() || this.unexpected(null, c.semi);
                  }
                  expect(t, e) {
                    this.eat(t) || this.unexpected(e, t);
                  }
                  assertNoSpace(t = "Unexpected space.") {
                    this.state.start > this.state.lastTokEnd &&
                      this.raise(this.state.lastTokEnd, t);
                  }
                  unexpected(t, e = "Unexpected token") {
                    throw "string" != typeof e &&
                      (e = 'Unexpected token, expected "'.concat(e.label, '"')),
                      this.raise(null != t ? t : this.state.start, e);
                  }
                  expectPlugin(t, e) {
                    if (!this.hasPlugin(t)) {
                      throw this.raiseWithData(
                        null != e
                          ? e
                          : this.state.start,
                        { missingPlugin: [t] },
                        "This experimental syntax requires enabling the parser plugin: '"
                          .concat(t, "'"),
                      );
                    }
                    return !0;
                  }
                  expectOnePlugin(t, e) {
                    if (!t.some(((t) => this.hasPlugin(t)))) {
                      throw this.raiseWithData(
                        null != e ? e : this.state.start,
                        { missingPlugin: t },
                        "This experimental syntax requires enabling one of the following parser plugin(s): '"
                          .concat(t.join(", "), "'"),
                      );
                    }
                  }
                  tryParse(t, e = this.state.clone()) {
                    const s = { node: null };
                    try {
                      const r = t(
                        ((t = null) => {
                          throw s.node = t, s;
                        }),
                      );
                      if (this.state.errors.length > e.errors.length) {
                        const t = this.state;
                        return this.state = e,
                          {
                            node: r,
                            error: t.errors[e.errors.length],
                            thrown: !1,
                            aborted: !1,
                            failState: t,
                          };
                      }
                      return {
                        node: r,
                        error: null,
                        thrown: !1,
                        aborted: !1,
                        failState: null,
                      };
                    } catch (t) {
                      const r = this.state;
                      if (this.state = e, t instanceof SyntaxError) {
                        return {
                          node: null,
                          error: t,
                          thrown: !0,
                          aborted: !1,
                          failState: r,
                        };
                      }
                      if (t === s) {
                        return {
                          node: s.node,
                          error: null,
                          thrown: !1,
                          aborted: !0,
                          failState: r,
                        };
                      }
                      throw t;
                    }
                  }
                  checkExpressionErrors(t, e) {
                    if (!t) return !1;
                    const { shorthandAssign: s, doubleProto: r } = t;
                    if (!e) return s >= 0 || r >= 0;
                    s >= 0 && this.unexpected(s),
                      r >= 0 && this.raise(r, g.DuplicateProto);
                  }
                  isLiteralPropertyName() {
                    return this.match(c.name) || !!this.state.type.keyword ||
                      this.match(c.string) || this.match(c.num) ||
                      this.match(c.bigint) || this.match(c.decimal);
                  }
                } {
                startNode() {
                  return new Bt(this, this.state.start, this.state.startLoc);
                }
                startNodeAt(t, e) {
                  return new Bt(this, t, e);
                }
                startNodeAtNode(t) {
                  return this.startNodeAt(t.start, t.loc.start);
                }
                finishNode(t, e) {
                  return this.finishNodeAt(
                    t,
                    e,
                    this.state.lastTokEnd,
                    this.state.lastTokEndLoc,
                  );
                }
                finishNodeAt(t, e, s, r) {
                  return t.type = e,
                    t.end = s,
                    t.loc.end = r,
                    this.options.ranges && (t.range[1] = s),
                    this.processComment(t),
                    t;
                }
                resetStartLocation(t, e, s) {
                  t.start = e,
                    t.loc.start = s,
                    this.options.ranges && (t.range[0] = e);
                }
                resetEndLocation(
                  t,
                  e = this.state.lastTokEnd,
                  s = this.state.lastTokEndLoc,
                ) {
                  t.end = e,
                    t.loc.end = s,
                    this.options.ranges && (t.range[1] = e);
                }
                resetStartLocationFromNode(t, e) {
                  this.resetStartLocation(t, e.start, e.loc.start);
                }
              } {
              toAssignable(t) {
                var e, s;
                let r = void 0;
                switch (
                  ("ParenthesizedExpression" === t.type ||
                    (null == (e = t.extra) ? void 0 : e.parenthesized)) &&
                  (r = St(t),
                    "Identifier" !== r.type && "MemberExpression" !== r.type &&
                    this.raise(t.start, g.InvalidParenthesizedAssignment)),
                    t.type
                ) {
                  case "Identifier":
                  case "ObjectPattern":
                  case "ArrayPattern":
                  case "AssignmentPattern":
                    break;
                  case "ObjectExpression":
                    t.type = "ObjectPattern";
                    for (
                      let e = 0, s = t.properties.length, r = s - 1; e < s; e++
                    ) {
                      var i;
                      const s = t.properties[e], n = e === r;
                      this.toAssignableObjectExpressionProp(s, n),
                        n && "RestElement" === s.type && (null == (i = t.extra)
                          ? void 0
                          : i.trailingComma) &&
                        this.raiseRestNotLast(t.extra.trailingComma);
                    }
                    break;
                  case "ObjectProperty":
                    this.toAssignable(t.value);
                    break;
                  case "SpreadElement": {
                    this.checkToRestConversion(t), t.type = "RestElement";
                    const e = t.argument;
                    this.toAssignable(e);
                    break;
                  }
                  case "ArrayExpression":
                    t.type = "ArrayPattern",
                      this.toAssignableList(
                        t.elements,
                        null == (s = t.extra) ? void 0 : s.trailingComma,
                      );
                    break;
                  case "AssignmentExpression":
                    "=" !== t.operator &&
                    this.raise(t.left.end, g.MissingEqInAssignment),
                      t.type = "AssignmentPattern",
                      delete t.operator,
                      this.toAssignable(t.left);
                    break;
                  case "ParenthesizedExpression":
                    this.toAssignable(r);
                }
                return t;
              }
              toAssignableObjectExpressionProp(t, e) {
                if ("ObjectMethod" === t.type) {
                  const e = "get" === t.kind || "set" === t.kind
                    ? g.PatternHasAccessor : g.PatternHasMethod;
                  this.raise(t.key.start, e);
                } else {"SpreadElement" !== t.type || e ? this.toAssignable(t)
                  : this.raiseRestNotLast(t.start);}
              }
              toAssignableList(t, e) {
                let s = t.length;
                if (s) {
                  const r = t[s - 1];
                  if ("RestElement" === (null == r ? void 0 : r.type)) --s;
                  else if ("SpreadElement" === (null == r ? void 0 : r.type)) {
                    r.type = "RestElement";
                    const t = r.argument;
                    this.toAssignable(t),
                      "Identifier" !== t.type &&
                      "MemberExpression" !== t.type &&
                      "ArrayPattern" !== t.type && "ObjectPattern" !== t.type &&
                      this.unexpected(t.start),
                      e && this.raiseTrailingCommaAfterRest(e),
                      --s;
                  }
                }
                for (let e = 0; e < s; e++) {
                  const s = t[e];
                  s &&
                    (this.toAssignable(s),
                      "RestElement" === s.type &&
                      this.raiseRestNotLast(s.start));
                }
                return t;
              }
              toReferencedList(t, e) {
                return t;
              }
              toReferencedListDeep(t, e) {
                this.toReferencedList(t, e);
                for (let e = 0; e < t.length; e++) {
                  const s = t[e];
                  "ArrayExpression" === (null == s ? void 0 : s.type) &&
                    this.toReferencedListDeep(s.elements);
                }
              }
              parseSpread(t, e) {
                const s = this.startNode();
                return this.next(),
                  s.argument = this.parseMaybeAssignAllowIn(t, void 0, e),
                  this.finishNode(s, "SpreadElement");
              }
              parseRestBinding() {
                const t = this.startNode();
                return this.next(),
                  t.argument = this.parseBindingAtom(),
                  this.finishNode(t, "RestElement");
              }
              parseBindingAtom() {
                switch (this.state.type) {
                  case c.bracketL: {
                    const t = this.startNode();
                    return this.next(),
                      t.elements = this.parseBindingList(c.bracketR, 93, !0),
                      this.finishNode(t, "ArrayPattern");
                  }
                  case c.braceL:
                    return this.parseObjectLike(c.braceR, !0);
                }
                return this.parseIdentifier();
              }
              parseBindingList(t, e, s, r) {
                const i = [];
                let n = !0;
                for (; !this.eat(t);) {
                  if (
                    n
                      ? n = !1
                      : this.expect(c.comma), s && this.match(c.comma)
                  ) {
                    i.push(null);
                  } else {
                    if (this.eat(t)) break;
                    if (this.match(c.ellipsis)) {
                      i.push(
                        this.parseAssignableListItemTypes(
                          this.parseRestBinding(),
                        ),
                      ),
                        this.checkCommaAfterRest(e),
                        this.expect(t);
                      break;
                    }
                    {
                      const t = [];
                      for (
                        this.match(c.at) && this.hasPlugin("decorators") &&
                        this.raise(
                          this.state.start,
                          g.UnsupportedParameterDecorator,
                        );
                        this.match(c.at);
                      ) {
                        t.push(this.parseDecorator());
                      }
                      i.push(this.parseAssignableListItem(r, t));
                    }
                  }
                }
                return i;
              }
              parseAssignableListItem(t, e) {
                const s = this.parseMaybeDefault();
                this.parseAssignableListItemTypes(s);
                const r = this.parseMaybeDefault(s.start, s.loc.start, s);
                return e.length && (s.decorators = e), r;
              }
              parseAssignableListItemTypes(t) {
                return t;
              }
              parseMaybeDefault(t, e, s) {
                var r, i, n;
                if (
                  e = null != (r = e) ? r : this.state.startLoc,
                    t = null != (i = t) ? i : this.state.start,
                    s = null != (n = s) ? n : this.parseBindingAtom(),
                    !this.eat(c.eq)
                ) {
                  return s;
                }
                const a = this.startNodeAt(t, e);
                return a.left = s,
                  a.right = this.parseMaybeAssignAllowIn(),
                  this.finishNode(a, "AssignmentPattern");
              }
              checkLVal(t, e = 64, s, r, i, n = !1) {
                switch (t.type) {
                  case "Identifier":
                    if (
                      this.state.strict && (n
                        ? H(t.name, this.inModule)
                        : z(t.name)) && this.raise(
                          t.start,
                          e === D
                            ? g.StrictEvalArguments
                            : g.StrictEvalArgumentsBinding,
                          t.name,
                        ), s
                    ) {
                      const e = "_".concat(t.name);
                      s[e] ? this.raise(t.start, g.ParamDupe) : s[e] = !0;
                    }
                    i && "let" === t.name &&
                    this.raise(t.start, g.LetInLexicalBinding),
                      e & D || this.scope.declareName(t.name, e, t.start);
                    break;
                  case "MemberExpression":
                    e !== D &&
                      this.raise(t.start, g.InvalidPropertyBindingPattern);
                    break;
                  case "ObjectPattern":
                    for (let r = 0, n = t.properties; r < n.length; r++) {
                      let t = n[r];
                      if ("ObjectProperty" === t.type) t = t.value;
                      else if ("ObjectMethod" === t.type) continue;
                      this.checkLVal(
                        t,
                        e,
                        s,
                        "object destructuring pattern",
                        i,
                      );
                    }
                    break;
                  case "ArrayPattern":
                    for (let r = 0, n = t.elements; r < n.length; r++) {
                      const t = n[r];
                      t &&
                        this.checkLVal(
                          t,
                          e,
                          s,
                          "array destructuring pattern",
                          i,
                        );
                    }
                    break;
                  case "AssignmentPattern":
                    this.checkLVal(t.left, e, s, "assignment pattern");
                    break;
                  case "RestElement":
                    this.checkLVal(t.argument, e, s, "rest element");
                    break;
                  case "ParenthesizedExpression":
                    this.checkLVal(
                      t.expression,
                      e,
                      s,
                      "parenthesized expression",
                    );
                    break;
                  default:
                    this.raise(
                      t.start,
                      e === D ? g.InvalidLhs : g.InvalidLhsBinding,
                      r,
                    );
                }
              }
              checkToRestConversion(t) {
                "Identifier" !== t.argument.type &&
                  "MemberExpression" !== t.argument.type &&
                  this.raise(t.argument.start, g.InvalidRestAssignmentPattern);
              }
              checkCommaAfterRest(t) {
                this.match(c.comma) &&
                  (this.lookaheadCharCode() === t
                    ? this.raiseTrailingCommaAfterRest(this.state.start)
                    : this.raiseRestNotLast(this.state.start));
              }
              raiseRestNotLast(t) {
                throw this.raise(t, g.ElementAfterRest);
              }
              raiseTrailingCommaAfterRest(t) {
                this.raise(t, g.RestTrailingComma);
              }
            } {
            checkProto(t, e, s, r) {
              if (
                "SpreadElement" === t.type || "ObjectMethod" === t.type ||
                t.computed || t.shorthand
              ) {
                return;
              }
              const i = t.key;
              if (
                "__proto__" === ("Identifier" === i.type ? i.name : i.value)
              ) {
                if (e) return void this.raise(i.start, g.RecordNoProto);
                s.used && (r
                  ? -1 === r.doubleProto && (r.doubleProto = i.start)
                  : this.raise(i.start, g.DuplicateProto)), s.used = !0;
              }
            }
            shouldExitDescending(t, e) {
              return "ArrowFunctionExpression" === t.type && t.start === e;
            }
            getExpression() {
              let t = 0;
              this.hasPlugin("topLevelAwait") && this.inModule && (t |= 2),
                this.scope.enter(1),
                this.prodParam.enter(t),
                this.nextToken();
              const e = this.parseExpression();
              return this.match(c.eof) || this.unexpected(),
                e.comments = this.state.comments,
                e.errors = this.state.errors,
                e;
            }
            parseExpression(t, e) {
              return t ? this.disallowInAnd((() => this.parseExpressionBase(e)))
              : this.allowInAnd((() => this.parseExpressionBase(e)));
            }
            parseExpressionBase(t) {
              const e = this.state.start,
                s = this.state.startLoc,
                r = this.parseMaybeAssign(t);
              if (this.match(c.comma)) {
                const i = this.startNodeAt(e, s);
                for (i.expressions = [r]; this.eat(c.comma);) {
                  i.expressions.push(this.parseMaybeAssign(t));
                }
                return this.toReferencedList(i.expressions),
                  this.finishNode(i, "SequenceExpression");
              }
              return r;
            }
            parseMaybeAssignDisallowIn(t, e, s) {
              return this.disallowInAnd((() => this.parseMaybeAssign(t, e, s)));
            }
            parseMaybeAssignAllowIn(t, e, s) {
              return this.allowInAnd((() => this.parseMaybeAssign(t, e, s)));
            }
            parseMaybeAssign(t, e, s) {
              const r = this.state.start, i = this.state.startLoc;
              if (this.isContextual("yield") && this.prodParam.hasYield) {
                this.state.exprAllowed = !0;
                let t = this.parseYield();
                return e && (t = e.call(this, t, r, i)), t;
              }
              let n;
              t ? n = !1 : (t = new wt(), n = !0),
                (this.match(c.parenL) || this.match(c.name)) &&
                (this.state.potentialArrowAt = this.state.start);
              let a = this.parseMaybeConditional(t, s);
              if (e && (a = e.call(this, a, r, i)), this.state.type.isAssign) {
                const e = this.startNodeAt(r, i), s = this.state.value;
                return e.operator = s,
                  this.match(c.eq)
                    ? (e.left = this.toAssignable(a), t.doubleProto = -1)
                    : e.left = a,
                  t.shorthandAssign >= e.left.start && (t.shorthandAssign = -1),
                  this.checkLVal(a, void 0, void 0, "assignment expression"),
                  this.next(),
                  e.right = this.parseMaybeAssign(),
                  this.finishNode(e, "AssignmentExpression");
              }
              return n && this.checkExpressionErrors(t, !0), a;
            }
            parseMaybeConditional(t, e) {
              const s = this.state.start,
                r = this.state.startLoc,
                i = this.state.potentialArrowAt,
                n = this.parseExprOps(t);
              return this.shouldExitDescending(n, i) ? n
              : this.parseConditional(n, s, r, e);
            }
            parseConditional(t, e, s, r) {
              if (this.eat(c.question)) {
                const r = this.startNodeAt(e, s);
                return r.test = t,
                  r.consequent = this.parseMaybeAssignAllowIn(),
                  this.expect(c.colon),
                  r.alternate = this.parseMaybeAssign(),
                  this.finishNode(r, "ConditionalExpression");
              }
              return t;
            }
            parseExprOps(t) {
              const e = this.state.start,
                s = this.state.startLoc,
                r = this.state.potentialArrowAt,
                i = this.parseMaybeUnary(t);
              return this.shouldExitDescending(i, r) ? i
              : this.parseExprOp(i, e, s, -1);
            }
            parseExprOp(t, e, s, r) {
              let i = this.state.type.binop;
              if (
                null != i && (this.prodParam.hasIn || !this.match(c._in)) &&
                i > r
              ) {
                const n = this.state.type;
                if (n === c.pipeline) {
                  if (
                    this.expectPlugin("pipelineOperator"),
                      this.state.inFSharpPipelineDirectBody
                  ) {
                    return t;
                  }
                  this.state.inPipeline = !0,
                    this.checkPipelineAtInfixOperator(t, e);
                }
                const a = this.startNodeAt(e, s);
                a.left = t,
                  a.operator = this.state.value,
                  n !== c.exponent || "UnaryExpression" !== t.type ||
                  !this.options.createParenthesizedExpressions && t.extra &&
                    t.extra.parenthesized ||
                  this.raise(
                    t.argument.start,
                    g.UnexpectedTokenUnaryExponentiation,
                  );
                const o = n === c.logicalOR || n === c.logicalAND,
                  u = n === c.nullishCoalescing;
                if (
                  u && (i = c.logicalAND.binop),
                    this.next(),
                    n === c.pipeline &&
                    "minimal" ===
                      this.getPluginOption("pipelineOperator", "proposal") &&
                    this.match(c.name) && "await" === this.state.value &&
                    this.prodParam.hasAwait
                ) {
                  throw this.raise(
                    this.state.start,
                    g.UnexpectedAwaitAfterPipelineBody,
                  );
                }
                a.right = this.parseExprOpRightExpr(n, i),
                  this.finishNode(
                    a,
                    o || u ? "LogicalExpression" : "BinaryExpression",
                  );
                const h = this.state.type;
                if (
                  u && (h === c.logicalOR || h === c.logicalAND) ||
                  o && h === c.nullishCoalescing
                ) {
                  throw this.raise(
                    this.state.start,
                    g.MixingCoalesceWithLogical,
                  );
                }
                return this.parseExprOp(a, e, s, r);
              }
              return t;
            }
            parseExprOpRightExpr(t, e) {
              const s = this.state.start, r = this.state.startLoc;
              switch (t) {
                case c.pipeline:
                  switch (
                    this.getPluginOption("pipelineOperator", "proposal")
                  ) {
                    case "smart":
                      return this.withTopicPermittingContext(
                        (() =>
                          this.parseSmartPipelineBody(
                            this.parseExprOpBaseRightExpr(t, e),
                            s,
                            r,
                          )),
                      );
                    case "fsharp":
                      return this.withSoloAwaitPermittingContext(
                        (() => this.parseFSharpPipelineBody(e)),
                      );
                  }
                default:
                  return this.parseExprOpBaseRightExpr(t, e);
              }
            }
            parseExprOpBaseRightExpr(t, e) {
              const s = this.state.start, r = this.state.startLoc;
              return this.parseExprOp(
                this.parseMaybeUnary(),
                s,
                r,
                t.rightAssociative ? e - 1 : e,
              );
            }
            parseMaybeUnary(t) {
              if (
                this.isContextual("await") && this.isAwaitAllowed()
              ) {
                return this.parseAwait();
              }
              const e = this.match(c.incDec), s = this.startNode();
              if (this.state.type.prefix) {
                s.operator = this.state.value,
                  s.prefix = !0,
                  this.match(c._throw) && this.expectPlugin("throwExpressions");
                const r = this.match(c._delete);
                if (
                  this.next(),
                    s.argument = this.parseMaybeUnary(),
                    this.checkExpressionErrors(t, !0),
                    this.state.strict && r
                ) {
                  const t = s.argument;
                  "Identifier" === t.type ? this.raise(s.start, g.StrictDelete)
                  : "MemberExpression" !== t.type &&
                      "OptionalMemberExpression" !== t.type ||
                    "PrivateName" !== t.property.type ||
                    this.raise(s.start, g.DeletePrivateField);
                }
                if (!e)return this.finishNode(s, "UnaryExpression");
              }
              return this.parseUpdate(s, e, t);
            }
            parseUpdate(t, e, s) {
              if (
                e
              ) { 
                return this.checkLVal(
                  t.argument,
                  void 0,
                  void 0,
                  "prefix operation",
                ),
                  this.finishNode(t, "UpdateExpression");
              }
              const r = this.state.start, i = this.state.startLoc;
              let n = this.parseExprSubscripts(s);
              if (this.checkExpressionErrors(s, !1))return n;
              for (; this.state.type.postfix && !this.canInsertSemicolon();) {
                const t = this.startNodeAt(r, i);
                t.operator = this.state.value,
                  t.prefix = !1,
                  t.argument = n,
                  this.checkLVal(n, void 0, void 0, "postfix operation"),
                  this.next(),
                  n = this.finishNode(t, "UpdateExpression");
              }
              return n;
            }
            parseExprSubscripts(t) {
              const e = this.state.start,
                s = this.state.startLoc,
                r = this.state.potentialArrowAt,
                i = this.parseExprAtom(t);
              return this.shouldExitDescending(i, r) ? i
              : this.parseSubscripts(i, e, s);
            }
            parseSubscripts(t, e, s, r) {
              const i = {
                optionalChainMember: !1,
                maybeAsyncArrow: this.atPossibleAsyncArrow(t),
                stop: !1,
              };
              do {
                t = this.parseSubscript(t, e, s, r, i), i.maybeAsyncArrow = !1;
              } while (!i.stop);
              return t;
            }
            parseSubscript(t, e, s, r, i) {
              if (!r && this.eat(c.doubleColon)) {
                return this.parseBind(t, e, s, r, i);
              }
              if (this.match(c.backQuote)) {
                return this.parseTaggedTemplateExpression(t, e, s, i);
              }
              let n = !1;
              if (this.match(c.questionDot)) {
                if (
                  i.optionalChainMember = n = !0,
                    r && 40 === this.lookaheadCharCode()
                ) {
                  return i.stop = !0, t;
                }
                this.next();
              }
              return !r && this.match(c.parenL)
                ? this.parseCoverCallAndAsyncArrowHead(t, e, s, i, n)
                : n || this.match(c.bracketL) || this.eat(c.dot)
                ? this.parseMember(t, e, s, i, n) : (i.stop = !0, t);
            }
            parseMember(t, e, s, r, i) {
              const n = this.startNodeAt(e, s), a = this.eat(c.bracketL);
              n.object = t, n.computed = a;
              const o = a ? this.parseExpression()
              : this.parseMaybePrivateName(!0);
              return "PrivateName" === o.type &&
                ("Super" === n.object.type &&
                  this.raise(e, g.SuperPrivateField),
                  this.classScope.usePrivateName(o.id.name, o.start)),
                n.property = o,
                a && this.expect(c.bracketR),
                r.optionalChainMember
                  ? (n.optional = i,
                    this.finishNode(n, "OptionalMemberExpression"))
                  : this.finishNode(n, "MemberExpression");
            }
            parseBind(t, e, s, r, i) {
              const n = this.startNodeAt(e, s);
              return n.object = t,
                n.callee = this.parseNoCallExpr(),
                i.stop = !0,
                this.parseSubscripts(
                  this.finishNode(n, "BindExpression"),
                  e,
                  s,
                  r,
                );
            }
            parseCoverCallAndAsyncArrowHead(t, e, s, r, i) {
              const n = this.state.maybeInArrowParameters;
              this.state.maybeInArrowParameters = !0, this.next();
              let a = this.startNodeAt(e, s);
              return a.callee = t,
                r.maybeAsyncArrow && this.expressionScope.enter(new It(2)),
                r.optionalChainMember && (a.optional = i),
                a.arguments = i
                  ? this.parseCallExpressionArguments(c.parenR, !1)
                  : this.parseCallExpressionArguments(
                    c.parenR,
                    r.maybeAsyncArrow,
                    "Import" === t.type,
                    "Super" !== t.type,
                    a,
                  ),
                this.finishCallExpression(a, r.optionalChainMember),
                r.maybeAsyncArrow && this.shouldParseAsyncArrow() && !i
                  ? (r.stop = !0,
                    this.expressionScope.validateAsPattern(),
                    this.expressionScope.exit(),
                    a = this.parseAsyncArrowFromCallExpression(
                      this.startNodeAt(e, s),
                      a,
                    ))
                  : (r.maybeAsyncArrow && this.expressionScope.exit(),
                    this.toReferencedArguments(a)),
                this.state.maybeInArrowParameters = n,
                a;
            }
            toReferencedArguments(t, e) {
              this.toReferencedListDeep(t.arguments, e);
            }
            parseTaggedTemplateExpression(t, e, s, r) {
              const i = this.startNodeAt(e, s);
              return i.tag = t,
                i.quasi = this.parseTemplate(!0),
                r.optionalChainMember &&
                this.raise(e, g.OptionalChainingNoTemplate),
                this.finishNode(i, "TaggedTemplateExpression");
            }
            atPossibleAsyncArrow(t) {
              return "Identifier" === t.type && "async" === t.name &&
                this.state.lastTokEnd === t.end && !this.canInsertSemicolon() &&
                t.end - t.start == 5 && t.start === this.state.potentialArrowAt;
            }
            finishCallExpression(t, e) {
              if ("Import" === t.callee.type) {
                if (
                  2 === t.arguments.length &&
                  (this.hasPlugin("moduleAttributes") ||
                    this.expectPlugin("importAssertions")),
                    0 === t.arguments.length || t.arguments.length > 2
                ) {
                  this.raise(
                    t.start,
                    g.ImportCallArity,
                    this.hasPlugin("importAssertions") ||
                      this.hasPlugin("moduleAttributes")
                      ? "one or two arguments" : "one argument",
                  );
                } else {
                  for (let e = 0, s = t.arguments; e < s.length; e++) {
                    const t = s[e];
                    "SpreadElement" === t.type &&
                      this.raise(t.start, g.ImportCallSpreadArgument);
                  }
                }
              }
              return this.finishNode(
                t,
                e ? "OptionalCallExpression" : "CallExpression",
              );
            }
            parseCallExpressionArguments(t, e, s, r, i) {
              const n = [];
              let a, o = !0;
              const u = this.state.inFSharpPipelineDirectBody;
              for (this.state.inFSharpPipelineDirectBody = !1; !this.eat(t);) {
                if (o)o = !1;
                else if (this.expect(c.comma), this.match(t)) {
                  !s || this.hasPlugin("importAssertions") ||
                  this.hasPlugin("moduleAttributes") ||
                  this.raise(
                    this.state.lastTokStart,
                    g.ImportCallArgumentTrailingComma,
                  ),
                    i &&
                    this.addExtra(i, "trailingComma", this.state.lastTokStart),
                    this.next();
                  break;
                }
                this.match(c.parenL) && !a && (a = this.state.start),
                  n.push(this.parseExprListItem(
                    !1,
                    e ? new wt() : void 0,
                    e ? { start: 0 } : void 0,
                    r,
                  ));
              }
              return e && a && this.shouldParseAsyncArrow() &&
                this.unexpected(),
                this.state.inFSharpPipelineDirectBody = u,
                n;
            }
            shouldParseAsyncArrow() {
              return this.match(c.arrow) && !this.canInsertSemicolon();
            }
            parseAsyncArrowFromCallExpression(t, e) {
              var s;
              return this.expect(c.arrow),
                this.parseArrowExpression(
                  t,
                  e.arguments,
                  !0,
                  null == (s = e.extra) ? void 0 : s.trailingComma,
                ),
                t;
            }
            parseNoCallExpr() {
              const t = this.state.start, e = this.state.startLoc;
              return this.parseSubscripts(this.parseExprAtom(), t, e, !0);
            }
            parseExprAtom(t) {
              this.state.type === c.slash && this.readRegexp();
              const e = this.state.potentialArrowAt === this.state.start;
              let s;
              switch (this.state.type) {
                case c._super:
                  return this.parseSuper();
                case c._import:
                  return s = this.startNode(),
                    this.next(),
                    this.match(c.dot) ? this.parseImportMetaProperty(s)
                    : (this.match(c.parenL) ||
                      this.raise(this.state.lastTokStart, g.UnsupportedImport),
                      this.finishNode(s, "Import"));
                case c._this:
                  return s = this.startNode(),
                    this.next(),
                    this.finishNode(s, "ThisExpression");
                case c.name: {
                  const t = this.state.containsEsc, s = this.parseIdentifier();
                  if (!t && "async" === s.name && !this.canInsertSemicolon()) {
                    if (this.match(c._function)) {
                      const t = this.state.context.length - 1;
                      if (
                        this.state.context[t] !== T.functionStatement
                      ) {
                        throw new Error("Internal error");
                      }
                      return this.state.context[t] = T.functionExpression,
                        this.next(),
                        this.parseFunction(this.startNodeAtNode(s), void 0, !0);
                    }
                    if (this.match(c.name)) {
                      return this.parseAsyncArrowUnaryFunction(s);
                    }
                  }
                  return e && this.match(c.arrow) && !this.canInsertSemicolon()
                    ? (this.next(),
                      this.parseArrowExpression(
                        this.startNodeAtNode(s),
                        [s],
                        !1,
                      )) : s;
                }
                case c._do:
                  return this.parseDo();
                case c.regexp: {
                  const t = this.state.value;
                  return s = this.parseLiteral(t.value, "RegExpLiteral"),
                    s.pattern = t.pattern,
                    s.flags = t.flags,
                    s;
                }
                case c.num:
                  return this.parseLiteral(this.state.value, "NumericLiteral");
                case c.bigint:
                  return this.parseLiteral(this.state.value, "BigIntLiteral");
                case c.decimal:
                  return this.parseLiteral(this.state.value, "DecimalLiteral");
                case c.string:
                  return this.parseLiteral(this.state.value, "StringLiteral");
                case c._null:
                  return s = this.startNode(),
                    this.next(),
                    this.finishNode(s, "NullLiteral");
                case c._true:
                case c._false:
                  return this.parseBooleanLiteral();
                case c.parenL:
                  return this.parseParenAndDistinguishExpression(e);
                case c.bracketBarL:
                case c.bracketHashL:
                  return this.parseArrayLike(
                    this.state.type === c.bracketBarL
                      ? c.bracketBarR
                      : c.bracketR,
                    !1,
                    !0,
                    t,
                  );
                case c.bracketL:
                  return this.parseArrayLike(c.bracketR, !0, !1, t);
                case c.braceBarL:
                case c.braceHashL:
                  return this.parseObjectLike(
                    this.state.type === c.braceBarL ? c.braceBarR : c.braceR,
                    !1,
                    !0,
                    t,
                  );
                case c.braceL:
                  return this.parseObjectLike(c.braceR, !1, !1, t);
                case c._function:
                  return this.parseFunctionOrFunctionSent();
                case c.at:
                  this.parseDecorators();
                case c._class:
                  return s = this.startNode(),
                    this.takeDecorators(s),
                    this.parseClass(s, !1);
                case c._new:
                  return this.parseNewOrNewTarget();
                case c.backQuote:
                  return this.parseTemplate(!1);
                case c.doubleColon: {
                  s = this.startNode(), this.next(), s.object = null;
                  const t = s.callee = this.parseNoCallExpr();
                  if ("MemberExpression" === t.type) {
                    return this.finishNode(s, "BindExpression");
                  }
                  throw this.raise(t.start, g.UnsupportedBind);
                }
                case c.hash: {
                  if (this.state.inPipeline) {
                    return s = this.startNode(),
                      "smart" !==
                        this.getPluginOption("pipelineOperator", "proposal") &&
                      this.raise(s.start, g.PrimaryTopicRequiresSmartPipeline),
                      this.next(),
                      this
                        .primaryTopicReferenceIsAllowedInCurrentTopicContext() ||
                      this.raise(s.start, g.PrimaryTopicNotAllowed),
                      this.registerTopicReference(),
                      this.finishNode(s, "PipelinePrimaryTopicReference");
                  }
                  const t = this.input.codePointAt(this.state.end);
                  if (L(t) || 92 === t) {
                    const t = this.state.start;
                    if (
                      s = this.parseMaybePrivateName(!0), this.match(c._in)
                    ) {
                      this.expectPlugin("privateIn"),
                        this.classScope.usePrivateName(s.id.name, s.start);
                    } else {
                      if (!this.hasPlugin("privateIn"))throw this.unexpected(t);
                      this.raise(
                        this.state.start,
                        g.PrivateInExpectedIn,
                        s.id.name,
                      );
                    }
                    return s;
                  }
                }
                case c.relational:
                  if ("<" === this.state.value) {
                    const t = this.input.codePointAt(this.nextTokenStart());
                    (L(t) || 62 === t) &&
                      this.expectOnePlugin(["jsx", "flow", "typescript"]);
                  }
                default:
                  throw this.unexpected();
              }
            }
            parseAsyncArrowUnaryFunction(t) {
              const e = this.startNodeAtNode(t);
              this.prodParam.enter(ct(!0, this.prodParam.hasYield));
              const s = [this.parseIdentifier()];
              return this.prodParam.exit(),
                this.hasPrecedingLineBreak() &&
                this.raise(this.state.pos, g.LineTerminatorBeforeArrow),
                this.expect(c.arrow),
                this.parseArrowExpression(e, s, !0),
                e;
            }
            parseDo() {
              this.expectPlugin("doExpressions");
              const t = this.startNode();
              this.next();
              const e = this.state.labels;
              return this.state.labels = [],
                t.body = this.parseBlock(),
                this.state.labels = e,
                this.finishNode(t, "DoExpression");
            }
            parseSuper() {
              const t = this.startNode();
              return this.next(),
                !this.match(c.parenL) || this.scope.allowDirectSuper ||
                  this.options.allowSuperOutsideMethod
                  ? this.scope.allowSuper ||
                    this.options.allowSuperOutsideMethod ||
                    this.raise(t.start, g.UnexpectedSuper)
                  : this.raise(t.start, g.SuperNotAllowed),
                this.match(c.parenL) || this.match(c.bracketL) ||
                this.match(c.dot) || this.raise(t.start, g.UnsupportedSuper),
                this.finishNode(t, "Super");
            }
            parseBooleanLiteral() {
              const t = this.startNode();
              return t.value = this.match(c._true),
                this.next(),
                this.finishNode(t, "BooleanLiteral");
            }
            parseMaybePrivateName(t) {
              if (this.match(c.hash)) {
                this.expectOnePlugin([
                  "classPrivateProperties",
                  "classPrivateMethods",
                ]), t || this.raise(this.state.pos, g.UnexpectedPrivateField);
                const e = this.startNode();
                return this.next(),
                  this.assertNoSpace(
                    "Unexpected space between # and identifier",
                  ),
                  e.id = this.parseIdentifier(!0),
                  this.finishNode(e, "PrivateName");
              }
              return this.parseIdentifier(!0);
            }
            parseFunctionOrFunctionSent() {
              const t = this.startNode();
              if (this.next(), this.prodParam.hasYield && this.match(c.dot)) {
                const e = this.createIdentifier(
                  this.startNodeAtNode(t),
                  "function",
                );
                return this.next(), this.parseMetaProperty(t, e, "sent");
              }
              return this.parseFunction(t);
            }
            parseMetaProperty(t, e, s) {
              t.meta = e,
                "function" === e.name && "sent" === s &&
                (this.isContextual(s)
                  ? this.expectPlugin("functionSent")
                  : this.hasPlugin("functionSent") || this.unexpected());
              const r = this.state.containsEsc;
              return t.property = this.parseIdentifier(!0),
                (t.property.name !== s || r) &&
                this.raise(
                  t.property.start,
                  g.UnsupportedMetaProperty,
                  e.name,
                  s,
                ),
                this.finishNode(t, "MetaProperty");
            }
            parseImportMetaProperty(t) {
              const e = this.createIdentifier(
                this.startNodeAtNode(t),
                "import",
              );
              return this.next(),
                this.isContextual("meta") &&
                (this.inModule ||
                  this.raiseWithData(e.start, {
                    code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED",
                  }, g.ImportMetaOutsideModule),
                  this.sawUnambiguousESM = !0),
                this.parseMetaProperty(t, e, "meta");
            }
            parseLiteral(t, e, s, r) {
              s = s || this.state.start, r = r || this.state.startLoc;
              const i = this.startNodeAt(s, r);
              return this.addExtra(i, "rawValue", t),
                this.addExtra(i, "raw", this.input.slice(s, this.state.end)),
                i.value = t,
                this.next(),
                this.finishNode(i, e);
            }
            parseParenAndDistinguishExpression(t) {
              const e = this.state.start, s = this.state.startLoc;
              let r;
              this.next(), this.expressionScope.enter(new It(1));
              const i = this.state.maybeInArrowParameters,
                n = this.state.inFSharpPipelineDirectBody;
              this.state.maybeInArrowParameters = !0,
                this.state.inFSharpPipelineDirectBody = !1;
              const a = this.state.start,
                o = this.state.startLoc,
                u = [],
                h = new wt(),
                p = { start: 0 };
              let l, d, D = !0;
              for (; !this.match(c.parenR);) {
                if (D)D = !1;
                else if (
                  this.expect(c.comma, p.start || null), this.match(c.parenR)
                ) {
                  d = this.state.start;
                  break;
                }
                if (this.match(c.ellipsis)) {
                  const t = this.state.start, e = this.state.startLoc;
                  l = this.state.start,
                    u.push(this.parseParenItem(this.parseRestBinding(), t, e)),
                    this.checkCommaAfterRest(41);
                  break;
                }
                u.push(this.parseMaybeAssignAllowIn(h, this.parseParenItem, p));
              }
              const m = this.state.lastTokEnd, f = this.state.lastTokEndLoc;
              this.expect(c.parenR),
                this.state.maybeInArrowParameters = i,
                this.state.inFSharpPipelineDirectBody = n;
              let y = this.startNodeAt(e, s);
              if (t && this.shouldParseArrow() && (y = this.parseArrow(y))) {
                this.expressionScope.validateAsPattern(),
                  this.expressionScope.exit();
                for (let t = 0; t < u.length; t++) {
                  const e = u[t];
                  e.extra && e.extra.parenthesized &&
                    this.unexpected(e.extra.parenStart);
                }
                return this.parseArrowExpression(y, u, !1), y;
              }
              if (
                this.expressionScope.exit(),
                  u.length || this.unexpected(this.state.lastTokStart),
                  d && this.unexpected(d),
                  l && this.unexpected(l),
                  this.checkExpressionErrors(h, !0),
                  p.start && this.unexpected(p.start),
                  this.toReferencedListDeep(u, !0),
                  u.length > 1
                    ? (r = this.startNodeAt(a, o),
                      r.expressions = u,
                      this.finishNodeAt(r, "SequenceExpression", m, f))
                    : r = u[0],
                  !this.options.createParenthesizedExpressions
              ) {
                return this.addExtra(r, "parenthesized", !0),
                  this.addExtra(r, "parenStart", e),
                  r;
              }
              const E = this.startNodeAt(e, s);
              return E.expression = r,
                this.finishNode(E, "ParenthesizedExpression"),
                E;
            }
            shouldParseArrow() {
              return !this.canInsertSemicolon();
            }
            parseArrow(t) {
              if (this.eat(c.arrow))return t;
            }
            parseParenItem(t, e, s) {
              return t;
            }
            parseNewOrNewTarget() {
              const t = this.startNode();
              if (this.next(), this.match(c.dot)) {
                const e = this.createIdentifier(this.startNodeAtNode(t), "new");
                this.next();
                const s = this.parseMetaProperty(t, e, "target");
                if (!this.scope.inNonArrowFunction && !this.scope.inClass) {
                  let t = g.UnexpectedNewTarget;
                  this.hasPlugin("classProperties") &&
                  (t += " or class properties"), this.raise(s.start, t);
                }
                return s;
              }
              return this.parseNew(t);
            }
            parseNew(t) {
              return t.callee = this.parseNoCallExpr(),
                "Import" === t.callee.type
                  ? this.raise(t.callee.start, g.ImportCallNotNewExpression)
                  : "OptionalMemberExpression" === t.callee.type ||
                      "OptionalCallExpression" === t.callee.type
                  ? this.raise(this.state.lastTokEnd, g.OptionalChainingNoNew)
                  : this.eat(c.questionDot) &&
                    this.raise(this.state.start, g.OptionalChainingNoNew),
                this.parseNewArguments(t),
                this.finishNode(t, "NewExpression");
            }
            parseNewArguments(t) {
              if (this.eat(c.parenL)) {
                const e = this.parseExprList(c.parenR);
                this.toReferencedList(e), t.arguments = e;
              } elset.arguments = [];
            }
            parseTemplateElement(t) {
              const e = this.startNode();
              return null === this.state.value &&
                (t ||
                  this.raise(
                    this.state.start + 1,
                    g.InvalidEscapeSequenceTemplate,
                  )),
                e.value = {
                  raw: this.input.slice(this.state.start, this.state.end)
                    .replace(/\r\n?/g, "\n"),
                  cooked: this.state.value,
                },
                this.next(),
                e.tail = this.match(c.backQuote),
                this.finishNode(e, "TemplateElement");
            }
            parseTemplate(t) {
              const e = this.startNode();
              this.next(), e.expressions = [];
              let s = this.parseTemplateElement(t);
              for (e.quasis = [s]; !s.tail;) {this.expect(c.dollarBraceL),
                  e.expressions.push(this.parseTemplateSubstitution()),
                  this.expect(c.braceR),
                  e.quasis.push(s = this.parseTemplateElement(t));}
              return this.next(), this.finishNode(e, "TemplateLiteral");
            }
            parseTemplateSubstitution() {
              return this.parseExpression();
            }
            parseObjectLike(t, e, s, r) {
              s && this.expectPlugin("recordAndTuple");
              const i = this.state.inFSharpPipelineDirectBody;
              this.state.inFSharpPipelineDirectBody = !1;
              const n = Object.create(null);
              let a = !0;
              const o = this.startNode();
              for (o.properties = [], this.next(); !this.match(t);) {
                if (a)a = !1;
                else if (this.expect(c.comma), this.match(t)) {
                  this.addExtra(o, "trailingComma", this.state.lastTokStart);
                  break;
                }
                const i = this.parsePropertyDefinition(e, r);
                e || this.checkProto(i, s, n, r),
                  s && "ObjectProperty" !== i.type &&
                  "SpreadElement" !== i.type &&
                  this.raise(i.start, g.InvalidRecordProperty),
                  i.shorthand && this.addExtra(i, "shorthand", !0),
                  o.properties.push(i);
              }
              this.state.exprAllowed = !1,
                this.next(),
                this.state.inFSharpPipelineDirectBody = i;
              let u = "ObjectExpression";
              return e
                ? u = "ObjectPattern"
                : s && (u = "RecordExpression"),
                this.finishNode(o, u);
            }
            maybeAsyncOrAccessorProp(t) {
              return !t.computed && "Identifier" === t.key.type &&
                (this.isLiteralPropertyName() || this.match(c.bracketL) ||
                  this.match(c.star));
            }
            parsePropertyDefinition(t, e) {
              let s = [];
              if (this.match(c.at)) {
                for (
                  this.hasPlugin("decorators") &&
                  this.raise(this.state.start, g.UnsupportedPropertyDecorator);
                  this.match(c.at);
                ) {
                  s.push(this.parseDecorator());
                }
              }
              const r = this.startNode();
              let i, n, a = !1, o = !1, u = !1;
              if (this.match(c.ellipsis)) {
                return s.length && this.unexpected(),
                  t
                    ? (this.next(),
                      r.argument = this.parseIdentifier(),
                      this.checkCommaAfterRest(125),
                      this.finishNode(r, "RestElement"))
                    : this.parseSpread();
              }
              s.length && (r.decorators = s, s = []),
                r.method = !1,
                (t || e) && (i = this.state.start, n = this.state.startLoc),
                t || (a = this.eat(c.star));
              const h = this.state.containsEsc,
                p = this.parsePropertyName(r, !1);
              if (!t && !a && !h && this.maybeAsyncOrAccessorProp(r)) {
                const t = p.name;
                "async" !== t || this.hasPrecedingLineBreak() ||
                (o = !0, a = this.eat(c.star), this.parsePropertyName(r, !1)),
                  "get" !== t && "set" !== t ||
                  (u = !0,
                    r.kind = t,
                    this.match(c.star) &&
                    (a = !0,
                      this.raise(this.state.pos, g.AccessorIsGenerator, t),
                      this.next()),
                    this.parsePropertyName(r, !1));
              }
              return this.parseObjPropValue(r, i, n, a, o, t, u, e), r;
            }
            getGetterSetterExpectedParamCount(t) {
              return "get" === t.kind ? 0 : 1;
            }
            getObjectOrClassMethodParams(t) {
              return t.params;
            }
            checkGetterSetterParams(t) {
              var e;
              const s = this.getGetterSetterExpectedParamCount(t),
                r = this.getObjectOrClassMethodParams(t),
                i = t.start;
              r.length !== s && ("get" === t.kind
                ? this.raise(i, g.BadGetterArity)
                : this.raise(i, g.BadSetterArity)),
                "set" === t.kind &&
                "RestElement" === (null == (e = r[r.length - 1])
                    ? void 0
                    : e.type) &&
                this.raise(i, g.BadSetterRestParameter);
            }
            parseObjectMethod(t, e, s, r, i) {
              return i
                ? (this.parseMethod(t, e, !1, !1, !1, "ObjectMethod"),
                  this.checkGetterSetterParams(t),
                  t)
                : s || e || this.match(c.parenL)
                ? (r && this.unexpected(),
                  t.kind = "method",
                  t.method = !0,
                  this.parseMethod(t, e, s, !1, !1, "ObjectMethod"))
                : void 0;
            }
            parseObjectProperty(t, e, s, r, i) {
              return t.shorthand = !1,
                this.eat(c.colon)
                  ? (t.value = r
                    ? this.parseMaybeDefault(
                      this.state.start,
                      this.state.startLoc,
                    )
                    : this.parseMaybeAssignAllowIn(i),
                    this.finishNode(t, "ObjectProperty"))
                  : t.computed || "Identifier" !== t.key.type
                  ? void 0
                  : (this.checkReservedWord(t.key.name, t.key.start, !0, !1),
                    r
                      ? t.value = this.parseMaybeDefault(e, s, t.key.__clone())
                      : this.match(c.eq) && i
                      ? (-1 === i.shorthandAssign &&
                        (i.shorthandAssign = this.state.start),
                        t.value = this.parseMaybeDefault(e, s, t.key.__clone()))
                      : t.value = t.key.__clone(),
                    t.shorthand = !0,
                    this.finishNode(t, "ObjectProperty"));
            }
            parseObjPropValue(t, e, s, r, i, n, a, o) {
              const u = this.parseObjectMethod(t, r, i, n, a) ||
                this.parseObjectProperty(t, e, s, n, o);
              return u || this.unexpected(), u;
            }
            parsePropertyName(t, e) {
              if (this.eat(c.bracketL)) {
                t.computed = !0,
                  t.key = this.parseMaybeAssignAllowIn(),
                  this.expect(c.bracketR);
              } else {
                const s = this.state.inPropertyName;
                this.state.inPropertyName = !0,
                  t.key =
                    this.match(c.num) || this.match(c.string) ||
                      this.match(c.bigint) || this.match(c.decimal)
                      ? this.parseExprAtom()
                      : this.parseMaybePrivateName(e),
                  "PrivateName" !== t.key.type && (t.computed = !1),
                  this.state.inPropertyName = s;
              }
              return t.key;
            }
            initFunction(t, e) {
              t.id = null, t.generator = !1, t.async = !!e;
            }
            parseMethod(t, e, s, r, i, n, a = !1) {
              this.initFunction(t, s), t.generator = !!e;
              const o = r;
              return this.scope.enter(
                18 | (a
                  ? 64
                  : 0) | (i
                    ? 32
                    : 0),
              ),
                this.prodParam.enter(ct(s, t.generator)),
                this.parseFunctionParams(t, o),
                this.parseFunctionBodyAndFinish(t, n, !0),
                this.prodParam.exit(),
                this.scope.exit(),
                t;
            }
            parseArrayLike(t, e, s, r) {
              s && this.expectPlugin("recordAndTuple");
              const i = this.state.inFSharpPipelineDirectBody;
              this.state.inFSharpPipelineDirectBody = !1;
              const n = this.startNode();
              return this.next(),
                n.elements = this.parseExprList(t, !s, r, n),
                this.state.inFSharpPipelineDirectBody = i,
                this.finishNode(n, s ? "TupleExpression" : "ArrayExpression");
            }
            parseArrowExpression(t, e, s, r) {
              this.scope.enter(6);
              let i = ct(s, !1);
              !this.match(c.bracketL) && this.prodParam.hasIn && (i |= 8),
                this.prodParam.enter(i),
                this.initFunction(t, s);
              const n = this.state.maybeInArrowParameters;
              return e &&
                (this.state.maybeInArrowParameters = !0,
                  this.setArrowFunctionParameters(t, e, r)),
                this.state.maybeInArrowParameters = !1,
                this.parseFunctionBody(t, !0),
                this.prodParam.exit(),
                this.scope.exit(),
                this.state.maybeInArrowParameters = n,
                this.finishNode(t, "ArrowFunctionExpression");
            }
            setArrowFunctionParameters(t, e, s) {
              t.params = this.toAssignableList(e, s);
            }
            parseFunctionBodyAndFinish(t, e, s = !1) {
              this.parseFunctionBody(t, !1, s), this.finishNode(t, e);
            }
            parseFunctionBody(t, e, s = !1) {
              const r = e && !this.match(c.braceL);
              if (this.expressionScope.enter(kt()), r) {
                t.body = this.parseMaybeAssign(),
                  this.checkParams(t, !1, e, !1);
              } else {
                const r = this.state.strict, i = this.state.labels;
                this.state.labels = [],
                  this.prodParam.enter(4 | this.prodParam.currentFlags()),
                  t.body = this.parseBlock(
                    !0,
                    !1,
                    ((i) => {
                      const n = !this.isSimpleParamList(t.params);
                      if (i && n) {
                        const e =
                          "method" !== t.kind && "constructor" !== t.kind ||
                            !t.key
                            ? t.start
                            : t.key.end;
                        this.raise(e, g.IllegalLanguageModeDirective);
                      }
                      const a = !r && this.state.strict;
                      this.checkParams(
                        t,
                        !(this.state.strict || e || s || n),
                        e,
                        a,
                      ),
                        this.state.strict && t.id &&
                        this.checkLVal(
                          t.id,
                          65,
                          void 0,
                          "function name",
                          void 0,
                          a,
                        );
                    }),
                  ),
                  this.prodParam.exit(),
                  this.expressionScope.exit(),
                  this.state.labels = i;
              }
            }
            isSimpleParamList(t) {
              for (let e = 0, s = t.length; e < s; e++) {
                if ("Identifier" !== t[e].type) {
                  return !1;
                }
              }
              return !0;
            }
            checkParams(t, e, s, r = !0) {
              const i = Object.create(null);
              for (let s = 0; s < t.params.length; s++) {
                this.checkLVal(
                  t.params[s],
                  5,
                  e ? null : i,
                  "function parameter list",
                  void 0,
                  r,
                );
              }
            }
            parseExprList(t, e, s, r) {
              const i = [];
              let n = !0;
              for (; !this.eat(t);) {
                if (n) { 
                  n = !1;
                } else if (this.expect(c.comma), this.match(t)) {
                  r &&
                  this.addExtra(r, "trailingComma", this.state.lastTokStart),
                    this.next();
                  break;
                }
                i.push(this.parseExprListItem(e, s));
              }
              return i;
            }
            parseExprListItem(t, e, s, r) {
              let i;
              if (
                this.match(c.comma)
              ) { 
                t || this.raise(this.state.pos, g.UnexpectedToken, ","),
                  i = null;
              } else if (this.match(c.ellipsis)) {
                const t = this.state.start, r = this.state.startLoc;
                i = this.parseParenItem(this.parseSpread(e, s), t, r);
              } else if (this.match(c.question)) {
                this.expectPlugin("partialApplication"),
                  r ||
                  this.raise(this.state.start, g.UnexpectedArgumentPlaceholder);
                const t = this.startNode();
                this.next(), i = this.finishNode(t, "ArgumentPlaceholder");
              } elsei = this.parseMaybeAssignAllowIn(e, this.parseParenItem, s);
              return i;
            }
            parseIdentifier(t) {
              const e = this.startNode(),
                s = this.parseIdentifierName(e.start, t);
              return this.createIdentifier(e, s);
            }
            createIdentifier(t, e) {
              return t.name = e,
                t.loc.identifierName = e,
                this.finishNode(t, "Identifier");
            }
            parseIdentifierName(t, e) {
              let s;
              const { start: r, type: i } = this.state;
              if (i === c.name)s = this.state.value;
              else {
                if (!i.keyword) throw this.unexpected();
                {
                  s = i.keyword;
                  const t = this.curContext();
                  i !== c._class && i !== c._function ||
                    t !== T.functionStatement && t !== T.functionExpression ||
                    this.state.context.pop();
                }
              }
              return e
                ? this.state.type = c.name
                : this.checkReservedWord(s, r, !!i.keyword, !1),
                this.next(),
                s;
            }
            checkReservedWord(t, e, s, r) {
              if (this.prodParam.hasYield && "yield" === t) {
                return void this.raise(e, g.YieldBindingIdentifier);
              }
              if ("await" === t) {
                if (this.prodParam.hasAwait) {
                  return void this.raise(e, g.AwaitBindingIdentifier);
                }
                this.expressionScope.recordAsyncArrowParametersError(
                  e,
                  g.AwaitBindingIdentifier,
                );
              }
              if (
                this.scope.inClass && !this.scope.inNonArrowFunction &&
                "arguments" === t
              ) {
                return void this.raise(e, g.ArgumentsInClass);
              }
              if (s && W(t)) {
                return void this.raise(e, g.UnexpectedKeyword, t);
              }
              (this.state.strict
                ? r ? H : V
                : q)(t, this.inModule) &&
                (this.prodParam.hasAwait || "await" !== t
                  ? this.raise(e, g.UnexpectedReservedWord, t)
                  : this.raise(
                    e,
                    this.hasPlugin("topLevelAwait")
                      ? g.AwaitNotInAsyncContext
                      : g.AwaitNotInAsyncFunction,
                  ));
            }
            isAwaitAllowed() {
              return this.scope.inFunction ? this.prodParam.hasAwait
              : !!this.options.allowAwaitOutsideFunction ||
                !!this.hasPlugin("topLevelAwait") &&
                  (this.inModule && this.prodParam.hasAwait);
            }
            parseAwait() {
              const t = this.startNode();
              return this.next(),
                this.expressionScope.recordParameterInitializerError(
                  t.start,
                  g.AwaitExpressionFormalParameter,
                ),
                this.eat(c.star) && this.raise(t.start, g.ObsoleteAwaitStar),
                this.scope.inFunction ||
                this.options.allowAwaitOutsideFunction ||
                (this.hasPrecedingLineBreak() || this.match(c.plusMin) ||
                    this.match(c.parenL) || this.match(c.bracketL) ||
                    this.match(c.backQuote) || this.match(c.regexp) ||
                    this.match(c.slash) ||
                    this.hasPlugin("v8intrinsic") && this.match(c.modulo)
                  ? this.ambiguousScriptDifferentAst = !0
                  : this.sawUnambiguousESM = !0),
                this.state.soloAwait || (t.argument = this.parseMaybeUnary()),
                this.finishNode(t, "AwaitExpression");
            }
            parseYield() {
              const t = this.startNode();
              return this.expressionScope.recordParameterInitializerError(
                t.start,
                g.YieldInParameter,
              ),
                this.next(),
                this.match(c.semi) ||
                  !this.match(c.star) && !this.state.type.startsExpr ||
                  this.hasPrecedingLineBreak()
                  ? (t.delegate = !1, t.argument = null)
                  : (t.delegate = this.eat(c.star),
                    t.argument = this.parseMaybeAssign()),
                this.finishNode(t, "YieldExpression");
            }
            checkPipelineAtInfixOperator(t, e) {
              "smart" ===
                  this.getPluginOption("pipelineOperator", "proposal") &&
                "SequenceExpression" === t.type &&
                this.raise(e, g.PipelineHeadSequenceExpression);
            }
            parseSmartPipelineBody(t, e, s) {
              return this.checkSmartPipelineBodyEarlyErrors(t, e),
                this.parseSmartPipelineBodyInStyle(t, e, s);
            }
            checkSmartPipelineBodyEarlyErrors(t, e) {
              if (this.match(c.arrow)) {
                throw this.raise(this.state.start, g.PipelineBodyNoArrow);
              }
              "SequenceExpression" === t.type &&
                this.raise(e, g.PipelineBodySequenceExpression);
            }
            parseSmartPipelineBodyInStyle(t, e, s) {
              const r = this.startNodeAt(e, s), i = this.isSimpleReference(t);
              return i
                ? r.callee = t
                : (this.topicReferenceWasUsedInCurrentTopicContext() ||
                  this.raise(e, g.PipelineTopicUnused),
                  r.expression = t),
                this.finishNode(
                  r,
                  i ? "PipelineBareFunction" : "PipelineTopicExpression",
                );
            }
            isSimpleReference(t) {
              switch (t.type) {
                case "MemberExpression":
                  return !t.computed && this.isSimpleReference(t.object);
                case "Identifier":
                  return !0;
                default:
                  return !1;
              }
            }
            withTopicPermittingContext(t) {
              const e = this.state.topicContext;
              this.state.topicContext = {
                maxNumOfResolvableTopics: 1,
                maxTopicIndex: null,
              };
              try {
                return t();
              } finally {
                this.state.topicContext = e;
              }
            }
            withTopicForbiddingContext(t) {
              const e = this.state.topicContext;
              this.state.topicContext = {
                maxNumOfResolvableTopics: 0,
                maxTopicIndex: null,
              };
              try {
                return t();
              } finally {
                this.state.topicContext = e;
              }
            }
            withSoloAwaitPermittingContext(t) {
              const e = this.state.soloAwait;
              this.state.soloAwait = !0;
              try {
                return t();
              } finally {
                this.state.soloAwait = e;
              }
            }
            allowInAnd(t) {
              const e = this.prodParam.currentFlags();
              if (8 & ~e) {
                this.prodParam.enter(8 | e);
                try {
                  return t();
                } finally {
                  this.prodParam.exit();
                }
              }
              return t();
            }
            disallowInAnd(t) {
              const e = this.prodParam.currentFlags();
              if (8 & e) {
                this.prodParam.enter(-9 & e);
                try {
                  return t();
                } finally {
                  this.prodParam.exit();
                }
              }
              return t();
            }
            registerTopicReference() {
              this.state.topicContext.maxTopicIndex = 0;
            }
            primaryTopicReferenceIsAllowedInCurrentTopicContext() {
              return this.state.topicContext.maxNumOfResolvableTopics >= 1;
            }
            topicReferenceWasUsedInCurrentTopicContext() {
              return null != this.state.topicContext.maxTopicIndex &&
                this.state.topicContext.maxTopicIndex >= 0;
            }
            parseFSharpPipelineBody(t) {
              const e = this.state.start, s = this.state.startLoc;
              this.state.potentialArrowAt = this.state.start;
              const r = this.state.inFSharpPipelineDirectBody;
              this.state.inFSharpPipelineDirectBody = !0;
              const i = this.parseExprOp(this.parseMaybeUnary(), e, s, t);
              return this.state.inFSharpPipelineDirectBody = r, i;
            }
          } {
          parseTopLevel(t, e) {
            if (
              e.sourceType = this.options.sourceType,
                e.interpreter = this.parseInterpreterDirective(),
                this.parseBlockBody(e, !0, !0, c.eof),
                this.inModule && !this.options.allowUndeclaredExports &&
                this.scope.undefinedExports.size > 0
            ) {
              for (
                let t = 0, e = Array.from(this.scope.undefinedExports);
                t < e.length;
                t++
              ) {
                const [s] = e[t], r = this.scope.undefinedExports.get(s);
                this.raise(r, g.ModuleExportUndefined, s);
              }
            }
            return t.program = this.finishNode(e, "Program"),
              t.comments = this.state.comments,
              this.options.tokens && (t.tokens = this.tokens),
              this.finishNode(t, "File");
          }
          stmtToDirective(t) {
            const e = t.expression,
              s = this.startNodeAt(e.start, e.loc.start),
              r = this.startNodeAt(t.start, t.loc.start),
              i = this.input.slice(e.start, e.end),
              n = s.value = i.slice(1, -1);
            return this.addExtra(s, "raw", i),
              this.addExtra(s, "rawValue", n),
              r.value = this.finishNodeAt(
                s,
                "DirectiveLiteral",
                e.end,
                e.loc.end,
              ),
              this.finishNodeAt(r, "Directive", t.end, t.loc.end);
          }
          parseInterpreterDirective() {
            if (!this.match(c.interpreterDirective))return null;
            const t = this.startNode();
            return t.value = this.state.value,
              this.next(),
              this.finishNode(t, "InterpreterDirective");
          }
          isLet(t) {
            if (!this.isContextual("let")) return !1;
            const e = this.nextTokenStart(), s = this.input.charCodeAt(e);
            if (91 === s) return !0;
            if (t) return !1;
            if (123 === s) return !0;
            if (L(s)) {
              let t = e + 1;
              for (; O(this.input.charCodeAt(t));) ++t;
              const s = this.input.slice(e, t);
              if (!G.test(s)) return !0;
            }
            return !1;
          }
          parseStatement(t, e) {
            return this.match(c.at) && this.parseDecorators(!0),
              this.parseStatementContent(t, e);
          }
          parseStatementContent(t, e) {
            let s = this.state.type;
            const r = this.startNode();
            let i;
            switch (this.isLet(t) && (s = c._var, i = "let"), s) {
              case c._break:
              case c._continue:
                return this.parseBreakContinueStatement(r, s.keyword);
              case c._debugger:
                return this.parseDebuggerStatement(r);
              case c._do:
                return this.parseDoStatement(r);
              case c._for:
                return this.parseForStatement(r);
              case c._function:
                if (46 === this.lookaheadCharCode()) break;
                return t && (this.state.strict
                  ? this.raise(this.state.start, g.StrictFunction)
                  : "if" !== t && "label" !== t &&
                    this.raise(this.state.start, g.SloppyFunction)),
                  this.parseFunctionStatement(r, !1, !t);
              case c._class:
                return t && this.unexpected(), this.parseClass(r, !0);
              case c._if:
                return this.parseIfStatement(r);
              case c._return:
                return this.parseReturnStatement(r);
              case c._switch:
                return this.parseSwitchStatement(r);
              case c._throw:
                return this.parseThrowStatement(r);
              case c._try:
                return this.parseTryStatement(r);
              case c._const:
              case c._var:
                return i = i || this.state.value,
                  t && "var" !== i &&
                  this.raise(this.state.start, g.UnexpectedLexicalDeclaration),
                  this.parseVarStatement(r, i);
              case c._while:
                return this.parseWhileStatement(r);
              case c._with:
                return this.parseWithStatement(r);
              case c.braceL:
                return this.parseBlock();
              case c.semi:
                return this.parseEmptyStatement(r);
              case c._import: {
                const t = this.lookaheadCharCode();
                if (40 === t || 46 === t) break;
              }
              case c._export: {
                let t;
                return this.options.allowImportExportEverywhere || e ||
                  this.raise(this.state.start, g.UnexpectedImportExport),
                  this.next(),
                  s === c._import
                    ? (t = this.parseImport(r),
                      "ImportDeclaration" !== t.type ||
                      t.importKind && "value" !== t.importKind ||
                      (this.sawUnambiguousESM = !0))
                    : (t = this.parseExport(r),
                      ("ExportNamedDeclaration" !== t.type ||
                          t.exportKind && "value" !== t.exportKind) &&
                        ("ExportAllDeclaration" !== t.type ||
                          t.exportKind && "value" !== t.exportKind) &&
                        "ExportDefaultDeclaration" !== t.type ||
                      (this.sawUnambiguousESM = !0)),
                  this.assertModuleNodeAllowed(r),
                  t;
              }
              default:
                if (this.isAsyncFunction()) {
                  return t &&
                    this.raise(
                      this.state.start,
                      g.AsyncFunctionInSingleStatementContext,
                    ),
                    this.next(),
                    this.parseFunctionStatement(r, !0, !t);
                }
            }
            const n = this.state.value, a = this.parseExpression();
            return s === c.name && "Identifier" === a.type && this.eat(c.colon)
              ? this.parseLabeledStatement(r, n, a, t)
              : this.parseExpressionStatement(r, a);
          }
          assertModuleNodeAllowed(t) {
            this.options.allowImportExportEverywhere || this.inModule ||
              this.raiseWithData(t.start, {
                code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED",
              }, g.ImportOutsideModule);
          }
          takeDecorators(t) {
            const e =
              this.state.decoratorStack[this.state.decoratorStack.length - 1];
            e.length &&
              (t.decorators = e,
                this.resetStartLocationFromNode(t, e[0]),
                this.state
                  .decoratorStack[this.state.decoratorStack.length - 1] = []);
          }
          canHaveLeadingDecorator() {
            return this.match(c._class);
          }
          parseDecorators(t) {
            const e =
              this.state.decoratorStack[this.state.decoratorStack.length - 1];
            for (; this.match(c.at);) {
              const t = this.parseDecorator();
              e.push(t);
            }
            if (this.match(c._export)) {
              t || this.unexpected(),
                this.hasPlugin("decorators") &&
                !this.getPluginOption("decorators", "decoratorsBeforeExport") &&
                this.raise(this.state.start, g.DecoratorExportClass);
            } else if (!this.canHaveLeadingDecorator()) {throw this.raise(
                this.state.start,
                g.UnexpectedLeadingDecorator,
              );}
          }
          parseDecorator() {
            this.expectOnePlugin(["decorators-legacy", "decorators"]);
            const t = this.startNode();
            if (this.next(), this.hasPlugin("decorators")) {
              this.state.decoratorStack.push([]);
              const e = this.state.start, s = this.state.startLoc;
              let r;
              if (this.eat(c.parenL)) {
                r = this.parseExpression(), this.expect(c.parenR);
              } else {
                for (r = this.parseIdentifier(!1); this.eat(c.dot);) {
                  const t = this.startNodeAt(e, s);
                  t.object = r,
                    t.property = this.parseIdentifier(!0),
                    t.computed = !1,
                    r = this.finishNode(t, "MemberExpression");
                }
              }
              t.expression = this.parseMaybeDecoratorArguments(r),
                this.state.decoratorStack.pop();
            } elset.expression = this.parseExprSubscripts();
            return this.finishNode(t, "Decorator");
          }
          parseMaybeDecoratorArguments(t) {
            if (this.eat(c.parenL)) {
              const e = this.startNodeAtNode(t);
              return e.callee = t,
                e.arguments = this.parseCallExpressionArguments(c.parenR, !1),
                this.toReferencedList(e.arguments),
                this.finishNode(e, "CallExpression");
            }
            return t;
          }
          parseBreakContinueStatement(t, e) {
            const s = "break" === e;
            return this.next(),
              this.isLineTerminator()
                ? t.label = null
                : (t.label = this.parseIdentifier(), this.semicolon()),
              this.verifyBreakContinue(t, e),
              this.finishNode(t, s ? "BreakStatement" : "ContinueStatement");
          }
          verifyBreakContinue(t, e) {
            const s = "break" === e;
            let r;
            for (r = 0; r < this.state.labels.length; ++r) {
              const e = this.state.labels[r];
              if (null == t.label || e.name === t.label.name) {
                if (null != e.kind && (s || "loop" === e.kind)) break;
                if (t.label && s) break;
              }
            }
            r === this.state.labels.length &&
              this.raise(t.start, g.IllegalBreakContinue, e);
          }
          parseDebuggerStatement(t) {
            return this.next(),
              this.semicolon(),
              this.finishNode(t, "DebuggerStatement");
          }
          parseHeaderExpression() {
            this.expect(c.parenL);
            const t = this.parseExpression();
            return this.expect(c.parenR), t;
          }
          parseDoStatement(t) {
            return this.next(),
              this.state.labels.push(Lt),
              t.body = this.withTopicForbiddingContext(
                (() => this.parseStatement("do")),
              ),
              this.state.labels.pop(),
              this.expect(c._while),
              t.test = this.parseHeaderExpression(),
              this.eat(c.semi),
              this.finishNode(t, "DoWhileStatement");
          }
          parseForStatement(t) {
            this.next(), this.state.labels.push(Lt);
            let e = -1;
            if (
              this.isAwaitAllowed() && this.eatContextual("await") &&
              (e = this.state.lastTokStart),
                this.scope.enter(0),
                this.expect(c.parenL),
                this.match(c.semi)
            ) {
              return e > -1 && this.unexpected(e), this.parseFor(t, null);
            }
            const s = this.isLet();
            if (this.match(c._var) || this.match(c._const) || s) {
              const r = this.startNode(), i = s ? "let" : this.state.value;
              return this.next(),
                this.parseVar(r, !0, i),
                this.finishNode(r, "VariableDeclaration"),
                (this.match(c._in) || this.isContextual("of")) &&
                  1 === r.declarations.length
                  ? this.parseForIn(t, r, e)
                  : (e > -1 && this.unexpected(e), this.parseFor(t, r));
            }
            const r = new wt(), i = this.parseExpression(!0, r);
            if (this.match(c._in) || this.isContextual("of")) {
              this.toAssignable(i);
              const s = this.isContextual("of")
                ? "for-of statement"
                : "for-in statement";
              return this.checkLVal(i, void 0, void 0, s),
                this.parseForIn(t, i, e);
            }
            return this.checkExpressionErrors(r, !0),
              e > -1 && this.unexpected(e),
              this.parseFor(t, i);
          }
          parseFunctionStatement(t, e, s) {
            return this.next(), this.parseFunction(t, 1 | (s ? 0 : 2), e);
          }
          parseIfStatement(t) {
            return this.next(),
              t.test = this.parseHeaderExpression(),
              t.consequent = this.parseStatement("if"),
              t.alternate = this.eat(c._else)
                ? this.parseStatement("if")
                : null,
              this.finishNode(t, "IfStatement");
          }
          parseReturnStatement(t) {
            return this.prodParam.hasReturn ||
              this.options.allowReturnOutsideFunction ||
              this.raise(this.state.start, g.IllegalReturn),
              this.next(),
              this.isLineTerminator()
                ? t.argument = null
                : (t.argument = this.parseExpression(), this.semicolon()),
              this.finishNode(t, "ReturnStatement");
          }
          parseSwitchStatement(t) {
            this.next(), t.discriminant = this.parseHeaderExpression();
            const e = t.cases = [];
            let s, r;
            for (
              this.expect(c.braceL),
                this.state.labels.push(Ot),
                this.scope.enter(0);
              !this.match(c.braceR);
            ) {
              if (this.match(c._case) || this.match(c._default)) {
                const t = this.match(c._case);
                s && this.finishNode(s, "SwitchCase"),
                  e.push(s = this.startNode()),
                  s.consequent = [],
                  this.next(),
                  t ? s.test = this.parseExpression()
                  : (r &&
                    this.raise(
                      this.state.lastTokStart,
                      g.MultipleDefaultsInSwitch,
                    ),
                    r = !0,
                    s.test = null),
                  this.expect(c.colon);
              } else {
                s
                  ? s.consequent.push(this.parseStatement(null))
                  : this.unexpected();
              }
            }
            return this.scope.exit(),
              s && this.finishNode(s, "SwitchCase"),
              this.next(),
              this.state.labels.pop(),
              this.finishNode(t, "SwitchStatement");
          }
          parseThrowStatement(t) {
            return this.next(),
              this.hasPrecedingLineBreak() &&
              this.raise(this.state.lastTokEnd, g.NewlineAfterThrow),
              t.argument = this.parseExpression(),
              this.semicolon(),
              this.finishNode(t, "ThrowStatement");
          }
          parseCatchClauseParam() {
            const t = this.parseBindingAtom(), e = "Identifier" === t.type;
            return this.scope.enter(e ? 8 : 0),
              this.checkLVal(t, 9, null, "catch clause"),
              t;
          }
          parseTryStatement(t) {
            if (
              this.next(),
                t.block = this.parseBlock(),
                t.handler = null,
                this.match(c._catch)
            ) {
              const e = this.startNode();
              this.next(),
                this.match(c.parenL)
                  ? (this.expect(c.parenL),
                    e.param = this.parseCatchClauseParam(),
                    this.expect(c.parenR))
                  : (e.param = null, this.scope.enter(0)),
                e.body = this.withTopicForbiddingContext(
                  (() => this.parseBlock(!1, !1)),
                ),
                this.scope.exit(),
                t.handler = this.finishNode(e, "CatchClause");
            }
            return t.finalizer = this.eat(c._finally)
              ? this.parseBlock()
              : null,
              t.handler || t.finalizer ||
              this.raise(t.start, g.NoCatchOrFinally),
              this.finishNode(t, "TryStatement");
          }
          parseVarStatement(t, e) {
            return this.next(),
              this.parseVar(t, !1, e),
              this.semicolon(),
              this.finishNode(t, "VariableDeclaration");
          }
          parseWhileStatement(t) {
            return this.next(),
              t.test = this.parseHeaderExpression(),
              this.state.labels.push(Lt),
              t.body = this.withTopicForbiddingContext(
                (() => this.parseStatement("while")),
              ),
              this.state.labels.pop(),
              this.finishNode(t, "WhileStatement");
          }
          parseWithStatement(t) {
            return this.state.strict &&
              this.raise(this.state.start, g.StrictWith),
              this.next(),
              t.object = this.parseHeaderExpression(),
              t.body = this.withTopicForbiddingContext(
                (() => this.parseStatement("with")),
              ),
              this.finishNode(t, "WithStatement");
          }
          parseEmptyStatement(t) {
            return this.next(), this.finishNode(t, "EmptyStatement");
          }
          parseLabeledStatement(t, e, s, r) {
            for (
              let t = 0, r = this.state.labels; t < r.length; t++
            ) { 
              r[t].name === e && this.raise(s.start, g.LabelRedeclaration, e);
            }
            const i = this.state.type.isLoop ? "loop" : this.match(c._switch)
              ? "switch"
              : null;
            for (let e = this.state.labels.length - 1; e >= 0; e--) {
              const s = this.state.labels[e];
              if (s.statementStart !== t.start) break;
              s.statementStart = this.state.start, s.kind = i;
            }
            return this.state.labels.push({
              name: e,
              kind: i,
              statementStart: this.state.start,
            }),
              t.body = this.parseStatement(
                r
                  ? -1 === r.indexOf("label") ? r + "label" : r
                  : "label",
              ),
              this.state.labels.pop(),
              t.label = s,
              this.finishNode(t, "LabeledStatement");
          }
          parseExpressionStatement(t, e) {
            return t.expression = e,
              this.semicolon(),
              this.finishNode(t, "ExpressionStatement");
          }
          parseBlock(t = !1, e = !0, s) {
            const r = this.startNode();
            return this.expect(c.braceL),
              e && this.scope.enter(0),
              this.parseBlockBody(r, t, !1, c.braceR, s),
              e && this.scope.exit(),
              this.finishNode(r, "BlockStatement");
          }
          isValidDirective(t) {
            return "ExpressionStatement" === t.type &&
              "StringLiteral" === t.expression.type &&
              !t.expression.extra.parenthesized;
          }
          parseBlockBody(t, e, s, r, i) {
            const n = t.body = [], a = t.directives = [];
            this.parseBlockOrModuleBlockBody(n, e ? a : void 0, s, r, i);
          }
          parseBlockOrModuleBlockBody(t, e, s, r, i) {
            const n = [], a = this.state.strict;
            let o = !1, u = !1;
            for (; !this.match(r);) {
              !u && this.state.octalPositions.length &&
                n.push(...this.state.octalPositions);
              const r = this.parseStatement(null, s);
              if (e && !u && this.isValidDirective(r)) {
                const t = this.stmtToDirective(r);
                e.push(t),
                  o || "use strict" !== t.value.value ||
                  (o = !0, this.setStrict(!0));
              } else u = !0, t.push(r);
            }
            if (this.state.strict && n.length) {
              for (let t = 0; t < n.length; t++) {
                const e = n[t];
                this.raise(e, g.StrictOctalLiteral);
              }
            }
            i && i.call(this, o), a || this.setStrict(!1), this.next();
          }
          parseFor(t, e) {
            return t.init = e,
              this.expect(c.semi),
              t.test = this.match(c.semi) ? null : this.parseExpression(),
              this.expect(c.semi),
              t.update = this.match(c.parenR) ? null : this.parseExpression(),
              this.expect(c.parenR),
              t.body = this.withTopicForbiddingContext(
                (() => this.parseStatement("for")),
              ),
              this.scope.exit(),
              this.state.labels.pop(),
              this.finishNode(t, "ForStatement");
          }
          parseForIn(t, e, s) {
            const r = this.match(c._in);
            return this.next(),
              r ? s > -1 && this.unexpected(s) : t.await = s > -1,
              "VariableDeclaration" !== e.type ||
                null == e.declarations[0].init ||
                r && !this.state.strict && "var" === e.kind &&
                  "Identifier" === e.declarations[0].id.type
                ? "AssignmentPattern" === e.type &&
                  this.raise(e.start, g.InvalidLhs, "for-loop")
                : this.raise(
                  e.start,
                  g.ForInOfLoopInitializer,
                  r ? "for-in" : "for-of",
                ),
              t.left = e,
              t.right = r ? this.parseExpression()
              : this.parseMaybeAssignAllowIn(),
              this.expect(c.parenR),
              t.body = this.withTopicForbiddingContext(
                (() => this.parseStatement("for")),
              ),
              this.scope.exit(),
              this.state.labels.pop(),
              this.finishNode(t, r ? "ForInStatement" : "ForOfStatement");
          }
          parseVar(t, e, s) {
            const r = t.declarations = [], i = this.hasPlugin("typescript");
            for (t.kind = s;;) {
              const t = this.startNode();
              if (
                this.parseVarId(t, s),
                  this.eat(c.eq)
                    ? t.init = e
                      ? this.parseMaybeAssignDisallowIn()
                      : this.parseMaybeAssignAllowIn()
                    : ("const" !== s || this.match(c._in) ||
                        this.isContextual("of")
                      ? "Identifier" === t.id.type ||
                        e && (this.match(c._in) || this.isContextual("of")) ||
                        this.raise(
                          this.state.lastTokEnd,
                          g.DeclarationMissingInitializer,
                          "Complex binding patterns",
                        )
                      : i ||
                        this.raise(
                          this.state.lastTokEnd,
                          g.DeclarationMissingInitializer,
                          "Const declarations",
                        ),
                      t.init = null),
                  r.push(this.finishNode(t, "VariableDeclarator")),
                  !this.eat(c.comma)
              ) {
                break;
              }
            }
            return t;
          }
          parseVarId(t, e) {
            t.id = this.parseBindingAtom(),
              this.checkLVal(
                t.id,
                "var" === e ? 5 : 9,
                void 0,
                "variable declaration",
                "var" !== e,
              );
          }
          parseFunction(t, e = 0, s = !1) {
            const r = 1 & e, i = 2 & e, n = !(!r || 4 & e);
            this.initFunction(t, s),
              this.match(c.star) && i &&
              this.raise(this.state.start, g.GeneratorInSingleStatementContext),
              t.generator = this.eat(c.star),
              r && (t.id = this.parseFunctionId(n));
            const a = this.state.maybeInArrowParameters;
            return this.state.maybeInArrowParameters = !1,
              this.scope.enter(2),
              this.prodParam.enter(ct(s, t.generator)),
              r || (t.id = this.parseFunctionId()),
              this.parseFunctionParams(t, !1),
              this.withTopicForbiddingContext(
                (() => {
                  this.parseFunctionBodyAndFinish(
                    t,
                    r ? "FunctionDeclaration" : "FunctionExpression",
                  );
                }),
              ),
              this.prodParam.exit(),
              this.scope.exit(),
              r && !i && this.registerFunctionStatementId(t),
              this.state.maybeInArrowParameters = a,
              t;
          }
          parseFunctionId(t) {
            return t || this.match(c.name) ? this.parseIdentifier() : null;
          }
          parseFunctionParams(t, e) {
            this.expect(c.parenL),
              this.expressionScope.enter(new Nt(3)),
              t.params = this.parseBindingList(c.parenR, 41, !1, e),
              this.expressionScope.exit();
          }
          registerFunctionStatementId(t) {
            t.id &&
              this.scope.declareName(
                t.id.name,
                this.state.strict || t.generator || t.async
                  ? this.scope.treatFunctionsAsVar ? 5 : 9
                  : 17,
                t.id.start,
              );
          }
          parseClass(t, e, s) {
            this.next(), this.takeDecorators(t);
            const r = this.state.strict;
            return this.state.strict = !0,
              this.parseClassId(t, e, s),
              this.parseClassSuper(t),
              t.body = this.parseClassBody(!!t.superClass, r),
              this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression");
          }
          isClassProperty() {
            return this.match(c.eq) || this.match(c.semi) ||
              this.match(c.braceR);
          }
          isClassMethod() {
            return this.match(c.parenL);
          }
          isNonstaticConstructor(t) {
            return !(t.computed || t.static ||
              "constructor" !== t.key.name && "constructor" !== t.key.value);
          }
          parseClassBody(t, e) {
            this.classScope.enter();
            const s = {
              constructorAllowsSuper: t,
              hadConstructor: !1,
              hadStaticBlock: !1,
            };
            let r = [];
            const i = this.startNode();
            if (
              i.body = [],
                this.expect(c.braceL),
                this.withTopicForbiddingContext(
                  (() => {
                    for (; !this.match(c.braceR);) {
                      if (this.eat(c.semi)) {
                        if (r.length > 0) {
                          throw this.raise(
                            this.state.lastTokEnd,
                            g.DecoratorSemicolon,
                          );
                        }
                        continue;
                      }
                      if (this.match(c.at)) {
                        r.push(this.parseDecorator());
                        continue;
                      }
                      const t = this.startNode();
                      r.length &&
                      (t.decorators = r,
                        this.resetStartLocationFromNode(t, r[0]),
                        r = []),
                        this.parseClassMember(i, t, s),
                        "constructor" === t.kind && t.decorators &&
                        t.decorators.length > 0 &&
                        this.raise(t.start, g.DecoratorConstructor);
                    }
                  }),
                ),
                this.state.strict = e,
                this.next(),
                r.length
            ) {
              throw this.raise(this.state.start, g.TrailingDecorator);
            }
            return this.classScope.exit(), this.finishNode(i, "ClassBody");
          }
          parseClassMemberFromModifier(t, e) {
            const s = this.parseIdentifier(!0);
            if (this.isClassMethod()) {
              const r = e;
              return r.kind = "method",
                r.computed = !1,
                r.key = s,
                r.static = !1,
                this.pushClassMethod(t, r, !1, !1, !1, !1),
                !0;
            }
            if (this.isClassProperty()) {
              const r = e;
              return r.computed = !1,
                r.key = s,
                r.static = !1,
                t.body.push(this.parseClassProperty(r)),
                !0;
            }
            return !1;
          }
          parseClassMember(t, e, s) {
            const r = this.isContextual("static");
            if (r) {
              if (this.parseClassMemberFromModifier(t, e)) return;
              if (this.eat(c.braceL)) {
                return void this.parseClassStaticBlock(t, e, s);
              }
            }
            this.parseClassMemberWithIsStatic(t, e, s, r);
          }
          parseClassMemberWithIsStatic(t, e, s, r) {
            const i = e, n = e, a = e, o = e, u = i, h = i;
            if (e.static = r, this.eat(c.star)) {
              return u.kind = "method",
                this.parseClassElementName(u),
                "PrivateName" === u.key.type
                  ? void this.pushClassPrivateMethod(t, n, !0, !1)
                  : (this.isNonstaticConstructor(i) &&
                    this.raise(i.key.start, g.ConstructorIsGenerator),
                    void this.pushClassMethod(t, i, !0, !1, !1, !1));
            }
            const p = this.state.containsEsc,
              l = this.parseClassElementName(e),
              d = "PrivateName" === l.type,
              D = "Identifier" === l.type,
              m = this.state.start;
            if (this.parsePostMemberNameModifiers(h), this.isClassMethod()) {
              if (u.kind = "method", d) {
                return void this.pushClassPrivateMethod(t, n, !1, !1);
              }
              const e = this.isNonstaticConstructor(i);
              let r = !1;
              e &&
              (i.kind = "constructor",
                s.hadConstructor && !this.hasPlugin("typescript") &&
                this.raise(l.start, g.DuplicateConstructor),
                s.hadConstructor = !0,
                r = s.constructorAllowsSuper),
                this.pushClassMethod(t, i, !1, !1, e, r);
            } else if (this.isClassProperty()) {
              d
                ? this.pushClassPrivateProperty(t, o)
                : this.pushClassProperty(t, a);
            } else if (
              !D || "async" !== l.name || p || this.isLineTerminator()
            ) {
              !D || "get" !== l.name && "set" !== l.name || p ||
                this.match(c.star) && this.isLineTerminator()
                ? this.isLineTerminator()
                  ? d ? this.pushClassPrivateProperty(t, o)
                  : this.pushClassProperty(t, a) : this.unexpected()
                : (u.kind = l.name,
                  this.parseClassElementName(i),
                  "PrivateName" === u.key.type
                    ? this.pushClassPrivateMethod(t, n, !1, !1)
                    : (this.isNonstaticConstructor(i) &&
                      this.raise(i.key.start, g.ConstructorIsAccessor),
                      this.pushClassMethod(t, i, !1, !1, !1, !1)),
                  this.checkGetterSetterParams(i));
            } else {
              const e = this.eat(c.star);
              h.optional && this.unexpected(m),
                u.kind = "method",
                this.parseClassElementName(u),
                this.parsePostMemberNameModifiers(h),
                "PrivateName" === u.key.type
                  ? this.pushClassPrivateMethod(t, n, e, !0)
                  : (this.isNonstaticConstructor(i) &&
                    this.raise(i.key.start, g.ConstructorIsAsync),
                    this.pushClassMethod(t, i, e, !0, !1, !1));
            }
          }
          parseClassElementName(t) {
            const e = this.parsePropertyName(t, !0);
            return t.computed || !t.static ||
              "prototype" !== e.name && "prototype" !== e.value ||
              this.raise(e.start, g.StaticPrototype),
              "PrivateName" === e.type && "constructor" === e.id.name &&
              this.raise(e.start, g.ConstructorClassPrivateField),
              e;
          }
          parseClassStaticBlock(t, e, s) {
            var r;
            this.expectPlugin("classStaticBlock", e.start),
              this.scope.enter(80),
              this.expressionScope.enter(kt());
            const i = this.state.labels;
            this.state.labels = [], this.prodParam.enter(0);
            const n = e.body = [];
            this.parseBlockOrModuleBlockBody(n, void 0, !1, c.braceR),
              this.prodParam.exit(),
              this.expressionScope.exit(),
              this.scope.exit(),
              this.state.labels = i,
              t.body.push(this.finishNode(e, "StaticBlock")),
              s.hadStaticBlock && this.raise(e.start, g.DuplicateStaticBlock),
              (null == (r = e.decorators) ? void 0 : r.length) &&
              this.raise(e.start, g.DecoratorStaticBlock),
              s.hadStaticBlock = !0;
          }
          pushClassProperty(t, e) {
            e.computed ||
            "constructor" !== e.key.name && "constructor" !== e.key.value ||
            this.raise(e.key.start, g.ConstructorClassField),
              t.body.push(this.parseClassProperty(e));
          }
          pushClassPrivateProperty(t, e) {
            this.expectPlugin("classPrivateProperties", e.key.start);
            const s = this.parseClassPrivateProperty(e);
            t.body.push(s),
              this.classScope.declarePrivateName(s.key.id.name, 0, s.key.start);
          }
          pushClassMethod(t, e, s, r, i, n) {
            t.body.push(this.parseMethod(e, s, r, i, n, "ClassMethod", !0));
          }
          pushClassPrivateMethod(t, e, s, r) {
            this.expectPlugin("classPrivateMethods", e.key.start);
            const i = this.parseMethod(
              e,
              s,
              r,
              !1,
              !1,
              "ClassPrivateMethod",
              !0,
            );
            t.body.push(i);
            const n = "get" === i.kind ? i.static ? 6 : 2
            : "set" === i.kind ? i.static ? 5 : 1 : 0;
            this.classScope.declarePrivateName(i.key.id.name, n, i.key.start);
          }
          parsePostMemberNameModifiers(t) {}
          parseClassPrivateProperty(t) {
            return this.parseInitializer(t),
              this.semicolon(),
              this.finishNode(t, "ClassPrivateProperty");
          }
          parseClassProperty(t) {
            return t.typeAnnotation && !this.match(c.eq) ||
              this.expectPlugin("classProperties"),
              this.parseInitializer(t),
              this.semicolon(),
              this.finishNode(t, "ClassProperty");
          }
          parseInitializer(t) {
            this.scope.enter(80),
              this.expressionScope.enter(kt()),
              this.prodParam.enter(0),
              t.value = this.eat(c.eq) ? this.parseMaybeAssignAllowIn() : null,
              this.expressionScope.exit(),
              this.prodParam.exit(),
              this.scope.exit();
          }
          parseClassId(t, e, s, r = 139) {
            this.match(c.name)
              ? (t.id = this.parseIdentifier(),
                e && this.checkLVal(t.id, r, void 0, "class name"))
              : s || !e ? t.id = null
              : this.unexpected(null, g.MissingClassName);
          }
          parseClassSuper(t) {
            t.superClass = this.eat(c._extends) ? this.parseExprSubscripts()
            : null;
          }
          parseExport(t) {
            const e = this.maybeParseExportDefaultSpecifier(t),
              s = !e || this.eat(c.comma),
              r = s && this.eatExportStar(t),
              i = r && this.maybeParseExportNamespaceSpecifier(t),
              n = s && (!i || this.eat(c.comma)),
              a = e || r;
            if (r && !i) {return e && this.unexpected(),
                this.parseExportFrom(t, !0),
                this.finishNode(t, "ExportAllDeclaration");}
            const o = this.maybeParseExportNamedSpecifiers(t);
            if (e && s && !r && !o || i && n && !o) {throw this.unexpected(
                null,
                c.braceL,
              );}
            let u;
            if (
              a || o
                ? (u = !1, this.parseExportFrom(t, a))
                : u = this.maybeParseExportDeclaration(t), a || o || u
            ) {
              return this.checkExport(t, !0, !1, !!t.source),
                this.finishNode(t, "ExportNamedDeclaration");
            }
            if (this.eat(c._default)) {
              return t.declaration = this.parseExportDefaultExpression(),
                this.checkExport(t, !0, !0),
                this.finishNode(t, "ExportDefaultDeclaration");
            }
            throw this.unexpected(null, c.braceL);
          }
          eatExportStar(t) {
            return this.eat(c.star);
          }
          maybeParseExportDefaultSpecifier(t) {
            if (this.isExportDefaultSpecifier()) {
              this.expectPlugin("exportDefaultFrom");
              const e = this.startNode();
              return e.exported = this.parseIdentifier(!0),
                t.specifiers = [this.finishNode(e, "ExportDefaultSpecifier")],
                !0;
            }
            return !1;
          }
          maybeParseExportNamespaceSpecifier(t) {
            if (this.isContextual("as")) {
              t.specifiers || (t.specifiers = []);
              const e = this.startNodeAt(
                this.state.lastTokStart,
                this.state.lastTokStartLoc,
              );
              return this.next(),
                e.exported = this.parseModuleExportName(),
                t.specifiers.push(
                  this.finishNode(e, "ExportNamespaceSpecifier"),
                ),
                !0;
            }
            return !1;
          }
          maybeParseExportNamedSpecifiers(t) {
            return !!this.match(c.braceL) &&
              (t.specifiers || (t.specifiers = []),
                t.specifiers.push(...this.parseExportSpecifiers()),
                t.source = null,
                t.declaration = null,
                !0);
          }
          maybeParseExportDeclaration(t) {
            return !!this.shouldParseExportDeclaration() &&
              (t.specifiers = [],
                t.source = null,
                t.declaration = this.parseExportDeclaration(t),
                !0);
          }
          isAsyncFunction() {
            if (!this.isContextual("async"))return !1;
            const t = this.nextTokenStart();
            return !m.test(this.input.slice(this.state.pos, t)) &&
              this.isUnparsedContextual(t, "function");
          }
          parseExportDefaultExpression() {
            const t = this.startNode(), e = this.isAsyncFunction();
            if (this.match(c._function) || e) {
              return this.next(), e && this.next(), this.parseFunction(t, 5, e);
            }
            if (this.match(c._class))return this.parseClass(t, !0, !0);
            if (this.match(c.at)) {
              return this.hasPlugin("decorators") &&
                this.getPluginOption("decorators", "decoratorsBeforeExport") &&
                this.raise(this.state.start, g.DecoratorBeforeExport),
                this.parseDecorators(!1),
                this.parseClass(t, !0, !0);
            }
            if (this.match(c._const) || this.match(c._var) || this.isLet()) {
              throw this.raise(this.state.start, g.UnsupportedDefaultExport);
            }
            {
              const t = this.parseMaybeAssignAllowIn();
              return this.semicolon(), t;
            }
          }
          parseExportDeclaration(t) {
            return this.parseStatement(null);
          }
          isExportDefaultSpecifier() {
            if (this.match(c.name)) {
              const t = this.state.value;
              if ("async" === t && !this.state.containsEsc || "let" === t) {
                return !1;
              }
              if (
                ("type" === t || "interface" === t) && !this.state.containsEsc
              ) {
                const t = this.lookahead();
                if (
                  t.type === c.name && "from" !== t.value || t.type === c.braceL
                ) {
                  return this.expectOnePlugin(["flow", "typescript"]), !1;
                }
              }
            } else if (!this.match(c._default)) {
              return !1;
            }
            const t = this.nextTokenStart(),
              e = this.isUnparsedContextual(t, "from");
            if (44 === this.input.charCodeAt(t) || this.match(c.name) && e) {
              return !0;
            }
            if (this.match(c._default) && e) {
              const e = this.input.charCodeAt(this.nextTokenStartSince(t + 4));
              return 34 === e || 39 === e;
            }
            return !1;
          }
          parseExportFrom(t, e) {
            if (this.eatContextual("from")) {
              t.source = this.parseImportSource(), this.checkExport(t);
              const e = this.maybeParseImportAssertions();
              e && (t.assertions = e);
            } else {
              e
                ? this.unexpected()
                : t.source = null;
            }
            this.semicolon();
          }
          shouldParseExportDeclaration() {
            if (
              this.match(c.at) &&
              (this.expectOnePlugin(["decorators", "decorators-legacy"]),
                this.hasPlugin("decorators"))
            ) {
              if (
                !this.getPluginOption("decorators", "decoratorsBeforeExport")
              ) {
                return !0;
              }
              this.unexpected(this.state.start, g.DecoratorBeforeExport);
            }
            return "var" === this.state.type.keyword ||
              "const" === this.state.type.keyword ||
              "function" === this.state.type.keyword ||
              "class" === this.state.type.keyword || this.isLet() ||
              this.isAsyncFunction();
          }
          checkExport(t, e, s, r) {
            if (e) {
              if (s) {
                if (
                  this.checkDuplicateExports(t, "default"),
                    this.hasPlugin("exportDefaultFrom")
                ) {
                  var i;
                  const e = t.declaration;
                  "Identifier" !== e.type || "from" !== e.name ||
                    e.end - e.start != 4 || (null == (i = e.extra)
                      ? void 0
                      : i.parenthesized) ||
                    this.raise(e.start, g.ExportDefaultFromAsIdentifier);
                }
              } else if (t.specifiers && t.specifiers.length) {
                for (let e = 0, s = t.specifiers; e < s.length; e++) {
                  const t = s[e],
                    { exported: i } = t,
                    n = "Identifier" === i.type ? i.name : i.value;
                  if (this.checkDuplicateExports(t, n), !r && t.local) {
                    const { local: e } = t;
                    "StringLiteral" === e.type
                      ? this.raise(
                        t.start,
                        g.ExportBindingIsString,
                        e.extra.raw,
                        n,
                      )
                      : (this.checkReservedWord(e.name, e.start, !0, !1),
                        this.scope.checkLocalExport(e));
                  }
                }
              } else if (t.declaration) {
                if (
                  "FunctionDeclaration" === t.declaration.type ||
                  "ClassDeclaration" === t.declaration.type
                ) {
                  const e = t.declaration.id;
                  if (!e)throw new Error("Assertion failure");
                  this.checkDuplicateExports(t, e.name);
                } else if ("VariableDeclaration" === t.declaration.type) {
                  for (
                    let e = 0, s = t.declaration.declarations; e < s.length; e++
                  ) {
                    const t = s[e];
                    this.checkDeclaration(t.id);
                  }
                }
              }
            }
            if (
              this.state.decoratorStack[this.state.decoratorStack.length - 1]
                .length
            ) {
              throw this.raise(t.start, g.UnsupportedDecoratorExport);
            }
          }
          checkDeclaration(t) {
            if ("Identifier" === t.type) {
              this.checkDuplicateExports(t, t.name);
            } else if ("ObjectPattern" === t.type) {
              for (let e = 0, s = t.properties; e < s.length; e++) {
                const t = s[e];
                this.checkDeclaration(t);
              }
            } else if ("ArrayPattern" === t.type) {
              for (let e = 0, s = t.elements; e < s.length; e++) {
                const t = s[e];
                t && this.checkDeclaration(t);
              }
            } else {
              "ObjectProperty" === t.type
                ? this.checkDeclaration(t.value)
                : "RestElement" === t.type
                ? this.checkDeclaration(t.argument)
                : "AssignmentPattern" === t.type &&
                  this.checkDeclaration(t.left);
            }
          }
          checkDuplicateExports(t, e) {
            this.state.exportedIdentifiers.indexOf(e) > -1 &&
            this.raise(
              t.start,
              "default" === e ? g.DuplicateDefaultExport : g.DuplicateExport,
              e,
            ), this.state.exportedIdentifiers.push(e);
          }
          parseExportSpecifiers() {
            const t = [];
            let e = !0;
            for (this.expect(c.braceL); !this.eat(c.braceR);) {
              if (e) e = !1;
              else if (this.expect(c.comma), this.eat(c.braceR)) {
                break;
              }
              const s = this.startNode();
              s.local = this.parseModuleExportName(),
                s.exported = this.eatContextual("as")
                  ? this.parseModuleExportName()
                  : s.local.__clone(),
                t.push(this.finishNode(s, "ExportSpecifier"));
            }
            return t;
          }
          parseModuleExportName() {
            if (this.match(c.string)) {
              this.expectPlugin("moduleStringNames");
              const t = this.parseLiteral(this.state.value, "StringLiteral"),
                e = t.value.match(Mt);
              return e &&
                this.raise(
                  t.start,
                  g.ModuleExportNameHasLoneSurrogate,
                  e[0].charCodeAt(0).toString(16),
                ),
                t;
            }
            return this.parseIdentifier(!0);
          }
          parseImport(t) {
            if (t.specifiers = [], !this.match(c.string)) {
              const e = !this.maybeParseDefaultImportSpecifier(t) ||
                  this.eat(c.comma),
                s = e && this.maybeParseStarImportSpecifier(t);
              e && !s && this.parseNamedImportSpecifiers(t),
                this.expectContextual("from");
            }
            t.source = this.parseImportSource();
            const e = this.maybeParseImportAssertions();
            if (e) {
              t.assertions = e;
            } else {
              const e = this.maybeParseModuleAttributes();
              e && (t.attributes = e);
            }
            return this.semicolon(), this.finishNode(t, "ImportDeclaration");
          }
          parseImportSource() {
            return this.match(c.string) || this.unexpected(),
              this.parseExprAtom();
          }
          shouldParseDefaultImport(t) {
            return this.match(c.name);
          }
          parseImportSpecifierLocal(t, e, s, r) {
            e.local = this.parseIdentifier(),
              this.checkLVal(e.local, 9, void 0, r),
              t.specifiers.push(this.finishNode(e, s));
          }
          parseAssertEntries() {
            const t = [], e = new Set();
            do {
              if (this.match(c.braceR)) break;
              const s = this.startNode(), r = this.state.value;
              if (
                this.match(c.string)
                  ? s.key = this.parseLiteral(r, "StringLiteral")
                  : s.key = this.parseIdentifier(!0),
                  this.expect(c.colon),
                  "type" !== r &&
                  this.raise(
                    s.key.start,
                    g.ModuleAttributeDifferentFromType,
                    r,
                  ),
                  e.has(r) &&
                  this.raise(
                    s.key.start,
                    g.ModuleAttributesWithDuplicateKeys,
                    r,
                  ),
                  e.add(r),
                  !this.match(c.string)
              ) {
                throw this.unexpected(
                  this.state.start,
                  g.ModuleAttributeInvalidValue,
                );
              }
              s.value = this.parseLiteral(this.state.value, "StringLiteral"),
                this.finishNode(s, "ImportAttribute"),
                t.push(s);
            } while (this.eat(c.comma));
            return t;
          }
          maybeParseModuleAttributes() {
            if (
              !this.match(c._with) || this.hasPrecedingLineBreak()
            ) {
              return this.hasPlugin("moduleAttributes") ? [] : null;
            }
            this.expectPlugin("moduleAttributes"), this.next();
            const t = [], e = new Set();
            do {
              const s = this.startNode();
              if (
                s.key = this.parseIdentifier(!0),
                  "type" !== s.key.name &&
                  this.raise(
                    s.key.start,
                    g.ModuleAttributeDifferentFromType,
                    s.key.name,
                  ),
                  e.has(s.key.name) &&
                  this.raise(
                    s.key.start,
                    g.ModuleAttributesWithDuplicateKeys,
                    s.key.name,
                  ),
                  e.add(s.key.name),
                  this.expect(c.colon),
                  !this.match(c.string)
              ) {
                throw this.unexpected(
                  this.state.start,
                  g.ModuleAttributeInvalidValue,
                );
              }
              s.value = this.parseLiteral(this.state.value, "StringLiteral"),
                this.finishNode(s, "ImportAttribute"),
                t.push(s);
            } while (this.eat(c.comma));
            return t;
          }
          maybeParseImportAssertions() {
            if (
              !this.isContextual("assert") || this.hasPrecedingLineBreak()
            ) {
              return this.hasPlugin("importAssertions") ? [] : null;
            }
            this.expectPlugin("importAssertions"),
              this.next(),
              this.eat(c.braceL);
            const t = this.parseAssertEntries();
            return this.eat(c.braceR), t;
          }
          maybeParseDefaultImportSpecifier(t) {
            return !!this.shouldParseDefaultImport(t) &&
              (this.parseImportSpecifierLocal(
                t,
                this.startNode(),
                "ImportDefaultSpecifier",
                "default import specifier",
              ),
                !0);
          }
          maybeParseStarImportSpecifier(t) {
            if (this.match(c.star)) {
              const e = this.startNode();
              return this.next(),
                this.expectContextual("as"),
                this.parseImportSpecifierLocal(
                  t,
                  e,
                  "ImportNamespaceSpecifier",
                  "import namespace specifier",
                ),
                !0;
            }
            return !1;
          }
          parseNamedImportSpecifiers(t) {
            let e = !0;
            for (this.expect(c.braceL); !this.eat(c.braceR);) {
              if (e)e = !1;
              else {
                if (this.eat(c.colon)) {
                  throw this.raise(this.state.start, g.DestructureNamedImport);
                }
                if (this.expect(c.comma), this.eat(c.braceR)) break;
              }
              this.parseImportSpecifier(t);
            }
          }
          parseImportSpecifier(t) {
            const e = this.startNode();
            if (
              e.imported = this.parseModuleExportName(),
                this.eatContextual("as")
            ) {
              e.local = this.parseIdentifier();
            } else {
              const { imported: t } = e;
              if ("StringLiteral" === t.type) {
                throw this.raise(e.start, g.ImportBindingIsString, t.value);
              }
              this.checkReservedWord(t.name, e.start, !0, !0),
                e.local = t.__clone();
            }
            this.checkLVal(e.local, 9, void 0, "import specifier"),
              t.specifiers.push(this.finishNode(e, "ImportSpecifier"));
          }
        } {
        constructor(t, e) {
          super(
            t = function (t) {
              const e = {};
              for (let s = 0, r = Object.keys(Ct); s < r.length; s++) {
                const i = r[s];
                e[i] = t && null != t[i] ? t[i] : Ct[i];
              }
              return e;
            }(t),
            e,
          );
          const s = this.getScopeHandler();
          this.options = t,
            this.inModule = "module" === this.options.sourceType,
            this.scope = new s(this.raise.bind(this), this.inModule),
            this.prodParam = new ht(),
            this.classScope = new _t(this.raise.bind(this)),
            this.expressionScope = new vt(this.raise.bind(this)),
            this.plugins = function (t) {
              const e = new Map();
              for (let s = 0; s < t.length; s++) {
                const r = t[s], [i, n] = Array.isArray(r) ? r : [r, {}];
                e.has(i) || e.set(i, n || {});
              }
              return e;
            }(this.options.plugins),
            this.filename = t.sourceFilename;
        }
        getScopeHandler() {
          return at;
        }
        parse() {
          let t = 0;
          this.hasPlugin("topLevelAwait") && this.inModule && (t |= 2),
            this.scope.enter(1),
            this.prodParam.enter(t);
          const e = this.startNode(), s = this.startNode();
          return this.nextToken(),
            e.errors = null,
            this.parseTopLevel(e, s),
            e.errors = this.state.errors,
            e;
        }
      }
      function Ut(t, e) {
        let s = jt;
        return (null == t
          ? void 0
          : t.plugins) && (!function (t) {
            if (Dt(t, "decorators")) {
              if (Dt(t, "decorators-legacy")) {
                throw new Error(
                  "Cannot use the decorators and decorators-legacy plugin together",
                );
              }
              const e = mt(t, "decorators", "decoratorsBeforeExport");
              if (null == e) {
                throw new Error(
                  "The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'.",
                );
              }
              if ("boolean" != typeof e) {
                throw new Error("'decoratorsBeforeExport' must be a boolean.");
              }
            }
            if (Dt(t, "flow") && Dt(t, "typescript")) {
              throw new Error("Cannot combine flow and typescript plugins.");
            }
            if (Dt(t, "placeholders") && Dt(t, "v8intrinsic")) {
              throw new Error(
                "Cannot combine placeholders and v8intrinsic plugins.",
              );
            }
            if (
              Dt(t, "pipelineOperator") &&
              !ft.includes(mt(t, "pipelineOperator", "proposal"))
            ) {
              throw new Error(
                "'pipelineOperator' requires 'proposal' option whose value should be one of: " +
                  ft.map(((t) => "'".concat(t, "'"))).join(", "),
              );
            }
            if (Dt(t, "moduleAttributes")) {
              if (Dt(t, "importAssertions")) {
                throw new Error(
                  "Cannot combine importAssertions and moduleAttributes plugins.",
                );
              }
              if ("may-2020" !== mt(t, "moduleAttributes", "version")) {
                throw new Error(
                  "The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.",
                );
              }
            }
            if (
              Dt(t, "recordAndTuple") &&
              !yt.includes(mt(t, "recordAndTuple", "syntaxType"))
            ) {
              throw new Error(
                "'recordAndTuple' requires 'syntaxType' option whose value should be one of: " +
                  yt.map(((t) => "'".concat(t, "'"))).join(", "),
              );
            }
          }(t.plugins),
            s = function (t) {
              const e = At.filter(((e) => Dt(t, e))), s = e.join("/");
              let r = qt[s];
              if (!r) {
                r = jt;
                for (let t = 0; t < e.length; t++) {
                  const s = e[t];
                  r = Et[s](r);
                }
                qt[s] = r;
              }
              return r;
            }(t.plugins)),
          new s(t, e);
      }
      const qt = {};
      e.parse = function (t, e) {
        var s;
        if (
          "unambiguous" !== (null == (s = e)
            ? void 0
            : s.sourceType)
        ) {
          return Ut(e, t).parse();
        }
        e = Object.assign({}, e);
        try {
          e.sourceType = "module";
          const s = Ut(e, t), r = s.parse();
          if (s.sawUnambiguousESM) return r;
          if (s.ambiguousScriptDifferentAst) {
            try {
              return e.sourceType = "script", Ut(e, t).parse();
            } catch (t) {}
          } else r.program.sourceType = "script";
          return r;
        } catch (s) {
          try {
            return e.sourceType = "script", Ut(e, t).parse();
          } catch (t) {}
          throw s;
        }
      },
        e.parseExpression = function (t, e) {
          const s = Ut(e, t);
          return s.options.strictMode && (s.state.strict = !0),
            s.getExpression();
        },
        e.tokTypes = c;
    }),
  );
const {
    getNextNonSpaceNonCommentCharacterIndexWithStartIndex: Rs,
    getShebang: _s,
  } = It,
  { hasPragma: js } = Wt,
  { locStart: Us, locEnd: qs } = Jt;
const Vs = /@(?:no)?flow\b/;
function zs(e, ...s) {
  return (r, i, n = {}) => {
    if (
      "babel" === n.parser && function (t, e) {
        if (e.filepath && e.filepath.endsWith(".js.flow")) return !0;
        const s = _s(t);
        s && (t = t.slice(s.length));
        const r = Rs(t, 0);
        return !1 !== r && (t = t.slice(0, r)), Vs.test(t);
      }(r, n)
    ) {
      return n.parser = "babel-flow", Ws(r, i, n);
    }
    const a = Ms, o = "script" === n.__babelSourceType ? "script" : "module";
    let u;
    try {
      u = function (t, e) {
        let s;
        for (let r = 0; r < e.length; r++) {
          try {
            return Js(t(e[r]));
          } catch (t) {
            s || (s = t);
          }
        }
        throw s;
      }(
        ((t) => a[e](r, t)),
        function (t, e, s) {
          if (!t) return e;
          const r = [];
          for (const t of e) for (const e of s) r.push([...t, e]);
          return r;
        }(r.includes("|>"), s, [["pipelineOperator", { proposal: "smart" }], [
          "pipelineOperator",
          { proposal: "minimal" },
        ], ["pipelineOperator", { proposal: "fsharp" }]]).map(
          ((t) =>
            function ({ sourceType: t, extraPlugins: e = [] }) {
              return {
                sourceType: t,
                allowAwaitOutsideFunction: !0,
                allowImportExportEverywhere: !0,
                allowReturnOutsideFunction: !0,
                allowSuperOutsideMethod: !0,
                allowUndeclaredExports: !0,
                errorRecovery: !0,
                createParenthesizedExpressions: !0,
                plugins: [
                  "doExpressions",
                  "classProperties",
                  "exportDefaultFrom",
                  "functionBind",
                  "functionSent",
                  "classPrivateProperties",
                  "throwExpressions",
                  "classPrivateMethods",
                  "v8intrinsic",
                  "partialApplication",
                  ["decorators", { decoratorsBeforeExport: !1 }],
                  "privateIn",
                  "importAssertions",
                  ["recordAndTuple", { syntaxType: "hash" }],
                  "decimal",
                  "moduleStringNames",
                  "classStaticBlock",
                  ...e,
                ],
                tokens: !0,
                ranges: !0,
              };
            }({ sourceType: o, extraPlugins: t })),
        ),
      );
    } catch (e) {
      const { message: s, loc: r } = e;
      throw t(s.replace(/ \(.*\)/, ""), {
        start: { line: r ? r.line : 0, column: r ? r.column + 1 : 0 },
      });
    }
    return Os(u, Object.assign({}, n, { originalText: r }));
  };
}
const Hs = zs("parse", ["jsx", "flow"]),
  Ws = zs("parse", ["jsx", ["flow", { all: !0, enums: !0 }]]),
  Gs = zs("parse", ["jsx", "typescript"], ["typescript"]),
  Xs = zs("parseExpression", ["jsx"]);
const Ks = new Set([
  "Did not expect a type annotation here.",
  "The only accepted module attribute is `type`",
  "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`",
]);
function Js(t) {
  const e = t.errors.find(
    ((t) =>
      function (t) {
        const [, e] = t.message.match(/(.*?)\s*\(\d+:\d+\)/);
        return Ks.has(e);
      }(t)),
  );
  if (e) throw e;
  return t;
}
function $s(e, s) {
  switch (e.type) {
    case "ArrayExpression":
      return e.elements.forEach(r);
    case "ObjectExpression":
      return e.properties.forEach(r);
    case "ObjectProperty":
      if (e.computed) throw i("computed");
      if (e.shorthand) throw i("shorthand");
      return [e.key, e.value].forEach(r);
    case "UnaryExpression":
      switch (e.operator) {
        case "+":
        case "-":
          return r(e.argument);
        default:
          throw i("operator");
      }
    case "Identifier":
      if (s && "ObjectProperty" === s.type && s.key === e) return;
      throw i();
    case "NullLiteral":
    case "BooleanLiteral":
    case "NumericLiteral":
    case "StringLiteral":
      return;
    default:
      throw i();
  }
  function r(t) {
    return $s(t, e);
  }
  function i(s) {
    const r = s
      ? "".concat(e.type, " with ").concat(s, "=").concat(JSON.stringify(e[s]))
      : e.type;
    return t("".concat(r, " is not allowed in JSON."), {
      start: { line: e.loc.start.line, column: e.loc.start.column + 1 },
    });
  }
}
const Ys = {
    parse: Hs,
    astFormat: "estree",
    hasPragma: js,
    locStart: Us,
    locEnd: qs,
  },
  Qs = Object.assign({}, Ys, { parse: Ws }),
  Zs = Object.assign({}, Ys, { parse: Gs }),
  tr = Object.assign({}, Ys, { parse: Xs });
var er = {
  parsers: {
    babel: Ys,
    "babel-flow": Qs,
    "babel-ts": Zs,
    json: Object.assign({}, tr, { hasPragma: () => !0 }),
    json5: tr,
    "json-stringify": {
      parse: function (t, e, s) {
        const r = Xs(t, e, s);
        return r.comments.forEach($s), $s(r), r;
      },
      astFormat: "estree-json",
      locStart: Us,
      locEnd: qs,
    },
    __js_expression: tr,
    __vue_expression: tr,
    __vue_event_binding: Ys,
  },
};
export default er;
