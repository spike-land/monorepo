function e(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var t = e(require("@zedvision/emotion-memoize")),
  i = "/^((" +
    Object.keys(
      {
        children: !0,
        dangerouslySetInnerHTML: !0,
        key: !0,
        ref: !0,
        autoFocus: !0,
        defaultValue: !0,
        defaultChecked: !0,
        innerHTML: !0,
        suppressContentEditableWarning: !0,
        suppressHydrationWarning: !0,
        valueLink: !0,
        accept: !0,
        acceptCharset: !0,
        accessKey: !0,
        action: !0,
        allow: !0,
        allowUserMedia: !0,
        allowPaymentRequest: !0,
        allowFullScreen: !0,
        allowTransparency: !0,
        alt: !0,
        async: !0,
        autoComplete: !0,
        autoPlay: !0,
        capture: !0,
        cellPadding: !0,
        cellSpacing: !0,
        challenge: !0,
        charSet: !0,
        checked: !0,
        cite: !0,
        classID: !0,
        className: !0,
        cols: !0,
        colSpan: !0,
        content: !0,
        contentEditable: !0,
        contextMenu: !0,
        controls: !0,
        controlsList: !0,
        coords: !0,
        crossOrigin: !0,
        data: !0,
        dateTime: !0,
        decoding: !0,
        default: !0,
        defer: !0,
        dir: !0,
        disabled: !0,
        disablePictureInPicture: !0,
        download: !0,
        draggable: !0,
        encType: !0,
        form: !0,
        formAction: !0,
        formEncType: !0,
        formMethod: !0,
        formNoValidate: !0,
        formTarget: !0,
        frameBorder: !0,
        headers: !0,
        height: !0,
        hidden: !0,
        high: !0,
        href: !0,
        hrefLang: !0,
        htmlFor: !0,
        httpEquiv: !0,
        id: !0,
        inputMode: !0,
        integrity: !0,
        is: !0,
        keyParams: !0,
        keyType: !0,
        kind: !0,
        label: !0,
        lang: !0,
        list: !0,
        loading: !0,
        loop: !0,
        low: !0,
        marginHeight: !0,
        marginWidth: !0,
        max: !0,
        maxLength: !0,
        media: !0,
        mediaGroup: !0,
        method: !0,
        min: !0,
        minLength: !0,
        multiple: !0,
        muted: !0,
        name: !0,
        nonce: !0,
        noValidate: !0,
        open: !0,
        optimum: !0,
        pattern: !0,
        placeholder: !0,
        playsInline: !0,
        poster: !0,
        preload: !0,
        profile: !0,
        radioGroup: !0,
        readOnly: !0,
        referrerPolicy: !0,
        rel: !0,
        required: !0,
        reversed: !0,
        role: !0,
        rows: !0,
        rowSpan: !0,
        sandbox: !0,
        scope: !0,
        scoped: !0,
        scrolling: !0,
        seamless: !0,
        selected: !0,
        shape: !0,
        size: !0,
        sizes: !0,
        slot: !0,
        span: !0,
        spellCheck: !0,
        src: !0,
        srcDoc: !0,
        srcLang: !0,
        srcSet: !0,
        start: !0,
        step: !0,
        style: !0,
        summary: !0,
        tabIndex: !0,
        target: !0,
        title: !0,
        translate: !0,
        type: !0,
        useMap: !0,
        value: !0,
        width: !0,
        wmode: !0,
        wrap: !0,
        about: !0,
        datatype: !0,
        inlist: !0,
        prefix: !0,
        property: !0,
        resource: !0,
        typeof: !0,
        vocab: !0,
        autoCapitalize: !0,
        autoCorrect: !0,
        autoSave: !0,
        color: !0,
        inert: !0,
        itemProp: !0,
        itemScope: !0,
        itemType: !0,
        itemID: !0,
        itemRef: !0,
        on: !0,
        results: !0,
        security: !0,
        unselectable: !0,
        accentHeight: !0,
        accumulate: !0,
        additive: !0,
        alignmentBaseline: !0,
        allowReorder: !0,
        alphabetic: !0,
        amplitude: !0,
        arabicForm: !0,
        ascent: !0,
        attributeName: !0,
        attributeType: !0,
        autoReverse: !0,
        azimuth: !0,
        baseFrequency: !0,
        baselineShift: !0,
        baseProfile: !0,
        bbox: !0,
        begin: !0,
        bias: !0,
        by: !0,
        calcMode: !0,
        capHeight: !0,
        clip: !0,
        clipPathUnits: !0,
        clipPath: !0,
        clipRule: !0,
        colorInterpolation: !0,
        colorInterpolationFilters: !0,
        colorProfile: !0,
        colorRendering: !0,
        contentScriptType: !0,
        contentStyleType: !0,
        cursor: !0,
        cx: !0,
        cy: !0,
        d: !0,
        decelerate: !0,
        descent: !0,
        diffuseConstant: !0,
        direction: !0,
        display: !0,
        divisor: !0,
        dominantBaseline: !0,
        dur: !0,
        dx: !0,
        dy: !0,
        edgeMode: !0,
        elevation: !0,
        enableBackground: !0,
        end: !0,
        exponent: !0,
        externalResourcesRequired: !0,
        fill: !0,
        fillOpacity: !0,
        fillRule: !0,
        filter: !0,
        filterRes: !0,
        filterUnits: !0,
        floodColor: !0,
        floodOpacity: !0,
        focusable: !0,
        fontFamily: !0,
        fontSize: !0,
        fontSizeAdjust: !0,
        fontStretch: !0,
        fontStyle: !0,
        fontVariant: !0,
        fontWeight: !0,
        format: !0,
        from: !0,
        fr: !0,
        fx: !0,
        fy: !0,
        g1: !0,
        g2: !0,
        glyphName: !0,
        glyphOrientationHorizontal: !0,
        glyphOrientationVertical: !0,
        glyphRef: !0,
        gradientTransform: !0,
        gradientUnits: !0,
        hanging: !0,
        horizAdvX: !0,
        horizOriginX: !0,
        ideographic: !0,
        imageRendering: !0,
        in: !0,
        in2: !0,
        intercept: !0,
        k: !0,
        k1: !0,
        k2: !0,
        k3: !0,
        k4: !0,
        kernelMatrix: !0,
        kernelUnitLength: !0,
        kerning: !0,
        keyPoints: !0,
        keySplines: !0,
        keyTimes: !0,
        lengthAdjust: !0,
        letterSpacing: !0,
        lightingColor: !0,
        limitingConeAngle: !0,
        local: !0,
        markerEnd: !0,
        markerMid: !0,
        markerStart: !0,
        markerHeight: !0,
        markerUnits: !0,
        markerWidth: !0,
        mask: !0,
        maskContentUnits: !0,
        maskUnits: !0,
        mathematical: !0,
        mode: !0,
        numOctaves: !0,
        offset: !0,
        opacity: !0,
        operator: !0,
        order: !0,
        orient: !0,
        orientation: !0,
        origin: !0,
        overflow: !0,
        overlinePosition: !0,
        overlineThickness: !0,
        panose1: !0,
        paintOrder: !0,
        pathLength: !0,
        patternContentUnits: !0,
        patternTransform: !0,
        patternUnits: !0,
        pointerEvents: !0,
        points: !0,
        pointsAtX: !0,
        pointsAtY: !0,
        pointsAtZ: !0,
        preserveAlpha: !0,
        preserveAspectRatio: !0,
        primitiveUnits: !0,
        r: !0,
        radius: !0,
        refX: !0,
        refY: !0,
        renderingIntent: !0,
        repeatCount: !0,
        repeatDur: !0,
        requiredExtensions: !0,
        requiredFeatures: !0,
        restart: !0,
        result: !0,
        rotate: !0,
        rx: !0,
        ry: !0,
        scale: !0,
        seed: !0,
        shapeRendering: !0,
        slope: !0,
        spacing: !0,
        specularConstant: !0,
        specularExponent: !0,
        speed: !0,
        spreadMethod: !0,
        startOffset: !0,
        stdDeviation: !0,
        stemh: !0,
        stemv: !0,
        stitchTiles: !0,
        stopColor: !0,
        stopOpacity: !0,
        strikethroughPosition: !0,
        strikethroughThickness: !0,
        string: !0,
        stroke: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeLinecap: !0,
        strokeLinejoin: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
        surfaceScale: !0,
        systemLanguage: !0,
        tableValues: !0,
        targetX: !0,
        targetY: !0,
        textAnchor: !0,
        textDecoration: !0,
        textRendering: !0,
        textLength: !0,
        to: !0,
        transform: !0,
        u1: !0,
        u2: !0,
        underlinePosition: !0,
        underlineThickness: !0,
        unicode: !0,
        unicodeBidi: !0,
        unicodeRange: !0,
        unitsPerEm: !0,
        vAlphabetic: !0,
        vHanging: !0,
        vIdeographic: !0,
        vMathematical: !0,
        values: !0,
        vectorEffect: !0,
        version: !0,
        vertAdvY: !0,
        vertOriginX: !0,
        vertOriginY: !0,
        viewBox: !0,
        viewTarget: !0,
        visibility: !0,
        widths: !0,
        wordSpacing: !0,
        writingMode: !0,
        x: !0,
        xHeight: !0,
        x1: !0,
        x2: !0,
        xChannelSelector: !0,
        xlinkActuate: !0,
        xlinkArcrole: !0,
        xlinkHref: !0,
        xlinkRole: !0,
        xlinkShow: !0,
        xlinkTitle: !0,
        xlinkType: !0,
        xmlBase: !0,
        xmlns: !0,
        xmlnsXlink: !0,
        xmlLang: !0,
        xmlSpace: !0,
        y: !0,
        y1: !0,
        y2: !0,
        yChannelSelector: !0,
        z: !0,
        zoomAndPan: !0,
        for: !0,
        class: !0,
        autofocus: !0,
      },
    ).join("|") + ")|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/",
  r = new RegExp(i);
module.exports = t.default(function (e) {
  return r.test(e) ||
    111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91;
});
//# sourceMappingURL=emotion-is-prop-valid.js.map
