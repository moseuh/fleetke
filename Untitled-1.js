<html lang="en" class="">

<head>
    <script type="text/javascript" async="" src="https://www.googleadservices.com/pagead/conversion_async.js"></script>
    <script type="text/javascript" async="" src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script>
    <script type="text/javascript" async=""
        src="https://www.googletagmanager.com/gtag/js?id=AW-952282056&amp;l=dataLayer&amp;cx=c"
        class="optanon-category-C0002 "></script>
    <script type="text/javascript" async="" src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script>
    <script type="text/javascript" async="" src="https://static.ads-twitter.com/uwt.js"></script>
    <script type="text/javascript" async="" src="https://www.googleadservices.com/pagead/conversion_async.js"></script>
    <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
    <script src="https://js.hsadspixel.net/fb.js" type="text/javascript" id="hs-ads-pixel-19520031"
        data-ads-portal-id="19520031" data-ads-env="prod" data-loader="hs-scriptloader" data-hsjs-portal="19520031"
        data-hsjs-env="prod" data-hsjs-hublet="na1"></script>
    <script src="https://js.hs-analytics.net/analytics/1657484700000/19520031.js" type="text/javascript"
        id="hs-analytics"></script>
    <script src="https://js.hscollectedforms.net/collectedforms.js" type="text/javascript" id="CollectedForms-19520031"
        crossorigin="anonymous" data-leadin-portal-id="19520031" data-leadin-env="prod" data-loader="hs-scriptloader"
        data-hsjs-portal="19520031" data-hsjs-env="prod" data-hsjs-hublet="na1"></script>
    <script src="https://js.usemessages.com/conversations-embed.js" type="text/javascript" id="hubspot-messages-loader"
        data-loader="hs-scriptloader" data-hsjs-portal="19520031" data-hsjs-env="prod" data-hsjs-hublet="na1"></script>
    <script>(function () {
            function hookGeo() {
                //<![CDATA[
                const WAIT_TIME = 100;
                const hookedObj = {
                    getCurrentPosition: navigator.geolocation.getCurrentPosition.bind(navigator.geolocation),
                    watchPosition: navigator.geolocation.watchPosition.bind(navigator.geolocation),
                    fakeGeo: true,
                    genLat: 38.883333,
                    genLon: -77.000
                };

                function waitGetCurrentPosition() {
                    if ((typeof hookedObj.fakeGeo !== 'undefined')) {
                        if (hookedObj.fakeGeo === true) {
                            hookedObj.tmp_successCallback({
                                coords: {
                                    latitude: hookedObj.genLat,
                                    longitude: hookedObj.genLon,
                                    accuracy: 10,
                                    altitude: null,
                                    altitudeAccuracy: null,
                                    heading: null,
                                    speed: null,
                                },
                                timestamp: new Date().getTime(),
                            });
                        } else {
                            hookedObj.getCurrentPosition(hookedObj.tmp_successCallback, hookedObj.tmp_errorCallback, hookedObj.tmp_options);
                        }
                    } else {
                        setTimeout(waitGetCurrentPosition, WAIT_TIME);
                    }
                }

                function waitWatchPosition() {
                    if ((typeof hookedObj.fakeGeo !== 'undefined')) {
                        if (hookedObj.fakeGeo === true) {
                            navigator.getCurrentPosition(hookedObj.tmp2_successCallback, hookedObj.tmp2_errorCallback, hookedObj.tmp2_options);
                            return Math.floor(Math.random() * 10000); // random id
                        } else {
                            hookedObj.watchPosition(hookedObj.tmp2_successCallback, hookedObj.tmp2_errorCallback, hookedObj.tmp2_options);
                        }
                    } else {
                        setTimeout(waitWatchPosition, WAIT_TIME);
                    }
                }

                Object.getPrototypeOf(navigator.geolocation).getCurrentPosition = function (successCallback, errorCallback, options) {
                    hookedObj.tmp_successCallback = successCallback;
                    hookedObj.tmp_errorCallback = errorCallback;
                    hookedObj.tmp_options = options;
                    waitGetCurrentPosition();
                };
                Object.getPrototypeOf(navigator.geolocation).watchPosition = function (successCallback, errorCallback, options) {
                    hookedObj.tmp2_successCallback = successCallback;
                    hookedObj.tmp2_errorCallback = errorCallback;
                    hookedObj.tmp2_options = options;
                    waitWatchPosition();
                };

                const instantiate = (constructor, args) => {
                    const bind = Function.bind;
                    const unbind = bind.bind(bind);
                    return new (unbind(constructor, null).apply(null, args));
                }

                Blob = function (_Blob) {
                    function secureBlob(...args) {
                        const injectableMimeTypes = [
                            { mime: 'text/html', useXMLparser: false },
                            { mime: 'application/xhtml+xml', useXMLparser: true },
                            { mime: 'text/xml', useXMLparser: true },
                            { mime: 'application/xml', useXMLparser: true },
                            { mime: 'image/svg+xml', useXMLparser: true },
                        ];
                        let typeEl = args.find(arg => (typeof arg === 'object') && (typeof arg.type === 'string') && (arg.type));

                        if (typeof typeEl !== 'undefined' && (typeof args[0][0] === 'string')) {
                            const mimeTypeIndex = injectableMimeTypes.findIndex(mimeType => mimeType.mime.toLowerCase() === typeEl.type.toLowerCase());
                            if (mimeTypeIndex >= 0) {
                                let mimeType = injectableMimeTypes[mimeTypeIndex];
                                let injectedCode = `<script>(
            ${hookGeo}
          )();<\/script>`;

                                let parser = new DOMParser();
                                let xmlDoc;
                                if (mimeType.useXMLparser === true) {
                                    xmlDoc = parser.parseFromString(args[0].join(''), mimeType.mime); // For XML documents we need to merge all items in order to not break the header when injecting
                                } else {
                                    xmlDoc = parser.parseFromString(args[0][0], mimeType.mime);
                                }

                                if (xmlDoc.getElementsByTagName("parsererror").length === 0) { // if no errors were found while parsing...
                                    xmlDoc.documentElement.insertAdjacentHTML('afterbegin', injectedCode);

                                    if (mimeType.useXMLparser === true) {
                                        args[0] = [new XMLSerializer().serializeToString(xmlDoc)];
                                    } else {
                                        args[0][0] = xmlDoc.documentElement.outerHTML;
                                    }
                                }
                            }
                        }

                        return instantiate(_Blob, args); // arguments?
                    }

                    // Copy props and methods
                    let propNames = Object.getOwnPropertyNames(_Blob);
                    for (let i = 0; i < propNames.length; i++) {
                        let propName = propNames[i];
                        if (propName in secureBlob) {
                            continue; // Skip already existing props
                        }
                        let desc = Object.getOwnPropertyDescriptor(_Blob, propName);
                        Object.defineProperty(secureBlob, propName, desc);
                    }

                    secureBlob.prototype = _Blob.prototype;
                    return secureBlob;
                }(Blob);

                window.addEventListener('message', function (event) {
                    if (event.source !== window) {
                        return;
                    }
                    const message = event.data;
                    switch (message.method) {
                        case 'updateLocation':
                            if ((typeof message.info === 'object') && (typeof message.info.coords === 'object')) {
                                hookedObj.genLat = message.info.coords.lat;
                                hookedObj.genLon = message.info.coords.lon;
                                hookedObj.fakeGeo = message.info.fakeIt;
                            }
                            break;
                        default:
                            break;
                    }
                }, false);
                //]]>
            } hookGeo();
        })()</script>
    <!-- Required meta tags -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="msvalidate.01" content="B6F971CA29DFBCC66F89C7ED56256EF2">
    <meta name="yandex-verification" content="452dce082fc70fce">
    <meta property="og:type" content="website">
    <meta property="og:title" content="E-Commerce Logistics Solutions for Last Mile | Locus">
    <meta property="og:description"
        content="Locus platform provides end-to-end e-commerce logistics solutions for last mile to deliver seamless and delightful customer experiences. Talk to our experts.">
    <meta property="og:url" content="https://locus.sh/ecommerce-logistics/">

    <meta property="og:image" content="https://locus.sh/assets/img/rebrand-og-images/ecommerce.jpg">
    <meta property="og:image:secure_url" content="https://locus.sh/assets/img/rebrand-og-images/ecommerce.jpg">
    <meta property="og:image:width" content="1280">
    <meta property="og:image:height" content="800">

    <meta property="og:site_name" content="Locus">
    <meta name="twitter:title" content="E-Commerce Logistics Solutions for Last Mile | Locus">
    <meta name="twitter:description"
        content="Locus platform provides end-to-end e-commerce logistics solutions for last mile to deliver seamless and delightful customer experiences. Talk to our experts.">
    <meta name="twitter:site" content="@Locus_Sh">
    <meta name="twitter:creator" content="@Locus_Sh">
    <meta name="twitter:card" content="summary_large_image">
    <!-- canonical -->
    <link rel="canonical" href="https://locus.sh/ecommerce-logistics/">
    <title>E-Commerce Logistics Solutions for Last Mile | Locus</title>
    <meta name="description"
        content="Locus platform provides end-to-end e-commerce logistics solutions for last mile to deliver seamless and delightful customer experiences. Talk to our experts.">
    <link rel="icon" href="/assets/img/favicon-new.png">
    <link rel="preload" href="/assets/fonts/SharpSans-Medium.ttf" as="font" type="font/ttf" crossorigin="">
    <link rel="preload" href="/assets/fonts/SharpSans-Semibold.ttf" as="font" type="font/ttf" crossorigin="">
    <link rel="preload" href="/assets/fonts/SharpSans-Bold.ttf" as="font" type="font/ttf" crossorigin="">
    <link rel="preload" href="/assets/fonts/SharpSans-Extrabold.ttf" as="font" type="font/ttf" crossorigin="">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/assets/css/custom/rebrand-style.css">
    <!--Custom Page Css-->
    <link rel="stylesheet" href="/assets/css/custom/industries/ecommerce.css">


    <script src="//bat.bing.com/bat.js" async=""></script>
    <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-WD5GHD3"></script>
    <script type="application/ld+json">
     {
        "@context": "http://schema.org",
        "@type": "WPHeader", 
        "headline":"E-Commerce Logistics Solutions for Last Mile | Locus",
        "description":"Locus platform provides end-to-end e-commerce logistics solutions for last mile to deliver seamless and delightful customer experiences. Talk to our experts."
     }
  </script>
    <script async="" src="https://static.hotjar.com/c/hotjar-2630183.js?sv=6"></script>
    <script async="" src="https://script.hotjar.com/modules.e691815239005b70eaea.js" charset="utf-8"></script>
    <style type="text/css">
        iframe#_hjRemoteVarsFrame {
            display: none !important;
            width: 1px !important;
            height: 1px !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }
    </style>
    <script src="https://bat.bing.com/p/action/149002219.js" type="text/javascript" async=""
        data-ueto="ueto_62fb6800ce"></script>
    <meta http-equiv="origin-trial"
        content="A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9">
    <script async="" src="https://static.hotjar.com/c/hotjar-2630183.js?sv=6"></script>
    <script src="https://cdn-apac.onetrust.com/scripttemplates/6.36.0/otBannerSdk.js" async=""
        type="text/javascript"></script>
    <script type="text/javascript" async=""
        src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/952282056/?random=1657484707464&amp;cv=9&amp;fst=1657484707464&amp;num=1&amp;label=AW-952282056&amp;bg=ffffff&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=720&amp;u_w=1280&amp;u_ah=672&amp;u_aw=1280&amp;u_cd=24&amp;u_his=6&amp;u_tz=180&amp;u_java=false&amp;u_nplug=5&amp;u_nmime=2&amp;gtm=2wg6t0&amp;sendb=1&amp;ig=1&amp;frm=0&amp;url=https%3A%2F%2Flocus.sh%2Fecommerce-logistics%2F&amp;ref=https%3A%2F%2Flocus.sh%2Fretail-logistics%2F&amp;tiba=E-Commerce%20Logistics%20Solutions%20for%20Last%20Mile%20%7C%20Locus&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
    <style id="onetrust-style">
        #onetrust-banner-sdk {
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%
        }

        #onetrust-banner-sdk .onetrust-vendors-list-handler {
            cursor: pointer;
            color: #1f96db;
            font-size: inherit;
            font-weight: bold;
            text-decoration: none;
            margin-left: 5px
        }

        #onetrust-banner-sdk .onetrust-vendors-list-handler:hover {
            color: #1f96db
        }

        #onetrust-banner-sdk:focus {
            outline: 2px solid #000;
            outline-offset: -2px
        }

        #onetrust-banner-sdk a:focus {
            outline: 2px solid #000
        }

        #onetrust-banner-sdk #onetrust-accept-btn-handler,
        #onetrust-banner-sdk #onetrust-reject-all-handler,
        #onetrust-banner-sdk #onetrust-pc-btn-handler {
            outline-offset: 1px
        }

        #onetrust-banner-sdk .ot-close-icon,
        #onetrust-pc-sdk .ot-close-icon,
        #ot-sync-ntfy .ot-close-icon {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzQ4LjMzM3B4IiBoZWlnaHQ9IjM0OC4zMzNweCIgdmlld0JveD0iMCAwIDM0OC4zMzMgMzQ4LjMzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQ4LjMzMyAzNDguMzM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzU2NTY1NiIgZD0iTTMzNi41NTksNjguNjExTDIzMS4wMTYsMTc0LjE2NWwxMDUuNTQzLDEwNS41NDljMTUuNjk5LDE1LjcwNSwxNS42OTksNDEuMTQ1LDAsNTYuODVjLTcuODQ0LDcuODQ0LTE4LjEyOCwxMS43NjktMjguNDA3LDExLjc2OWMtMTAuMjk2LDAtMjAuNTgxLTMuOTE5LTI4LjQxOS0xMS43NjlMMTc0LjE2NywyMzEuMDAzTDY4LjYwOSwzMzYuNTYzYy03Ljg0Myw3Ljg0NC0xOC4xMjgsMTEuNzY5LTI4LjQxNiwxMS43NjljLTEwLjI4NSwwLTIwLjU2My0zLjkxOS0yOC40MTMtMTEuNzY5Yy0xNS42OTktMTUuNjk4LTE1LjY5OS00MS4xMzksMC01Ni44NWwxMDUuNTQtMTA1LjU0OUwxMS43NzQsNjguNjExYy0xNS42OTktMTUuNjk5LTE1LjY5OS00MS4xNDUsMC01Ni44NDRjMTUuNjk2LTE1LjY4Nyw0MS4xMjctMTUuNjg3LDU2LjgyOSwwbDEwNS41NjMsMTA1LjU1NEwyNzkuNzIxLDExLjc2N2MxNS43MDUtMTUuNjg3LDQxLjEzOS0xNS42ODcsNTYuODMyLDBDMzUyLjI1OCwyNy40NjYsMzUyLjI1OCw1Mi45MTIsMzM2LjU1OSw2OC42MTF6Ii8+PC9nPjwvc3ZnPg==");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 12px;
            width: 12px
        }

        #onetrust-banner-sdk .powered-by-logo,
        #onetrust-banner-sdk .ot-pc-footer-logo a,
        #onetrust-pc-sdk .powered-by-logo,
        #onetrust-pc-sdk .ot-pc-footer-logo a,
        #ot-sync-ntfy .powered-by-logo,
        #ot-sync-ntfy .ot-pc-footer-logo a {
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 25px;
            width: 152px;
            display: block;
            text-decoration: none;
            font-size: 0.75em
        }

        #onetrust-banner-sdk .powered-by-logo:hover,
        #onetrust-banner-sdk .ot-pc-footer-logo a:hover,
        #onetrust-pc-sdk .powered-by-logo:hover,
        #onetrust-pc-sdk .ot-pc-footer-logo a:hover,
        #ot-sync-ntfy .powered-by-logo:hover,
        #ot-sync-ntfy .ot-pc-footer-logo a:hover {
            color: #565656
        }

        #onetrust-banner-sdk h3 *,
        #onetrust-banner-sdk h4 *,
        #onetrust-banner-sdk h6 *,
        #onetrust-banner-sdk button *,
        #onetrust-banner-sdk a[data-parent-id] *,
        #onetrust-pc-sdk h3 *,
        #onetrust-pc-sdk h4 *,
        #onetrust-pc-sdk h6 *,
        #onetrust-pc-sdk button *,
        #onetrust-pc-sdk a[data-parent-id] *,
        #ot-sync-ntfy h3 *,
        #ot-sync-ntfy h4 *,
        #ot-sync-ntfy h6 *,
        #ot-sync-ntfy button *,
        #ot-sync-ntfy a[data-parent-id] * {
            font-size: inherit;
            font-weight: inherit;
            color: inherit
        }

        #onetrust-banner-sdk .ot-hide,
        #onetrust-pc-sdk .ot-hide,
        #ot-sync-ntfy .ot-hide {
            display: none !important
        }

        #onetrust-banner-sdk button.ot-link-btn:hover,
        #onetrust-pc-sdk button.ot-link-btn:hover,
        #ot-sync-ntfy button.ot-link-btn:hover {
            text-decoration: underline;
            opacity: 1
        }

        #onetrust-pc-sdk .ot-sdk-row .ot-sdk-column {
            padding: 0
        }

        #onetrust-pc-sdk .ot-sdk-container {
            padding-right: 0
        }

        #onetrust-pc-sdk .ot-sdk-row {
            flex-direction: initial;
            width: 100%
        }

        #onetrust-pc-sdk [type="checkbox"]:checked,
        #onetrust-pc-sdk [type="checkbox"]:not(:checked) {
            pointer-events: initial
        }

        #onetrust-pc-sdk [type="checkbox"]:disabled+label::before,
        #onetrust-pc-sdk [type="checkbox"]:disabled+label:after,
        #onetrust-pc-sdk [type="checkbox"]:disabled+label {
            pointer-events: none;
            opacity: 0.7
        }

        #onetrust-pc-sdk #vendor-list-content {
            transform: translate3d(0, 0, 0)
        }

        #onetrust-pc-sdk li input[type="checkbox"] {
            z-index: 1
        }

        #onetrust-pc-sdk li .ot-checkbox label {
            z-index: 2
        }

        #onetrust-pc-sdk li .ot-checkbox input[type="checkbox"] {
            height: auto;
            width: auto
        }

        #onetrust-pc-sdk li .host-title a,
        #onetrust-pc-sdk li .ot-host-name a,
        #onetrust-pc-sdk li .accordion-text,
        #onetrust-pc-sdk li .ot-acc-txt {
            z-index: 2;
            position: relative
        }

        #onetrust-pc-sdk input {
            margin: 3px 0.1ex
        }

        #onetrust-pc-sdk .pc-logo,
        #onetrust-pc-sdk .ot-pc-logo {
            height: 60px;
            width: 180px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat
        }

        #onetrust-pc-sdk .screen-reader-only,
        #onetrust-pc-sdk .ot-scrn-rdr,
        .ot-sdk-cookie-policy .screen-reader-only,
        .ot-sdk-cookie-policy .ot-scrn-rdr {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px
        }

        #onetrust-pc-sdk.ot-fade-in,
        .onetrust-pc-dark-filter.ot-fade-in,
        #onetrust-banner-sdk.ot-fade-in {
            animation-name: onetrust-fade-in;
            animation-duration: 400ms;
            animation-timing-function: ease-in-out
        }

        #onetrust-pc-sdk.ot-hide {
            display: none !important
        }

        .onetrust-pc-dark-filter.ot-hide {
            display: none !important
        }

        #ot-sdk-btn.ot-sdk-show-settings,
        #ot-sdk-btn.optanon-show-settings {
            color: #68b631;
            border: 1px solid #68b631;
            height: auto;
            white-space: normal;
            word-wrap: break-word;
            padding: 0.8em 2em;
            font-size: 0.8em;
            line-height: 1.2;
            cursor: pointer;
            -moz-transition: 0.1s ease;
            -o-transition: 0.1s ease;
            -webkit-transition: 1s ease;
            transition: 0.1s ease
        }

        #ot-sdk-btn.ot-sdk-show-settings:hover,
        #ot-sdk-btn.optanon-show-settings:hover {
            color: #fff;
            background-color: #68b631
        }

        .onetrust-pc-dark-filter {
            background: rgba(0, 0, 0, 0.5);
            z-index: 2147483646;
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0
        }

        @keyframes onetrust-fade-in {
            0% {
                opacity: 0
            }

            100% {
                opacity: 1
            }
        }

        .ot-cookie-label {
            text-decoration: underline
        }

        @media only screen and (min-width: 426px) and (max-width: 896px) and (orientation: landscape) {
            #onetrust-pc-sdk p {
                font-size: 0.75em
            }
        }

        #onetrust-banner-sdk .banner-option-input:focus+label {
            outline: 1px solid #000;
            outline-style: auto
        }

        .category-vendors-list-handler+a:focus,
        .category-vendors-list-handler+a:focus-visible {
            outline: 2px solid #000
        }

        #onetrust-pc-sdk .ot-userid-title {
            margin-top: 10px
        }

        #onetrust-pc-sdk .ot-userid-title>span,
        #onetrust-pc-sdk .ot-userid-timestamp>span {
            font-weight: 700
        }

        #onetrust-pc-sdk .ot-userid-desc {
            font-style: italic
        }

        #onetrust-pc-sdk .ot-host-desc a {
            pointer-events: initial
        }

        #onetrust-pc-sdk .ot-ven-hdr>p a {
            position: relative;
            z-index: 2;
            pointer-events: initial
        }

        #onetrust-banner-sdk,
        #onetrust-pc-sdk,
        #ot-sdk-cookie-policy,
        #ot-sync-ntfy {
            font-size: 16px
        }

        #onetrust-banner-sdk *,
        #onetrust-banner-sdk ::after,
        #onetrust-banner-sdk ::before,
        #onetrust-pc-sdk *,
        #onetrust-pc-sdk ::after,
        #onetrust-pc-sdk ::before,
        #ot-sdk-cookie-policy *,
        #ot-sdk-cookie-policy ::after,
        #ot-sdk-cookie-policy ::before,
        #ot-sync-ntfy *,
        #ot-sync-ntfy ::after,
        #ot-sync-ntfy ::before {
            -webkit-box-sizing: content-box;
            -moz-box-sizing: content-box;
            box-sizing: content-box
        }

        #onetrust-banner-sdk div,
        #onetrust-banner-sdk span,
        #onetrust-banner-sdk h1,
        #onetrust-banner-sdk h2,
        #onetrust-banner-sdk h3,
        #onetrust-banner-sdk h4,
        #onetrust-banner-sdk h5,
        #onetrust-banner-sdk h6,
        #onetrust-banner-sdk p,
        #onetrust-banner-sdk img,
        #onetrust-banner-sdk svg,
        #onetrust-banner-sdk button,
        #onetrust-banner-sdk section,
        #onetrust-banner-sdk a,
        #onetrust-banner-sdk label,
        #onetrust-banner-sdk input,
        #onetrust-banner-sdk ul,
        #onetrust-banner-sdk li,
        #onetrust-banner-sdk nav,
        #onetrust-banner-sdk table,
        #onetrust-banner-sdk thead,
        #onetrust-banner-sdk tr,
        #onetrust-banner-sdk td,
        #onetrust-banner-sdk tbody,
        #onetrust-banner-sdk .ot-main-content,
        #onetrust-banner-sdk .ot-toggle,
        #onetrust-banner-sdk #ot-content,
        #onetrust-banner-sdk #ot-pc-content,
        #onetrust-banner-sdk .checkbox,
        #onetrust-pc-sdk div,
        #onetrust-pc-sdk span,
        #onetrust-pc-sdk h1,
        #onetrust-pc-sdk h2,
        #onetrust-pc-sdk h3,
        #onetrust-pc-sdk h4,
        #onetrust-pc-sdk h5,
        #onetrust-pc-sdk h6,
        #onetrust-pc-sdk p,
        #onetrust-pc-sdk img,
        #onetrust-pc-sdk svg,
        #onetrust-pc-sdk button,
        #onetrust-pc-sdk section,
        #onetrust-pc-sdk a,
        #onetrust-pc-sdk label,
        #onetrust-pc-sdk input,
        #onetrust-pc-sdk ul,
        #onetrust-pc-sdk li,
        #onetrust-pc-sdk nav,
        #onetrust-pc-sdk table,
        #onetrust-pc-sdk thead,
        #onetrust-pc-sdk tr,
        #onetrust-pc-sdk td,
        #onetrust-pc-sdk tbody,
        #onetrust-pc-sdk .ot-main-content,
        #onetrust-pc-sdk .ot-toggle,
        #onetrust-pc-sdk #ot-content,
        #onetrust-pc-sdk #ot-pc-content,
        #onetrust-pc-sdk .checkbox,
        #ot-sdk-cookie-policy div,
        #ot-sdk-cookie-policy span,
        #ot-sdk-cookie-policy h1,
        #ot-sdk-cookie-policy h2,
        #ot-sdk-cookie-policy h3,
        #ot-sdk-cookie-policy h4,
        #ot-sdk-cookie-policy h5,
        #ot-sdk-cookie-policy h6,
        #ot-sdk-cookie-policy p,
        #ot-sdk-cookie-policy img,
        #ot-sdk-cookie-policy svg,
        #ot-sdk-cookie-policy button,
        #ot-sdk-cookie-policy section,
        #ot-sdk-cookie-policy a,
        #ot-sdk-cookie-policy label,
        #ot-sdk-cookie-policy input,
        #ot-sdk-cookie-policy ul,
        #ot-sdk-cookie-policy li,
        #ot-sdk-cookie-policy nav,
        #ot-sdk-cookie-policy table,
        #ot-sdk-cookie-policy thead,
        #ot-sdk-cookie-policy tr,
        #ot-sdk-cookie-policy td,
        #ot-sdk-cookie-policy tbody,
        #ot-sdk-cookie-policy .ot-main-content,
        #ot-sdk-cookie-policy .ot-toggle,
        #ot-sdk-cookie-policy #ot-content,
        #ot-sdk-cookie-policy #ot-pc-content,
        #ot-sdk-cookie-policy .checkbox,
        #ot-sync-ntfy div,
        #ot-sync-ntfy span,
        #ot-sync-ntfy h1,
        #ot-sync-ntfy h2,
        #ot-sync-ntfy h3,
        #ot-sync-ntfy h4,
        #ot-sync-ntfy h5,
        #ot-sync-ntfy h6,
        #ot-sync-ntfy p,
        #ot-sync-ntfy img,
        #ot-sync-ntfy svg,
        #ot-sync-ntfy button,
        #ot-sync-ntfy section,
        #ot-sync-ntfy a,
        #ot-sync-ntfy label,
        #ot-sync-ntfy input,
        #ot-sync-ntfy ul,
        #ot-sync-ntfy li,
        #ot-sync-ntfy nav,
        #ot-sync-ntfy table,
        #ot-sync-ntfy thead,
        #ot-sync-ntfy tr,
        #ot-sync-ntfy td,
        #ot-sync-ntfy tbody,
        #ot-sync-ntfy .ot-main-content,
        #ot-sync-ntfy .ot-toggle,
        #ot-sync-ntfy #ot-content,
        #ot-sync-ntfy #ot-pc-content,
        #ot-sync-ntfy .checkbox {
            font-family: inherit;
            font-weight: normal;
            -webkit-font-smoothing: auto;
            letter-spacing: normal;
            line-height: normal;
            padding: 0;
            margin: 0;
            height: auto;
            min-height: 0;
            max-height: none;
            width: auto;
            min-width: 0;
            max-width: none;
            border-radius: 0;
            border: none;
            clear: none;
            float: none;
            position: static;
            bottom: auto;
            left: auto;
            right: auto;
            top: auto;
            text-align: left;
            text-decoration: none;
            text-indent: 0;
            text-shadow: none;
            text-transform: none;
            white-space: normal;
            background: none;
            overflow: visible;
            vertical-align: baseline;
            visibility: visible;
            z-index: auto;
            box-shadow: none
        }

        #onetrust-banner-sdk label:before,
        #onetrust-banner-sdk label:after,
        #onetrust-banner-sdk .checkbox:after,
        #onetrust-banner-sdk .checkbox:before,
        #onetrust-pc-sdk label:before,
        #onetrust-pc-sdk label:after,
        #onetrust-pc-sdk .checkbox:after,
        #onetrust-pc-sdk .checkbox:before,
        #ot-sdk-cookie-policy label:before,
        #ot-sdk-cookie-policy label:after,
        #ot-sdk-cookie-policy .checkbox:after,
        #ot-sdk-cookie-policy .checkbox:before,
        #ot-sync-ntfy label:before,
        #ot-sync-ntfy label:after,
        #ot-sync-ntfy .checkbox:after,
        #ot-sync-ntfy .checkbox:before {
            content: "";
            content: none
        }

        #onetrust-banner-sdk .ot-sdk-container,
        #onetrust-pc-sdk .ot-sdk-container,
        #ot-sdk-cookie-policy .ot-sdk-container {
            position: relative;
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
            padding: 0 20px;
            box-sizing: border-box
        }

        #onetrust-banner-sdk .ot-sdk-column,
        #onetrust-banner-sdk .ot-sdk-columns,
        #onetrust-pc-sdk .ot-sdk-column,
        #onetrust-pc-sdk .ot-sdk-columns,
        #ot-sdk-cookie-policy .ot-sdk-column,
        #ot-sdk-cookie-policy .ot-sdk-columns {
            width: 100%;
            float: left;
            box-sizing: border-box;
            padding: 0;
            display: initial
        }

        @media (min-width: 400px) {

            #onetrust-banner-sdk .ot-sdk-container,
            #onetrust-pc-sdk .ot-sdk-container,
            #ot-sdk-cookie-policy .ot-sdk-container {
                width: 90%;
                padding: 0
            }
        }

        @media (min-width: 550px) {

            #onetrust-banner-sdk .ot-sdk-container,
            #onetrust-pc-sdk .ot-sdk-container,
            #ot-sdk-cookie-policy .ot-sdk-container {
                width: 100%
            }

            #onetrust-banner-sdk .ot-sdk-column,
            #onetrust-banner-sdk .ot-sdk-columns,
            #onetrust-pc-sdk .ot-sdk-column,
            #onetrust-pc-sdk .ot-sdk-columns,
            #ot-sdk-cookie-policy .ot-sdk-column,
            #ot-sdk-cookie-policy .ot-sdk-columns {
                margin-left: 4%
            }

            #onetrust-banner-sdk .ot-sdk-column:first-child,
            #onetrust-banner-sdk .ot-sdk-columns:first-child,
            #onetrust-pc-sdk .ot-sdk-column:first-child,
            #onetrust-pc-sdk .ot-sdk-columns:first-child,
            #ot-sdk-cookie-policy .ot-sdk-column:first-child,
            #ot-sdk-cookie-policy .ot-sdk-columns:first-child {
                margin-left: 0
            }

            #onetrust-banner-sdk .ot-sdk-two.ot-sdk-columns,
            #onetrust-pc-sdk .ot-sdk-two.ot-sdk-columns,
            #ot-sdk-cookie-policy .ot-sdk-two.ot-sdk-columns {
                width: 13.3333333333%
            }

            #onetrust-banner-sdk .ot-sdk-three.ot-sdk-columns,
            #onetrust-pc-sdk .ot-sdk-three.ot-sdk-columns,
            #ot-sdk-cookie-policy .ot-sdk-three.ot-sdk-columns {
                width: 22%
            }

            #onetrust-banner-sdk .ot-sdk-four.ot-sdk-columns,
            #onetrust-pc-sdk .ot-sdk-four.ot-sdk-columns,
            #ot-sdk-cookie-policy .ot-sdk-four.ot-sdk-columns {
                width: 30.6666666667%
            }

            #onetrust-banner-sdk .ot-sdk-eight.ot-sdk-columns,
            #onetrust-pc-sdk .ot-sdk-eight.ot-sdk-columns,
            #ot-sdk-cookie-policy .ot-sdk-eight.ot-sdk-columns {
                width: 65.3333333333%
            }

            #onetrust-banner-sdk .ot-sdk-nine.ot-sdk-columns,
            #onetrust-pc-sdk .ot-sdk-nine.ot-sdk-columns,
            #ot-sdk-cookie-policy .ot-sdk-nine.ot-sdk-columns {
                width: 74%
            }

            #onetrust-banner-sdk .ot-sdk-ten.ot-sdk-columns,
            #onetrust-pc-sdk .ot-sdk-ten.ot-sdk-columns,
            #ot-sdk-cookie-policy .ot-sdk-ten.ot-sdk-columns {
                width: 82.6666666667%
            }

            #onetrust-banner-sdk .ot-sdk-eleven.ot-sdk-columns,
            #onetrust-pc-sdk .ot-sdk-eleven.ot-sdk-columns,
            #ot-sdk-cookie-policy .ot-sdk-eleven.ot-sdk-columns {
                width: 91.3333333333%
            }

            #onetrust-banner-sdk .ot-sdk-twelve.ot-sdk-columns,
            #onetrust-pc-sdk .ot-sdk-twelve.ot-sdk-columns,
            #ot-sdk-cookie-policy .ot-sdk-twelve.ot-sdk-columns {
                width: 100%;
                margin-left: 0
            }
        }

        #onetrust-banner-sdk h1,
        #onetrust-banner-sdk h2,
        #onetrust-banner-sdk h3,
        #onetrust-banner-sdk h4,
        #onetrust-banner-sdk h5,
        #onetrust-banner-sdk h6,
        #onetrust-pc-sdk h1,
        #onetrust-pc-sdk h2,
        #onetrust-pc-sdk h3,
        #onetrust-pc-sdk h4,
        #onetrust-pc-sdk h5,
        #onetrust-pc-sdk h6,
        #ot-sdk-cookie-policy h1,
        #ot-sdk-cookie-policy h2,
        #ot-sdk-cookie-policy h3,
        #ot-sdk-cookie-policy h4,
        #ot-sdk-cookie-policy h5,
        #ot-sdk-cookie-policy h6 {
            margin-top: 0;
            font-weight: 600;
            font-family: inherit
        }

        #onetrust-banner-sdk h1,
        #onetrust-pc-sdk h1,
        #ot-sdk-cookie-policy h1 {
            font-size: 1.5rem;
            line-height: 1.2
        }

        #onetrust-banner-sdk h2,
        #onetrust-pc-sdk h2,
        #ot-sdk-cookie-policy h2 {
            font-size: 1.5rem;
            line-height: 1.25
        }

        #onetrust-banner-sdk h3,
        #onetrust-pc-sdk h3,
        #ot-sdk-cookie-policy h3 {
            font-size: 1.5rem;
            line-height: 1.3
        }

        #onetrust-banner-sdk h4,
        #onetrust-pc-sdk h4,
        #ot-sdk-cookie-policy h4 {
            font-size: 1.5rem;
            line-height: 1.35
        }

        #onetrust-banner-sdk h5,
        #onetrust-pc-sdk h5,
        #ot-sdk-cookie-policy h5 {
            font-size: 1.5rem;
            line-height: 1.5
        }

        #onetrust-banner-sdk h6,
        #onetrust-pc-sdk h6,
        #ot-sdk-cookie-policy h6 {
            font-size: 1.5rem;
            line-height: 1.6
        }

        @media (min-width: 550px) {

            #onetrust-banner-sdk h1,
            #onetrust-pc-sdk h1,
            #ot-sdk-cookie-policy h1 {
                font-size: 1.5rem
            }

            #onetrust-banner-sdk h2,
            #onetrust-pc-sdk h2,
            #ot-sdk-cookie-policy h2 {
                font-size: 1.5rem
            }

            #onetrust-banner-sdk h3,
            #onetrust-pc-sdk h3,
            #ot-sdk-cookie-policy h3 {
                font-size: 1.5rem
            }

            #onetrust-banner-sdk h4,
            #onetrust-pc-sdk h4,
            #ot-sdk-cookie-policy h4 {
                font-size: 1.5rem
            }

            #onetrust-banner-sdk h5,
            #onetrust-pc-sdk h5,
            #ot-sdk-cookie-policy h5 {
                font-size: 1.5rem
            }

            #onetrust-banner-sdk h6,
            #onetrust-pc-sdk h6,
            #ot-sdk-cookie-policy h6 {
                font-size: 1.5rem
            }
        }

        #onetrust-banner-sdk p,
        #onetrust-pc-sdk p,
        #ot-sdk-cookie-policy p {
            margin: 0 0 1em 0;
            font-family: inherit;
            line-height: normal
        }

        #onetrust-banner-sdk a,
        #onetrust-pc-sdk a,
        #ot-sdk-cookie-policy a {
            color: #565656;
            text-decoration: underline
        }

        #onetrust-banner-sdk a:hover,
        #onetrust-pc-sdk a:hover,
        #ot-sdk-cookie-policy a:hover {
            color: #565656;
            text-decoration: none
        }

        #onetrust-banner-sdk .ot-sdk-button,
        #onetrust-banner-sdk button,
        #onetrust-pc-sdk .ot-sdk-button,
        #onetrust-pc-sdk button,
        #ot-sdk-cookie-policy .ot-sdk-button,
        #ot-sdk-cookie-policy button {
            margin-bottom: 1rem;
            font-family: inherit
        }

        #onetrust-banner-sdk .ot-sdk-button,
        #onetrust-banner-sdk button,
        #onetrust-pc-sdk .ot-sdk-button,
        #onetrust-pc-sdk button,
        #ot-sdk-cookie-policy .ot-sdk-button,
        #ot-sdk-cookie-policy button {
            display: inline-block;
            height: 38px;
            padding: 0 30px;
            color: #555;
            text-align: center;
            font-size: 0.9em;
            font-weight: 400;
            line-height: 38px;
            letter-spacing: 0.01em;
            text-decoration: none;
            white-space: nowrap;
            background-color: transparent;
            border-radius: 2px;
            border: 1px solid #bbb;
            cursor: pointer;
            box-sizing: border-box
        }

        #onetrust-banner-sdk .ot-sdk-button:hover,
        #onetrust-banner-sdk :not(.ot-leg-btn-container)>button:not(.ot-link-btn):hover,
        #onetrust-banner-sdk :not(.ot-leg-btn-container)>button:not(.ot-link-btn):focus,
        #onetrust-pc-sdk .ot-sdk-button:hover,
        #onetrust-pc-sdk :not(.ot-leg-btn-container)>button:not(.ot-link-btn):hover,
        #onetrust-pc-sdk :not(.ot-leg-btn-container)>button:not(.ot-link-btn):focus,
        #ot-sdk-cookie-policy .ot-sdk-button:hover,
        #ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:not(.ot-link-btn):hover,
        #ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:not(.ot-link-btn):focus {
            color: #333;
            border-color: #888;
            opacity: 0.7
        }

        #onetrust-banner-sdk .ot-sdk-button:focus,
        #onetrust-banner-sdk :not(.ot-leg-btn-container)>button:focus,
        #onetrust-pc-sdk .ot-sdk-button:focus,
        #onetrust-pc-sdk :not(.ot-leg-btn-container)>button:focus,
        #ot-sdk-cookie-policy .ot-sdk-button:focus,
        #ot-sdk-cookie-policy :not(.ot-leg-btn-container)>button:focus {
            outline: 2px solid #000
        }

        #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary,
        #onetrust-banner-sdk button.ot-sdk-button-primary,
        #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary,
        #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary,
        #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary,
        #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary,
        #onetrust-pc-sdk button.ot-sdk-button-primary,
        #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary,
        #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary,
        #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary,
        #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary,
        #ot-sdk-cookie-policy button.ot-sdk-button-primary,
        #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary,
        #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary,
        #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary {
            color: #fff;
            background-color: #33c3f0;
            border-color: #33c3f0
        }

        #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:hover,
        #onetrust-banner-sdk button.ot-sdk-button-primary:hover,
        #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:hover,
        #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:hover,
        #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:hover,
        #onetrust-banner-sdk .ot-sdk-button.ot-sdk-button-primary:focus,
        #onetrust-banner-sdk button.ot-sdk-button-primary:focus,
        #onetrust-banner-sdk input[type="submit"].ot-sdk-button-primary:focus,
        #onetrust-banner-sdk input[type="reset"].ot-sdk-button-primary:focus,
        #onetrust-banner-sdk input[type="button"].ot-sdk-button-primary:focus,
        #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:hover,
        #onetrust-pc-sdk button.ot-sdk-button-primary:hover,
        #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:hover,
        #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:hover,
        #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:hover,
        #onetrust-pc-sdk .ot-sdk-button.ot-sdk-button-primary:focus,
        #onetrust-pc-sdk button.ot-sdk-button-primary:focus,
        #onetrust-pc-sdk input[type="submit"].ot-sdk-button-primary:focus,
        #onetrust-pc-sdk input[type="reset"].ot-sdk-button-primary:focus,
        #onetrust-pc-sdk input[type="button"].ot-sdk-button-primary:focus,
        #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:hover,
        #ot-sdk-cookie-policy button.ot-sdk-button-primary:hover,
        #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:hover,
        #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:hover,
        #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:hover,
        #ot-sdk-cookie-policy .ot-sdk-button.ot-sdk-button-primary:focus,
        #ot-sdk-cookie-policy button.ot-sdk-button-primary:focus,
        #ot-sdk-cookie-policy input[type="submit"].ot-sdk-button-primary:focus,
        #ot-sdk-cookie-policy input[type="reset"].ot-sdk-button-primary:focus,
        #ot-sdk-cookie-policy input[type="button"].ot-sdk-button-primary:focus {
            color: #fff;
            background-color: #1eaedb;
            border-color: #1eaedb
        }

        #onetrust-banner-sdk input[type="text"],
        #onetrust-pc-sdk input[type="text"],
        #ot-sdk-cookie-policy input[type="text"] {
            height: 38px;
            padding: 6px 10px;
            background-color: #fff;
            border: 1px solid #d1d1d1;
            border-radius: 4px;
            box-shadow: none;
            box-sizing: border-box
        }

        #onetrust-banner-sdk input[type="text"],
        #onetrust-pc-sdk input[type="text"],
        #ot-sdk-cookie-policy input[type="text"] {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none
        }

        #onetrust-banner-sdk input[type="text"]:focus,
        #onetrust-pc-sdk input[type="text"]:focus,
        #ot-sdk-cookie-policy input[type="text"]:focus {
            border: 1px solid #000;
            outline: 0
        }

        #onetrust-banner-sdk label,
        #onetrust-pc-sdk label,
        #ot-sdk-cookie-policy label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600
        }

        #onetrust-banner-sdk input[type="checkbox"],
        #onetrust-pc-sdk input[type="checkbox"],
        #ot-sdk-cookie-policy input[type="checkbox"] {
            display: inline
        }

        #onetrust-banner-sdk ul,
        #onetrust-pc-sdk ul,
        #ot-sdk-cookie-policy ul {
            list-style: circle inside
        }

        #onetrust-banner-sdk ul,
        #onetrust-pc-sdk ul,
        #ot-sdk-cookie-policy ul {
            padding-left: 0;
            margin-top: 0
        }

        #onetrust-banner-sdk ul ul,
        #onetrust-pc-sdk ul ul,
        #ot-sdk-cookie-policy ul ul {
            margin: 1.5rem 0 1.5rem 3rem;
            font-size: 90%
        }

        #onetrust-banner-sdk li,
        #onetrust-pc-sdk li,
        #ot-sdk-cookie-policy li {
            margin-bottom: 1rem
        }

        #onetrust-banner-sdk th,
        #onetrust-banner-sdk td,
        #onetrust-pc-sdk th,
        #onetrust-pc-sdk td,
        #ot-sdk-cookie-policy th,
        #ot-sdk-cookie-policy td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #e1e1e1
        }

        #onetrust-banner-sdk button,
        #onetrust-pc-sdk button,
        #ot-sdk-cookie-policy button {
            margin-bottom: 1rem;
            font-family: inherit
        }

        #onetrust-banner-sdk .ot-sdk-container:after,
        #onetrust-banner-sdk .ot-sdk-row:after,
        #onetrust-pc-sdk .ot-sdk-container:after,
        #onetrust-pc-sdk .ot-sdk-row:after,
        #ot-sdk-cookie-policy .ot-sdk-container:after,
        #ot-sdk-cookie-policy .ot-sdk-row:after {
            content: "";
            display: table;
            clear: both
        }

        #onetrust-banner-sdk .ot-sdk-row,
        #onetrust-pc-sdk .ot-sdk-row,
        #ot-sdk-cookie-policy .ot-sdk-row {
            margin: 0;
            max-width: none;
            display: block
        }

        #onetrust-banner-sdk {
            box-shadow: 0 0 18px rgba(0, 0, 0, .2)
        }

        #onetrust-banner-sdk.otFlat {
            position: fixed;
            z-index: 2147483645;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: #fff;
            max-height: 90%;
            overflow-x: hidden;
            overflow-y: auto
        }

        #onetrust-banner-sdk.otFlat.top {
            top: 0px;
            bottom: auto
        }

        #onetrust-banner-sdk.otRelFont {
            font-size: 1rem
        }

        #onetrust-banner-sdk>.ot-sdk-container {
            overflow: hidden
        }

        #onetrust-banner-sdk::-webkit-scrollbar {
            width: 11px
        }

        #onetrust-banner-sdk::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: #c1c1c1
        }

        #onetrust-banner-sdk {
            scrollbar-arrow-color: #c1c1c1;
            scrollbar-darkshadow-color: #c1c1c1;
            scrollbar-face-color: #c1c1c1;
            scrollbar-shadow-color: #c1c1c1
        }

        #onetrust-banner-sdk #onetrust-policy {
            margin: 1.25em 0 .625em 2em;
            overflow: hidden
        }

        #onetrust-banner-sdk #onetrust-policy .ot-gv-list-handler {
            float: left;
            font-size: .82em;
            padding: 0;
            margin-bottom: 0;
            border: 0;
            line-height: normal;
            height: auto;
            width: auto
        }

        #onetrust-banner-sdk #onetrust-policy-title {
            font-size: 1.2em;
            line-height: 1.3;
            margin-bottom: 10px
        }

        #onetrust-banner-sdk #onetrust-policy-text {
            clear: both;
            text-align: left;
            font-size: .88em;
            line-height: 1.4
        }

        #onetrust-banner-sdk #onetrust-policy-text * {
            font-size: inherit;
            line-height: inherit
        }

        #onetrust-banner-sdk #onetrust-policy-text a {
            font-weight: bold;
            margin-left: 5px
        }

        #onetrust-banner-sdk #onetrust-policy-title,
        #onetrust-banner-sdk #onetrust-policy-text {
            color: dimgray;
            float: left
        }

        #onetrust-banner-sdk #onetrust-button-group-parent {
            min-height: 1px;
            text-align: center
        }

        #onetrust-banner-sdk #onetrust-button-group {
            display: inline-block
        }

        #onetrust-banner-sdk #onetrust-accept-btn-handler,
        #onetrust-banner-sdk #onetrust-reject-all-handler,
        #onetrust-banner-sdk #onetrust-pc-btn-handler {
            background-color: #68b631;
            color: #fff;
            border-color: #68b631;
            margin-right: 1em;
            min-width: 125px;
            height: auto;
            white-space: normal;
            word-break: break-word;
            word-wrap: break-word;
            padding: 12px 10px;
            line-height: 1.2;
            font-size: .813em;
            font-weight: 600
        }

        #onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {
            background-color: #fff;
            border: none;
            color: #68b631;
            text-decoration: underline;
            padding-left: 0;
            padding-right: 0
        }

        #onetrust-banner-sdk .onetrust-close-btn-ui {
            width: 44px;
            height: 44px;
            background-size: 12px;
            border: none;
            position: relative;
            margin: auto;
            padding: 0
        }

        #onetrust-banner-sdk .banner_logo {
            display: none
        }

        #onetrust-banner-sdk .ot-b-addl-desc {
            clear: both;
            float: left;
            display: block
        }

        #onetrust-banner-sdk #banner-options {
            float: left;
            display: table;
            margin-right: 0;
            margin-left: 1em;
            width: calc(100% - 1em)
        }

        #onetrust-banner-sdk .banner-option-input {
            cursor: pointer;
            width: auto;
            height: auto;
            border: none;
            padding: 0;
            padding-right: 3px;
            margin: 0 0 10px;
            font-size: .82em;
            line-height: 1.4
        }

        #onetrust-banner-sdk .banner-option-input * {
            pointer-events: none;
            font-size: inherit;
            line-height: inherit
        }

        #onetrust-banner-sdk .banner-option-input[aria-expanded=true]~.banner-option-details {
            display: block;
            height: auto
        }

        #onetrust-banner-sdk .banner-option-input[aria-expanded=true] .ot-arrow-container {
            transform: rotate(90deg)
        }

        #onetrust-banner-sdk .banner-option {
            margin-bottom: 12px;
            margin-left: 0;
            border: none;
            float: left;
            padding: 0
        }

        #onetrust-banner-sdk .banner-option:first-child {
            padding-left: 2px
        }

        #onetrust-banner-sdk .banner-option:not(:first-child) {
            padding: 0;
            border: none
        }

        #onetrust-banner-sdk .banner-option-header {
            cursor: pointer;
            display: inline-block
        }

        #onetrust-banner-sdk .banner-option-header :first-child {
            color: dimgray;
            font-weight: bold;
            float: left
        }

        #onetrust-banner-sdk .banner-option-header .ot-arrow-container {
            display: inline-block;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-left: 6px solid dimgray;
            margin-left: 10px;
            vertical-align: middle
        }

        #onetrust-banner-sdk .banner-option-details {
            display: none;
            font-size: .83em;
            line-height: 1.5;
            padding: 10px 0px 5px 10px;
            margin-right: 10px;
            height: 0px
        }

        #onetrust-banner-sdk .banner-option-details * {
            font-size: inherit;
            line-height: inherit;
            color: dimgray
        }

        #onetrust-banner-sdk .ot-arrow-container,
        #onetrust-banner-sdk .banner-option-details {
            transition: all 300ms ease-in 0s;
            -webkit-transition: all 300ms ease-in 0s;
            -moz-transition: all 300ms ease-in 0s;
            -o-transition: all 300ms ease-in 0s
        }

        #onetrust-banner-sdk .ot-dpd-container {
            float: left
        }

        #onetrust-banner-sdk .ot-dpd-title {
            margin-bottom: 10px
        }

        #onetrust-banner-sdk .ot-dpd-title,
        #onetrust-banner-sdk .ot-dpd-desc {
            font-size: .88em;
            line-height: 1.4;
            color: dimgray
        }

        #onetrust-banner-sdk .ot-dpd-title *,
        #onetrust-banner-sdk .ot-dpd-desc * {
            font-size: inherit;
            line-height: inherit
        }

        #onetrust-banner-sdk.ot-iab-2 #onetrust-policy-text * {
            margin-bottom: 0
        }

        #onetrust-banner-sdk.ot-iab-2 .onetrust-vendors-list-handler {
            display: block;
            margin-left: 0;
            margin-top: 5px;
            clear: both;
            margin-bottom: 0;
            padding: 0;
            border: 0;
            height: auto;
            width: auto
        }

        #onetrust-banner-sdk.ot-iab-2 #onetrust-button-group button {
            display: block
        }

        #onetrust-banner-sdk.ot-close-btn-link {
            padding-top: 25px
        }

        #onetrust-banner-sdk.ot-close-btn-link #onetrust-close-btn-container {
            top: 15px;
            transform: none;
            right: 15px
        }

        #onetrust-banner-sdk.ot-close-btn-link #onetrust-close-btn-container button {
            padding: 0;
            white-space: pre-wrap;
            border: none;
            height: auto;
            line-height: 1.5;
            text-decoration: underline;
            font-size: .69em
        }

        #onetrust-banner-sdk #onetrust-policy-text,
        #onetrust-banner-sdk .ot-dpd-desc,
        #onetrust-banner-sdk .ot-b-addl-desc {
            font-size: .813em;
            line-height: 1.5
        }

        #onetrust-banner-sdk .ot-dpd-desc {
            margin-bottom: 10px
        }

        #onetrust-banner-sdk .ot-dpd-desc>.ot-b-addl-desc {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 1em
        }

        @media only screen and (max-width: 425px) {
            #onetrust-banner-sdk #onetrust-close-btn-container {
                position: absolute;
                top: 6px;
                right: 2px
            }

            #onetrust-banner-sdk #onetrust-policy {
                margin-left: 0;
                margin-top: 3em
            }

            #onetrust-banner-sdk #onetrust-button-group {
                display: block
            }

            #onetrust-banner-sdk #onetrust-accept-btn-handler,
            #onetrust-banner-sdk #onetrust-reject-all-handler,
            #onetrust-banner-sdk #onetrust-pc-btn-handler {
                width: 100%
            }

            #onetrust-banner-sdk .onetrust-close-btn-ui {
                top: auto;
                transform: none
            }

            #onetrust-banner-sdk #onetrust-policy-title {
                display: inline;
                float: none
            }

            #onetrust-banner-sdk #banner-options {
                margin: 0;
                padding: 0;
                width: 100%
            }
        }

        @media only screen and (min-width: 426px)and (max-width: 896px) {
            #onetrust-banner-sdk #onetrust-close-btn-container {
                position: absolute;
                top: 0;
                right: 0
            }

            #onetrust-banner-sdk #onetrust-policy {
                margin-left: 1em;
                margin-right: 1em
            }

            #onetrust-banner-sdk .onetrust-close-btn-ui {
                top: 10px;
                right: 10px
            }

            #onetrust-banner-sdk:not(.ot-iab-2) #onetrust-group-container {
                width: 95%
            }

            #onetrust-banner-sdk.ot-iab-2 #onetrust-group-container {
                width: 100%
            }

            #onetrust-banner-sdk #onetrust-button-group-parent {
                width: 100%;
                position: relative;
                margin-left: 0
            }

            #onetrust-banner-sdk #onetrust-button-group button {
                display: inline-block
            }

            #onetrust-banner-sdk #onetrust-button-group {
                margin-right: 0;
                text-align: center
            }

            #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler {
                float: left
            }

            #onetrust-banner-sdk .has-reject-all-button #onetrust-reject-all-handler,
            #onetrust-banner-sdk .has-reject-all-button #onetrust-accept-btn-handler {
                float: right
            }

            #onetrust-banner-sdk .has-reject-all-button #onetrust-button-group {
                width: calc(100% - 2em);
                margin-right: 0
            }

            #onetrust-banner-sdk .has-reject-all-button #onetrust-pc-btn-handler.cookie-setting-link {
                padding-left: 0px;
                text-align: left
            }

            #onetrust-banner-sdk.ot-buttons-fw .ot-sdk-three button {
                width: 100%;
                text-align: center
            }

            #onetrust-banner-sdk.ot-buttons-fw #onetrust-button-group-parent button {
                float: none
            }

            #onetrust-banner-sdk.ot-buttons-fw #onetrust-pc-btn-handler.cookie-setting-link {
                text-align: center
            }
        }

        @media only screen and (min-width: 550px) {
            #onetrust-banner-sdk .banner-option:not(:first-child) {
                border-left: 1px solid #d8d8d8;
                padding-left: 25px
            }
        }

        @media only screen and (min-width: 425px)and (max-width: 550px) {

            #onetrust-banner-sdk.ot-iab-2 #onetrust-button-group,
            #onetrust-banner-sdk.ot-iab-2 #onetrust-policy,
            #onetrust-banner-sdk.ot-iab-2 .banner-option {
                width: 100%
            }
        }

        @media only screen and (min-width: 769px) {
            #onetrust-banner-sdk #onetrust-button-group {
                margin-right: 30%
            }

            #onetrust-banner-sdk #banner-options {
                margin-left: 2em;
                margin-right: 5em;
                margin-bottom: 1.25em;
                width: calc(100% - 7em)
            }
        }

        @media only screen and (min-width: 897px)and (max-width: 1023px) {
            #onetrust-banner-sdk.vertical-align-content #onetrust-button-group-parent {
                position: absolute;
                top: 50%;
                left: 75%;
                transform: translateY(-50%)
            }

            #onetrust-banner-sdk #onetrust-close-btn-container {
                top: 50%;
                margin: auto;
                transform: translate(-50%, -50%);
                position: absolute;
                padding: 0;
                right: 0
            }

            #onetrust-banner-sdk #onetrust-close-btn-container button {
                position: relative;
                margin: 0;
                right: -22px;
                top: 2px
            }
        }

        @media only screen and (min-width: 1024px) {
            #onetrust-banner-sdk #onetrust-close-btn-container {
                top: 50%;
                margin: auto;
                transform: translate(-50%, -50%);
                position: absolute;
                right: 0
            }

            #onetrust-banner-sdk #onetrust-close-btn-container button {
                right: -12px
            }

            #onetrust-banner-sdk #onetrust-policy {
                margin-left: 2em
            }

            #onetrust-banner-sdk.vertical-align-content #onetrust-button-group-parent {
                position: absolute;
                top: 50%;
                left: 60%;
                transform: translateY(-50%)
            }

            #onetrust-banner-sdk.ot-iab-2 #onetrust-policy-title {
                width: 50%
            }

            #onetrust-banner-sdk.ot-iab-2 #onetrust-policy-text,
            #onetrust-banner-sdk.ot-iab-2 :not(.ot-dpd-desc)>.ot-b-addl-desc {
                margin-bottom: 1em;
                width: 50%;
                border-right: 1px solid #d8d8d8;
                padding-right: 1rem
            }

            #onetrust-banner-sdk.ot-iab-2 #onetrust-policy-text {
                margin-bottom: 0;
                padding-bottom: 1em
            }

            #onetrust-banner-sdk.ot-iab-2 :not(.ot-dpd-desc)>.ot-b-addl-desc {
                margin-bottom: 0;
                padding-bottom: 1em
            }

            #onetrust-banner-sdk.ot-iab-2 .ot-dpd-container {
                width: 45%;
                padding-left: 1rem;
                display: inline-block;
                float: none
            }

            #onetrust-banner-sdk.ot-iab-2 .ot-dpd-title {
                line-height: 1.7
            }

            #onetrust-banner-sdk.ot-iab-2 #onetrust-button-group-parent {
                left: auto;
                right: 4%;
                margin-left: 0
            }

            #onetrust-banner-sdk.ot-iab-2 #onetrust-button-group button {
                display: block
            }

            #onetrust-banner-sdk:not(.ot-iab-2) #onetrust-button-group-parent {
                margin: auto;
                width: 30%
            }

            #onetrust-banner-sdk:not(.ot-iab-2) #onetrust-group-container {
                width: 60%
            }

            #onetrust-banner-sdk #onetrust-button-group {
                margin-right: auto
            }

            #onetrust-banner-sdk #onetrust-accept-btn-handler,
            #onetrust-banner-sdk #onetrust-reject-all-handler,
            #onetrust-banner-sdk #onetrust-pc-btn-handler {
                margin-top: 1em
            }
        }

        @media only screen and (min-width: 890px) {
            #onetrust-banner-sdk.ot-buttons-fw:not(.ot-iab-2) #onetrust-button-group-parent {
                padding-left: 3%;
                padding-right: 4%;
                margin-left: 0
            }

            #onetrust-banner-sdk.ot-buttons-fw:not(.ot-iab-2) #onetrust-button-group {
                margin-right: 0;
                margin-top: 1.25em;
                width: 100%
            }

            #onetrust-banner-sdk.ot-buttons-fw:not(.ot-iab-2) #onetrust-button-group button {
                width: 100%;
                margin-bottom: 5px;
                margin-top: 5px
            }

            #onetrust-banner-sdk.ot-buttons-fw:not(.ot-iab-2) #onetrust-button-group button:last-of-type {
                margin-bottom: 20px
            }
        }

        @media only screen and (min-width: 1280px) {
            #onetrust-banner-sdk:not(.ot-iab-2) #onetrust-group-container {
                width: 55%
            }

            #onetrust-banner-sdk:not(.ot-iab-2) #onetrust-button-group-parent {
                width: 44%;
                padding-left: 2%;
                padding-right: 2%
            }

            #onetrust-banner-sdk:not(.ot-iab-2).vertical-align-content #onetrust-button-group-parent {
                position: absolute;
                left: 55%
            }
        }

        #onetrust-consent-sdk #onetrust-banner-sdk {
            background-color: #FFFFFF;
        }

        #onetrust-consent-sdk #onetrust-policy-title,
        #onetrust-consent-sdk #onetrust-policy-text,
        #onetrust-consent-sdk .ot-b-addl-desc,
        #onetrust-consent-sdk .ot-dpd-desc,
        #onetrust-consent-sdk .ot-dpd-title,
        #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),
        #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),
        #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,
        #onetrust-banner-sdk .ot-cat-header {
            color: #696969;
        }

        #onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {
            background-color: #E9E9E9;
        }

        #onetrust-consent-sdk #onetrust-banner-sdk a[href],
        #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,
        #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn {
            color: #14b4ef;
        }

        #onetrust-consent-sdk #onetrust-accept-btn-handler,
        #onetrust-banner-sdk #onetrust-reject-all-handler {
            background-color: #14b4ef;
            border-color: #14b4ef;
            color: #FFFFFF;
        }

        #onetrust-consent-sdk #onetrust-banner-sdk *:focus,
        #onetrust-consent-sdk #onetrust-banner-sdk:focus {
            outline-color: #000000;
            outline-width: 1px;
        }

        #onetrust-consent-sdk #onetrust-pc-btn-handler,
        #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {
            color: #14b4ef;
            border-color: #14b4ef;
            background-color:
                #FFFFFF;
        }

        #onetrust-pc-sdk {
            position: fixed;
            width: 730px;
            max-width: 730px;
            height: 610px;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            font-size: 16px;
            z-index: 2147483647;
            border-radius: 2px;
            background-color: #fff;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0), 0 7px 14px 0 rgba(50, 50, 93, .1)
        }

        #onetrust-pc-sdk.otRelFont {
            font-size: 1rem
        }

        #onetrust-pc-sdk *,
        #onetrust-pc-sdk ::after,
        #onetrust-pc-sdk ::before {
            box-sizing: content-box
        }

        #onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr,
        #onetrust-pc-sdk .ot-hide-tgl {
            visibility: hidden
        }

        #onetrust-pc-sdk #ot-addtl-venlst .ot-arw-cntr *,
        #onetrust-pc-sdk .ot-hide-tgl * {
            visibility: hidden
        }

        #onetrust-pc-sdk #ot-pc-content,
        #onetrust-pc-sdk #ot-pc-lst {
            height: calc(100% - 185px)
        }

        #onetrust-pc-sdk li {
            list-style: none
        }

        #onetrust-pc-sdk ul,
        #onetrust-pc-sdk li {
            margin: 0
        }

        #onetrust-pc-sdk a {
            text-decoration: none
        }

        #onetrust-pc-sdk .ot-link-btn {
            padding: 0;
            margin-bottom: 0;
            border: 0;
            font-weight: normal;
            line-height: normal;
            width: auto;
            height: auto
        }

        #onetrust-pc-sdk .ot-grps-cntr *::-webkit-scrollbar,
        #onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar {
            width: 11px
        }

        #onetrust-pc-sdk .ot-grps-cntr *::-webkit-scrollbar-thumb,
        #onetrust-pc-sdk .ot-pc-scrollbar::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: #c1c1c1
        }

        #onetrust-pc-sdk .ot-grps-cntr *,
        #onetrust-pc-sdk .ot-pc-scrollbar {
            scrollbar-arrow-color: #c1c1c1;
            scrollbar-darkshadow-color: #c1c1c1;
            scrollbar-face-color: #c1c1c1;
            scrollbar-shadow-color: #c1c1c1
        }

        #onetrust-pc-sdk .ot-pc-header {
            height: auto;
            padding: 10px;
            display: block;
            width: calc(100% - 20px);
            min-height: 52px;
            border-bottom: 1px solid #d8d8d8;
            position: relative
        }

        #onetrust-pc-sdk .ot-pc-logo {
            display: inline-block;
            vertical-align: middle;
            width: 180px
        }

        #onetrust-pc-sdk .ot-pc-logo.ot-pc-logo {
            height: 40px
        }

        #onetrust-pc-sdk .ot-title-cntr {
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: calc(100% - 190px);
            padding-left: 10px
        }

        #onetrust-pc-sdk .ot-always-active {
            font-size: .813em;
            line-height: 1.5;
            font-weight: 700;
            color: #3860be
        }

        #onetrust-pc-sdk .ot-close-cntr {
            float: right;
            position: absolute;
            right: -9px;
            top: 50%;
            transform: translateY(-50%)
        }

        #onetrust-pc-sdk #ot-pc-content {
            position: relative;
            overflow-y: auto;
            overflow-x: hidden
        }

        #onetrust-pc-sdk .ot-grps-cntr,
        #onetrust-pc-sdk .ot-grps-cntr>* {
            height: 100%;
            overflow-y: auto
        }

        #onetrust-pc-sdk .category-menu-switch-handler {
            cursor: pointer;
            border-left: 10px solid transparent;
            background-color: #f4f4f4;
            border-bottom: 1px solid #d7d7d7;
            padding-top: 12px;
            padding-right: 5px;
            padding-bottom: 12px;
            padding-left: 12px;
            overflow: hidden
        }

        #onetrust-pc-sdk .category-menu-switch-handler h3 {
            float: left;
            text-align: left;
            margin: 0;
            color: dimgray;
            line-height: 1.4;
            font-size: .875em;
            word-break: break-word;
            word-wrap: break-word
        }

        #onetrust-pc-sdk .ot-active-menu {
            border-left: 10px solid #68b631;
            background-color: #fff;
            border-bottom: none;
            position: relative
        }

        #onetrust-pc-sdk .ot-active-menu h3 {
            color: #263238;
            font-weight: bold
        }

        #onetrust-pc-sdk .ot-desc-cntr {
            word-break: break-word;
            word-wrap: break-word;
            padding-top: 20px;
            padding-right: 16px;
            padding-bottom: 15px
        }

        #onetrust-pc-sdk .ot-grp-desc {
            word-break: break-word;
            word-wrap: break-word;
            text-align: left;
            font-size: .813em;
            line-height: 1.5;
            margin: 0
        }

        #onetrust-pc-sdk .ot-grp-desc * {
            font-size: inherit;
            line-height: inherit
        }

        #onetrust-pc-sdk #ot-pc-desc a {
            color: #3860be;
            cursor: pointer;
            font-size: 1em;
            margin-right: 8px
        }

        #onetrust-pc-sdk #ot-pc-desc a:hover {
            color: #1883fd
        }

        #onetrust-pc-sdk #ot-pc-desc button {
            margin-right: 8px
        }

        #onetrust-pc-sdk #ot-pc-desc * {
            font-size: inherit
        }

        #onetrust-pc-sdk #ot-pc-desc ul li {
            padding: 10px 0px;
            border-bottom: 1px solid #e2e2e2
        }

        #onetrust-pc-sdk #ot-pc-desc+.ot-link-btn {
            display: none
        }

        #onetrust-pc-sdk .ot-btn-subcntr {
            float: right
        }

        #onetrust-pc-sdk .ot-close-icon {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQ3Ljk3MSIgaGVpZ2h0PSI0Ny45NzEiIHZpZXdCb3g9IjAgMCA0Ny45NzEgNDcuOTcxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0Ny45NzEgNDcuOTcxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTI4LjIyOCwyMy45ODZMNDcuMDkyLDUuMTIyYzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMEwyMy45ODYsMTkuNzQ0TDUuMTIxLDAuODhjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMGMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0MmwxOC44NjUsMTguODY0TDAuODc5LDQyLjg1Yy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQyQzEuNDY1LDQ3LjY3NywyLjIzMyw0Ny45NywzLDQ3Ljk3czEuNTM1LTAuMjkzLDIuMTIxLTAuODc5bDE4Ljg2NS0xOC44NjRMNDIuODUsNDcuMDkxYzAuNTg2LDAuNTg2LDEuMzU0LDAuODc5LDIuMTIxLDAuODc5czEuNTM1LTAuMjkzLDIuMTIxLTAuODc5YzEuMTcyLTEuMTcxLDEuMTcyLTMuMDcxLDAtNC4yNDJMMjguMjI4LDIzLjk4NnoiLz48L2c+PC9zdmc+");
            background-size: 12px;
            background-repeat: no-repeat;
            background-position: center;
            height: 44px;
            width: 44px;
            display: inline-block
        }

        #onetrust-pc-sdk .ot-tgl {
            float: right;
            position: relative;
            z-index: 1
        }

        #onetrust-pc-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {
            background-color: #cddcf2
        }

        #onetrust-pc-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before {
            -webkit-transform: translateX(16px);
            -ms-transform: translateX(16px);
            transform: translateX(16px);
            background-color: #4285f4
        }

        #onetrust-pc-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob:before {
            box-shadow: 0 0 1px #2196f3;
            outline-style: auto;
            outline-width: 1px
        }

        #onetrust-pc-sdk .ot-switch {
            position: relative;
            display: inline-block;
            width: 35px;
            height: 10px;
            margin-bottom: 0
        }

        #onetrust-pc-sdk .ot-switch-nob {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #f2f1f1;
            border: none;
            transition: all .2s ease-in 0s;
            -moz-transition: all .2s ease-in 0s;
            -o-transition: all .2s ease-in 0s;
            -webkit-transition: all .2s ease-in 0s;
            border-radius: 46px
        }

        #onetrust-pc-sdk .ot-switch-nob:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            bottom: 1px;
            background-color: #7d7d7d;
            -webkit-transition: .4s;
            border-radius: 100%;
            top: -5px;
            transition: .4s
        }

        #onetrust-pc-sdk .ot-chkbox {
            z-index: 1;
            position: relative;
            float: left
        }

        #onetrust-pc-sdk .ot-chkbox input:checked~label::before {
            background-color: #3860be
        }

        #onetrust-pc-sdk .ot-chkbox input+label::after {
            content: none;
            color: #fff
        }

        #onetrust-pc-sdk .ot-chkbox input:checked+label::after {
            content: ""
        }

        #onetrust-pc-sdk .ot-chkbox input:focus+label::before {
            outline-style: solid;
            outline-width: 2px;
            outline-style: auto
        }

        #onetrust-pc-sdk .ot-chkbox label {
            position: relative;
            height: 20px;
            padding-left: 30px;
            display: inline-block;
            cursor: pointer
        }

        #onetrust-pc-sdk .ot-chkbox label::before,
        #onetrust-pc-sdk .ot-chkbox label::after {
            position: absolute;
            content: "";
            display: inline-block;
            border-radius: 3px
        }

        #onetrust-pc-sdk .ot-chkbox label::before {
            height: 18px;
            width: 18px;
            border: 1px solid #3860be;
            left: 0px
        }

        #onetrust-pc-sdk .ot-chkbox label::after {
            height: 5px;
            width: 9px;
            border-left: 3px solid;
            border-bottom: 3px solid;
            transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            left: 4px;
            top: 5px
        }

        #onetrust-pc-sdk .ot-label-txt {
            display: none
        }

        #onetrust-pc-sdk .ot-fltr-opt .ot-label-txt {
            display: block
        }

        #onetrust-pc-sdk .ot-chkbox input,
        #onetrust-pc-sdk .ot-tgl input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0
        }

        #onetrust-pc-sdk .ot-arw-cntr {
            float: right;
            position: relative;
            pointer-events: none
        }

        #onetrust-pc-sdk .ot-arw {
            width: 16px;
            height: 16px;
            margin-left: 5px;
            color: dimgray;
            display: inline-block;
            vertical-align: middle;
            -webkit-transition: all 150ms ease-in 0s;
            -moz-transition: all 150ms ease-in 0s;
            -o-transition: all 150ms ease-in 0s;
            transition: all 150ms ease-in 0s
        }

        #onetrust-pc-sdk input:checked~.ot-acc-hdr .ot-arw,
        #onetrust-pc-sdk button[aria-expanded=true]~.ot-acc-hdr .ot-arw-cntr svg {
            transform: rotate(90deg);
            -o-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            -webkit-transform: rotate(90deg)
        }

        #onetrust-pc-sdk .ot-label-status {
            font-size: .75em;
            position: relative;
            top: 2px;
            display: none;
            padding-right: 5px;
            float: left
        }

        #onetrust-pc-sdk #ot-lst-cnt .ot-label-status {
            top: -6px
        }

        #onetrust-pc-sdk .ot-fltr-btns {
            margin-left: 15px;
            overflow: hidden;
            margin-right: 15px
        }

        #onetrust-pc-sdk .ot-fltr-btns button {
            padding: 12px 30px
        }

        #onetrust-pc-sdk .ot-pc-footer {
            position: absolute;
            bottom: 0px;
            width: 100%;
            max-height: 160px;
            border-top: 1px solid #d8d8d8
        }

        #onetrust-pc-sdk .ot-pc-footer button {
            margin-top: 20px;
            margin-bottom: 20px;
            font-weight: 600;
            font-size: .813em;
            min-height: 40px;
            height: auto;
            line-height: normal;
            padding: 10px 30px
        }

        #onetrust-pc-sdk .ot-tab-desc {
            margin-left: 3%
        }

        #onetrust-pc-sdk .ot-grp-hdr1 {
            display: inline-block;
            width: 100%;
            margin-bottom: 10px
        }

        #onetrust-pc-sdk .ot-desc-cntr h4 {
            color: #263238;
            display: inline-block;
            vertical-align: middle;
            margin: 0;
            font-weight: bold;
            font-size: .875em;
            line-height: 1.3;
            max-width: 80%
        }

        #onetrust-pc-sdk #ot-pvcy-hdr {
            margin-bottom: 10px
        }

        #onetrust-pc-sdk .ot-vlst-cntr {
            overflow: hidden
        }

        #onetrust-pc-sdk .category-vendors-list-handler,
        #onetrust-pc-sdk .category-host-list-handler,
        #onetrust-pc-sdk .category-vendors-list-handler+a {
            display: block;
            float: left;
            color: #3860be;
            font-size: .813em;
            font-weight: 400;
            line-height: 1.1;
            cursor: pointer;
            margin: 5px 0px
        }

        #onetrust-pc-sdk .category-vendors-list-handler:hover,
        #onetrust-pc-sdk .category-host-list-handler:hover,
        #onetrust-pc-sdk .category-vendors-list-handler+a:hover {
            text-decoration-line: underline
        }

        #onetrust-pc-sdk .category-vendors-list-handler+a::after {
            content: "";
            height: 17px;
            width: 15px;
            background-repeat: no-repeat;
            margin-left: 2px;
            margin-top: -1px;
            float: right;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.626 511.627'%3E%3Cg fill='%231276CE'%3E%3Cpath d='M392.857 292.354h-18.274c-2.669 0-4.859.855-6.563 2.573-1.718 1.708-2.573 3.897-2.573 6.563v91.361c0 12.563-4.47 23.315-13.415 32.262-8.945 8.945-19.701 13.414-32.264 13.414H82.224c-12.562 0-23.317-4.469-32.264-13.414-8.945-8.946-13.417-19.698-13.417-32.262V155.31c0-12.562 4.471-23.313 13.417-32.259 8.947-8.947 19.702-13.418 32.264-13.418h200.994c2.669 0 4.859-.859 6.57-2.57 1.711-1.713 2.566-3.9 2.566-6.567V82.221c0-2.662-.855-4.853-2.566-6.563-1.711-1.713-3.901-2.568-6.57-2.568H82.224c-22.648 0-42.016 8.042-58.102 24.125C8.042 113.297 0 132.665 0 155.313v237.542c0 22.647 8.042 42.018 24.123 58.095 16.086 16.084 35.454 24.13 58.102 24.13h237.543c22.647 0 42.017-8.046 58.101-24.13 16.085-16.077 24.127-35.447 24.127-58.095v-91.358c0-2.669-.856-4.859-2.574-6.57-1.713-1.718-3.903-2.573-6.565-2.573z'/%3E%3Cpath d='M506.199 41.971c-3.617-3.617-7.905-5.424-12.85-5.424H347.171c-4.948 0-9.233 1.807-12.847 5.424-3.617 3.615-5.428 7.898-5.428 12.847s1.811 9.233 5.428 12.85l50.247 50.248-186.147 186.151c-1.906 1.903-2.856 4.093-2.856 6.563 0 2.479.953 4.668 2.856 6.571l32.548 32.544c1.903 1.903 4.093 2.852 6.567 2.852s4.665-.948 6.567-2.852l186.148-186.148 50.251 50.248c3.614 3.617 7.898 5.426 12.847 5.426s9.233-1.809 12.851-5.426c3.617-3.616 5.424-7.898 5.424-12.847V54.818c-.001-4.952-1.814-9.232-5.428-12.847z'/%3E%3C/g%3E%3C/svg%3E")
        }

        #onetrust-pc-sdk .category-host-list-handler,
        #onetrust-pc-sdk .ot-vlst-cntr,
        #onetrust-pc-sdk #ot-pc-desc+.category-vendors-list-handler {
            margin-top: 8px
        }

        #onetrust-pc-sdk .ot-grp-hdr1+.ot-vlst-cntr {
            margin-top: 0px;
            margin-bottom: 10px
        }

        #onetrust-pc-sdk .ot-always-active-group h3.ot-cat-header,
        #onetrust-pc-sdk .ot-subgrp.ot-always-active-group>h4 {
            max-width: 70%
        }

        #onetrust-pc-sdk .ot-always-active-group .ot-tgl-cntr {
            max-width: 28%
        }

        #onetrust-pc-sdk .ot-grp-desc ul,
        #onetrust-pc-sdk li.ot-subgrp p ul {
            margin: 0px;
            margin-left: 15px;
            padding-bottom: 8px
        }

        #onetrust-pc-sdk .ot-grp-desc ul li,
        #onetrust-pc-sdk li.ot-subgrp p ul li {
            font-size: inherit;
            padding-top: 8px;
            display: list-item;
            list-style: disc
        }

        #onetrust-pc-sdk ul.ot-subgrps {
            margin: 0;
            font-size: inherit
        }

        #onetrust-pc-sdk ul.ot-subgrps li {
            padding: 0;
            border: none;
            position: relative
        }

        #onetrust-pc-sdk ul.ot-subgrps li h4,
        #onetrust-pc-sdk ul.ot-subgrps li p {
            font-size: .82em;
            line-height: 1.4
        }

        #onetrust-pc-sdk ul.ot-subgrps li p {
            color: dimgray;
            clear: both;
            float: left;
            margin-top: 10px;
            margin-bottom: 0;
            word-break: break-word;
            word-wrap: break-word
        }

        #onetrust-pc-sdk ul.ot-subgrps li h4 {
            color: #263238;
            font-weight: bold;
            margin-bottom: 0;
            float: left;
            position: relative;
            top: 3px
        }

        #onetrust-pc-sdk li.ot-subgrp {
            margin-left: 30px;
            display: inline-block;
            width: calc(100% - 30px)
        }

        #onetrust-pc-sdk .ot-subgrp-tgl {
            float: right
        }

        #onetrust-pc-sdk .ot-subgrp-tgl.ot-always-active-subgroup {
            width: auto
        }

        #onetrust-pc-sdk .ot-pc-footer-logo {
            height: 30px;
            width: 100%;
            text-align: right;
            background: #f4f4f4;
            border-radius: 0 0 2px 2px
        }

        #onetrust-pc-sdk .ot-pc-footer-logo a {
            display: inline-block;
            margin-top: 5px;
            margin-right: 10px
        }

        #onetrust-pc-sdk #accept-recommended-btn-handler {
            float: right;
            text-align: center
        }

        #onetrust-pc-sdk .save-preference-btn-handler {
            min-width: 155px;
            background-color: #68b631;
            border-radius: 2px;
            color: #fff;
            font-size: .9em;
            line-height: 1.1;
            text-align: center;
            margin-left: 15px;
            margin-right: 15px
        }

        #onetrust-pc-sdk .ot-btn-subcntr button {
            margin-right: 16px
        }

        #onetrust-pc-sdk.ot-ftr-stacked .save-preference-btn-handler,
        #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr {
            max-width: 40%;
            white-space: normal;
            text-align: center
        }

        #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr button {
            margin-left: auto;
            margin-right: auto;
            min-width: 60%;
            max-width: 90%
        }

        #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr button:nth-child(2) {
            margin-top: 0
        }

        #onetrust-pc-sdk.ot-ftr-stacked #accept-recommended-btn-handler {
            float: none
        }

        #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-container {
            overflow: hidden
        }

        #onetrust-pc-sdk #ot-pc-title {
            margin: 0px;
            overflow: hidden;
            position: relative;
            line-height: 1.2;
            max-height: 2.4em;
            padding-right: 1em;
            font-size: 1.37em;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            max-width: 90%
        }

        #onetrust-pc-sdk #ot-pc-title.ot-pc-title-shrink {
            max-width: 70%
        }

        #onetrust-pc-sdk #ot-pc-lst {
            width: 100%;
            position: relative
        }

        #onetrust-pc-sdk #ot-pc-lst .ot-acc-hdr {
            padding-top: 17px;
            padding-right: 15px;
            padding-bottom: 17px;
            padding-left: 20px;
            display: inline-block;
            width: calc(100% - 35px);
            vertical-align: middle
        }

        #onetrust-pc-sdk #ot-pc-lst .ot-acc-txt {
            padding-top: 6px;
            padding-right: 15px;
            padding-bottom: 10px;
            padding-left: 20px
        }

        #onetrust-pc-sdk .ot-lst-cntr {
            height: 100%
        }

        #onetrust-pc-sdk #ot-pc-hdr {
            padding-top: 15px;
            padding-right: 30px;
            padding-bottom: 15px;
            padding-left: 20px;
            display: inline-block;
            width: calc(100% - 50px);
            height: 20px;
            border-bottom: 1px solid #d8d8d8
        }

        #onetrust-pc-sdk #ot-pc-hdr input {
            height: 32px;
            width: 100%;
            border-radius: 50px;
            font-size: .8em;
            padding-right: 35px;
            padding-left: 15px;
            float: left
        }

        #onetrust-pc-sdk #ot-pc-hdr input::placeholder {
            color: #d4d4d4;
            font-style: italic
        }

        #onetrust-pc-sdk #ot-lst-cnt {
            height: calc(100% - 86px);
            padding-left: 30px;
            padding-right: 27px;
            padding-top: 20px;
            margin-top: 8px;
            margin-right: 3px;
            margin-bottom: 4px;
            margin-left: 0;
            overflow-x: hidden;
            overflow-y: auto;
            transform: translate3d(0, 0, 0)
        }

        #onetrust-pc-sdk #ot-back-arw {
            height: 12px;
            width: 12px
        }

        #onetrust-pc-sdk #ot-lst-title {
            display: inline-block;
            font-size: 1em
        }

        #onetrust-pc-sdk #ot-lst-title h3 {
            color: dimgray;
            font-weight: bold;
            margin-left: 10px;
            display: inline-block;
            font-size: 1em
        }

        #onetrust-pc-sdk #ot-lst-title h3 * {
            font-size: inherit
        }

        #onetrust-pc-sdk .ot-lst-subhdr {
            float: right;
            position: relative;
            bottom: 6px
        }

        #onetrust-pc-sdk #ot-search-cntr {
            display: inline-block;
            vertical-align: middle;
            position: relative;
            width: 300px
        }

        #onetrust-pc-sdk #ot-search-cntr svg {
            position: absolute;
            right: 0px;
            width: 30px;
            height: 30px;
            font-size: 1em;
            line-height: 1;
            top: 2px
        }

        #onetrust-pc-sdk #ot-fltr-cntr {
            display: inline-block;
            position: relative;
            margin-left: 20px;
            vertical-align: middle;
            font-size: 0
        }

        #onetrust-pc-sdk #filter-btn-handler {
            background-color: #3860be;
            border-radius: 17px;
            -moz-transition: .1s ease;
            -o-transition: .1s ease;
            -webkit-transition: 1s ease;
            transition: .1s ease;
            width: 32px;
            height: 32px;
            padding: 0;
            margin: 0;
            position: relative
        }

        #onetrust-pc-sdk #filter-btn-handler svg {
            cursor: pointer;
            width: 15px;
            height: 15px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding-top: 5px
        }

        #onetrust-pc-sdk #filter-btn-handler path {
            fill: #fff
        }

        #onetrust-pc-sdk #ot-sel-blk {
            min-width: 200px;
            min-height: 30px;
            padding-left: 20px
        }

        #onetrust-pc-sdk #ot-selall-vencntr,
        #onetrust-pc-sdk #ot-selall-adtlvencntr {
            float: left;
            height: 100%
        }

        #onetrust-pc-sdk #ot-selall-vencntr label,
        #onetrust-pc-sdk #ot-selall-adtlvencntr label {
            height: 100%;
            padding-left: 0
        }

        #onetrust-pc-sdk #ot-selall-hostcntr {
            width: 21px;
            height: 21px;
            position: relative;
            left: 20px
        }

        #onetrust-pc-sdk #ot-selall-vencntr.line-through label::after,
        #onetrust-pc-sdk #ot-selall-adtlvencntr.line-through label::after,
        #onetrust-pc-sdk #ot-selall-licntr.line-through label::after,
        #onetrust-pc-sdk #ot-selall-hostcntr.line-through label::after,
        #onetrust-pc-sdk #ot-selall-gnvencntr.line-through label::after {
            height: auto;
            border-left: 0;
            left: 5px;
            top: 10.5px;
            transform: none;
            -o-transform: none;
            -ms-transform: none;
            -webkit-transform: none
        }

        #onetrust-pc-sdk .ot-ven-name,
        #onetrust-pc-sdk .ot-host-name {
            color: #2c3643;
            font-weight: bold;
            font-size: .813em;
            line-height: 1.2;
            margin: 0;
            height: auto;
            text-align: left;
            word-break: break-word;
            word-wrap: break-word
        }

        #onetrust-pc-sdk .ot-ven-name *,
        #onetrust-pc-sdk .ot-host-name * {
            font-size: inherit
        }

        #onetrust-pc-sdk .ot-host-desc {
            font-size: .69em;
            line-height: 1.4;
            margin-top: 5px;
            margin-bottom: 5px;
            color: dimgray
        }

        #onetrust-pc-sdk .ot-host-name>a {
            text-decoration: underline;
            position: relative;
            z-index: 2;
            margin-bottom: 5px;
            font-weight: bold
        }

        #onetrust-pc-sdk .ot-host-hdr {
            float: left;
            width: calc(100% - 50px);
            pointer-events: none;
            position: relative;
            z-index: 1
        }

        #onetrust-pc-sdk .ot-host-hdr .ot-host-name {
            pointer-events: none
        }

        #onetrust-pc-sdk .ot-host-hdr a {
            pointer-events: initial
        }

        #onetrust-pc-sdk .ot-host-hdr .ot-host-name~a {
            margin-top: 5px;
            font-size: .813em;
            text-decoration: underline
        }

        #onetrust-pc-sdk .ot-ven-hdr {
            width: 88%;
            float: right
        }

        #onetrust-pc-sdk input:focus+.ot-acc-hdr {
            outline: #000 solid 1px !important
        }

        #onetrust-pc-sdk #ot-selall-hostcntr input[type=checkbox],
        #onetrust-pc-sdk #ot-selall-vencntr input[type=checkbox],
        #onetrust-pc-sdk #ot-selall-adtlvencntr input[type=checkbox] {
            position: absolute
        }

        #onetrust-pc-sdk .ot-host-item .ot-chkbox {
            float: left
        }

        #onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-sel-all-hdr {
            right: 38px
        }

        #onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) #ot-sel-blk {
            background-color: #f9f9fc;
            border: 1px solid #e2e2e2;
            width: auto;
            padding-bottom: 5px;
            padding-top: 5px
        }

        #onetrust-pc-sdk.ot-addtl-vendors #ot-lst-cnt:not(.ot-host-cnt) .ot-sel-all-chkbox {
            right: 2px;
            width: auto
        }

        #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr {
            position: relative;
            border-left: 1px solid #e2e2e2;
            border-right: 1px solid #e2e2e2;
            border-bottom: 1px solid #e2e2e2
        }

        #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr input {
            z-index: 1
        }

        #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr>.ot-acc-hdr {
            background: #f9f9fc;
            padding-top: 10px;
            padding-bottom: 10px;
            background-color: #f9f9fc
        }

        #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr>.ot-acc-hdr input {
            z-index: 2
        }

        #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr>input[type=checkbox]:checked~.ot-acc-hdr {
            border-bottom: 1px solid #e2e2e2
        }

        #onetrust-pc-sdk #ot-pc-lst .ot-acc-cntr .ot-addtl-venbox {
            display: none
        }

        #onetrust-pc-sdk #ot-addtl-venlst .ot-tgl-cntr {
            margin-right: 13px
        }

        #onetrust-pc-sdk .ot-vensec-title {
            font-size: .813em;
            display: inline-block
        }

        #onetrust-pc-sdk .ot-ven-item>button:focus,
        #onetrust-pc-sdk .ot-host-item>button:focus,
        #onetrust-pc-sdk .ot-acc-cntr>button:focus {
            outline: #000 solid 2px
        }

        #onetrust-pc-sdk .ot-ven-item>button,
        #onetrust-pc-sdk .ot-host-item>button,
        #onetrust-pc-sdk .ot-acc-cntr>button {
            position: absolute;
            cursor: pointer;
            width: 100%;
            height: 100%;
            border: 0;
            opacity: 0;
            margin: 0;
            top: 0;
            left: 0
        }

        #onetrust-pc-sdk .ot-ven-item>button~.ot-acc-hdr,
        #onetrust-pc-sdk .ot-host-item>button~.ot-acc-hdr,
        #onetrust-pc-sdk .ot-acc-cntr>button~.ot-acc-hdr {
            cursor: pointer
        }

        #onetrust-pc-sdk .ot-ven-item>button[aria-expanded=false]~.ot-acc-txt,
        #onetrust-pc-sdk .ot-host-item>button[aria-expanded=false]~.ot-acc-txt,
        #onetrust-pc-sdk .ot-acc-cntr>button[aria-expanded=false]~.ot-acc-txt {
            margin-top: 0;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            width: 100%;
            transition: .25s ease-out;
            display: none
        }

        #onetrust-pc-sdk .ot-ven-item>button[aria-expanded=true]~.ot-acc-txt,
        #onetrust-pc-sdk .ot-host-item>button[aria-expanded=true]~.ot-acc-txt,
        #onetrust-pc-sdk .ot-acc-cntr>button[aria-expanded=true]~.ot-acc-txt {
            transition: .1s ease-in;
            display: block
        }

        #onetrust-pc-sdk .ot-ven-item ul {
            list-style: none inside;
            font-size: 100%;
            margin: 0
        }

        #onetrust-pc-sdk .ot-ven-item ul li {
            margin: 0 !important;
            padding: 0;
            border: none !important
        }

        #onetrust-pc-sdk .ot-hide-acc>button {
            pointer-events: none
        }

        #onetrust-pc-sdk .ot-hide-acc .ot-arw-cntr>* {
            visibility: hidden
        }

        #onetrust-pc-sdk #ot-ven-lst,
        #onetrust-pc-sdk #ot-host-lst,
        #onetrust-pc-sdk #ot-addtl-venlst,
        #onetrust-pc-sdk #ot-gn-venlst {
            width: 100%
        }

        #onetrust-pc-sdk #ot-ven-lst li,
        #onetrust-pc-sdk #ot-host-lst li,
        #onetrust-pc-sdk #ot-addtl-venlst li,
        #onetrust-pc-sdk #ot-gn-venlst li {
            border: 1px solid #d7d7d7;
            border-radius: 2px;
            position: relative;
            margin-top: 10px
        }

        #onetrust-pc-sdk #ot-gn-venlst li.ot-host-info {
            padding: .5rem;
            overflow-y: hidden
        }

        #onetrust-pc-sdk #ot-ven-lst .ot-tgl-cntr {
            width: 65%
        }

        #onetrust-pc-sdk #ot-host-lst .ot-tgl-cntr {
            width: 65%;
            float: left
        }

        #onetrust-pc-sdk label {
            margin-bottom: 0
        }

        #onetrust-pc-sdk .ot-host-notice {
            float: right
        }

        #onetrust-pc-sdk .ot-ven-link,
        #onetrust-pc-sdk .ot-host-expand {
            color: dimgray;
            font-size: .75em;
            line-height: .9;
            display: inline-block
        }

        #onetrust-pc-sdk .ot-ven-link *,
        #onetrust-pc-sdk .ot-host-expand * {
            font-size: inherit
        }

        #onetrust-pc-sdk .ot-ven-link {
            position: relative;
            z-index: 2
        }

        #onetrust-pc-sdk .ot-ven-link:hover {
            text-decoration: underline
        }

        #onetrust-pc-sdk .ot-ven-dets {
            border-radius: 2px;
            background-color: #f8f8f8
        }

        #onetrust-pc-sdk .ot-ven-dets li:first-child p:first-child {
            border-top: none
        }

        #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:not(:first-child) {
            border-top: 1px solid #e9e9e9
        }

        #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n+3) p {
            display: inline-block
        }

        #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n+3) p:nth-of-type(odd) {
            width: 30%
        }

        #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc:nth-child(n+3) p:nth-of-type(even) {
            width: 50%;
            word-break: break-word;
            word-wrap: break-word
        }

        #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc p,
        #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc h4 {
            padding-top: 5px;
            padding-bottom: 5px;
            display: block
        }

        #onetrust-pc-sdk .ot-ven-dets .ot-ven-disc h4 {
            display: inline-block
        }

        #onetrust-pc-sdk .ot-ven-dets p,
        #onetrust-pc-sdk .ot-ven-dets h4,
        #onetrust-pc-sdk .ot-ven-dets span {
            font-size: .69em;
            text-align: left;
            vertical-align: middle;
            word-break: break-word;
            word-wrap: break-word;
            margin: 0;
            padding-bottom: 10px;
            padding-left: 15px;
            color: #2e3644
        }

        #onetrust-pc-sdk .ot-ven-dets h4 {
            padding-top: 5px
        }

        #onetrust-pc-sdk .ot-ven-dets span {
            color: dimgray;
            padding: 0;
            vertical-align: baseline
        }

        #onetrust-pc-sdk .ot-ven-dets .ot-ven-pur h4 {
            border-top: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9;
            padding-bottom: 5px;
            margin-bottom: 5px;
            font-weight: bold
        }

        #onetrust-pc-sdk .ot-host-opt {
            display: inline-block;
            width: 100%;
            margin: 0;
            font-size: inherit
        }

        #onetrust-pc-sdk .ot-host-opt li>div div {
            font-size: .81em;
            padding: 5px 0
        }

        #onetrust-pc-sdk .ot-host-opt li>div div:nth-child(1) {
            width: 30%;
            float: left
        }

        #onetrust-pc-sdk .ot-host-opt li>div div:nth-child(2) {
            width: 70%;
            float: left;
            word-break: break-word;
            word-wrap: break-word
        }

        #onetrust-pc-sdk #ot-host-lst li.ot-host-info {
            border: none;
            font-size: .8em;
            color: dimgray;
            float: left;
            text-align: left;
            padding: 10px;
            margin-bottom: 10px;
            width: calc(100% - 10px);
            background-color: #f8f8f8
        }

        #onetrust-pc-sdk #ot-host-lst li.ot-host-info a {
            color: dimgray
        }

        #onetrust-pc-sdk #ot-host-lst li.ot-host-info>div {
            overflow: auto
        }

        #onetrust-pc-sdk #no-results {
            text-align: center;
            margin-top: 30px
        }

        #onetrust-pc-sdk #no-results p {
            font-size: 1em;
            color: #2e3644;
            word-break: break-word;
            word-wrap: break-word
        }

        #onetrust-pc-sdk #no-results p span {
            font-weight: bold
        }

        #onetrust-pc-sdk .ot-tgl-cntr {
            display: inline-block;
            vertical-align: middle
        }

        #onetrust-pc-sdk .ot-arw-cntr,
        #onetrust-pc-sdk .ot-tgl-cntr {
            float: right
        }

        #onetrust-pc-sdk .ot-desc-cntr {
            padding-top: 0px;
            margin-top: 20px;
            padding-right: 0px;
            border-radius: 3px;
            overflow: hidden;
            padding-bottom: 10px
        }

        #onetrust-pc-sdk .ot-desc-cntr:focus,
        #onetrust-pc-sdk .ot-desc-cntr:active,
        #onetrust-pc-sdk .ot-desc-cntr:focus-visible {
            outline: 2px solid #101010;
            border-radius: 2px
        }

        #onetrust-pc-sdk .ot-leg-border-color {
            border: 1px solid #e9e9e9
        }

        #onetrust-pc-sdk .ot-leg-border-color .ot-subgrp-cntr {
            border-top: 1px solid #e9e9e9;
            padding-bottom: 10px
        }

        #onetrust-pc-sdk .ot-category-desc {
            padding-bottom: 10px
        }

        #onetrust-pc-sdk .ot-grp-hdr1 {
            padding-left: 10px;
            width: calc(100% - 20px);
            padding-top: 10px;
            margin-bottom: 0px;
            padding-bottom: 8px
        }

        #onetrust-pc-sdk .ot-subgrp-cntr {
            padding-top: 10px
        }

        #onetrust-pc-sdk .ot-desc-cntr>*:not(.ot-grp-hdr1) {
            padding-left: 10px;
            padding-right: 10px
        }

        #onetrust-pc-sdk .ot-pli-hdr {
            overflow: hidden;
            padding-top: 7.5px;
            padding-bottom: 7.5px;
            background-color: #f8f8f8;
            border: none;
            border-bottom: 1px solid #e9e9e9
        }

        #onetrust-pc-sdk .ot-pli-hdr span:first-child {
            text-align: left;
            max-width: 80px;
            padding-right: 5px
        }

        #onetrust-pc-sdk .ot-pli-hdr span:last-child {
            padding-right: 20px;
            text-align: center
        }

        #onetrust-pc-sdk .ot-li-title {
            float: right;
            font-size: .813em
        }

        #onetrust-pc-sdk .ot-desc-cntr .ot-tgl-cntr:first-of-type,
        #onetrust-pc-sdk .ot-cat-header+.ot-tgl {
            padding-left: 7px;
            padding-right: 7px
        }

        #onetrust-pc-sdk .ot-always-active-group .ot-grp-hdr1 .ot-tgl-cntr:first-of-type {
            padding-left: 0px
        }

        #onetrust-pc-sdk .ot-cat-header,
        #onetrust-pc-sdk .ot-subgrp h4 {
            max-width: calc(100% - 133px)
        }

        #onetrust-pc-sdk #ot-lst-cnt #ot-sel-blk {
            width: 100%;
            display: inline-block;
            padding: 0
        }

        #onetrust-pc-sdk .ot-sel-all {
            display: inline-block;
            width: 100%
        }

        #onetrust-pc-sdk .ot-sel-all-hdr,
        #onetrust-pc-sdk .ot-sel-all-chkbox {
            width: 100%;
            float: right;
            position: relative
        }

        #onetrust-pc-sdk .ot-sel-all-chkbox {
            z-index: 1
        }

        #onetrust-pc-sdk :not(.ot-hosts-ui) .ot-sel-all-hdr,
        #onetrust-pc-sdk :not(.ot-hosts-ui) .ot-sel-all-chkbox {
            right: 23px;
            width: calc(100% - 23px)
        }

        #onetrust-pc-sdk .ot-consent-hdr,
        #onetrust-pc-sdk .ot-li-hdr {
            float: right;
            font-size: .813em;
            position: relative;
            line-height: normal;
            text-align: center;
            word-break: break-word;
            word-wrap: break-word
        }

        #onetrust-pc-sdk .ot-hosts-ui .ot-consent-hdr {
            float: left;
            position: relative;
            left: 5px
        }

        #onetrust-pc-sdk .ot-li-hdr {
            max-width: 100px;
            margin-right: 10px
        }

        #onetrust-pc-sdk .ot-consent-hdr {
            max-width: 55px
        }

        #onetrust-pc-sdk .ot-ven-ctgl {
            margin-left: 10px
        }

        #onetrust-pc-sdk .ot-ven-litgl {
            margin-right: 55px
        }

        #onetrust-pc-sdk .ot-ven-litgl.ot-ven-litgl-only {
            margin-right: 86px
        }

        #onetrust-pc-sdk .ot-ven-ctgl,
        #onetrust-pc-sdk .ot-ven-litgl,
        #onetrust-pc-sdk .ot-ven-gvctgl {
            float: left
        }

        #onetrust-pc-sdk .ot-ven-ctgl label,
        #onetrust-pc-sdk .ot-ven-litgl label,
        #onetrust-pc-sdk .ot-ven-gvctgl label {
            width: 22px;
            padding: 0
        }

        #onetrust-pc-sdk #ot-selall-licntr {
            display: block;
            width: 21px;
            height: 21px;
            position: relative;
            float: right;
            right: 80px
        }

        #onetrust-pc-sdk #ot-selall-licntr input {
            position: absolute
        }

        #onetrust-pc-sdk #ot-selall-vencntr,
        #onetrust-pc-sdk #ot-selall-adtlvencntr,
        #onetrust-pc-sdk #ot-selall-gnvencntr {
            float: right;
            width: 21px;
            height: 21px;
            position: relative;
            right: 15px
        }

        #onetrust-pc-sdk #ot-ven-lst .ot-tgl-cntr {
            float: right;
            width: auto
        }

        #onetrust-pc-sdk .ot-ven-hdr {
            float: left;
            width: 60%
        }

        #onetrust-pc-sdk #vdr-lst-dsc {
            font-size: .812em;
            line-height: 1.5;
            padding: 10px 15px 5px 15px
        }

        #onetrust-pc-sdk #ot-anchor {
            border: 12px solid transparent;
            display: none;
            position: absolute;
            z-index: 2147483647;
            top: 40px;
            right: 35px;
            transform: rotate(45deg);
            -o-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            background-color: #fff;
            -webkit-box-shadow: -3px -3px 5px -2px #c7c5c7;
            -moz-box-shadow: -3px -3px 5px -2px #c7c5c7;
            box-shadow: -3px -3px 5px -2px #c7c5c7
        }

        #onetrust-pc-sdk #ot-fltr-modal {
            width: 300px;
            position: absolute;
            z-index: 2147483646;
            top: 46px;
            height: 90%;
            max-height: 350px;
            display: none;
            -moz-transition: .2s ease;
            -o-transition: .2s ease;
            -webkit-transition: 2s ease;
            transition: .2s ease;
            opacity: 1;
            right: 0
        }

        #onetrust-pc-sdk #ot-fltr-modal button {
            max-width: 200px;
            line-height: 1;
            word-break: break-word;
            white-space: normal;
            height: auto;
            font-weight: bold
        }

        #onetrust-pc-sdk #ot-fltr-cnt {
            background-color: #fff;
            margin: 5px;
            border-radius: 3px;
            height: 100%;
            margin-right: 10px;
            padding-right: 10px;
            -webkit-box-shadow: 0px 0px 12px 2px #c7c5c7;
            -moz-box-shadow: 0px 0px 12px 2px #c7c5c7;
            box-shadow: 0px 0px 12px 2px #c7c5c7
        }

        #onetrust-pc-sdk .ot-fltr-scrlcnt {
            overflow-y: auto;
            overflow-x: hidden;
            clear: both;
            max-height: calc(100% - 60px)
        }

        #onetrust-pc-sdk .ot-fltr-opt {
            margin-bottom: 25px;
            margin-left: 15px;
            clear: both
        }

        #onetrust-pc-sdk .ot-fltr-opt label {
            height: auto
        }

        #onetrust-pc-sdk .ot-fltr-opt span {
            cursor: pointer;
            color: dimgray;
            font-size: .8em;
            line-height: 1.1;
            font-weight: normal
        }

        #onetrust-pc-sdk #clear-filters-handler {
            float: right;
            margin-top: 15px;
            margin-bottom: 10px;
            text-decoration: none;
            color: #3860be;
            font-size: .9em;
            border: none;
            padding: 1px
        }

        #onetrust-pc-sdk #clear-filters-handler:hover {
            color: #1883fd
        }

        #onetrust-pc-sdk #clear-filters-handler:focus {
            outline: #000 solid 1px
        }

        #onetrust-pc-sdk #filter-apply-handler {
            margin-right: 10px
        }

        #onetrust-pc-sdk .ot-grp-desc+.ot-leg-btn-container {
            margin-top: 0
        }

        #onetrust-pc-sdk .ot-leg-btn-container {
            display: inline-block;
            width: 100%;
            margin-top: 10px
        }

        #onetrust-pc-sdk .ot-leg-btn-container button {
            height: auto;
            padding: 6.5px 8px;
            margin-bottom: 0;
            line-height: normal;
            letter-spacing: 0
        }

        #onetrust-pc-sdk .ot-leg-btn-container svg {
            display: none;
            height: 14px;
            width: 14px;
            padding-right: 5px;
            vertical-align: sub
        }

        #onetrust-pc-sdk .ot-active-leg-btn {
            cursor: default;
            pointer-events: none
        }

        #onetrust-pc-sdk .ot-active-leg-btn svg {
            display: inline-block
        }

        #onetrust-pc-sdk .ot-remove-objection-handler {
            border: none;
            text-decoration: underline;
            padding: 0;
            font-size: .82em;
            font-weight: 600;
            line-height: 1.4;
            padding-left: 10px
        }

        #onetrust-pc-sdk .ot-obj-leg-btn-handler span {
            font-weight: bold;
            text-align: center;
            font-size: .91em;
            line-height: 1.5
        }

        #onetrust-pc-sdk.ot-close-btn-link #close-pc-btn-handler {
            border: none;
            height: auto;
            line-height: 1.5;
            text-decoration: underline;
            font-size: .69em;
            background: none;
            width: auto
        }

        #onetrust-pc-sdk.ot-close-btn-link .ot-close-cntr {
            right: 5px;
            top: 5px;
            transform: none
        }

        #onetrust-pc-sdk .ot-grps-cntr {
            overflow-y: hidden
        }

        #onetrust-pc-sdk .ot-cat-header {
            float: left;
            font-weight: 600;
            font-size: .875em;
            line-height: 1.5;
            max-width: 90%;
            vertical-align: middle
        }

        #onetrust-pc-sdk .ot-vnd-item>button:focus {
            outline: #000 solid 2px
        }

        #onetrust-pc-sdk .ot-vnd-item>button {
            position: absolute;
            cursor: pointer;
            width: 100%;
            height: 100%;
            margin: 0;
            top: 0;
            left: 0;
            z-index: 1;
            max-width: none;
            border: none
        }

        #onetrust-pc-sdk .ot-vnd-item>button[aria-expanded=false]~.ot-acc-txt {
            margin-top: 0;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            width: 100%;
            transition: .25s ease-out;
            display: none
        }

        #onetrust-pc-sdk .ot-vnd-item>button[aria-expanded=true]~.ot-acc-txt {
            transition: .1s ease-in;
            margin-top: 10px;
            width: 100%;
            overflow: auto;
            display: block
        }

        #onetrust-pc-sdk .ot-vnd-item>button[aria-expanded=true]~.ot-acc-grpcntr {
            width: auto;
            margin-top: 0px;
            padding-bottom: 10px
        }

        #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item {
            position: relative;
            border-radius: 2px;
            margin: 0;
            padding: 0;
            border: 1px solid #d8d8d8;
            border-top: none;
            width: calc(100% - 2px);
            float: left
        }

        #onetrust-pc-sdk .ot-accordion-layout.ot-cat-item:first-of-type {
            margin-top: 10px;
            border-top: 1px solid #d8d8d8
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr:first-child {
            margin-top: 10px
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr:last-child,
        #onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr:last-child {
            margin-bottom: 5px
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr {
            padding-top: 11.5px;
            padding-bottom: 11.5px;
            padding-left: 20px;
            padding-right: 20px;
            width: calc(100% - 40px);
            display: inline-block
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-acc-txt {
            width: 100%;
            padding: 0
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-subgrp-cntr {
            padding-left: 20px;
            padding-right: 15px;
            padding-bottom: 0;
            width: calc(100% - 35px)
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-subgrp {
            padding-right: 5px
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-acc-grpcntr {
            z-index: 1;
            position: relative
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header+.ot-arw-cntr {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
            margin-top: -2px
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header+.ot-arw-cntr .ot-arw {
            width: 15px;
            height: 20px;
            margin-left: 5px;
            color: dimgray
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-cat-header {
            float: none;
            color: #2e3644;
            margin: 0;
            display: inline-block;
            height: auto;
            word-wrap: break-word;
            min-height: inherit
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-vlst-cntr,
        #onetrust-pc-sdk .ot-accordion-layout .ot-hlst-cntr {
            padding-left: 20px;
            width: calc(100% - 20px);
            display: inline-block;
            margin-top: 0;
            padding-bottom: 2px
        }

        #onetrust-pc-sdk .ot-accordion-layout .ot-acc-hdr {
            position: relative;
            min-height: 25px
        }

        #onetrust-pc-sdk .ot-accordion-layout h4~.ot-tgl,
        #onetrust-pc-sdk .ot-accordion-layout h4~.ot-always-active {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px
        }

        #onetrust-pc-sdk .ot-accordion-layout h4~.ot-tgl+.ot-tgl {
            right: 95px
        }

        #onetrust-pc-sdk .ot-accordion-layout .category-vendors-list-handler,
        #onetrust-pc-sdk .ot-accordion-layout .category-vendors-list-handler+a {
            margin-top: 5px
        }

        #onetrust-pc-sdk #ot-lst-cnt {
            margin-top: 1rem;
            max-height: calc(100% - 96px)
        }

        #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info-cntr {
            border: 1px solid #d8d8d8;
            padding: .75rem 2rem;
            padding-bottom: 0;
            width: auto;
            margin-top: .5rem
        }

        #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info {
            margin-bottom: 1rem;
            padding-left: .75rem;
            padding-right: .75rem;
            display: flex;
            flex-direction: column
        }

        #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info[data-vnd-info-key*=DPOEmail] {
            border-top: 1px solid #d8d8d8;
            padding-top: 1rem
        }

        #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info[data-vnd-info-key*=DPOLink] {
            border-bottom: 1px solid #d8d8d8;
            padding-bottom: 1rem
        }

        #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info .ot-vnd-lbl {
            font-weight: bold;
            font-size: .85em;
            margin-bottom: .5rem
        }

        #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info .ot-vnd-cnt {
            margin-left: .5rem;
            font-weight: 500;
            font-size: .85rem
        }

        #onetrust-pc-sdk .ot-vs-list,
        #onetrust-pc-sdk .ot-vnd-serv {
            width: auto;
            padding: 1rem 1.25rem;
            padding-bottom: 0
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-serv-hdr-cntr,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-serv-hdr-cntr {
            padding-bottom: .75rem;
            border-bottom: 1px solid #d8d8d8
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-serv-hdr-cntr .ot-vnd-serv-hdr,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-serv-hdr-cntr .ot-vnd-serv-hdr {
            font-weight: 600;
            font-size: .95em;
            line-height: 2;
            margin-left: .5rem
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item {
            border: none;
            margin: 0;
            padding: 0
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item button,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item button {
            outline: none;
            border-bottom: 1px solid #d8d8d8
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item button[aria-expanded=true],
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item button[aria-expanded=true] {
            border-bottom: none
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:first-child,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:first-child {
            margin-top: .25rem;
            border-top: unset
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:last-child,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:last-child {
            margin-bottom: .5rem
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item:last-child button,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item:last-child button {
            border-bottom: none
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info-cntr,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info-cntr {
            border: 1px solid #d8d8d8;
            padding: .75rem 1.75rem;
            padding-bottom: 0;
            width: auto;
            margin-top: .5rem
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info {
            margin-bottom: 1rem;
            padding-left: .75rem;
            padding-right: .75rem;
            display: flex;
            flex-direction: column
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info[data-vnd-info-key*=DPOEmail],
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info[data-vnd-info-key*=DPOEmail] {
            border-top: 1px solid #d8d8d8;
            padding-top: 1rem
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info[data-vnd-info-key*=DPOLink],
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info[data-vnd-info-key*=DPOLink] {
            border-bottom: 1px solid #d8d8d8;
            padding-bottom: 1rem
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info .ot-vnd-lbl,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info .ot-vnd-lbl {
            font-weight: bold;
            font-size: .85em;
            margin-bottom: .5rem
        }

        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-vnd-info .ot-vnd-cnt,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info .ot-vnd-cnt {
            margin-left: .5rem;
            font-weight: 500;
            font-size: .85rem
        }

        #onetrust-pc-sdk .ot-subgrp-cntr .ot-vnd-serv {
            margin-bottom: 1rem;
            padding: 1rem .95rem
        }

        #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr,
        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr,
        #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr,
        #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr {
            padding: .5rem 0;
            margin: 0;
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between
        }

        #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr div:first-child,
        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr div:first-child,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr div:first-child,
        #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr div:first-child,
        #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr div:first-child {
            margin-left: .5rem
        }

        #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr div:last-child,
        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr div:last-child,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr div:last-child,
        #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr div:last-child,
        #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr div:last-child {
            margin-right: .5rem;
            margin-left: .5rem
        }

        #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-always-active,
        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-always-active,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-always-active,
        #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-always-active,
        #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-always-active {
            position: relative;
            right: unset;
            top: unset;
            transform: unset
        }

        #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-arw-cntr,
        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-arw-cntr,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-arw-cntr,
        #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-arw-cntr,
        #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-arw-cntr {
            float: none;
            top: unset;
            right: unset;
            transform: unset;
            margin-top: -2px;
            position: relative
        }

        #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-cat-header,
        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-cat-header,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-cat-header,
        #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-cat-header,
        #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-cat-header {
            flex: 1;
            margin: 0 .5rem
        }

        #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-tgl,
        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-tgl,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-tgl,
        #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-tgl,
        #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-tgl {
            position: relative;
            transform: none;
            right: 0;
            top: 0;
            float: none
        }

        #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox,
        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox,
        #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox,
        #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-chkbox {
            position: relative;
            margin: 0 .5rem
        }

        #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox label,
        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox label,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox label,
        #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox label,
        #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-chkbox label {
            padding: 0
        }

        #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox label::before,
        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox label::before,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox label::before,
        #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox label::before,
        #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-chkbox label::before {
            position: relative
        }

        #onetrust-pc-sdk .ot-vs-config .ot-acc-hdr .ot-chkbox input,
        #onetrust-pc-sdk .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox input,
        #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-acc-hdr .ot-chkbox input,
        #onetrust-pc-sdk #ot-pc-lst .ot-vs-list .ot-vnd-item .ot-acc-hdr .ot-chkbox input,
        #onetrust-pc-sdk .ot-accordion-layout.ot-checkbox-consent .ot-acc-hdr .ot-chkbox input {
            position: absolute;
            cursor: pointer;
            width: 100%;
            height: 100%;
            opacity: 0;
            margin: 0;
            top: 0;
            left: 0;
            z-index: 1
        }

        #onetrust-pc-sdk .ot-vs-list {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: .5rem 4px
        }

        #onetrust-pc-sdk .ot-vs-selc-all {
            display: flex;
            padding: 0;
            float: unset;
            align-items: center;
            justify-content: flex-start
        }

        #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf {
            justify-content: flex-end
        }

        #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf.ot-caret-conf .ot-sel-all-chkbox {
            margin-right: 48px
        }

        #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf .ot-sel-all-chkbox {
            margin: 0;
            padding: 0;
            margin-right: 14px;
            justify-content: flex-end
        }

        #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf #ot-selall-vencntr.ot-chkbox,
        #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf #ot-selall-vencntr.ot-tgl {
            display: inline-block;
            right: unset;
            width: auto;
            height: auto;
            float: none
        }

        #onetrust-pc-sdk .ot-vs-selc-all.ot-toggle-conf #ot-selall-vencntr label {
            width: 45px;
            height: 25px
        }

        #onetrust-pc-sdk .ot-vs-selc-all .ot-sel-all-chkbox {
            margin-right: 11px;
            margin-left: .75rem;
            display: flex;
            align-items: center
        }

        #onetrust-pc-sdk .ot-vs-selc-all .sel-all-hdr {
            margin: 0 1.25rem;
            font-size: .812em;
            line-height: normal;
            text-align: center;
            word-break: break-word;
            word-wrap: break-word
        }

        #onetrust-pc-sdk .ot-vnd-list-cnt #ot-selall-vencntr.ot-chkbox {
            float: unset;
            right: 0
        }

        #onetrust-pc-sdk.otPcTab .ot-vs-selc-all.ot-toggle-conf.ot-caret-conf .ot-sel-all-chkbox {
            margin-right: 50px
        }

        #onetrust-pc-sdk.otPcTab .ot-vs-selc-all.ot-toggle-conf #ot-selall-vencntr label {
            width: 35px;
            height: 10px
        }

        #onetrust-pc-sdk.otPcTab .ot-vs-selc-all.ot-toggle-conf .ot-sel-all-chkbox {
            justify-content: flex-end
        }

        #onetrust-pc-sdk.otPcTab .ot-vs-selc-all .ot-sel-all-chkbox {
            right: unset;
            display: flex;
            align-items: center
        }

        #onetrust-pc-sdk.otPcTab .ot-vs-selc-all .ot-sel-all-chkbox #ot-selall-vencntr.ot-chkbox {
            right: unset
        }

        #onetrust-pc-sdk.otPcTab .ot-vs-selc-all .ot-sel-all-chkbox {
            margin-left: 12px
        }

        #onetrust-pc-sdk.otPcTab .ot-vs-selc-all .ot-sel-all-chkbox .sel-all-hdr {
            margin: 0 1rem
        }

        #onetrust-pc-sdk.otPcTab[dir=rtl] input~.ot-acc-hdr .ot-arw,
        #onetrust-pc-sdk.otPcTab[dir=rtl] #ot-back-arw {
            transform: rotate(180deg);
            -o-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            -webkit-transform: rotate(180deg)
        }

        #onetrust-pc-sdk.otPcTab[dir=rtl] input:checked~.ot-acc-hdr .ot-arw {
            transform: rotate(270deg);
            -o-transform: rotate(270deg);
            -ms-transform: rotate(270deg);
            -webkit-transform: rotate(270deg)
        }

        #onetrust-pc-sdk.otPcTab[dir=rtl] #ot-search-cntr svg {
            right: 15px
        }

        #onetrust-pc-sdk.otPcTab[dir=rtl] .ot-chkbox label::after {
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            border-left: 0;
            border-right: 3px solid
        }

        #onetrust-pc-sdk #close-pc-btn-handler.ot-close-icon {
            padding: 0;
            background-color: transparent;
            border: none;
            margin: 0
        }

        @media(max-width: 767px) {
            #onetrust-pc-sdk {
                width: 100%;
                border: none
            }

            #onetrust-pc-sdk .ot-sdk-container,
            #onetrust-pc-sdk .ot-sdk-container {
                padding: 0;
                margin: 0
            }

            #onetrust-pc-sdk #ot-pc-title {
                margin-left: 10px;
                max-width: 60%
            }

            #onetrust-pc-sdk .ot-desc-cntr {
                margin: 0;
                padding-top: 20px;
                padding-right: 20px;
                padding-bottom: 15px;
                padding-left: 20px;
                position: relative;
                left: auto
            }

            #onetrust-pc-sdk .ot-desc-cntr {
                margin-top: 20px;
                margin-left: 20px;
                padding: 0;
                padding-bottom: 10px
            }

            #onetrust-pc-sdk .ot-grps-cntr {
                max-height: none;
                overflow: hidden
            }

            #onetrust-pc-sdk #accept-recommended-btn-handler {
                float: none
            }
        }

        @media(min-width: 768px) {
            #onetrust-pc-sdk.ot-tgl-with-label .ot-label-status {
                display: inline
            }

            #onetrust-pc-sdk.ot-tgl-with-label #ot-pc-lst .ot-label-status {
                display: none
            }

            #onetrust-pc-sdk.ot-tgl-with-label.ot-leg-opt-out .ot-pli-hdr {
                padding-right: 8%
            }

            #onetrust-pc-sdk.ot-tgl-with-label .ot-cat-header {
                max-width: 60%
            }

            #onetrust-pc-sdk.ot-tgl-with-label .ot-subgrp h4 {
                max-width: 58%
            }

            #onetrust-pc-sdk.ot-tgl-with-label .ot-subgrp-cntr ul.ot-subgrps li.ot-subgrp>h6 {
                max-width: 50%
            }

            #onetrust-pc-sdk.ot-tgl-with-label .ot-desc-cntr .ot-tgl-cntr:first-of-type,
            #onetrust-pc-sdk.ot-tgl-with-label .ot-cat-header+.ot-tgl {
                padding-left: 15px
            }
        }

        @media(max-width: 640px) {
            #onetrust-pc-sdk {
                height: 100%
            }

            #onetrust-pc-sdk .ot-pc-header {
                padding: 10px;
                width: calc(100% - 20px)
            }

            #onetrust-pc-sdk #ot-pc-content {
                overflow: auto
            }

            #onetrust-pc-sdk .ot-sdk-row .ot-sdk-columns {
                width: 100%
            }

            #onetrust-pc-sdk .ot-desc-cntr {
                margin: 0;
                overflow: hidden
            }

            #onetrust-pc-sdk .ot-desc-cntr {
                margin-left: 10px;
                width: calc(100% - 15px);
                margin-top: 5px;
                margin-bottom: 5px
            }

            #onetrust-pc-sdk .ot-ven-hdr {
                max-width: 80%
            }

            #onetrust-pc-sdk #ot-lst-cnt {
                width: calc(100% - 18px);
                padding-top: 13px;
                padding-right: 5px;
                padding-left: 10px
            }

            #onetrust-pc-sdk .ot-grps-cntr {
                width: 100%
            }

            #onetrust-pc-sdk .ot-pc-footer {
                max-height: 300px
            }

            #onetrust-pc-sdk #ot-pc-content,
            #onetrust-pc-sdk #ot-pc-lst {
                height: calc(100% - 322px)
            }

            #onetrust-pc-sdk.ot-close-btn-link #close-pc-btn-handler {
                position: fixed;
                top: 10px;
                right: 15px
            }

            #onetrust-pc-sdk.ot-close-btn-link .ot-pc-header {
                padding-top: 25px
            }

            #onetrust-pc-sdk.ot-close-btn-link #ot-pc-title {
                max-width: 100%
            }
        }

        @media(max-width: 640px)and (orientation: portrait) {
            #onetrust-pc-sdk #ot-pc-hdr {
                height: 70px;
                padding: 15px 0;
                width: 100%
            }

            #onetrust-pc-sdk .ot-lst-subhdr {
                width: calc(100% - 15px);
                float: none;
                bottom: auto;
                display: inline-block;
                padding-top: 8px;
                padding-left: 15px
            }

            #onetrust-pc-sdk .ot-btn-subcntr {
                float: none
            }

            #onetrust-pc-sdk #ot-search-cntr {
                display: inline-block;
                width: calc(100% - 55px);
                position: relative
            }

            #onetrust-pc-sdk #ot-anchor {
                top: 75px;
                right: 30px
            }

            #onetrust-pc-sdk #ot-fltr-modal {
                top: 81px
            }

            #onetrust-pc-sdk #ot-fltr-cntr {
                float: right;
                right: 15px
            }

            #onetrust-pc-sdk #ot-lst-title {
                padding-left: 15px
            }

            #onetrust-pc-sdk .ot-lst-cntr {
                overflow-y: scroll
            }

            #onetrust-pc-sdk #ot-lst-cnt {
                height: auto;
                overflow: hidden
            }

            #onetrust-pc-sdk .save-preference-btn-handler,
            #onetrust-pc-sdk #accept-recommended-btn-handler,
            #onetrust-pc-sdk .ot-pc-refuse-all-handler {
                width: calc(100% - 33px)
            }

            #onetrust-pc-sdk.ot-ftr-stacked .save-preference-btn-handler,
            #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr {
                max-width: none
            }

            #onetrust-pc-sdk.ot-ftr-stacked .ot-pc-footer button {
                margin: 15px
            }

            #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr button {
                min-width: none;
                max-width: none
            }

            #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-subcntr button:nth-child(2) {
                margin-top: 15px
            }

            #onetrust-pc-sdk.ot-ftr-stacked .ot-btn-container button:not(:last-child) {
                margin-bottom: 0
            }
        }

        @media(max-width: 425px) {
            #onetrust-pc-sdk #ot-pc-lst .ot-acc-txt {
                padding-top: 6px;
                padding-bottom: 10px
            }

            #onetrust-pc-sdk #ot-pc-lst .ot-host-notice {
                float: left;
                margin-left: 30px
            }

            #onetrust-pc-sdk #ot-pc-lst .ot-arw-cntr {
                float: none;
                display: inline
            }

            #onetrust-pc-sdk #ot-pc-lst .ot-ven-hdr {
                float: left;
                width: 100%;
                max-width: 85%
            }

            #onetrust-pc-sdk.ot-addtl-vendors #ot-pc-lst .ot-acc-cntr .ot-arw-cntr:first-of-type {
                float: right
            }

            #onetrust-pc-sdk #ot-pc-title {
                max-width: 100%
            }

            #onetrust-pc-sdk .ot-subgrp-cntr li.ot-subgrp {
                margin-left: 10px;
                width: calc(100% - 10px)
            }

            #onetrust-pc-sdk #ot-ven-lst .ot-tgl-cntr {
                width: auto;
                float: right
            }

            #onetrust-pc-sdk #ot-ven-lst .ot-arw-cntr {
                float: right
            }

            #onetrust-pc-sdk .ot-ven-hdr {
                max-width: 47%
            }

            #onetrust-pc-sdk .ot-always-active-group .ot-tgl-cntr:first-of-type {
                max-width: none;
                padding-left: 20px
            }
        }

        @media only screen and (max-height: 425px)and (max-width: 896px)and (orientation: landscape) {
            #onetrust-pc-sdk {
                height: 100%;
                width: 100%;
                max-width: none
            }

            #onetrust-pc-sdk .ot-always-active-group .ot-tgl-cntr {
                max-width: none
            }

            #onetrust-pc-sdk .ot-pc-header {
                padding: 10px;
                width: calc(100% - 20px)
            }

            #onetrust-pc-sdk .ot-lst-cntr {
                overflow-y: scroll
            }

            #onetrust-pc-sdk #ot-lst-cnt {
                height: auto;
                overflow: hidden
            }

            #onetrust-pc-sdk #accept-recommended-btn-handler {
                float: right
            }

            #onetrust-pc-sdk .save-preference-btn-handler,
            #onetrust-pc-sdk #accept-recommended-btn-handler,
            #onetrust-pc-sdk .ot-pc-refuse-all-handler {
                width: auto
            }

            #onetrust-pc-sdk #ot-pc-content,
            #onetrust-pc-sdk #ot-pc-lst {
                height: calc(100% - 155px)
            }

            #onetrust-pc-sdk.ot-shw-fltr .ot-lst-cntr {
                overflow: hidden
            }

            #onetrust-pc-sdk.ot-shw-fltr #ot-pc-lst {
                position: static
            }

            #onetrust-pc-sdk.ot-shw-fltr #ot-fltr-modal {
                top: 0;
                width: 100%;
                height: 100%;
                max-height: none
            }

            #onetrust-pc-sdk.ot-shw-fltr #ot-fltr-modal>div {
                margin: 0;
                box-sizing: initial;
                height: 100%;
                max-height: none
            }

            #onetrust-pc-sdk.ot-shw-fltr #clear-filters-handler {
                padding-right: 20px
            }

            #onetrust-pc-sdk.ot-shw-fltr #ot-anchor {
                display: none !important
            }

            #onetrust-pc-sdk .ot-pc-footer button {
                margin: 10px
            }
        }

        @media(max-width: 425px),
        (max-width: 896px)and (max-height: 425px)and (orientation: landscape) {
            #onetrust-pc-sdk .ot-pc-header {
                padding-right: 20px
            }

            #onetrust-pc-sdk .ot-pc-logo {
                margin-left: 0px;
                margin-top: 5px;
                width: 150px
            }

            #onetrust-pc-sdk .ot-close-icon {
                width: 44px;
                height: 44px;
                background-size: 12px
            }

            #onetrust-pc-sdk .ot-grp-hdr1 {
                float: right;
                margin-left: 10px;
                width: auto
            }

            #onetrust-pc-sdk .ot-grp-hdr1 {
                margin-left: 0px;
                padding-right: 10px
            }

            #onetrust-pc-sdk #ot-pvcy-hdr,
            #onetrust-pc-sdk .ot-grp-hdr1 .ot-cat-header {
                display: none
            }

            #onetrust-pc-sdk .ot-grp-hdr1+.ot-vlst-cntr {
                padding-top: 10px
            }
        }

        @media only screen and (max-height: 610px) {
            #onetrust-pc-sdk {
                max-height: 100%
            }
        }

        #onetrust-consent-sdk #onetrust-pc-sdk,
        #onetrust-consent-sdk #ot-search-cntr,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle,
        #onetrust-consent-sdk #onetrust-pc-sdk ot-grp-hdr1 .checkbox,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title:after,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-anchor {
            background-color: #FFFFFF;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk h3,
        #onetrust-consent-sdk #onetrust-pc-sdk h4,
        #onetrust-consent-sdk #onetrust-pc-sdk h5,
        #onetrust-consent-sdk #onetrust-pc-sdk h6,
        #onetrust-consent-sdk #onetrust-pc-sdk p,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-ven-lst .ot-ven-opts p,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-desc,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-title,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-li-title,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-sel-all-hdr span,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-modal #modal-header,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-sel-blk p,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-lst-title h3,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .back-btn-handler p,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst .ot-ven-name,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-lst #ot-ven-lst .consent-category,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,
        #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler {
            color: #3a414e;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,
        #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,
        #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler+a,
        #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-ven-link,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-name a,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-acc-hdr .ot-host-expand,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info a,
        #onetrust-consent-sdk #onetrust-pc-sdk #ot-pc-content #ot-pc-desc .ot-link-btn {
            color: #0072f5;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover {
            text-decoration: underline;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-grpcntr.ot-acc-txt,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-txt .ot-subgrp-tgl .ot-switch.ot-toggle {
            background-color: #F8F8F8;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk #ot-host-lst .ot-host-info,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-acc-txt .ot-ven-dets {
            background-color: #F8F8F8;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {
            background-color: #0072f5;
            border-color: #0072f5;
            color: #FFFFFF;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk .ot-active-menu {
            border-color: #0072f5;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler {
            background-color: transparent;
            border: 1px solid transparent;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {
            background-color: #FFFFFF;
            color: #78808E;
            border-color: #78808E;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus+.ot-switch,
        .ot-switch .ot-switch-nob,
        .ot-switch .ot-switch-nob:before,
        #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus+label::before,
        #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus+label::before {
            outline-color: #000000;
            outline-width: 1px;
        }

        #onetrust-pc-sdk .ot-host-item>button:focus,
        #onetrust-pc-sdk .ot-ven-item>button:focus {
            border: 1px solid #000000;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk *:focus,
        #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr>a:focus {
            outline: 1px solid #000000;
        }

        #onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {
            background-color: #F4F4F4
        }

        #onetrust-consent-sdk #onetrust-pc-sdk .ot-active-menu {
            background-color: #FFFFFF
        }

        .ot-sdk-cookie-policy {
            font-family: inherit;
            font-size: 16px
        }

        .ot-sdk-cookie-policy.otRelFont {
            font-size: 1rem
        }

        .ot-sdk-cookie-policy h3,
        .ot-sdk-cookie-policy h4,
        .ot-sdk-cookie-policy h6,
        .ot-sdk-cookie-policy p,
        .ot-sdk-cookie-policy li,
        .ot-sdk-cookie-policy a,
        .ot-sdk-cookie-policy th,
        .ot-sdk-cookie-policy #cookie-policy-description,
        .ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,
        .ot-sdk-cookie-policy #cookie-policy-title {
            color: dimgray
        }

        .ot-sdk-cookie-policy #cookie-policy-description {
            margin-bottom: 1em
        }

        .ot-sdk-cookie-policy h4 {
            font-size: 1.2em
        }

        .ot-sdk-cookie-policy h6 {
            font-size: 1em;
            margin-top: 2em
        }

        .ot-sdk-cookie-policy th {
            min-width: 75px
        }

        .ot-sdk-cookie-policy a,
        .ot-sdk-cookie-policy a:hover {
            background: #fff
        }

        .ot-sdk-cookie-policy thead {
            background-color: #f6f6f4;
            font-weight: bold
        }

        .ot-sdk-cookie-policy .ot-mobile-border {
            display: none
        }

        .ot-sdk-cookie-policy section {
            margin-bottom: 2em
        }

        .ot-sdk-cookie-policy table {
            border-collapse: inherit
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy {
            font-family: inherit;
            font-size: 1rem
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {
            color: dimgray
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {
            margin-bottom: 1em
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup {
            margin-left: 1.5em
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td {
            font-size: .9em
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a {
            font-size: inherit
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group {
            font-size: 1em;
            margin-bottom: .6em
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title {
            margin-bottom: 1.2em
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section {
            margin-bottom: 1em
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {
            min-width: 75px
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover {
            background: #fff
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead {
            background-color: #f6f6f4;
            font-weight: bold
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border {
            display: none
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section {
            margin-bottom: 2em
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li {
            list-style: disc;
            margin-left: 1.5em
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4 {
            display: inline-block
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table {
            border-collapse: inherit;
            margin: auto;
            border: 1px solid #d7d7d7;
            border-radius: 5px;
            border-spacing: initial;
            width: 100%;
            overflow: hidden
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td {
            border-bottom: 1px solid #d7d7d7;
            border-right: 1px solid #d7d7d7
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td {
            border-bottom: 0px
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child {
            border-right: 0px
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type {
            width: 25%
        }

        .ot-sdk-cookie-policy[dir=rtl] {
            text-align: left
        }

        #ot-sdk-cookie-policy h3 {
            font-size: 1.5em
        }

        @media only screen and (max-width: 530px) {

            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,
            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,
            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,
            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,
            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,
            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr {
                display: block
            }

            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr {
                position: absolute;
                top: -9999px;
                left: -9999px
            }

            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr {
                margin: 0 0 1em 0
            }

            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),
            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a {
                background: #f6f6f4
            }

            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td {
                border: none;
                border-bottom: 1px solid #eee;
                position: relative;
                padding-left: 50%
            }

            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before {
                position: absolute;
                height: 100%;
                left: 6px;
                width: 40%;
                padding-right: 10px
            }

            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border {
                display: inline-block;
                background-color: #e4e4e4;
                position: absolute;
                height: 100%;
                top: 0;
                left: 45%;
                width: 2px
            }

            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before {
                content: attr(data-label);
                font-weight: bold
            }

            .ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li {
                word-break: break-word;
                word-wrap: break-word
            }

            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table {
                overflow: hidden
            }

            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td {
                border: none;
                border-bottom: 1px solid #d7d7d7
            }

            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr {
                display: block
            }

            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,
            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type {
                width: auto
            }

            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr {
                margin: 0 0 1em 0
            }

            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before {
                height: 100%;
                width: 40%;
                padding-right: 10px
            }

            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before {
                content: attr(data-label);
                font-weight: bold
            }

            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li {
                word-break: break-word;
                word-wrap: break-word
            }

            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr {
                position: absolute;
                top: -9999px;
                left: -9999px;
                z-index: -9999
            }

            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td {
                border-bottom: 1px solid #d7d7d7;
                border-right: 0px
            }

            #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child {
                border-bottom: 0px
            }
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h5,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,
        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description {
            color: #696969;
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th {
            color: #696969;
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group {
            color: #696969;
        }

        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title {
            color: #696969;
        }


        #ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th {
            background-color: #F8F8F8;
        }

        .ot-floating-button__front {
            background-image: url('https://cdn-apac.onetrust.com/logos/static/ot_persistent_cookie.png')
        }
    </style>
    <script type="text/javascript" src="https://js.hs-banner.com/19520031.js" id="cookieBanner-19520031"
        data-cookieconsent="ignore" data-hs-ignore="true" data-loader="hs-scriptloader" data-hsjs-portal="19520031"
        data-hsjs-env="prod" data-hsjs-hublet="na1" class="optanon-category-C0002-C0003 "></script>
    <script async="" src="https://www.googletagmanager.com/gtag/js?id=AW-952282056"
        class="optanon-category-C0002 "></script>
    <meta http-equiv="origin-trial"
        content="A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9">
    <script type="text/javascript" async=""
        src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/952282056/?random=1657484711979&amp;cv=9&amp;fst=1657484711979&amp;num=1&amp;bg=ffffff&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=720&amp;u_w=1280&amp;u_ah=672&amp;u_aw=1280&amp;u_cd=24&amp;u_his=6&amp;u_tz=180&amp;u_java=false&amp;u_nplug=5&amp;u_nmime=2&amp;gtm=2oa6t0&amp;sendb=1&amp;ig=1&amp;data=event%3Dgtag.config&amp;frm=0&amp;url=https%3A%2F%2Flocus.sh%2Fecommerce-logistics%2F&amp;ref=https%3A%2F%2Flocus.sh%2Fretail-logistics%2F&amp;tiba=E-Commerce%20Logistics%20Solutions%20for%20Last%20Mile%20%7C%20Locus&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script>
</head>

<body>
    <style type="text/css">
        html.hs-messages-widget-open.hs-messages-mobile,
        html.hs-messages-widget-open.hs-messages-mobile body {
            overflow: hidden !important;
            position: relative !important
        }

        html.hs-messages-widget-open.hs-messages-mobile body {
            height: 100% !important;
            margin: 0 !important
        }

        #-iframe-container {
            display: initial !important;
            z-index: 2147483647;
            position: fixed !important;
            bottom: 0 !important
        }

        #hubspot-messages-iframe-container.widget-align-left {
            left: 0 !important
        }

        #hubspot-messages-iframe-container.widget-align-right {
            right: 0 !important
        }

        #hubspot-messages-iframe-container.internal {
            z-index: 1016
        }

        #hubspot-messages-iframe-container.internal iframe {
            min-width: 108px
        }

        #hubspot-messages-iframe-container .shadow-container {
            display: initial !important;
            z-index: -1;
            position: absolute;
            width: 0;
            height: 0;
            bottom: 0;
            content: ""
        }

        #hubspot-messages-iframe-container .shadow-container.internal {
            display: none !important
        }

        #hubspot-messages-iframe-container .shadow-container.active {
            width: 400px;
            height: 400px
        }

        #hubspot-messages-iframe-container iframe {
            display: initial !important;
            width: 100% !important;
            height: 100% !important;
            border: none !important;
            position: absolute !important;
            bottom: 0 !important;
            right: 0 !important;
            background: transparent !important
        }
    </style>
    <header class="dark-version sticky">
        <div class="site-mobile-menu site-navbar-target">
            <div class="site-mobile-menu-body container">
                <ul class="site-nav-wrap">
                    <li class="has-children"><span class="arrow-collapse collapsed" data-bs-toggle="collapse"
                            data-bs-target="#collapseItem0"></span>
                        <a href="#">Platform</a>
                        <ul class="collapse" id="collapseItem0">
                            <li><a href="/dispatch-management-software/">Platform Overview</a></li>
                            <li><a href="/delivery-experience/">Delivery Experience</a></li>
                            <li><a href="/last-mile-delivery-routing-software/">Real-world Routing</a></li>
                            <li><a href="/shipping-network-logistics/">Shipping Network</a></li>
                        </ul>
                    </li>
                    <li class="has-children"><span class="arrow-collapse collapsed" data-bs-toggle="collapse"
                            data-bs-target="#collapseItem1"></span>
                        <a href="#">Industries</a>
                        <ul class="collapse" id="collapseItem1">
                            <li><a href="/ecommerce-logistics/">E-commerce</a></li>
                            <li><a href="/grocery-logistics/">E-grocery</a></li>
                            <li><a href="/retail-logistics/">Retail</a></li>
                            <li><a href="/industrial-services/">Industrial Services</a></li>
                            <li><a href="/manufacturing-logistics/">Manufacturing</a></li>
                            <li><a href="/3pl-and-cep/">3PL &amp; CEP</a></li>
                            <li><a href="/home-services/">Home Services</a></li>
                        </ul>
                    </li>
                    <li class="has-children"><span class="arrow-collapse collapsed" data-bs-toggle="collapse"
                            data-bs-target="#collapseItem2"></span>
                        <a href="#">Resources</a>
                        <ul class="collapse" id="collapseItem2">
                            <li><a href="/resources/whitepaper/">Whitepaper</a></li>
                            <li><a href="/resources/casestudy/">Case Studies</a></li>
                            <li><a href="/resources/#infographics">Infographics</a></li>
                            <li><a href="https://blog.locus.sh">Blogs</a></li>
                            <li><a href="/resources/#videos">Videos</a></li>
                            <li><a href="/resources/glossary/">Glossary</a></li>
                        </ul>
                    </li>
                    <li class="has-children"><span class="arrow-collapse collapsed" data-bs-toggle="collapse"
                            data-bs-target="#collapseItem3"></span>
                        <a href="#">Company</a>
                        <ul class="collapse" id="collapseItem3">
                            <li><a href="/about/">About Us</a></li>
                            <li><a href="/careers/">Careers</a></li>
                            <li><a href="/partnership-program/">Partners</a></li>
                            <li><a href="/trust/">Trust &amp; Security</a></li>
                            <li><a href="/newsroom/">News</a></li>
                            <li><a href="/contactus/">Contact Us</a></li>
                        </ul>
                    </li>
                    <li>
                    </li>
                    <li><a href="/customer-success-stories/">Customers</a></li>

                    <li class="has-children"><span class="arrow-collapse collapsed" data-bs-toggle="collapse"
                            data-bs-target="#collapseItem4"></span>
                        <a href="#">Guides</a>
                        <ul class="collapse" id="collapseItem4">
                            <li><a href="/electronics-supply-chain-and-third-party-logistics/">Electronic Products</a>
                            </li>
                            <li><a href="/fleet-management/">Fleet Management</a></li>
                            <li><a href="/healthcare-logistics/">Healthcare Logistics</a></li>
                            <li><a href="/what-is-a-transportation-management-system-tms-and-why-do-you-need-it/">Transport
                                    Management System</a></li>
                            <li><a href="/the-definitive-guide-on-e-commerce-logistics/">E-commerce Logistics</a></li>
                            <li><a href="/direct-to-store-delivery/">Direct Store Delivery </a></li>
                            <li><a href="/dispatcher/a-definitive-guide-to-route-planning/">Logistics Route Planner
                                    Guide</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div class="site-navbar js-sticky-header site-navbar-target" role="banner">
            <div class="container">
                <div class="row align-items-center position-relative">
                    <div class="site-logo">
                        <a href="/">
                            <img src="/assets/img/logo.svg" alt="locus-logo" class="logo-white">
                            <img src="/assets/img/logo-dark.svg" alt="locus-logo-dark" class="logo-dark">
                        </a>
                    </div>
                    <div class="col-12">
                        <nav class="site-navigation text-right ms-auto " role="navigation">
                            <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                <li class="has-children">
                                    <a href="#">Platform</a>
                                    <ul class="dropdown arrow-top">
                                        <li><a href="/dispatch-management-software/">Platform Overview</a></li>
                                        <li><a href="/delivery-experience/">Delivery Experience</a></li>
                                        <li><a href="/last-mile-delivery-routing-software/">Real-world Routing</a></li>
                                        <li><a href="/shipping-network-logistics/">Shipping Network</a></li>
                                    </ul>
                                </li>
                                <li class="has-children">
                                    <a href="#">Industries</a>
                                    <ul class="dropdown arrow-top">
                                        <li><a href="/ecommerce-logistics/">E-commerce</a></li>
                                        <li><a href="/grocery-logistics/">E-grocery</a></li>
                                        <li><a href="/retail-logistics/">Retail</a></li>
                                        <li><a href="/industrial-services/">Industrial Services</a></li>
                                        <li><a href="/manufacturing-logistics/">Manufacturing</a></li>
                                        <li><a href="/3pl-and-cep/">3PL &amp; CEP</a></li>
                                        <li><a href="/home-services/">Home Services</a></li>
                                    </ul>
                                </li>
                                <li class="has-children">
                                    <a href="#">Resources</a>
                                    <ul class="dropdown arrow-top">
                                        <li><a href="/resources/whitepaper/">Whitepaper</a></li>
                                        <li><a href="/resources/casestudy/">Case Studies</a></li>
                                        <li><a href="/resources/#infographics">Infographics</a></li>
                                        <li><a href="https://blog.locus.sh">Blogs</a></li>
                                        <li><a href="/resources/#videos">Videos</a></li>
                                        <li><a href="/resources/glossary/">Glossary</a></li>
                                    </ul>
                                </li>
                                <li class="has-children">
                                    <a href="#">Company</a>
                                    <ul class="dropdown arrow-top">
                                        <li><a href="/about/">About Us</a></li>
                                        <li><a href="/careers/">Careers</a></li>
                                        <li><a href="/partnership-program/">Partners</a></li>
                                        <li><a href="/trust/">Trust &amp; Security</a></li>
                                        <li><a href="/newsroom/">News</a></li>
                                        <li><a href="/contactus/">Contact Us</a></li>
                                    </ul>
                                </li>
                                <li>
                                </li>
                                <li><a href="/customer-success-stories/">Customers</a></li>

                                <li class="has-children">
                                    <a href="#">Guides</a>
                                    <ul class="dropdown arrow-top">
                                        <li><a href="/electronics-supply-chain-and-third-party-logistics/">Electronic
                                                Products</a></li>
                                        <li><a href="/fleet-management/">Fleet Management</a></li>
                                        <li><a href="/healthcare-logistics/">Healthcare Logistics</a></li>
                                        <li><a
                                                href="/what-is-a-transportation-management-system-tms-and-why-do-you-need-it/">Transport
                                                Management System</a></li>
                                        <li><a href="/the-definitive-guide-on-e-commerce-logistics/">E-commerce
                                                Logistics</a></li>
                                        <li><a href="/direct-to-store-delivery/">Direct Store Delivery </a></li>
                                        <li><a href="/dispatcher/a-definitive-guide-to-route-planning/">Logistics Route
                                                Planner Guide</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="toggle-button d-inline-block d-lg-none">
                        <button type="button" class="hamburger-menu d-block d-lg-none js-menu-toggle border-0">
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="banner bg-image">
        <div class="inner-container">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-7 col-md-6 text-center text-md-start">
                        <h1 class="text-uppercase">Bring last-mile excellence to e-commerce</h1>
                        <p class="fs-5">Overcome the hassles of daily routing, returns, driver shortages, and time-slot
                            management.</p>
                        <p class="fs-5">Powered by continuously learning algorithms, the Locus platform automates
                            end-to-end e-commerce logistics planning and adds last-mile transparency to deliver seamless
                            and delightful customer experiences.</p>
                        <div class="banner-cta">
                            <a href="#schedule-demo" class="btn btn-primary me-3">Schedule a demo</a>
                        </div>
                    </div>
                    <div class="col-xl-5 col-md-6 text-end">
                        <div class="banner-slide">
                            <img src="/assets/img/industry/ecommerce/hero-image.png" alt="Banner Image"
                                class="img-fluid mx-auto">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="sec-pad pb-0 clientele-sec bg-themeAliceBlue">

        <div class="container-fluid">
            <div class="row title">
                <div class="col-md-12">
                    <div class="text-center">
                        <h2 class="text-uppercase pb-3 mx-auto">Trusted by leading brands in 30+ countries</h2>
                    </div>
                </div>
            </div>
            <div class="row clientele-row">

                <div class="clientele-col">
                    <div class="client-block">
                        <img class="img-fluid d-block" src="/assets/img/clientele-logos/logo-1mg.png" alt="1mg"
                            loading="lazy">
                    </div>
                </div>

                <div class="clientele-col">
                    <div class="client-block">
                        <img class="img-fluid d-block" src="/assets/img/clientele-logos/logo-vezeeta.png" alt="vezeeta"
                            loading="lazy">
                    </div>
                </div>

                <div class="clientele-col">
                    <div class="client-block">
                        <img class="img-fluid d-block" src="/assets/img/clientele-logos/logo-lenskart.png"
                            alt="lenskart" loading="lazy">
                    </div>
                </div>

                <div class="clientele-col">
                    <div class="client-block">
                        <img class="img-fluid d-block" src="/assets/img/clientele-logos/logo-freshpress.png"
                            alt="freshpress" loading="lazy">
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section class="sec-pad industries-uses-sec">
        <div class="container">
            <div class="row title">
                <div class="col-md-12">
                    <div class="text-center">
                        <h2 class="text-uppercase pb-3 mx-auto">Why e-commerce companies are choosing the Locus platform
                        </h2>
                        <p class="pb-3">With experience across leading ecommerce companies, the Locus dispatch
                            management platform helps you enhance customer delight with frictionless deliveries, right
                            from the time of placing the order to delivery.</p>
                        <p>With dispatch scheduling, delivery route planning, resource utilization and last mile
                            visibility, you can reduce man-hours spent on logistics planning, save last-mile costs and
                            improve operational efficiencies.</p>
                    </div>
                </div>
            </div>
            <div class="industries-uses">
                <div class="row services-wrap">
                    <div class="col-md-6 services">
                        <div class="shadow-wrap">
                            <div class="services-image-block bg-orange notched-box">
                                <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-1.svg"
                                    alt="Dispatch thousands of orders every day" loading="lazy">
                            </div>
                        </div>
                        <div class="services-body">
                            <h5 class="services-title">Dispatch thousands of orders every day</h5>
                            <p class="services-text">Manage high volumes of daily orders with automated order workflows
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 services">
                        <div class="shadow-wrap">
                            <div class="services-image-block bg-blue notched-box">
                                <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-2.svg"
                                    alt="Route your fleets accurately" loading="lazy">
                            </div>
                        </div>
                        <div class="services-body">
                            <h5 class="services-title">Route your fleets accurately</h5>
                            <p class="services-text">Plan optimal delivery routes across scheduled and dynamic
                                deliveries considering 180+ real-world variables</p>
                        </div>
                    </div>
                    <div class="col-md-6 services">
                        <div class="shadow-wrap">
                            <div class="services-image-block bg-indigo notched-box">
                                <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-3.svg"
                                    alt="Save time planning your logistics" loading="lzy">
                            </div>
                        </div>
                        <div class="services-body">
                            <h5 class="services-title">Save time planning your logistics</h5>
                            <p class="services-text">Plan and schedule deliveries automatically across your diverse
                                fulfillment models</p>
                        </div>
                    </div>
                    <div class="col-md-6 services">
                        <div class="shadow-wrap">
                            <div class="services-image-block bg-brown notched-box">
                                <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-4.svg"
                                    alt="Never miss a delivery" loading="lazy">
                            </div>
                        </div>
                        <div class="services-body">
                            <h5 class="services-title">Never miss a delivery</h5>
                            <p class="services-text">Offer greater convenience to your customers with their preferred
                                delivery timings and reduce your failed delivery rates</p>
                        </div>
                    </div>
                    <div class="col-md-6 services">
                        <div class="shadow-wrap">
                            <div class="services-image-block bg-red notched-box">
                                <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-5.svg"
                                    alt="Manage your resources better" loading="lazy">
                            </div>
                        </div>
                        <div class="services-body">
                            <h5 class="services-title">Manage your resources better</h5>
                            <p class="services-text">Organize driver schedules, track resource availability and allocate
                                the right resources to the right tasks</p>
                        </div>
                    </div>
                    <div class="col-md-6 services">
                        <div class="shadow-wrap">
                            <div class="services-image-block bg-green notched-box">
                                <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-6.svg"
                                    alt="Make lives easier for your ground staff" loading="lazy">
                            </div>
                        </div>
                        <div class="services-body">
                            <h5 class="services-title">Make lives easier for your ground staff</h5>
                            <p class="services-text">Simplify daily task management, navigation, and real-time
                                communications for your riders and delivery partners</p>
                        </div>
                    </div>
                    <div class="col-md-6 services">
                        <div class="shadow-wrap">
                            <div class="services-image-block bg-blue notched-box">
                                <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-7.svg"
                                    alt="Stay on top of your deliveries" loading="lazy">
                            </div>
                        </div>
                        <div class="services-body">
                            <h5 class="services-title">Stay on top of your deliveries</h5>
                            <p class="services-text">Gain more visibility on ongoing deliveries with live tracking,
                                real-time alerts and notifications, and actionable insights</p>
                        </div>
                    </div>
                    <div class="col-md-6 services">
                        <div class="shadow-wrap">
                            <div class="services-image-block bg-purple notched-box">
                                <img class="img-fluid h-100" src="/assets/img/industry/ecommerce/icon-8.svg"
                                    alt="Build more trust with your customers" loading="lazy">
                            </div>
                        </div>
                        <div class="services-body">
                            <h5 class="services-title">Build more trust with your customers</h5>
                            <p class="services-text">Share real-time order status with your customers with accurate ETAs
                                and turn-by-turn navigations</p>
                        </div>
                    </div>
                    <div class="col-md-6 services">
                        <div class="shadow-wrap">
                            <div class="services-image-block bg-amber notched-box">
                                <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-9.svg"
                                    alt="Manage returns effortlessly" loading="lazy">
                            </div>
                        </div>
                        <div class="services-body">
                            <h5 class="services-title">Manage returns effortlessly</h5>
                            <p class="services-text">Auto-plan your reverse logistics along with scheduled deliveries to
                                save time and multiple trips</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="sec-pad img-cont-block bg-themeEncyo">
        <div class="container">
            <div class="row">
                <div class="col-md-6 order-md-last">
                    <div class="image-wrap">
                        <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-10.svg"
                            alt="Offer customer-preferred delivery time windows" loading="lazy">
                    </div>
                </div>
                <div class="col-md-6 order-md-first">
                    <div class="content-wrap">
                        <h2 class="text-uppercase">Offer customer-preferred delivery time windows</h2>
                        <p>In a survey by Capgemini, 73% of customers said that receiving orders in a convenient time
                            slot is more important than receiving it quickly. With a heightened delivery experience, you
                            can make customers true custodians of your brand.</p>
                        <p>With Locus, minimize the risk of failed deliveries and delight customers with the flexibility
                            to select their preferred delivery dates and times at check out or even after order
                            confirmation.</p>
                        <p>To know more about slot management, and how the future of e-commerce is same day delivery, <a
                                class="link"
                                href="https://blog.locus.sh/future-of-ecommerce-is-same-day-and-slot-based-delivery/">click
                                here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="sec-pad img-cont-block">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="image-wrap">
                        <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-11.svg"
                            alt="Bring carrier agility to accommodate shifting market requirements" loading="lazy">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-wrap">
                        <h2 class="text-uppercase">Bring carrier agility to accommodate shifting market requirements
                        </h2>
                        <p>With the rise of Quick Commerce, instant gratification has become the new norm. Add to this
                            variability in order size, priority and delivery windows, brands are struggling to meet
                            customer demand with limited fleet capacity.</p>
                        <p>The Locus platform enables dispatchers to:</p>
                        <ul>
                            <li>Automatically push orders to the best third-party carrier for each order based on
                                pre-configured system rules—cost of delivery, order size, delivery timeline, priority
                                and more.</li>
                            <li>Gain access to a vast carrier network with a variety of shippers that offer on-demand,
                                next-day, and hyper-local delivery.</li>
                        </ul>
                        <p>To know more about carrier management and how to manage your fleet better, <a class="link"
                                href="https://blog.locus.sh/the-essential-features-every-fleet-manager-needs/">click
                                here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="sec-pad img-cont-block bg-themeEncyo">
        <div class="container">
            <div class="row">
                <div class="col-md-6 order-md-last">
                    <div class="image-wrap">
                        <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-12.svg"
                            alt="Automate warehouse package sorting processes " loading="lazy">
                    </div>
                </div>
                <div class="col-md-6 order-md-first">
                    <div class="content-wrap">
                        <h2 class="text-uppercase">Automate warehouse package sorting processes </h2>
                        <p>Orders come in sorting centers in varied dimensions and addresses. Using an outmoded parcel
                            sorting process extends delivery time windows, and leaves drivers with less time on the
                            road.</p>
                        <p>The Locus platform helps</p>
                        <ul>
                            <li>Automate the shipment sorting process by creating distinct delivery zones</li>
                            <li>Accurately geocode printed shipping label addresses</li>
                            <li>Allocate parcels to best-suited drivers based on multiple order parameters</li>
                        </ul>
                        <p>To know more about warehouse management and how Locus helps with automated parcel sorting, <a
                                class="link" href="/achieving-flawless-accuracy-in-sorting-deliveries/">click here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="sec-pad img-cont-block">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="image-wrap">
                        <img class="img-fluid" src="/assets/img/industry/ecommerce/icon-13.svg"
                            alt="Deliver excellence with Smart Route Planning" loading="lazy">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="content-wrap">
                        <h2 class="text-uppercase">Deliver excellence with Smart Route Planning</h2>
                        <p>Factors like rising fuel costs, poor driver productivity, manual route planning, and lack of
                            real-time visibility complicate delivery processes, while also impacting your profitability.
                        </p>
                        <p>Locus' advance routing engine factors in 180+ real world variables to build the most
                            effective route. With this, you can</p>
                        <ul>
                            <li>Track orders from origin to destination in real-time across fulfillment channels</li>
                            <li>Extend real-time visibility to customers with predictive alerts </li>
                            <li>Rich order tracking pages that help capture cancellation and rescheduling requests</li>
                            <li>Customize returns and cancellations to implement automated cadences</li>
                        </ul>
                        <p>To know more about Locus’ advanced delivery route planning capabilities for e-commerce
                            businesses, <a class="link" href="/dispatcher/a-definitive-guide-to-route-planning/">click
                                here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="sec-pad customer-stories-sec">
        <div class="container">
            <div class="row title">
                <div class="col-md-12">
                    <div class="text-center text-white">
                        <h2 class="text-uppercase pb-3 mx-auto">How Locus helps businesses grow</h2>
                    </div>
                </div>
            </div>
            <div class="row customer-stories-wrap">
                <div class="col-md-4">
                    <div class="casestudy-card-wrap">
                        <a href="https://www.youtube.com/watch?v=JVjqZfQpqJE" class="popup-youtube">
                            <img src="/assets/img/resources/resources-video-thumbnails/How-Locus-optimized-last-mile-delivery-routing-for-Rentomojo.jpg"
                                alt="rentomojo video thumbnail" loading="lazy">
                        </a>
                        <div class="notched-box">
                            <div class="content-wrap">
                                <p class="fs-5">Rentomojo</p>
                                <p>Last-mile route optimization for subscription-based e-commerce platform</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="casestudy-card-wrap">
                        <a href="https://www.youtube.com/watch?v=DCKYfThEmzU" class="popup-youtube">
                            <img src="/assets/img/industry/case-study-starquik.png" alt="starquik video thumbnail"
                                loading="lazy">
                        </a>
                        <div class="notched-box">
                            <div class="content-wrap">
                                <p class="fs-5">StarQuik</p>
                                <p>Enabling seamless grocery delivery and customer delight for StarQuik</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="casestudy-card-wrap">
                        <a href="https://www.youtube.com/watch?v=PKQJUkJWjYU" class="popup-youtube">
                            <img src="/assets/img/industry/case-study-bigbasket.png" alt="bigbasket video thumbnail"
                                loading="lazy">
                        </a>
                        <div class="notched-box">
                            <div class="content-wrap">
                                <p class="fs-5">BigBasket</p>
                                <p>Ensuring 99.5% SLA adherence for 10m grocery customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row text-center center-cta">
                <div class="col-md-12">
                    <a href="/customer-success-stories/" class="btn btn-primary">View all our customer stories</a>
                </div>
            </div>
        </div>
    </section>
    <section class="sec-pad resources-sec">
        <div class="container">
            <div class="row title">
                <div class="col-md-12">
                    <div class="text-center">
                        <h2 class="text-uppercase pb-3 mx-auto">Resources &amp; Insights</h2>
                    </div>
                </div>
            </div>
            <div class="row resources-wrap">
                <div class="col-md-4">
                    <div class="resource-card notched-box">
                        <img class="img-fluid w-100" src="/assets/img/industry/ecommerce/resource-01.png"
                            alt="The future of E-commerce lies in achieving same-day and slot-based deliveries"
                            loading="lazy">
                        <div class="resouce-body bg-themeEncyo">
                            <p class="fs-5">The future of E-commerce lies in achieving same-day and slot-based
                                deliveries</p>
                            <a class="link"
                                href="https://blog.locus.sh/future-of-ecommerce-is-same-day-and-slot-based-delivery/">Read
                                story</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="resource-card notched-box">
                        <img class="img-fluid w-100" src="/assets/img/industry/ecommerce/resource-02.png"
                            alt="How to increase operational efficiencies in E-commerce" loading="lazy">
                        <div class="resouce-body bg-themeEncyo">
                            <p class="fs-5">How to increase operational efficiencies in E-commerce</p>
                            <a class="link" href="/achieving-flawless-accuracy-in-sorting-deliveries/">Read story</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="resource-card notched-box">
                        <img class="img-fluid w-100" src="/assets/img/industry/ecommerce/resource-03.png"
                            alt="How Locus automated logistics operations for Indonesia’s leading E-commerce player"
                            loading="lazy">
                        <div class="resouce-body bg-themeEncyo">
                            <p class="fs-5">How Locus automated logistics operations for Indonesia’s leading E-commerce
                                player</p>
                            <a class="link" href="/how-to-automate-logistics-operations-for-ecommerce-giants/">Read
                                story</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row text-center center-cta pt-md-0">
                <div class="col-md-12">
                    <a href="/resources/" class="btn btn-primary">View all our resources</a>
                </div>
            </div>
        </div>
    </section>
    <section class="sec-pad faq-sec">

        <div class="container">
            <div class="row title">
                <div class="col-md-12">
                    <div class="text-center">
                        <h2 class="text-uppercase pb-3 mx-auto">Frequently Asked Questions</h2>
                    </div>
                </div>
            </div>
            <div class="faq-wrap">
                <div class="row">
                    <div class="col-md-6">
                        <div class="accordion accordion-flush" id="accordionFaqP1">

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq-p1-flush-heading1">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-p1-flush-collapse1" aria-expanded="false"
                                        aria-controls="faq-p1-flush-collapse1">
                                        <h3>Can I send ETA-based SMS to a customer?</h3>
                                    </button>
                                </h2>
                                <div id="faq-p1-flush-collapse1" class="accordion-collapse collapse"
                                    aria-labelledby="faq-p1-flush-heading1" data-bs-parent="#accordionFaqP1">
                                    <div class="accordion-body">
                                        <p>Yes, Locus can help you send ETA-based SMS notifications to a customer.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq-p1-flush-heading2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-p1-flush-collapse2" aria-expanded="false"
                                        aria-controls="faq-p1-flush-collapse2">
                                        <h3>Can Locus help in case of express orders, which need to be fulfilled in a
                                            short SLA time, and on-demand tasks?</h3>
                                    </button>
                                </h2>
                                <div id="faq-p1-flush-collapse2" class="accordion-collapse collapse"
                                    aria-labelledby="faq-p1-flush-heading2" data-bs-parent="#accordionFaqP1">
                                    <div class="accordion-body">
                                        <p>Yes, Locus' solutions can handle express and on-demand tasks.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq-p1-flush-heading3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-p1-flush-collapse3" aria-expanded="false"
                                        aria-controls="faq-p1-flush-collapse3">
                                        <h3>Can the Locus system split order/packages based on the volume and the
                                            capacity of vehicles?</h3>
                                    </button>
                                </h2>
                                <div id="faq-p1-flush-collapse3" class="accordion-collapse collapse"
                                    aria-labelledby="faq-p1-flush-heading3" data-bs-parent="#accordionFaqP1">
                                    <div class="accordion-body">
                                        <p>Locus is curently building Order Splitting as a part of our product roadmap
                                            for 2020.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq-p1-flush-heading4">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-p1-flush-collapse4" aria-expanded="false"
                                        aria-controls="faq-p1-flush-collapse4">
                                        <h3>If I am running my operation through a CFA (Carrying and Forwarding agent),
                                            how can Locus help? </h3>
                                    </button>
                                </h2>
                                <div id="faq-p1-flush-collapse4" class="accordion-collapse collapse"
                                    aria-labelledby="faq-p1-flush-heading4" data-bs-parent="#accordionFaqP1">
                                    <div class="accordion-body">
                                        <p>In case the CFA has dedicated fleet for your ops, Locus has the
                                            functionalities to reduce the overall cost landed at the CFA, the daily
                                            tracking and reporting of the vehicles for the CFA, and billing
                                            reconciliation for your transport managers. In case of non-dedicated fleet,
                                            then you can use Locus to solve for cost contract optimization, fleet mix
                                            forecasting, and resource planning to help reduce your billed cost with the
                                            CFA. </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="accordion accordion-flush" id="accordionFaqP2">

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq-p2-flush-heading1">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-p2-flush-collapse1" aria-expanded="false"
                                        aria-controls="faq-p2-flush-collapse1">
                                        <h3>How can Locus help reduce sorting time?</h3>
                                    </button>
                                </h2>
                                <div id="faq-p2-flush-collapse1" class="accordion-collapse collapse"
                                    aria-labelledby="faq-p2-flush-heading1" data-bs-parent="#accordionFaqP2">
                                    <div class="accordion-body">
                                        <p>Locus has built advanced geocoding solutions that combine machine learning,
                                            natural language processing (NLP) and rule-based improvements to gather
                                            complete address information and sort items to be delivered accordingly.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq-p2-flush-heading2">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-p2-flush-collapse2" aria-expanded="false"
                                        aria-controls="faq-p2-flush-collapse2">
                                        <h3>I have a slotted delivery system, can the Locus tool take care of the same?
                                        </h3>
                                    </button>
                                </h2>
                                <div id="faq-p2-flush-collapse2" class="accordion-collapse collapse"
                                    aria-labelledby="faq-p2-flush-heading2" data-bs-parent="#accordionFaqP2">
                                    <div class="accordion-body">
                                        <p>Yes, Locus can help you optimize the routing plans for slotted deliveries.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq-p2-flush-heading3">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-p2-flush-collapse3" aria-expanded="false"
                                        aria-controls="faq-p2-flush-collapse3">
                                        <h3>Can Locus help if I am using 'daily market hire' vehicles? </h3>
                                    </button>
                                </h2>
                                <div id="faq-p2-flush-collapse3" class="accordion-collapse collapse"
                                    aria-labelledby="faq-p2-flush-heading3" data-bs-parent="#accordionFaqP2">
                                    <div class="accordion-body">
                                        <p>Locus can suggest the number of vehicles to be used in case of daily hires.
                                            Clip-on GPS devices or a use-and-throw model can be used for tracking the
                                            vehicles.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="faq-p2-flush-heading4">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#faq-p2-flush-collapse4" aria-expanded="false"
                                        aria-controls="faq-p2-flush-collapse4">
                                        <h3>Does Locus factor in the traffic parameters and route restrictions
                                            applicable to vehicles types while planning?</h3>
                                    </button>
                                </h2>
                                <div id="faq-p2-flush-collapse4" class="accordion-collapse collapse"
                                    aria-labelledby="faq-p2-flush-heading4" data-bs-parent="#accordionFaqP2">
                                    <div class="accordion-body">
                                        <p>Yes, Locus takes into account predictive traffic for different vehicle types,
                                            whenever possible, from different map sources, and if the vehicle models
                                            aren't existing, traffic parameters are considered specifically for these
                                            vehicle models. Route restrictions can be modeled on a map against different
                                            vehicle models (truck, heavy trucks, small vans), for different times of the
                                            day (24 hours window, 2 hours window) and as different types (one-way for
                                            specific vehicles, divide across a road, block the usage completely, exclude
                                            certain vehicle models, include certain vehicle models)</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      
      {
        "@type": "Question",
        "name": "Can I send ETA-based SMS to a customer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Locus can help you send ETA-based SMS notifications to a customer."
        }
      },
      {
        "@type": "Question",
        "name": "Can Locus help in case of express orders, which need to be fulfilled in a short SLA time, and on-demand tasks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Locus' solutions can handle express and on-demand tasks."
        }
      },
      {
        "@type": "Question",
        "name": "Can the Locus system split order/packages based on the volume and the capacity of vehicles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Locus is curently building Order Splitting as a part of our product roadmap for 2020."
        }
      },
      {
        "@type": "Question",
        "name": "If I am running my operation through a CFA (Carrying and Forwarding agent), how can Locus help? ",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In case the CFA has dedicated fleet for your ops, Locus has the functionalities to reduce the overall cost landed at the CFA, the daily tracking and reporting of the vehicles for the CFA, and billing reconciliation for your transport managers. In case of non-dedicated fleet, then you can use Locus to solve for cost contract optimization, fleet mix forecasting, and resource planning to help reduce your billed cost with the CFA. "
        }
      },
      
      {
        "@type": "Question",
        "name": "How can Locus help reduce sorting time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Locus has built advanced geocoding solutions that combine machine learning, natural language processing (NLP) and rule-based improvements to gather complete address information and sort items to be delivered accordingly."
        }
      },
      {
        "@type": "Question",
        "name": "I have a slotted delivery system, can the Locus tool take care of the same?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Locus can help you optimize the routing plans for slotted deliveries."
        }
      },
      {
        "@type": "Question",
        "name": "Can Locus help if I am using 'daily market hire' vehicles? ",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Locus can suggest the number of vehicles to be used in case of daily hires. Clip-on GPS devices or a use-and-throw model can be used for tracking the vehicles."
        }
      },
      {
        "@type": "Question",
        "name": "Does Locus factor in the traffic parameters and route restrictions applicable to vehicles types while planning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Locus takes into account predictive traffic for different vehicle types, whenever possible, from different map sources, and if the vehicle models aren't existing, traffic parameters are considered specifically for these vehicle models. Route restrictions can be modeled on a map against different vehicle models (truck, heavy trucks, small vans), for different times of the day (24 hours window, 2 hours window) and as different types (one-way for specific vehicles, divide across a road, block the usage completely, exclude certain vehicle models, include certain vehicle models)"
        }
      }
      
    ]
  }
</script>

    <section class="sec-pad growing-stats-sec bg-themeEncyo">

        <div class="container">
            <div class="row title">
                <div class="col-md-12">
                    <div class="text-center">
                        <h2 class="text-uppercase pb-3 mx-auto">We are growing...</h2>
                    </div>
                </div>
            </div>
            <div class="row growing-wrap">

                <div class="col growing-col">
                    <div class="content-block">
                        <h4>75%</h4>
                        <p>reduction<br>in planning time</p>
                    </div>
                </div>

                <div class="col growing-col">
                    <div class="content-block">
                        <h4>60%</h4>
                        <p>reduction<br>in sorting time</p>
                    </div>
                </div>

                <div class="col growing-col">
                    <div class="content-block">
                        <h4>25%</h4>
                        <p>reduction<br>in operational cost</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section class="contact-sec">
        <div class="container">
            <div class="pattern-strip position-relative">
                <div class="strip-left-pattern">
                    <img src="/assets/img/home/strip-left-pattern.svg" alt="strip-left-pattern" loading="lazy">
                </div>
                <div class="bg-white inner-strip notched-box-60">
                    <div class="row align-items-center">
                        <div class="col-md-12 text-center">
                            <h2 class="text-uppercase mx-auto">Accelerate your e-commerce growth with Locus</h2>
                            <div>
                                <a href="#schedule-demo" class="btn btn-primary">Schedule a demo</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="strip-left-right">
                    <img src="/assets/img/home/strip-right-pattern.svg" alt="strip-right-pattern" loading="lazy">
                </div>
            </div>
        </div>
    </section>


    <footer class="bg-themeIndigo">
        <div class="container">
            <form class="subscribe-form" id="subscribeFormcs" novalidate="novalidate" data-hs-cf-bound="true">
                <div class="row align-items-center text-white">
                    <div class="col-md-5">
                        <p class="fs-4">Subscribe to our newsletter</p>
                    </div>
                    <div class="col-md-7">
                        <div class="input-group mb-3">
                            <input type="email" name="email" placeholder="Email address"
                                class="form-control border-0 rounded-0" id="subscribe-emailcs">
                            <div class="input-group-append">
                                <button class="input-group-text h-100 border-0 rounded-0" type="submit" disabled="">
                                    <img src="/assets/img/subscribe-arrow.svg" alt="subscribe-arrow">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 pt-4">
                        <div class="form-check mx-auto">
                            <input type="checkbox" name="pardot_explicit_consent_for_marketing_communications_dr_"
                                id="subscribe-consentcs" class="form-check-input rounded-0">
                            <label class="form-check-label ps-2" for="subscribeCheck">
                                <small>
                                    I would also like to subscribe to the exclusive product updates, content and event
                                    invitations by Locus. You can refer to our <a href="/privacy-policy/"
                                        target="_blank">privacy policy</a>.
                                </small>
                            </label>
                        </div>
                    </div>
                    <div class="subscribe-success">
                        <img class="close-success" src="/assets/img/cross.png" alt="/assets/img/cross.png">
                        <p class="thank-you-text">Thank you for subscribing!</p>
                    </div>
                </div>
            </form>
            <div class="footer-links text-white text-center text-sm-start">
                <div class="row">
                    <div class="col-lg-2-5 col-md-3 col-sm-4">
                        <p class="fw-bold">Platform</p>
                        <ul class="ps-0 footer-links-ul">
                            <li><a href="/dispatch-management-software/">Platform Overview</a></li>
                            <li><a href="/delivery-experience/">Delivery Experience</a></li>
                            <li><a href="/last-mile-delivery-routing-software/">Real-world Routing</a></li>
                            <li><a href="/shipping-network-logistics/">Shipping Network</a></li>
                        </ul>
                        <img src="/assets/img/compliance.svg" alt="tick-mark-compliance" class="img-fluid"
                            loading="lazy">
                    </div>
                    <div class="col-lg-2-5 col-md-3 col-sm-4">
                        <p class="fw-bold">Industries</p>
                        <ul class="ps-0 footer-links-ul">
                            <li><a href="/ecommerce-logistics/">E-commerce</a></li>
                            <li><a href="/grocery-logistics/">E-grocery</a></li>
                            <li><a href="/retail-logistics/">Retail</a></li>
                            <li><a href="/industrial-services/">Industrial Services</a></li>
                            <li><a href="/manufacturing-logistics/">Manufacturing</a></li>
                            <li><a href="/3pl-and-cep/">3PL &amp; CEP</a></li>
                            <li><a href="/home-services/">Home Services</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2-5 col-md-3 col-sm-4">
                        <p class="fw-bold">Resources</p>
                        <ul class="ps-0 footer-links-ul">
                            <li><a href="/resources/whitepaper/">Whitepaper</a></li>
                            <li><a href="/resources/casestudy/">Case Studies</a></li>
                            <li><a href="/resources/#infographics">Infographics</a></li>
                            <li><a href="https://blog.locus.sh">Blogs</a></li>
                            <li><a href="/resources/#videos">Videos</a></li>
                            <li><a href="/resources/glossary/">Glossary</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2-5 col-md-2 col-sm-4">
                        <p class="fw-bold">Company</p>
                        <ul class="ps-0 footer-links-ul">
                            <li><a href="/about/">About Us</a></li>
                            <li><a href="/customer-success-stories/">Customers</a></li>
                            <li><a href="/careers/">Careers</a></li>
                            <li><a href="/partnership-program/">Partners</a></li>
                            <li><a href="/trust/">Trust &amp; Security</a></li>
                            <li><a href="/newsroom/">News</a></li>
                            <li><a href="/contactus/">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-8">
                        <div class="locus-ftr-desc">
                            <img src="/assets/img/logo.svg" alt="locus-logo-small" class="w-100">
                            <ul class="social-icons ps-0 justify-content-center justify-content-sm-start">
                                <li>
                                    <div class="notched-box-social">
                                        <a href="https://www.linkedin.com/company/locus-sh" target="_blank"
                                            rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="notched-box-social">
                                        <a href="https://www.twitter.com/Locus_Sh/" target="_blank"
                                            rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="notched-box-social">
                                        <a href="https://www.youtube.com/channel/UCtbHoTbKKmhTAkKu4zY8WKA"
                                            target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="notched-box-social">
                                        <a href="https://www.instagram.com/locus.sh/" target="_blank"
                                            rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </li>
                                <li>
                                    <div class="notched-box-social">
                                        <a href="https://www.facebook.com/locus.sh/" target="_blank"
                                            rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                                    </div>
                                </li>
                            </ul>
                            <p>© <span id="copyrightYear">2022</span> Mara Labs Inc. All rights reserved. <a
                                    href="/privacy-policy/" target="_blank">Privacy</a> and <a
                                    href="https://locus.sh/documents/MaraLabsTermsOfUse.pdf" target="_blank">Terms</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div class="demo-form-sec">
        <div class="demo-form-header">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <a href="/">
                        <img class="logo-img img-fluid" src="/assets/img/logo-dark.svg" alt="locus-logo-dark">
                    </a>
                    <button class="close-btn">
                        <img class="close-icon img-fluid" src="/assets/img/demo-form-close-btn.svg" alt="close button">
                    </button>
                </div>
            </div>
        </div>
        <div class="demo-form-wrap pt-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="demo-form-content">
                            <h2 class="text-uppercase pb-2">Schedule a meeting with Locus</h2>
                            <p class="fw-bold pb-2">How can Locus help manage your logistics?</p>
                            <ul class="pb-2">
                                <li>Locus’ proprietary geocoding engine converts the fuzziest of the addresses into
                                    precise geographical coordinates thereby helping your on-ground executives locate
                                    addresses easily.</li>
                                <li>Digitize all your operational variables such as fleets, delivery persons etc. to
                                    come up with the best route plan every day.</li>
                                <li>Track your orders in real-time with the Locus Live Dashboard. Locus’ last-mile
                                    delivery app Locus On The Road (LOTR) helps delivery partners process orders.</li>
                                <li>Visualize and tweak your scheduled plans via three key metrics— geography, time,
                                    &amp; vehicle (fleet)—with a birds-eye view of your entire operations.</li>
                                <li>Build your own reports and analyze important parameters that you need to make key
                                    decisions.</li>
                            </ul>
                            <p class="fw-bold text-uppercase pb-3">Join Industry Leaders:</p>
                            <div class="industry-stats pb-2">
                                <div class="row">
                                    <div class="col">
                                        <h3>43m+ <span>miles</span></h3>
                                        <small>Reduction in distance traveled</small>
                                    </div>
                                    <div class="col">
                                        <h3>18m+ <span>tons</span></h3>
                                        <small>Reduction in GHG emissions</small>
                                    </div>
                                    <div class="col">
                                        <h3>$200 <span>m</span></h3>
                                        <small>Savings in logistics costs</small>
                                    </div>
                                </div>
                            </div>
                            <img class="img-fluid pt-4" src="/assets/img/demo-form-brand-logos.svg" alt="brand logos">
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="demo-form-col position-relative">
                            <div class="strip-left-pattern position-absolute">
                                <img src="/assets/img/home/strip-left-pattern.svg" alt="strip-left-pattern"
                                    loading="lazy">
                            </div>
                            <div class="shadow-wrap">
                                <div class="bg-white inner-strip notched-box">
                                    <form class="row g-3 sd-form" id="naform" novalidate="novalidate"
                                        data-hs-cf-bound="true">
                                        <div class="col-12">
                                            <label for="inputName" class="form-label">Name *</label>
                                            <input type="text" name="name" id="name" class="form-control" required=""
                                                autocomplete="off">
                                        </div>
                                        <div class="col-12">
                                            <label for="inputBusinessEmail" class="form-label">Business e-mail*</label>
                                            <input type="email" name="email" id="email" class="form-control" required=""
                                                autocomplete="off">
                                        </div>
                                        <div class="col-12">
                                            <label for="number" class="form-label">Contact number*</label>
                                            <div class="intl-tel-input allow-dropdown">
                                                <div class="flag-container">
                                                    <div class="selected-flag" tabindex="0" title="United States: +1">
                                                        <div class="iti-flag us"></div>
                                                        <div class="iti-arrow"></div>
                                                    </div>
                                                    <ul class="country-list hide">
                                                        <li class="country preferred active" data-dial-code="1"
                                                            data-country-code="us">
                                                            <div class="flag-box">
                                                                <div class="iti-flag us"></div>
                                                            </div><span class="country-name">United States</span><span
                                                                class="dial-code">+1</span>
                                                        </li>
                                                        <li class="divider"></li>
                                                        <li class="country" data-dial-code="93" data-country-code="af">
                                                            <div class="flag-box">
                                                                <div class="iti-flag af"></div>
                                                            </div><span class="country-name">Afghanistan
                                                                (&#x202B;افغانستان&#x202C;&lrm;)</span><span
                                                                class="dial-code">+93</span>
                                                        </li>
                                                        <li class="country" data-dial-code="355" data-country-code="al">
                                                            <div class="flag-box">
                                                                <div class="iti-flag al"></div>
                                                            </div><span class="country-name">Albania
                                                                (Shqipëri)</span><span class="dial-code">+355</span>
                                                        </li>
                                                        <li class="country" data-dial-code="213" data-country-code="dz">
                                                            <div class="flag-box">
                                                                <div class="iti-flag dz"></div>
                                                            </div><span class="country-name">Algeria
                                                                (&#x202B;الجزائر&#x202C;&lrm;)</span><span
                                                                class="dial-code">+213</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1684"
                                                            data-country-code="as">
                                                            <div class="flag-box">
                                                                <div class="iti-flag as"></div>
                                                            </div><span class="country-name">American Samoa</span><span
                                                                class="dial-code">+1684</span>
                                                        </li>
                                                        <li class="country" data-dial-code="376" data-country-code="ad">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ad"></div>
                                                            </div><span class="country-name">Andorra</span><span
                                                                class="dial-code">+376</span>
                                                        </li>
                                                        <li class="country" data-dial-code="244" data-country-code="ao">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ao"></div>
                                                            </div><span class="country-name">Angola</span><span
                                                                class="dial-code">+244</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1264"
                                                            data-country-code="ai">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ai"></div>
                                                            </div><span class="country-name">Anguilla</span><span
                                                                class="dial-code">+1264</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1268"
                                                            data-country-code="ag">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ag"></div>
                                                            </div><span class="country-name">Antigua and
                                                                Barbuda</span><span class="dial-code">+1268</span>
                                                        </li>
                                                        <li class="country" data-dial-code="54" data-country-code="ar">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ar"></div>
                                                            </div><span class="country-name">Argentina</span><span
                                                                class="dial-code">+54</span>
                                                        </li>
                                                        <li class="country" data-dial-code="374" data-country-code="am">
                                                            <div class="flag-box">
                                                                <div class="iti-flag am"></div>
                                                            </div><span class="country-name">Armenia
                                                                (Հայաստան)</span><span class="dial-code">+374</span>
                                                        </li>
                                                        <li class="country" data-dial-code="297" data-country-code="aw">
                                                            <div class="flag-box">
                                                                <div class="iti-flag aw"></div>
                                                            </div><span class="country-name">Aruba</span><span
                                                                class="dial-code">+297</span>
                                                        </li>
                                                        <li class="country" data-dial-code="61" data-country-code="au">
                                                            <div class="flag-box">
                                                                <div class="iti-flag au"></div>
                                                            </div><span class="country-name">Australia</span><span
                                                                class="dial-code">+61</span>
                                                        </li>
                                                        <li class="country" data-dial-code="43" data-country-code="at">
                                                            <div class="flag-box">
                                                                <div class="iti-flag at"></div>
                                                            </div><span class="country-name">Austria
                                                                (Österreich)</span><span class="dial-code">+43</span>
                                                        </li>
                                                        <li class="country" data-dial-code="994" data-country-code="az">
                                                            <div class="flag-box">
                                                                <div class="iti-flag az"></div>
                                                            </div><span class="country-name">Azerbaijan
                                                                (Azərbaycan)</span><span class="dial-code">+994</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1242"
                                                            data-country-code="bs">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bs"></div>
                                                            </div><span class="country-name">Bahamas</span><span
                                                                class="dial-code">+1242</span>
                                                        </li>
                                                        <li class="country" data-dial-code="973" data-country-code="bh">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bh"></div>
                                                            </div><span class="country-name">Bahrain
                                                                (&#x202B;البحرين&#x202C;&lrm;)</span><span
                                                                class="dial-code">+973</span>
                                                        </li>
                                                        <li class="country" data-dial-code="880" data-country-code="bd">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bd"></div>
                                                            </div><span class="country-name">Bangladesh
                                                                (বাংলাদেশ)</span><span class="dial-code">+880</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1246"
                                                            data-country-code="bb">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bb"></div>
                                                            </div><span class="country-name">Barbados</span><span
                                                                class="dial-code">+1246</span>
                                                        </li>
                                                        <li class="country" data-dial-code="375" data-country-code="by">
                                                            <div class="flag-box">
                                                                <div class="iti-flag by"></div>
                                                            </div><span class="country-name">Belarus
                                                                (Беларусь)</span><span class="dial-code">+375</span>
                                                        </li>
                                                        <li class="country" data-dial-code="32" data-country-code="be">
                                                            <div class="flag-box">
                                                                <div class="iti-flag be"></div>
                                                            </div><span class="country-name">Belgium
                                                                (België)</span><span class="dial-code">+32</span>
                                                        </li>
                                                        <li class="country" data-dial-code="501" data-country-code="bz">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bz"></div>
                                                            </div><span class="country-name">Belize</span><span
                                                                class="dial-code">+501</span>
                                                        </li>
                                                        <li class="country" data-dial-code="229" data-country-code="bj">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bj"></div>
                                                            </div><span class="country-name">Benin (Bénin)</span><span
                                                                class="dial-code">+229</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1441"
                                                            data-country-code="bm">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bm"></div>
                                                            </div><span class="country-name">Bermuda</span><span
                                                                class="dial-code">+1441</span>
                                                        </li>
                                                        <li class="country" data-dial-code="975" data-country-code="bt">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bt"></div>
                                                            </div><span class="country-name">Bhutan (འབྲུག)</span><span
                                                                class="dial-code">+975</span>
                                                        </li>
                                                        <li class="country" data-dial-code="591" data-country-code="bo">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bo"></div>
                                                            </div><span class="country-name">Bolivia</span><span
                                                                class="dial-code">+591</span>
                                                        </li>
                                                        <li class="country" data-dial-code="387" data-country-code="ba">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ba"></div>
                                                            </div><span class="country-name">Bosnia and Herzegovina
                                                                (Босна и Херцеговина)</span><span
                                                                class="dial-code">+387</span>
                                                        </li>
                                                        <li class="country" data-dial-code="267" data-country-code="bw">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bw"></div>
                                                            </div><span class="country-name">Botswana</span><span
                                                                class="dial-code">+267</span>
                                                        </li>
                                                        <li class="country" data-dial-code="55" data-country-code="br">
                                                            <div class="flag-box">
                                                                <div class="iti-flag br"></div>
                                                            </div><span class="country-name">Brazil (Brasil)</span><span
                                                                class="dial-code">+55</span>
                                                        </li>
                                                        <li class="country" data-dial-code="246" data-country-code="io">
                                                            <div class="flag-box">
                                                                <div class="iti-flag io"></div>
                                                            </div><span class="country-name">British Indian Ocean
                                                                Territory</span><span class="dial-code">+246</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1284"
                                                            data-country-code="vg">
                                                            <div class="flag-box">
                                                                <div class="iti-flag vg"></div>
                                                            </div><span class="country-name">British Virgin
                                                                Islands</span><span class="dial-code">+1284</span>
                                                        </li>
                                                        <li class="country" data-dial-code="673" data-country-code="bn">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bn"></div>
                                                            </div><span class="country-name">Brunei</span><span
                                                                class="dial-code">+673</span>
                                                        </li>
                                                        <li class="country" data-dial-code="359" data-country-code="bg">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bg"></div>
                                                            </div><span class="country-name">Bulgaria
                                                                (България)</span><span class="dial-code">+359</span>
                                                        </li>
                                                        <li class="country" data-dial-code="226" data-country-code="bf">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bf"></div>
                                                            </div><span class="country-name">Burkina Faso</span><span
                                                                class="dial-code">+226</span>
                                                        </li>
                                                        <li class="country" data-dial-code="257" data-country-code="bi">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bi"></div>
                                                            </div><span class="country-name">Burundi
                                                                (Uburundi)</span><span class="dial-code">+257</span>
                                                        </li>
                                                        <li class="country" data-dial-code="855" data-country-code="kh">
                                                            <div class="flag-box">
                                                                <div class="iti-flag kh"></div>
                                                            </div><span class="country-name">Cambodia
                                                                (កម្ពុជា)</span><span class="dial-code">+855</span>
                                                        </li>
                                                        <li class="country" data-dial-code="237" data-country-code="cm">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cm"></div>
                                                            </div><span class="country-name">Cameroon
                                                                (Cameroun)</span><span class="dial-code">+237</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1" data-country-code="ca">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ca"></div>
                                                            </div><span class="country-name">Canada</span><span
                                                                class="dial-code">+1</span>
                                                        </li>
                                                        <li class="country" data-dial-code="238" data-country-code="cv">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cv"></div>
                                                            </div><span class="country-name">Cape Verde (Kabu
                                                                Verdi)</span><span class="dial-code">+238</span>
                                                        </li>
                                                        <li class="country" data-dial-code="599" data-country-code="bq">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bq"></div>
                                                            </div><span class="country-name">Caribbean
                                                                Netherlands</span><span class="dial-code">+599</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1345"
                                                            data-country-code="ky">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ky"></div>
                                                            </div><span class="country-name">Cayman Islands</span><span
                                                                class="dial-code">+1345</span>
                                                        </li>
                                                        <li class="country" data-dial-code="236" data-country-code="cf">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cf"></div>
                                                            </div><span class="country-name">Central African Republic
                                                                (République centrafricaine)</span><span
                                                                class="dial-code">+236</span>
                                                        </li>
                                                        <li class="country" data-dial-code="235" data-country-code="td">
                                                            <div class="flag-box">
                                                                <div class="iti-flag td"></div>
                                                            </div><span class="country-name">Chad (Tchad)</span><span
                                                                class="dial-code">+235</span>
                                                        </li>
                                                        <li class="country" data-dial-code="56" data-country-code="cl">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cl"></div>
                                                            </div><span class="country-name">Chile</span><span
                                                                class="dial-code">+56</span>
                                                        </li>
                                                        <li class="country" data-dial-code="86" data-country-code="cn">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cn"></div>
                                                            </div><span class="country-name">China (中国)</span><span
                                                                class="dial-code">+86</span>
                                                        </li>
                                                        <li class="country" data-dial-code="61" data-country-code="cx">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cx"></div>
                                                            </div><span class="country-name">Christmas
                                                                Island</span><span class="dial-code">+61</span>
                                                        </li>
                                                        <li class="country" data-dial-code="61" data-country-code="cc">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cc"></div>
                                                            </div><span class="country-name">Cocos (Keeling)
                                                                Islands</span><span class="dial-code">+61</span>
                                                        </li>
                                                        <li class="country" data-dial-code="57" data-country-code="co">
                                                            <div class="flag-box">
                                                                <div class="iti-flag co"></div>
                                                            </div><span class="country-name">Colombia</span><span
                                                                class="dial-code">+57</span>
                                                        </li>
                                                        <li class="country" data-dial-code="269" data-country-code="km">
                                                            <div class="flag-box">
                                                                <div class="iti-flag km"></div>
                                                            </div><span class="country-name">Comoros (&#x202B;جزر
                                                                القمر&#x202C;&lrm;)</span><span
                                                                class="dial-code">+269</span>
                                                        </li>
                                                        <li class="country" data-dial-code="243" data-country-code="cd">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cd"></div>
                                                            </div><span class="country-name">Congo (DRC) (Jamhuri ya
                                                                Kidemokrasia ya Kongo)</span><span
                                                                class="dial-code">+243</span>
                                                        </li>
                                                        <li class="country" data-dial-code="242" data-country-code="cg">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cg"></div>
                                                            </div><span class="country-name">Congo (Republic)
                                                                (Congo-Brazzaville)</span><span
                                                                class="dial-code">+242</span>
                                                        </li>
                                                        <li class="country" data-dial-code="682" data-country-code="ck">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ck"></div>
                                                            </div><span class="country-name">Cook Islands</span><span
                                                                class="dial-code">+682</span>
                                                        </li>
                                                        <li class="country" data-dial-code="506" data-country-code="cr">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cr"></div>
                                                            </div><span class="country-name">Costa Rica</span><span
                                                                class="dial-code">+506</span>
                                                        </li>
                                                        <li class="country" data-dial-code="225" data-country-code="ci">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ci"></div>
                                                            </div><span class="country-name">Côte d’Ivoire</span><span
                                                                class="dial-code">+225</span>
                                                        </li>
                                                        <li class="country" data-dial-code="385" data-country-code="hr">
                                                            <div class="flag-box">
                                                                <div class="iti-flag hr"></div>
                                                            </div><span class="country-name">Croatia
                                                                (Hrvatska)</span><span class="dial-code">+385</span>
                                                        </li>
                                                        <li class="country" data-dial-code="53" data-country-code="cu">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cu"></div>
                                                            </div><span class="country-name">Cuba</span><span
                                                                class="dial-code">+53</span>
                                                        </li>
                                                        <li class="country" data-dial-code="599" data-country-code="cw">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cw"></div>
                                                            </div><span class="country-name">Curaçao</span><span
                                                                class="dial-code">+599</span>
                                                        </li>
                                                        <li class="country" data-dial-code="357" data-country-code="cy">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cy"></div>
                                                            </div><span class="country-name">Cyprus (Κύπρος)</span><span
                                                                class="dial-code">+357</span>
                                                        </li>
                                                        <li class="country" data-dial-code="420" data-country-code="cz">
                                                            <div class="flag-box">
                                                                <div class="iti-flag cz"></div>
                                                            </div><span class="country-name">Czech Republic (Česká
                                                                republika)</span><span class="dial-code">+420</span>
                                                        </li>
                                                        <li class="country" data-dial-code="45" data-country-code="dk">
                                                            <div class="flag-box">
                                                                <div class="iti-flag dk"></div>
                                                            </div><span class="country-name">Denmark
                                                                (Danmark)</span><span class="dial-code">+45</span>
                                                        </li>
                                                        <li class="country" data-dial-code="253" data-country-code="dj">
                                                            <div class="flag-box">
                                                                <div class="iti-flag dj"></div>
                                                            </div><span class="country-name">Djibouti</span><span
                                                                class="dial-code">+253</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1767"
                                                            data-country-code="dm">
                                                            <div class="flag-box">
                                                                <div class="iti-flag dm"></div>
                                                            </div><span class="country-name">Dominica</span><span
                                                                class="dial-code">+1767</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1" data-country-code="do">
                                                            <div class="flag-box">
                                                                <div class="iti-flag do"></div>
                                                            </div><span class="country-name">Dominican Republic
                                                                (República Dominicana)</span><span
                                                                class="dial-code">+1</span>
                                                        </li>
                                                        <li class="country" data-dial-code="593" data-country-code="ec">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ec"></div>
                                                            </div><span class="country-name">Ecuador</span><span
                                                                class="dial-code">+593</span>
                                                        </li>
                                                        <li class="country" data-dial-code="20" data-country-code="eg">
                                                            <div class="flag-box">
                                                                <div class="iti-flag eg"></div>
                                                            </div><span class="country-name">Egypt
                                                                (&#x202B;مصر&#x202C;&lrm;)</span><span
                                                                class="dial-code">+20</span>
                                                        </li>
                                                        <li class="country" data-dial-code="503" data-country-code="sv">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sv"></div>
                                                            </div><span class="country-name">El Salvador</span><span
                                                                class="dial-code">+503</span>
                                                        </li>
                                                        <li class="country" data-dial-code="240" data-country-code="gq">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gq"></div>
                                                            </div><span class="country-name">Equatorial Guinea (Guinea
                                                                Ecuatorial)</span><span class="dial-code">+240</span>
                                                        </li>
                                                        <li class="country" data-dial-code="291" data-country-code="er">
                                                            <div class="flag-box">
                                                                <div class="iti-flag er"></div>
                                                            </div><span class="country-name">Eritrea</span><span
                                                                class="dial-code">+291</span>
                                                        </li>
                                                        <li class="country" data-dial-code="372" data-country-code="ee">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ee"></div>
                                                            </div><span class="country-name">Estonia (Eesti)</span><span
                                                                class="dial-code">+372</span>
                                                        </li>
                                                        <li class="country" data-dial-code="251" data-country-code="et">
                                                            <div class="flag-box">
                                                                <div class="iti-flag et"></div>
                                                            </div><span class="country-name">Ethiopia</span><span
                                                                class="dial-code">+251</span>
                                                        </li>
                                                        <li class="country" data-dial-code="500" data-country-code="fk">
                                                            <div class="flag-box">
                                                                <div class="iti-flag fk"></div>
                                                            </div><span class="country-name">Falkland Islands (Islas
                                                                Malvinas)</span><span class="dial-code">+500</span>
                                                        </li>
                                                        <li class="country" data-dial-code="298" data-country-code="fo">
                                                            <div class="flag-box">
                                                                <div class="iti-flag fo"></div>
                                                            </div><span class="country-name">Faroe Islands
                                                                (Føroyar)</span><span class="dial-code">+298</span>
                                                        </li>
                                                        <li class="country" data-dial-code="679" data-country-code="fj">
                                                            <div class="flag-box">
                                                                <div class="iti-flag fj"></div>
                                                            </div><span class="country-name">Fiji</span><span
                                                                class="dial-code">+679</span>
                                                        </li>
                                                        <li class="country" data-dial-code="358" data-country-code="fi">
                                                            <div class="flag-box">
                                                                <div class="iti-flag fi"></div>
                                                            </div><span class="country-name">Finland (Suomi)</span><span
                                                                class="dial-code">+358</span>
                                                        </li>
                                                        <li class="country" data-dial-code="33" data-country-code="fr">
                                                            <div class="flag-box">
                                                                <div class="iti-flag fr"></div>
                                                            </div><span class="country-name">France</span><span
                                                                class="dial-code">+33</span>
                                                        </li>
                                                        <li class="country" data-dial-code="594" data-country-code="gf">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gf"></div>
                                                            </div><span class="country-name">French Guiana (Guyane
                                                                française)</span><span class="dial-code">+594</span>
                                                        </li>
                                                        <li class="country" data-dial-code="689" data-country-code="pf">
                                                            <div class="flag-box">
                                                                <div class="iti-flag pf"></div>
                                                            </div><span class="country-name">French Polynesia (Polynésie
                                                                française)</span><span class="dial-code">+689</span>
                                                        </li>
                                                        <li class="country" data-dial-code="241" data-country-code="ga">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ga"></div>
                                                            </div><span class="country-name">Gabon</span><span
                                                                class="dial-code">+241</span>
                                                        </li>
                                                        <li class="country" data-dial-code="220" data-country-code="gm">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gm"></div>
                                                            </div><span class="country-name">Gambia</span><span
                                                                class="dial-code">+220</span>
                                                        </li>
                                                        <li class="country" data-dial-code="995" data-country-code="ge">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ge"></div>
                                                            </div><span class="country-name">Georgia
                                                                (საქართველო)</span><span class="dial-code">+995</span>
                                                        </li>
                                                        <li class="country" data-dial-code="49" data-country-code="de">
                                                            <div class="flag-box">
                                                                <div class="iti-flag de"></div>
                                                            </div><span class="country-name">Germany
                                                                (Deutschland)</span><span class="dial-code">+49</span>
                                                        </li>
                                                        <li class="country" data-dial-code="233" data-country-code="gh">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gh"></div>
                                                            </div><span class="country-name">Ghana (Gaana)</span><span
                                                                class="dial-code">+233</span>
                                                        </li>
                                                        <li class="country" data-dial-code="350" data-country-code="gi">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gi"></div>
                                                            </div><span class="country-name">Gibraltar</span><span
                                                                class="dial-code">+350</span>
                                                        </li>
                                                        <li class="country" data-dial-code="30" data-country-code="gr">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gr"></div>
                                                            </div><span class="country-name">Greece (Ελλάδα)</span><span
                                                                class="dial-code">+30</span>
                                                        </li>
                                                        <li class="country" data-dial-code="299" data-country-code="gl">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gl"></div>
                                                            </div><span class="country-name">Greenland (Kalaallit
                                                                Nunaat)</span><span class="dial-code">+299</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1473"
                                                            data-country-code="gd">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gd"></div>
                                                            </div><span class="country-name">Grenada</span><span
                                                                class="dial-code">+1473</span>
                                                        </li>
                                                        <li class="country" data-dial-code="590" data-country-code="gp">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gp"></div>
                                                            </div><span class="country-name">Guadeloupe</span><span
                                                                class="dial-code">+590</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1671"
                                                            data-country-code="gu">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gu"></div>
                                                            </div><span class="country-name">Guam</span><span
                                                                class="dial-code">+1671</span>
                                                        </li>
                                                        <li class="country" data-dial-code="502" data-country-code="gt">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gt"></div>
                                                            </div><span class="country-name">Guatemala</span><span
                                                                class="dial-code">+502</span>
                                                        </li>
                                                        <li class="country" data-dial-code="44" data-country-code="gg">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gg"></div>
                                                            </div><span class="country-name">Guernsey</span><span
                                                                class="dial-code">+44</span>
                                                        </li>
                                                        <li class="country" data-dial-code="224" data-country-code="gn">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gn"></div>
                                                            </div><span class="country-name">Guinea (Guinée)</span><span
                                                                class="dial-code">+224</span>
                                                        </li>
                                                        <li class="country" data-dial-code="245" data-country-code="gw">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gw"></div>
                                                            </div><span class="country-name">Guinea-Bissau (Guiné
                                                                Bissau)</span><span class="dial-code">+245</span>
                                                        </li>
                                                        <li class="country" data-dial-code="592" data-country-code="gy">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gy"></div>
                                                            </div><span class="country-name">Guyana</span><span
                                                                class="dial-code">+592</span>
                                                        </li>
                                                        <li class="country" data-dial-code="509" data-country-code="ht">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ht"></div>
                                                            </div><span class="country-name">Haiti</span><span
                                                                class="dial-code">+509</span>
                                                        </li>
                                                        <li class="country" data-dial-code="504" data-country-code="hn">
                                                            <div class="flag-box">
                                                                <div class="iti-flag hn"></div>
                                                            </div><span class="country-name">Honduras</span><span
                                                                class="dial-code">+504</span>
                                                        </li>
                                                        <li class="country" data-dial-code="852" data-country-code="hk">
                                                            <div class="flag-box">
                                                                <div class="iti-flag hk"></div>
                                                            </div><span class="country-name">Hong Kong (香港)</span><span
                                                                class="dial-code">+852</span>
                                                        </li>
                                                        <li class="country" data-dial-code="36" data-country-code="hu">
                                                            <div class="flag-box">
                                                                <div class="iti-flag hu"></div>
                                                            </div><span class="country-name">Hungary
                                                                (Magyarország)</span><span class="dial-code">+36</span>
                                                        </li>
                                                        <li class="country" data-dial-code="354" data-country-code="is">
                                                            <div class="flag-box">
                                                                <div class="iti-flag is"></div>
                                                            </div><span class="country-name">Iceland
                                                                (Ísland)</span><span class="dial-code">+354</span>
                                                        </li>
                                                        <li class="country" data-dial-code="91" data-country-code="in">
                                                            <div class="flag-box">
                                                                <div class="iti-flag in"></div>
                                                            </div><span class="country-name">India (भारत)</span><span
                                                                class="dial-code">+91</span>
                                                        </li>
                                                        <li class="country" data-dial-code="62" data-country-code="id">
                                                            <div class="flag-box">
                                                                <div class="iti-flag id"></div>
                                                            </div><span class="country-name">Indonesia</span><span
                                                                class="dial-code">+62</span>
                                                        </li>
                                                        <li class="country" data-dial-code="98" data-country-code="ir">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ir"></div>
                                                            </div><span class="country-name">Iran
                                                                (&#x202B;ایران&#x202C;&lrm;)</span><span
                                                                class="dial-code">+98</span>
                                                        </li>
                                                        <li class="country" data-dial-code="964" data-country-code="iq">
                                                            <div class="flag-box">
                                                                <div class="iti-flag iq"></div>
                                                            </div><span class="country-name">Iraq
                                                                (&#x202B;العراق&#x202C;&lrm;)</span><span
                                                                class="dial-code">+964</span>
                                                        </li>
                                                        <li class="country" data-dial-code="353" data-country-code="ie">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ie"></div>
                                                            </div><span class="country-name">Ireland</span><span
                                                                class="dial-code">+353</span>
                                                        </li>
                                                        <li class="country" data-dial-code="44" data-country-code="im">
                                                            <div class="flag-box">
                                                                <div class="iti-flag im"></div>
                                                            </div><span class="country-name">Isle of Man</span><span
                                                                class="dial-code">+44</span>
                                                        </li>
                                                        <li class="country" data-dial-code="972" data-country-code="il">
                                                            <div class="flag-box">
                                                                <div class="iti-flag il"></div>
                                                            </div><span class="country-name">Israel
                                                                (&#x202B;ישראל&#x202C;&lrm;)</span><span
                                                                class="dial-code">+972</span>
                                                        </li>
                                                        <li class="country" data-dial-code="39" data-country-code="it">
                                                            <div class="flag-box">
                                                                <div class="iti-flag it"></div>
                                                            </div><span class="country-name">Italy (Italia)</span><span
                                                                class="dial-code">+39</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1" data-country-code="jm">
                                                            <div class="flag-box">
                                                                <div class="iti-flag jm"></div>
                                                            </div><span class="country-name">Jamaica</span><span
                                                                class="dial-code">+1</span>
                                                        </li>
                                                        <li class="country" data-dial-code="81" data-country-code="jp">
                                                            <div class="flag-box">
                                                                <div class="iti-flag jp"></div>
                                                            </div><span class="country-name">Japan (日本)</span><span
                                                                class="dial-code">+81</span>
                                                        </li>
                                                        <li class="country" data-dial-code="44" data-country-code="je">
                                                            <div class="flag-box">
                                                                <div class="iti-flag je"></div>
                                                            </div><span class="country-name">Jersey</span><span
                                                                class="dial-code">+44</span>
                                                        </li>
                                                        <li class="country" data-dial-code="962" data-country-code="jo">
                                                            <div class="flag-box">
                                                                <div class="iti-flag jo"></div>
                                                            </div><span class="country-name">Jordan
                                                                (&#x202B;الأردن&#x202C;&lrm;)</span><span
                                                                class="dial-code">+962</span>
                                                        </li>
                                                        <li class="country" data-dial-code="7" data-country-code="kz">
                                                            <div class="flag-box">
                                                                <div class="iti-flag kz"></div>
                                                            </div><span class="country-name">Kazakhstan
                                                                (Казахстан)</span><span class="dial-code">+7</span>
                                                        </li>
                                                        <li class="country" data-dial-code="254" data-country-code="ke">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ke"></div>
                                                            </div><span class="country-name">Kenya</span><span
                                                                class="dial-code">+254</span>
                                                        </li>
                                                        <li class="country" data-dial-code="686" data-country-code="ki">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ki"></div>
                                                            </div><span class="country-name">Kiribati</span><span
                                                                class="dial-code">+686</span>
                                                        </li>
                                                        <li class="country" data-dial-code="383" data-country-code="xk">
                                                            <div class="flag-box">
                                                                <div class="iti-flag xk"></div>
                                                            </div><span class="country-name">Kosovo</span><span
                                                                class="dial-code">+383</span>
                                                        </li>
                                                        <li class="country" data-dial-code="965" data-country-code="kw">
                                                            <div class="flag-box">
                                                                <div class="iti-flag kw"></div>
                                                            </div><span class="country-name">Kuwait
                                                                (&#x202B;الكويت&#x202C;&lrm;)</span><span
                                                                class="dial-code">+965</span>
                                                        </li>
                                                        <li class="country" data-dial-code="996" data-country-code="kg">
                                                            <div class="flag-box">
                                                                <div class="iti-flag kg"></div>
                                                            </div><span class="country-name">Kyrgyzstan
                                                                (Кыргызстан)</span><span class="dial-code">+996</span>
                                                        </li>
                                                        <li class="country" data-dial-code="856" data-country-code="la">
                                                            <div class="flag-box">
                                                                <div class="iti-flag la"></div>
                                                            </div><span class="country-name">Laos (ລາວ)</span><span
                                                                class="dial-code">+856</span>
                                                        </li>
                                                        <li class="country" data-dial-code="371" data-country-code="lv">
                                                            <div class="flag-box">
                                                                <div class="iti-flag lv"></div>
                                                            </div><span class="country-name">Latvia
                                                                (Latvija)</span><span class="dial-code">+371</span>
                                                        </li>
                                                        <li class="country" data-dial-code="961" data-country-code="lb">
                                                            <div class="flag-box">
                                                                <div class="iti-flag lb"></div>
                                                            </div><span class="country-name">Lebanon
                                                                (&#x202B;لبنان&#x202C;&lrm;)</span><span
                                                                class="dial-code">+961</span>
                                                        </li>
                                                        <li class="country" data-dial-code="266" data-country-code="ls">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ls"></div>
                                                            </div><span class="country-name">Lesotho</span><span
                                                                class="dial-code">+266</span>
                                                        </li>
                                                        <li class="country" data-dial-code="231" data-country-code="lr">
                                                            <div class="flag-box">
                                                                <div class="iti-flag lr"></div>
                                                            </div><span class="country-name">Liberia</span><span
                                                                class="dial-code">+231</span>
                                                        </li>
                                                        <li class="country" data-dial-code="218" data-country-code="ly">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ly"></div>
                                                            </div><span class="country-name">Libya
                                                                (&#x202B;ليبيا&#x202C;&lrm;)</span><span
                                                                class="dial-code">+218</span>
                                                        </li>
                                                        <li class="country" data-dial-code="423" data-country-code="li">
                                                            <div class="flag-box">
                                                                <div class="iti-flag li"></div>
                                                            </div><span class="country-name">Liechtenstein</span><span
                                                                class="dial-code">+423</span>
                                                        </li>
                                                        <li class="country" data-dial-code="370" data-country-code="lt">
                                                            <div class="flag-box">
                                                                <div class="iti-flag lt"></div>
                                                            </div><span class="country-name">Lithuania
                                                                (Lietuva)</span><span class="dial-code">+370</span>
                                                        </li>
                                                        <li class="country" data-dial-code="352" data-country-code="lu">
                                                            <div class="flag-box">
                                                                <div class="iti-flag lu"></div>
                                                            </div><span class="country-name">Luxembourg</span><span
                                                                class="dial-code">+352</span>
                                                        </li>
                                                        <li class="country" data-dial-code="853" data-country-code="mo">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mo"></div>
                                                            </div><span class="country-name">Macau (澳門)</span><span
                                                                class="dial-code">+853</span>
                                                        </li>
                                                        <li class="country" data-dial-code="389" data-country-code="mk">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mk"></div>
                                                            </div><span class="country-name">Macedonia (FYROM)
                                                                (Македонија)</span><span class="dial-code">+389</span>
                                                        </li>
                                                        <li class="country" data-dial-code="261" data-country-code="mg">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mg"></div>
                                                            </div><span class="country-name">Madagascar
                                                                (Madagasikara)</span><span class="dial-code">+261</span>
                                                        </li>
                                                        <li class="country" data-dial-code="265" data-country-code="mw">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mw"></div>
                                                            </div><span class="country-name">Malawi</span><span
                                                                class="dial-code">+265</span>
                                                        </li>
                                                        <li class="country" data-dial-code="60" data-country-code="my">
                                                            <div class="flag-box">
                                                                <div class="iti-flag my"></div>
                                                            </div><span class="country-name">Malaysia</span><span
                                                                class="dial-code">+60</span>
                                                        </li>
                                                        <li class="country" data-dial-code="960" data-country-code="mv">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mv"></div>
                                                            </div><span class="country-name">Maldives</span><span
                                                                class="dial-code">+960</span>
                                                        </li>
                                                        <li class="country" data-dial-code="223" data-country-code="ml">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ml"></div>
                                                            </div><span class="country-name">Mali</span><span
                                                                class="dial-code">+223</span>
                                                        </li>
                                                        <li class="country" data-dial-code="356" data-country-code="mt">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mt"></div>
                                                            </div><span class="country-name">Malta</span><span
                                                                class="dial-code">+356</span>
                                                        </li>
                                                        <li class="country" data-dial-code="692" data-country-code="mh">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mh"></div>
                                                            </div><span class="country-name">Marshall
                                                                Islands</span><span class="dial-code">+692</span>
                                                        </li>
                                                        <li class="country" data-dial-code="596" data-country-code="mq">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mq"></div>
                                                            </div><span class="country-name">Martinique</span><span
                                                                class="dial-code">+596</span>
                                                        </li>
                                                        <li class="country" data-dial-code="222" data-country-code="mr">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mr"></div>
                                                            </div><span class="country-name">Mauritania
                                                                (&#x202B;موريتانيا&#x202C;&lrm;)</span><span
                                                                class="dial-code">+222</span>
                                                        </li>
                                                        <li class="country" data-dial-code="230" data-country-code="mu">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mu"></div>
                                                            </div><span class="country-name">Mauritius
                                                                (Moris)</span><span class="dial-code">+230</span>
                                                        </li>
                                                        <li class="country" data-dial-code="262" data-country-code="yt">
                                                            <div class="flag-box">
                                                                <div class="iti-flag yt"></div>
                                                            </div><span class="country-name">Mayotte</span><span
                                                                class="dial-code">+262</span>
                                                        </li>
                                                        <li class="country" data-dial-code="52" data-country-code="mx">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mx"></div>
                                                            </div><span class="country-name">Mexico (México)</span><span
                                                                class="dial-code">+52</span>
                                                        </li>
                                                        <li class="country" data-dial-code="691" data-country-code="fm">
                                                            <div class="flag-box">
                                                                <div class="iti-flag fm"></div>
                                                            </div><span class="country-name">Micronesia</span><span
                                                                class="dial-code">+691</span>
                                                        </li>
                                                        <li class="country" data-dial-code="373" data-country-code="md">
                                                            <div class="flag-box">
                                                                <div class="iti-flag md"></div>
                                                            </div><span class="country-name">Moldova (Republica
                                                                Moldova)</span><span class="dial-code">+373</span>
                                                        </li>
                                                        <li class="country" data-dial-code="377" data-country-code="mc">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mc"></div>
                                                            </div><span class="country-name">Monaco</span><span
                                                                class="dial-code">+377</span>
                                                        </li>
                                                        <li class="country" data-dial-code="976" data-country-code="mn">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mn"></div>
                                                            </div><span class="country-name">Mongolia
                                                                (Монгол)</span><span class="dial-code">+976</span>
                                                        </li>
                                                        <li class="country" data-dial-code="382" data-country-code="me">
                                                            <div class="flag-box">
                                                                <div class="iti-flag me"></div>
                                                            </div><span class="country-name">Montenegro (Crna
                                                                Gora)</span><span class="dial-code">+382</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1664"
                                                            data-country-code="ms">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ms"></div>
                                                            </div><span class="country-name">Montserrat</span><span
                                                                class="dial-code">+1664</span>
                                                        </li>
                                                        <li class="country" data-dial-code="212" data-country-code="ma">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ma"></div>
                                                            </div><span class="country-name">Morocco
                                                                (&#x202B;المغرب&#x202C;&lrm;)</span><span
                                                                class="dial-code">+212</span>
                                                        </li>
                                                        <li class="country" data-dial-code="258" data-country-code="mz">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mz"></div>
                                                            </div><span class="country-name">Mozambique
                                                                (Moçambique)</span><span class="dial-code">+258</span>
                                                        </li>
                                                        <li class="country" data-dial-code="95" data-country-code="mm">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mm"></div>
                                                            </div><span class="country-name">Myanmar (Burma)
                                                                (မြန်မာ)</span><span class="dial-code">+95</span>
                                                        </li>
                                                        <li class="country" data-dial-code="264" data-country-code="na">
                                                            <div class="flag-box">
                                                                <div class="iti-flag na"></div>
                                                            </div><span class="country-name">Namibia
                                                                (Namibië)</span><span class="dial-code">+264</span>
                                                        </li>
                                                        <li class="country" data-dial-code="674" data-country-code="nr">
                                                            <div class="flag-box">
                                                                <div class="iti-flag nr"></div>
                                                            </div><span class="country-name">Nauru</span><span
                                                                class="dial-code">+674</span>
                                                        </li>
                                                        <li class="country" data-dial-code="977" data-country-code="np">
                                                            <div class="flag-box">
                                                                <div class="iti-flag np"></div>
                                                            </div><span class="country-name">Nepal (नेपाल)</span><span
                                                                class="dial-code">+977</span>
                                                        </li>
                                                        <li class="country" data-dial-code="31" data-country-code="nl">
                                                            <div class="flag-box">
                                                                <div class="iti-flag nl"></div>
                                                            </div><span class="country-name">Netherlands
                                                                (Nederland)</span><span class="dial-code">+31</span>
                                                        </li>
                                                        <li class="country" data-dial-code="687" data-country-code="nc">
                                                            <div class="flag-box">
                                                                <div class="iti-flag nc"></div>
                                                            </div><span class="country-name">New Caledonia
                                                                (Nouvelle-Calédonie)</span><span
                                                                class="dial-code">+687</span>
                                                        </li>
                                                        <li class="country" data-dial-code="64" data-country-code="nz">
                                                            <div class="flag-box">
                                                                <div class="iti-flag nz"></div>
                                                            </div><span class="country-name">New Zealand</span><span
                                                                class="dial-code">+64</span>
                                                        </li>
                                                        <li class="country" data-dial-code="505" data-country-code="ni">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ni"></div>
                                                            </div><span class="country-name">Nicaragua</span><span
                                                                class="dial-code">+505</span>
                                                        </li>
                                                        <li class="country" data-dial-code="227" data-country-code="ne">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ne"></div>
                                                            </div><span class="country-name">Niger (Nijar)</span><span
                                                                class="dial-code">+227</span>
                                                        </li>
                                                        <li class="country" data-dial-code="234" data-country-code="ng">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ng"></div>
                                                            </div><span class="country-name">Nigeria</span><span
                                                                class="dial-code">+234</span>
                                                        </li>
                                                        <li class="country" data-dial-code="683" data-country-code="nu">
                                                            <div class="flag-box">
                                                                <div class="iti-flag nu"></div>
                                                            </div><span class="country-name">Niue</span><span
                                                                class="dial-code">+683</span>
                                                        </li>
                                                        <li class="country" data-dial-code="672" data-country-code="nf">
                                                            <div class="flag-box">
                                                                <div class="iti-flag nf"></div>
                                                            </div><span class="country-name">Norfolk Island</span><span
                                                                class="dial-code">+672</span>
                                                        </li>
                                                        <li class="country" data-dial-code="850" data-country-code="kp">
                                                            <div class="flag-box">
                                                                <div class="iti-flag kp"></div>
                                                            </div><span class="country-name">North Korea (조선 민주주의 인민
                                                                공화국)</span><span class="dial-code">+850</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1670"
                                                            data-country-code="mp">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mp"></div>
                                                            </div><span class="country-name">Northern Mariana
                                                                Islands</span><span class="dial-code">+1670</span>
                                                        </li>
                                                        <li class="country" data-dial-code="47" data-country-code="no">
                                                            <div class="flag-box">
                                                                <div class="iti-flag no"></div>
                                                            </div><span class="country-name">Norway (Norge)</span><span
                                                                class="dial-code">+47</span>
                                                        </li>
                                                        <li class="country" data-dial-code="968" data-country-code="om">
                                                            <div class="flag-box">
                                                                <div class="iti-flag om"></div>
                                                            </div><span class="country-name">Oman
                                                                (&#x202B;عُمان&#x202C;&lrm;)</span><span
                                                                class="dial-code">+968</span>
                                                        </li>
                                                        <li class="country" data-dial-code="92" data-country-code="pk">
                                                            <div class="flag-box">
                                                                <div class="iti-flag pk"></div>
                                                            </div><span class="country-name">Pakistan
                                                                (&#x202B;پاکستان&#x202C;&lrm;)</span><span
                                                                class="dial-code">+92</span>
                                                        </li>
                                                        <li class="country" data-dial-code="680" data-country-code="pw">
                                                            <div class="flag-box">
                                                                <div class="iti-flag pw"></div>
                                                            </div><span class="country-name">Palau</span><span
                                                                class="dial-code">+680</span>
                                                        </li>
                                                        <li class="country" data-dial-code="970" data-country-code="ps">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ps"></div>
                                                            </div><span class="country-name">Palestine
                                                                (&#x202B;فلسطين&#x202C;&lrm;)</span><span
                                                                class="dial-code">+970</span>
                                                        </li>
                                                        <li class="country" data-dial-code="507" data-country-code="pa">
                                                            <div class="flag-box">
                                                                <div class="iti-flag pa"></div>
                                                            </div><span class="country-name">Panama (Panamá)</span><span
                                                                class="dial-code">+507</span>
                                                        </li>
                                                        <li class="country" data-dial-code="675" data-country-code="pg">
                                                            <div class="flag-box">
                                                                <div class="iti-flag pg"></div>
                                                            </div><span class="country-name">Papua New
                                                                Guinea</span><span class="dial-code">+675</span>
                                                        </li>
                                                        <li class="country" data-dial-code="595" data-country-code="py">
                                                            <div class="flag-box">
                                                                <div class="iti-flag py"></div>
                                                            </div><span class="country-name">Paraguay</span><span
                                                                class="dial-code">+595</span>
                                                        </li>
                                                        <li class="country" data-dial-code="51" data-country-code="pe">
                                                            <div class="flag-box">
                                                                <div class="iti-flag pe"></div>
                                                            </div><span class="country-name">Peru (Perú)</span><span
                                                                class="dial-code">+51</span>
                                                        </li>
                                                        <li class="country" data-dial-code="63" data-country-code="ph">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ph"></div>
                                                            </div><span class="country-name">Philippines</span><span
                                                                class="dial-code">+63</span>
                                                        </li>
                                                        <li class="country" data-dial-code="48" data-country-code="pl">
                                                            <div class="flag-box">
                                                                <div class="iti-flag pl"></div>
                                                            </div><span class="country-name">Poland (Polska)</span><span
                                                                class="dial-code">+48</span>
                                                        </li>
                                                        <li class="country" data-dial-code="351" data-country-code="pt">
                                                            <div class="flag-box">
                                                                <div class="iti-flag pt"></div>
                                                            </div><span class="country-name">Portugal</span><span
                                                                class="dial-code">+351</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1" data-country-code="pr">
                                                            <div class="flag-box">
                                                                <div class="iti-flag pr"></div>
                                                            </div><span class="country-name">Puerto Rico</span><span
                                                                class="dial-code">+1</span>
                                                        </li>
                                                        <li class="country" data-dial-code="974" data-country-code="qa">
                                                            <div class="flag-box">
                                                                <div class="iti-flag qa"></div>
                                                            </div><span class="country-name">Qatar
                                                                (&#x202B;قطر&#x202C;&lrm;)</span><span
                                                                class="dial-code">+974</span>
                                                        </li>
                                                        <li class="country" data-dial-code="262" data-country-code="re">
                                                            <div class="flag-box">
                                                                <div class="iti-flag re"></div>
                                                            </div><span class="country-name">Réunion (La
                                                                Réunion)</span><span class="dial-code">+262</span>
                                                        </li>
                                                        <li class="country" data-dial-code="40" data-country-code="ro">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ro"></div>
                                                            </div><span class="country-name">Romania
                                                                (România)</span><span class="dial-code">+40</span>
                                                        </li>
                                                        <li class="country" data-dial-code="7" data-country-code="ru">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ru"></div>
                                                            </div><span class="country-name">Russia (Россия)</span><span
                                                                class="dial-code">+7</span>
                                                        </li>
                                                        <li class="country" data-dial-code="250" data-country-code="rw">
                                                            <div class="flag-box">
                                                                <div class="iti-flag rw"></div>
                                                            </div><span class="country-name">Rwanda</span><span
                                                                class="dial-code">+250</span>
                                                        </li>
                                                        <li class="country" data-dial-code="590" data-country-code="bl">
                                                            <div class="flag-box">
                                                                <div class="iti-flag bl"></div>
                                                            </div><span class="country-name">Saint
                                                                Barthélemy</span><span class="dial-code">+590</span>
                                                        </li>
                                                        <li class="country" data-dial-code="290" data-country-code="sh">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sh"></div>
                                                            </div><span class="country-name">Saint Helena</span><span
                                                                class="dial-code">+290</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1869"
                                                            data-country-code="kn">
                                                            <div class="flag-box">
                                                                <div class="iti-flag kn"></div>
                                                            </div><span class="country-name">Saint Kitts and
                                                                Nevis</span><span class="dial-code">+1869</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1758"
                                                            data-country-code="lc">
                                                            <div class="flag-box">
                                                                <div class="iti-flag lc"></div>
                                                            </div><span class="country-name">Saint Lucia</span><span
                                                                class="dial-code">+1758</span>
                                                        </li>
                                                        <li class="country" data-dial-code="590" data-country-code="mf">
                                                            <div class="flag-box">
                                                                <div class="iti-flag mf"></div>
                                                            </div><span class="country-name">Saint Martin (Saint-Martin
                                                                (partie française))</span><span
                                                                class="dial-code">+590</span>
                                                        </li>
                                                        <li class="country" data-dial-code="508" data-country-code="pm">
                                                            <div class="flag-box">
                                                                <div class="iti-flag pm"></div>
                                                            </div><span class="country-name">Saint Pierre and Miquelon
                                                                (Saint-Pierre-et-Miquelon)</span><span
                                                                class="dial-code">+508</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1784"
                                                            data-country-code="vc">
                                                            <div class="flag-box">
                                                                <div class="iti-flag vc"></div>
                                                            </div><span class="country-name">Saint Vincent and the
                                                                Grenadines</span><span class="dial-code">+1784</span>
                                                        </li>
                                                        <li class="country" data-dial-code="685" data-country-code="ws">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ws"></div>
                                                            </div><span class="country-name">Samoa</span><span
                                                                class="dial-code">+685</span>
                                                        </li>
                                                        <li class="country" data-dial-code="378" data-country-code="sm">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sm"></div>
                                                            </div><span class="country-name">San Marino</span><span
                                                                class="dial-code">+378</span>
                                                        </li>
                                                        <li class="country" data-dial-code="239" data-country-code="st">
                                                            <div class="flag-box">
                                                                <div class="iti-flag st"></div>
                                                            </div><span class="country-name">São Tomé and Príncipe (São
                                                                Tomé e Príncipe)</span><span
                                                                class="dial-code">+239</span>
                                                        </li>
                                                        <li class="country" data-dial-code="966" data-country-code="sa">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sa"></div>
                                                            </div><span class="country-name">Saudi Arabia
                                                                (&#x202B;المملكة العربية
                                                                السعودية&#x202C;&lrm;)</span><span
                                                                class="dial-code">+966</span>
                                                        </li>
                                                        <li class="country" data-dial-code="221" data-country-code="sn">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sn"></div>
                                                            </div><span class="country-name">Senegal
                                                                (Sénégal)</span><span class="dial-code">+221</span>
                                                        </li>
                                                        <li class="country" data-dial-code="381" data-country-code="rs">
                                                            <div class="flag-box">
                                                                <div class="iti-flag rs"></div>
                                                            </div><span class="country-name">Serbia (Србија)</span><span
                                                                class="dial-code">+381</span>
                                                        </li>
                                                        <li class="country" data-dial-code="248" data-country-code="sc">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sc"></div>
                                                            </div><span class="country-name">Seychelles</span><span
                                                                class="dial-code">+248</span>
                                                        </li>
                                                        <li class="country" data-dial-code="232" data-country-code="sl">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sl"></div>
                                                            </div><span class="country-name">Sierra Leone</span><span
                                                                class="dial-code">+232</span>
                                                        </li>
                                                        <li class="country" data-dial-code="65" data-country-code="sg">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sg"></div>
                                                            </div><span class="country-name">Singapore</span><span
                                                                class="dial-code">+65</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1721"
                                                            data-country-code="sx">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sx"></div>
                                                            </div><span class="country-name">Sint Maarten</span><span
                                                                class="dial-code">+1721</span>
                                                        </li>
                                                        <li class="country" data-dial-code="421" data-country-code="sk">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sk"></div>
                                                            </div><span class="country-name">Slovakia
                                                                (Slovensko)</span><span class="dial-code">+421</span>
                                                        </li>
                                                        <li class="country" data-dial-code="386" data-country-code="si">
                                                            <div class="flag-box">
                                                                <div class="iti-flag si"></div>
                                                            </div><span class="country-name">Slovenia
                                                                (Slovenija)</span><span class="dial-code">+386</span>
                                                        </li>
                                                        <li class="country" data-dial-code="677" data-country-code="sb">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sb"></div>
                                                            </div><span class="country-name">Solomon Islands</span><span
                                                                class="dial-code">+677</span>
                                                        </li>
                                                        <li class="country" data-dial-code="252" data-country-code="so">
                                                            <div class="flag-box">
                                                                <div class="iti-flag so"></div>
                                                            </div><span class="country-name">Somalia
                                                                (Soomaaliya)</span><span class="dial-code">+252</span>
                                                        </li>
                                                        <li class="country" data-dial-code="27" data-country-code="za">
                                                            <div class="flag-box">
                                                                <div class="iti-flag za"></div>
                                                            </div><span class="country-name">South Africa</span><span
                                                                class="dial-code">+27</span>
                                                        </li>
                                                        <li class="country" data-dial-code="82" data-country-code="kr">
                                                            <div class="flag-box">
                                                                <div class="iti-flag kr"></div>
                                                            </div><span class="country-name">South Korea
                                                                (대한민국)</span><span class="dial-code">+82</span>
                                                        </li>
                                                        <li class="country" data-dial-code="211" data-country-code="ss">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ss"></div>
                                                            </div><span class="country-name">South Sudan (&#x202B;جنوب
                                                                السودان&#x202C;&lrm;)</span><span
                                                                class="dial-code">+211</span>
                                                        </li>
                                                        <li class="country" data-dial-code="34" data-country-code="es">
                                                            <div class="flag-box">
                                                                <div class="iti-flag es"></div>
                                                            </div><span class="country-name">Spain (España)</span><span
                                                                class="dial-code">+34</span>
                                                        </li>
                                                        <li class="country" data-dial-code="94" data-country-code="lk">
                                                            <div class="flag-box">
                                                                <div class="iti-flag lk"></div>
                                                            </div><span class="country-name">Sri Lanka (ශ්&zwj;රී
                                                                ලංකාව)</span><span class="dial-code">+94</span>
                                                        </li>
                                                        <li class="country" data-dial-code="249" data-country-code="sd">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sd"></div>
                                                            </div><span class="country-name">Sudan
                                                                (&#x202B;السودان&#x202C;&lrm;)</span><span
                                                                class="dial-code">+249</span>
                                                        </li>
                                                        <li class="country" data-dial-code="597" data-country-code="sr">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sr"></div>
                                                            </div><span class="country-name">Suriname</span><span
                                                                class="dial-code">+597</span>
                                                        </li>
                                                        <li class="country" data-dial-code="47" data-country-code="sj">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sj"></div>
                                                            </div><span class="country-name">Svalbard and Jan
                                                                Mayen</span><span class="dial-code">+47</span>
                                                        </li>
                                                        <li class="country" data-dial-code="268" data-country-code="sz">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sz"></div>
                                                            </div><span class="country-name">Swaziland</span><span
                                                                class="dial-code">+268</span>
                                                        </li>
                                                        <li class="country" data-dial-code="46" data-country-code="se">
                                                            <div class="flag-box">
                                                                <div class="iti-flag se"></div>
                                                            </div><span class="country-name">Sweden
                                                                (Sverige)</span><span class="dial-code">+46</span>
                                                        </li>
                                                        <li class="country" data-dial-code="41" data-country-code="ch">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ch"></div>
                                                            </div><span class="country-name">Switzerland
                                                                (Schweiz)</span><span class="dial-code">+41</span>
                                                        </li>
                                                        <li class="country" data-dial-code="963" data-country-code="sy">
                                                            <div class="flag-box">
                                                                <div class="iti-flag sy"></div>
                                                            </div><span class="country-name">Syria
                                                                (&#x202B;سوريا&#x202C;&lrm;)</span><span
                                                                class="dial-code">+963</span>
                                                        </li>
                                                        <li class="country" data-dial-code="886" data-country-code="tw">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tw"></div>
                                                            </div><span class="country-name">Taiwan (台灣)</span><span
                                                                class="dial-code">+886</span>
                                                        </li>
                                                        <li class="country" data-dial-code="992" data-country-code="tj">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tj"></div>
                                                            </div><span class="country-name">Tajikistan</span><span
                                                                class="dial-code">+992</span>
                                                        </li>
                                                        <li class="country" data-dial-code="255" data-country-code="tz">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tz"></div>
                                                            </div><span class="country-name">Tanzania</span><span
                                                                class="dial-code">+255</span>
                                                        </li>
                                                        <li class="country" data-dial-code="66" data-country-code="th">
                                                            <div class="flag-box">
                                                                <div class="iti-flag th"></div>
                                                            </div><span class="country-name">Thailand (ไทย)</span><span
                                                                class="dial-code">+66</span>
                                                        </li>
                                                        <li class="country" data-dial-code="670" data-country-code="tl">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tl"></div>
                                                            </div><span class="country-name">Timor-Leste</span><span
                                                                class="dial-code">+670</span>
                                                        </li>
                                                        <li class="country" data-dial-code="228" data-country-code="tg">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tg"></div>
                                                            </div><span class="country-name">Togo</span><span
                                                                class="dial-code">+228</span>
                                                        </li>
                                                        <li class="country" data-dial-code="690" data-country-code="tk">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tk"></div>
                                                            </div><span class="country-name">Tokelau</span><span
                                                                class="dial-code">+690</span>
                                                        </li>
                                                        <li class="country" data-dial-code="676" data-country-code="to">
                                                            <div class="flag-box">
                                                                <div class="iti-flag to"></div>
                                                            </div><span class="country-name">Tonga</span><span
                                                                class="dial-code">+676</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1868"
                                                            data-country-code="tt">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tt"></div>
                                                            </div><span class="country-name">Trinidad and
                                                                Tobago</span><span class="dial-code">+1868</span>
                                                        </li>
                                                        <li class="country" data-dial-code="216" data-country-code="tn">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tn"></div>
                                                            </div><span class="country-name">Tunisia
                                                                (&#x202B;تونس&#x202C;&lrm;)</span><span
                                                                class="dial-code">+216</span>
                                                        </li>
                                                        <li class="country" data-dial-code="90" data-country-code="tr">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tr"></div>
                                                            </div><span class="country-name">Turkey
                                                                (Türkiye)</span><span class="dial-code">+90</span>
                                                        </li>
                                                        <li class="country" data-dial-code="993" data-country-code="tm">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tm"></div>
                                                            </div><span class="country-name">Turkmenistan</span><span
                                                                class="dial-code">+993</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1649"
                                                            data-country-code="tc">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tc"></div>
                                                            </div><span class="country-name">Turks and Caicos
                                                                Islands</span><span class="dial-code">+1649</span>
                                                        </li>
                                                        <li class="country" data-dial-code="688" data-country-code="tv">
                                                            <div class="flag-box">
                                                                <div class="iti-flag tv"></div>
                                                            </div><span class="country-name">Tuvalu</span><span
                                                                class="dial-code">+688</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1340"
                                                            data-country-code="vi">
                                                            <div class="flag-box">
                                                                <div class="iti-flag vi"></div>
                                                            </div><span class="country-name">U.S. Virgin
                                                                Islands</span><span class="dial-code">+1340</span>
                                                        </li>
                                                        <li class="country" data-dial-code="256" data-country-code="ug">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ug"></div>
                                                            </div><span class="country-name">Uganda</span><span
                                                                class="dial-code">+256</span>
                                                        </li>
                                                        <li class="country" data-dial-code="380" data-country-code="ua">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ua"></div>
                                                            </div><span class="country-name">Ukraine
                                                                (Україна)</span><span class="dial-code">+380</span>
                                                        </li>
                                                        <li class="country" data-dial-code="971" data-country-code="ae">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ae"></div>
                                                            </div><span class="country-name">United Arab Emirates
                                                                (&#x202B;الإمارات العربية
                                                                المتحدة&#x202C;&lrm;)</span><span
                                                                class="dial-code">+971</span>
                                                        </li>
                                                        <li class="country" data-dial-code="44" data-country-code="gb">
                                                            <div class="flag-box">
                                                                <div class="iti-flag gb"></div>
                                                            </div><span class="country-name">United Kingdom</span><span
                                                                class="dial-code">+44</span>
                                                        </li>
                                                        <li class="country" data-dial-code="1" data-country-code="us">
                                                            <div class="flag-box">
                                                                <div class="iti-flag us"></div>
                                                            </div><span class="country-name">United States</span><span
                                                                class="dial-code">+1</span>
                                                        </li>
                                                        <li class="country" data-dial-code="598" data-country-code="uy">
                                                            <div class="flag-box">
                                                                <div class="iti-flag uy"></div>
                                                            </div><span class="country-name">Uruguay</span><span
                                                                class="dial-code">+598</span>
                                                        </li>
                                                        <li class="country" data-dial-code="998" data-country-code="uz">
                                                            <div class="flag-box">
                                                                <div class="iti-flag uz"></div>
                                                            </div><span class="country-name">Uzbekistan
                                                                (Oʻzbekiston)</span><span class="dial-code">+998</span>
                                                        </li>
                                                        <li class="country" data-dial-code="678" data-country-code="vu">
                                                            <div class="flag-box">
                                                                <div class="iti-flag vu"></div>
                                                            </div><span class="country-name">Vanuatu</span><span
                                                                class="dial-code">+678</span>
                                                        </li>
                                                        <li class="country" data-dial-code="39" data-country-code="va">
                                                            <div class="flag-box">
                                                                <div class="iti-flag va"></div>
                                                            </div><span class="country-name">Vatican City (Città del
                                                                Vaticano)</span><span class="dial-code">+39</span>
                                                        </li>
                                                        <li class="country" data-dial-code="58" data-country-code="ve">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ve"></div>
                                                            </div><span class="country-name">Venezuela</span><span
                                                                class="dial-code">+58</span>
                                                        </li>
                                                        <li class="country" data-dial-code="84" data-country-code="vn">
                                                            <div class="flag-box">
                                                                <div class="iti-flag vn"></div>
                                                            </div><span class="country-name">Vietnam (Việt
                                                                Nam)</span><span class="dial-code">+84</span>
                                                        </li>
                                                        <li class="country" data-dial-code="681" data-country-code="wf">
                                                            <div class="flag-box">
                                                                <div class="iti-flag wf"></div>
                                                            </div><span class="country-name">Wallis and Futuna
                                                                (Wallis-et-Futuna)</span><span
                                                                class="dial-code">+681</span>
                                                        </li>
                                                        <li class="country" data-dial-code="212" data-country-code="eh">
                                                            <div class="flag-box">
                                                                <div class="iti-flag eh"></div>
                                                            </div><span class="country-name">Western Sahara
                                                                (&#x202B;الصحراء الغربية&#x202C;&lrm;)</span><span
                                                                class="dial-code">+212</span>
                                                        </li>
                                                        <li class="country" data-dial-code="967" data-country-code="ye">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ye"></div>
                                                            </div><span class="country-name">Yemen
                                                                (&#x202B;اليمن&#x202C;&lrm;)</span><span
                                                                class="dial-code">+967</span>
                                                        </li>
                                                        <li class="country" data-dial-code="260" data-country-code="zm">
                                                            <div class="flag-box">
                                                                <div class="iti-flag zm"></div>
                                                            </div><span class="country-name">Zambia</span><span
                                                                class="dial-code">+260</span>
                                                        </li>
                                                        <li class="country" data-dial-code="263" data-country-code="zw">
                                                            <div class="flag-box">
                                                                <div class="iti-flag zw"></div>
                                                            </div><span class="country-name">Zimbabwe</span><span
                                                                class="dial-code">+263</span>
                                                        </li>
                                                        <li class="country" data-dial-code="358" data-country-code="ax">
                                                            <div class="flag-box">
                                                                <div class="iti-flag ax"></div>
                                                            </div><span class="country-name">Åland Islands</span><span
                                                                class="dial-code">+358</span>
                                                        </li>
                                                    </ul>
                                                </div><input type="tel" name="number" id="number"
                                                    class="form-control phone" required="" autocomplete="off">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <label for="Company" class="form-label">Company *</label>
                                            <input type="text" name="Company" id="Company" class="form-control"
                                                autocomplete="off">
                                        </div>
                                        <div class="col-12">
                                            <label for="industry" class="form-label">Industry *</label>
                                            <select name="industry" id="industry" class="form-control">
                                                <option value="" disabled="" selected="">Industries</option>
                                                <option value="3PL and Transport">3PL and Transport</option>
                                                <option value="E-commerce">E-commerce</option>
                                                <option value="CPG and FMCG">CPG and FMCG</option>
                                                <option value="Retail">Retail</option>
                                                <option value="Home Services">Home Services</option>
                                                <option value="Others">Others</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="country" class="form-label">Country *</label>
                                            <select name="Country" id="country" class="form-control">
                                                <option value="-1">Select Country</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antartica">Antartica</option>
                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Ashmore and Cartier Island">Ashmore and Cartier Island
                                                </option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British Virgin Islands">British Virgin Islands</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burma">Burma</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic
                                                </option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Clipperton Island">Clipperton Island</option>
                                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo, Democratic Republic of the">Congo, Democratic
                                                    Republic of the</option>
                                                <option value="Congo, Republic of the">Congo, Republic of the</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czeck Republic">Czeck Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Europa Island">Europa Island</option>
                                                <option value="Falkland Islands (Islas Malvinas)">Falkland Islands
                                                    (Islas Malvinas)</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern and Antarctic Lands">French Southern and
                                                    Antarctic Lands</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia, The">Gambia, The</option>
                                                <option value="Gaza Strip">Gaza Strip</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Glorioso Islands">Glorioso Islands</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guernsey">Guernsey</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Heard Island and McDonald Islands">Heard Island and
                                                    McDonald Islands</option>
                                                <option value="Holy See (Vatican City)">Holy See (Vatican City)</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Howland Island">Howland Island</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Ireland, Northern">Ireland, Northern</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Jan Mayen">Jan Mayen</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jarvis Island">Jarvis Island</option>
                                                <option value="Jersey">Jersey</option>
                                                <option value="Johnston Atoll">Johnston Atoll</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Juan de Nova Island">Juan de Nova Island</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea, North">Korea, North</option>
                                                <option value="Korea, South">Korea, South</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macau">Macau</option>
                                                <option value="Macedonia, Former Yugoslav Republic of">Macedonia, Former
                                                    Yugoslav Republic of</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Man, Isle of">Man, Isle of</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia, Federated States of">Micronesia, Federated
                                                    States of</option>
                                                <option value="Midway Islands">Midway Islands</option>
                                                <option value="Moldova">Moldova</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Northern Mariana Islands">Northern Mariana Islands
                                                </option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Pitcaim Islands">Pitcaim Islands</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romainia">Romainia</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="Saint Helena">Saint Helena</option>
                                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon
                                                </option>
                                                <option value="Saint Vincent and the Grenadines">Saint Vincent and the
                                                    Grenadines</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Scotland">Scotland</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="South Georgia and South Sandwich Islands">South Georgia
                                                    and South Sandwich Islands</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Spratly Islands">Spratly Islands</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Svalbard">Svalbard</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania">Tanzania</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Tobago">Tobago</option>
                                                <option value="Toga">Toga</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad">Trinidad</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="USA">USA</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Virgin Islands">Virgin Islands</option>
                                                <option value="Wales">Wales</option>
                                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                <option value="West Bank">West Bank</option>
                                                <option value="Western Sahara">Western Sahara</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Yugoslavia">Yugoslavia</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="state" class="form-label">State *</label>
                                            <select name="State" id="state" class="form-control">
                                                <option value="">Select State</option>
                                                <option value="Alabama">Alabama</option>
                                                <option value="Alaska">Alaska</option>
                                                <option value="Arizona">Arizona</option>
                                                <option value="Arkansas">Arkansas</option>
                                                <option value="California">California</option>
                                                <option value="Colorado">Colorado</option>
                                                <option value="Connecticut">Connecticut</option>
                                                <option value="Delaware">Delaware</option>
                                                <option value="District of Columbia">District of Columbia</option>
                                                <option value="Florida">Florida</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Hawaii">Hawaii</option>
                                                <option value="Idaho">Idaho</option>
                                                <option value="Illinois">Illinois</option>
                                                <option value="Indiana">Indiana</option>
                                                <option value="Iowa">Iowa</option>
                                                <option value="Kansas">Kansas</option>
                                                <option value="Kentucky">Kentucky</option>
                                                <option value="Louisiana">Louisiana</option>
                                                <option value="Maine">Maine</option>
                                                <option value="Maryland">Maryland</option>
                                                <option value="Massachusetts">Massachusetts</option>
                                                <option value="Michigan">Michigan</option>
                                                <option value="Minnesota">Minnesota</option>
                                                <option value="Mississippi">Mississippi</option>
                                                <option value="Missouri">Missouri</option>
                                                <option value="Montana">Montana</option>
                                                <option value="Nebraska">Nebraska</option>
                                                <option value="Nevada">Nevada</option>
                                                <option value="New Hampshire">New Hampshire</option>
                                                <option value="New Jersey">New Jersey</option>
                                                <option value="New Mexico">New Mexico</option>
                                                <option value="New York">New York</option>
                                                <option value="North Carolina">North Carolina</option>
                                                <option value="North Dakota">North Dakota</option>
                                                <option value="Ohio">Ohio</option>
                                                <option value="Oklahoma">Oklahoma</option>
                                                <option value="Oregon">Oregon</option>
                                                <option value="Pennsylvania">Pennsylvania</option>
                                                <option value="Rhode Island">Rhode Island</option>
                                                <option value="South Carolina">South Carolina</option>
                                                <option value="South Dakota">South Dakota</option>
                                                <option value="Tennessee">Tennessee</option>
                                                <option value="Texas">Texas</option>
                                                <option value="Utah">Utah</option>
                                                <option value="Vermont">Vermont</option>
                                                <option value="Virginia">Virginia</option>
                                                <option value="Washington">Washington</option>
                                                <option value="West Virginia">West Virginia</option>
                                                <option value="Wisconsin">Wisconsin</option>
                                                <option value="Wyoming">Wyoming</option>
                                            </select>
                                        </div>
                                        <div class="col-12 mb-3">
                                            <div>
                                                <label class="form-label">Number of vehicles*</label>
                                            </div>
                                            <select name="pardot_fleet_size" id="pardot_fleet_size"
                                                class="form-control">
                                                <option value="default" disabled="" selected="">Choose</option>
                                                <option value="5 to 9 vehicles">5 to 9 vehicles</option>
                                                <option value="10 to 24 vehicles">10 to 24 vehicles</option>
                                                <option value="25 to 49 vehicles">25 to 49 vehicles</option>
                                                <option value="50 to 99 vehicles">50 to 99 vehicles</option>
                                                <option value="100 to 249 vehicles">100 to 249 vehicles</option>
                                                <option value="250 to 499 vehicles">250 to 499 vehicles</option>
                                                <option value="500+ vehicles">500+ vehicles</option>
                                            </select>
                                        </div>
                                        <div class="col-12 text-center button-container">
                                            <button type="submit" class="btn btn-primary" id="submitFormButton"
                                                disabled="">Submit</button>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-check">
                                                <input type="checkbox"
                                                    name="pardot_explicit_consent_for_marketing_communications_dr_"
                                                    id="newsletterCheck1" class="form-check-input">
                                                <label class="marketing-mail-consent" for="newsletterCheck1">
                                                    <p class="mb-1"><small>I would also like to subscribe to exclusive
                                                            product updates, content and event invitations by Locus. You
                                                            can refer to our <a href="/privacy-policy/"
                                                                target="_blank">privacy policy</a>.</small></p>
                                                    <p class="mb-1"><small>By clicking submit, you are providing us with
                                                            your consent to communicate via email or phone, regarding
                                                            the demo you have requested.</small></p>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="strip-right-pattern position-absolute">
                                <img src="/assets/img/home/strip-right-pattern.svg" alt="strip-right-pattern"
                                    loading="lazy">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.4/jquery.validate.min.js"
        integrity="sha512-FOhq9HThdn7ltbK8abmGn60A/EMtEzIzv1rvuh+DqzJtSGq8BRdEN0U+j0iKEIffiw/yEtVuladk6rsG4X6Uqg=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- OneTrust Cookies Consent Notice start for locus.sh -->
    <script type="text/javascript"
        src="https://cdn-apac.onetrust.com/consent/98988d84-30d5-4ac1-9227-70fd36c04a14/OtAutoBlock.js"
        defer=""></script>
    <script src="https://cdn-apac.onetrust.com/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8"
        data-domain-script="98988d84-30d5-4ac1-9227-70fd36c04a14" defer=""></script>
    <script type="text/javascript">
        function OptanonWrapper() { }
    </script>
    <!-- OneTrust Cookies Consent Notice end for locus.sh -->
    <!-- Google Tag Manager -->
    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-WD5GHD3');</script>
    <!-- End Google Tag Manager -->
    <!-- Hotjar Tracking Code for https://locus.sh/ -->
    <script> (function (h, o, t, j, a, r) { h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) }; h._hjSettings = { hjid: 2630183, hjsv: 6 }; a = o.getElementsByTagName('head')[0]; r = o.createElement('script'); r.async = 1; r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv; a.appendChild(r); })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv='); </script>
    <!-- UET Bing Ads Tag -->
    <script>!function (e, a, t, n, o) { var c, r, d; e[o] = e[o] || [], c = function () { var a = { ti: "149002219" }; a.q = e[o], e[o] = new UET(a), e[o].push("pageLoad") }, (r = a.createElement(t)).src = "//bat.bing.com/bat.js", r.async = 1, r.onload = r.onreadystatechange = function () { var e = this.readyState; e && "loaded" !== e && "complete" !== e || (c(), r.onload = r.onreadystatechange = null) }, (d = a.getElementsByTagName(t)[0]).parentNode.insertBefore(r, d) }(window, document, "script", 0, "uetq");</script>
    <!-- UET Bing Ads Tag -->
    <script src="/assets/js/main.js"></script>

    <script src="/assets/js/custom/industries/industries.js" type="text/javascript" defer=""></script>


    <!-- Start of HubSpot Embed Code -->
    <script type="text/javascript" id="hs-script-loader" async="" defer=""
        src="//js-na1.hs-scripts.com/19520031.js"></script>
    <!-- End of HubSpot Embed Code -->

    <noscript> <img height="1" width="1" style="display:none;" alt="Linkedin Collect"
            src="https://px.ads.linkedin.com/collect/?pid=121118&fmt=gif" /> </noscript>

    <script type="text/javascript"
        id="">(function (a, c, e, f, d, b) { a.hj = a.hj || function () { (a.hj.q = a.hj.q || []).push(arguments) }; a._hjSettings = { hjid: 2630183, hjsv: 6 }; d = c.getElementsByTagName("head")[0]; b = c.createElement("script"); b.async = 1; b.src = e + a._hjSettings.hjid + f + a._hjSettings.hjsv; d.appendChild(b) })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv\x3d");</script>
    <script type="text/javascript"
        id="">(function (a) { a(document).ajaxSuccess(function (a, b, c) { dataLayer.push({ event: "ajaxSuccess", eventCategory: "AJAX", eventAction: c.url, eventLabel: b.responseText, eventStatus: b.status, ajaxPageUrl: document.location.href.split("#")[0] }) }) })(jQuery);</script>
    <iframe id="_hjSafeContext_23024081" src="about:blank"
        style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe>
    <div style="width:0px; height:0px; display:none; visibility:hidden;" id="batBeacon587474236204"><img
            style="width:0px; height:0px; display:none; visibility:hidden;" id="batBeacon10717695419" width="0"
            height="0" alt=""
            src="https://bat.bing.com/action/0?ti=149002219&amp;Ver=2&amp;mid=6728bd5c-a751-4c65-ac15-6c413d57d809&amp;sid=e33d72a0ffb311ec893753d112ec01a0&amp;vid=88773d80f7ac11ec947587d58822570f&amp;vids=0&amp;uach=pv%3D14.0.0&amp;pi=918639831&amp;lg=en-US&amp;sw=1280&amp;sh=720&amp;sc=24&amp;tl=E-Commerce%20Logistics%20Solutions%20for%20Last%20Mile%20%7C%20Locus&amp;p=https%3A%2F%2Flocus.sh%2Fecommerce-logistics%2F&amp;r=https%3A%2F%2Flocus.sh%2Fretail-logistics%2F&amp;lt=533&amp;evt=pageLoad&amp;msclkid=N&amp;sv=1&amp;rn=768285">
    </div>
    <script type="text/javascript" id="">document.cookie = "Update Categories \x3d Update Categories";</script>
    <iframe name="_hjRemoteVarsFrame" title="_hjRemoteVarsFrame" id="_hjRemoteVarsFrame"
        src="https://vars.hotjar.com/box-5e0db0f25ef573fe233efc0372d38d69.html"
        style="display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;"></iframe>
    <script type="text/javascript"
        class="optanon-category-C0004"> _linkedin_partner_id = "121118"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id); </script>
    <script type="text/javascript"
        class="optanon-category-C0004"> (function () { var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript"; b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s); })(); </script>
    <div id="onetrust-consent-sdk">
        <div class="onetrust-pc-dark-filter ot-hide ot-fade-in"></div>
        <div id="onetrust-pc-sdk" class="otPcTab ot-hide ot-fade-in" role="alertdialog" aria-modal="true"
            aria-describedby="ot-pc-desc" lang="en-US" aria-label="Privacy Preference Center">
            <!-- pc header -->
            <div class="ot-pc-header" role="presentation">
                <!-- Header logo -->
                <div class="ot-pc-logo" role="img" aria-label="Company Logo" style="background-image: url(&quot;https://cdn-apac.onetrust.com/logos/886ba6c5-2ae1-4057-b7b6-e89bc8b48980/c5540935-96c0-4107-bf9d-44448c4da9bd/f237a1bc-ac62-4ca7-b06d-f60cc9b8a2c5/locus-1x.png&quot;);
                    background-position: left;"></div>
                <div class="ot-title-cntr">
                    <h2 id="ot-pc-title">Privacy Preference Center</h2>
                    <div class="ot-close-cntr"><button id="close-pc-btn-handler" class="ot-close-icon"
                            aria-label="Close"></button></div>
                </div>
            </div><!-- content -->
            <!-- Groups / Sub groups with cookies -->
            <div id="ot-pc-content" class="ot-pc-scrollbar ot-sdk-row">
                <div class="ot-sdk-container ot-grps-cntr ot-sdk-column">
                    <div class="ot-sdk-four ot-sdk-columns ot-tab-list" aria-label="Cookie Categories">
                        <ul class="ot-cat-grp" role="tablist">
                            <li class="ot-abt-tab" role="presentation">
                                <!-- About Privacy container -->
                                <div class="ot-active-menu category-menu-switch-handler" role="tab" tabindex="0"
                                    aria-selected="true" aria-controls="ot-tab-desc">
                                    <h3 id="ot-pvcy-txt">Your Privacy</h3>
                                </div>
                            </li>
                            <li class="ot-cat-item ot-vs-config ot-always-active-group" role="presentation"
                                data-optanongroupid="C0001">
                                <div class="category-menu-switch-handler" role="tab" tabindex="-1" aria-selected="false"
                                    aria-controls="ot-desc-id-C0001">
                                    <h3 id="ot-header-id-C0001">Strictly Necessary Cookies</h3>
                                </div>
                            </li>
                            <li class="ot-cat-item ot-vs-config ot-always-active-group" role="presentation"
                                data-optanongroupid="C0004">
                                <div class="category-menu-switch-handler" role="tab" tabindex="-1" aria-selected="false"
                                    aria-controls="ot-desc-id-C0004">
                                    <h3 id="ot-header-id-C0004">Targeting Cookies</h3>
                                </div>
                            </li>
                            <li class="ot-cat-item ot-vs-config ot-always-active-group" role="presentation"
                                data-optanongroupid="C0003">
                                <div class="category-menu-switch-handler" role="tab" tabindex="-1" aria-selected="false"
                                    aria-controls="ot-desc-id-C0003">
                                    <h3 id="ot-header-id-C0003">Functional Cookies</h3>
                                </div>
                            </li>
                            <li class="ot-cat-item ot-vs-config ot-always-active-group" role="presentation"
                                data-optanongroupid="C0002">
                                <div class="category-menu-switch-handler" role="tab" tabindex="-1" aria-selected="false"
                                    aria-controls="ot-desc-id-C0002">
                                    <h3 id="ot-header-id-C0002">Performance Cookies</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="ot-tab-desc ot-sdk-eight ot-sdk-columns">
                        <div class="ot-desc-cntr" id="ot-tab-desc" tabindex="0" role="tabpanel"
                            aria-labelledby="ot-pvcy-hdr">
                            <h4 id="ot-pvcy-hdr">Your Privacy</h4>
                            <p id="ot-pc-desc" class="ot-grp-desc">When you visit any website, it may store or retrieve
                                information on your browser, mostly in the form of cookies. This information might be
                                about you, your preferences or your device and is mostly used to make the site work as
                                you expect it to. The information does not usually directly identify you, but it can
                                give you a more personalized web experience. Because we respect your right to privacy,
                                you can choose not to allow some types of cookies. Click on the different category
                                headings to find out more and change our default settings. However, blocking some types
                                of cookies may impact your experience of the site and the services we are able to offer.
                                <br><a href="https://cookiepedia.co.uk/giving-consent-to-cookies"
                                    class="privacy-notice-link" rel="noopener" target="_blank"
                                    aria-label="More information about your privacy, opens in a new tab">More
                                    information</a>
                            </p>
                        </div>
                        <div class="ot-desc-cntr ot-hide ot-always-active-group" role="tabpanel" tabindex="0"
                            id="ot-desc-id-C0001">
                            <div class="ot-grp-hdr1">
                                <h4 class="ot-cat-header">Strictly Necessary Cookies</h4>
                                <div class="ot-tgl-cntr">
                                    <div class="ot-always-active">Always Active</div>
                                </div>
                            </div>
                            <p class="ot-grp-desc ot-category-desc">These cookies are necessary for the website to
                                function and cannot be switched off in our systems. They are usually only set in
                                response to actions made by you which amount to a request for services, such as setting
                                your privacy preferences, logging in or filling in forms. You can set your browser to
                                block or alert you about these cookies, but some parts of the site will not then work.
                                These cookies do not store any personally identifiable information.</p>
                        </div>
                        <div class="ot-desc-cntr ot-hide ot-always-active-group" role="tabpanel" tabindex="0"
                            id="ot-desc-id-C0004">
                            <div class="ot-grp-hdr1">
                                <h4 class="ot-cat-header">Targeting Cookies</h4>
                                <div class="ot-tgl-cntr">
                                    <div class="ot-always-active">Always Active</div>
                                </div>
                            </div>
                            <p class="ot-grp-desc ot-category-desc">These cookies may be set through our site by our
                                advertising partners. They may be used by those companies to build a profile of your
                                interests and show you relevant adverts on other sites. They do not store directly
                                personal information, but are based on uniquely identifying your browser and internet
                                device. If you do not allow these cookies, you will experience less targeted
                                advertising.</p>
                        </div>
                        <div class="ot-desc-cntr ot-hide ot-always-active-group" role="tabpanel" tabindex="0"
                            id="ot-desc-id-C0003">
                            <div class="ot-grp-hdr1">
                                <h4 class="ot-cat-header">Functional Cookies</h4>
                                <div class="ot-tgl-cntr">
                                    <div class="ot-always-active">Always Active</div>
                                </div>
                            </div>
                            <p class="ot-grp-desc ot-category-desc">These cookies enable the website to provide enhanced
                                functionality and personalisation. They may be set by us or by third party providers
                                whose services we have added to our pages. If you do not allow these cookies then some
                                or all of these services may not function properly.</p>
                        </div>
                        <div class="ot-desc-cntr ot-hide ot-always-active-group" role="tabpanel" tabindex="0"
                            id="ot-desc-id-C0002">
                            <div class="ot-grp-hdr1">
                                <h4 class="ot-cat-header">Performance Cookies</h4>
                                <div class="ot-tgl-cntr">
                                    <div class="ot-always-active">Always Active</div>
                                </div>
                            </div>
                            <p class="ot-grp-desc ot-category-desc">These cookies allow us to count visits and traffic
                                sources so we can measure and improve the performance of our site. They help us to know
                                which pages are the most and least popular and see how visitors move around the site.
                                All information these cookies collect is aggregated and therefore anonymous. If you do
                                not allow these cookies we will not know when you have visited our site, and will not be
                                able to monitor its performance.</p>
                        </div>
                    </div>
                </div>
            </div><!-- Vendors / Hosts -->
            <section id="ot-pc-lst" class="ot-hide ot-enbl-chr">
                <div class="ot-lst-cntr ot-pc-scrollbar">
                    <div id="ot-pc-hdr">
                        <div id="ot-lst-title"><button class="ot-link-btn back-btn-handler" aria-label="Back"><svg
                                    id="ot-back-arw" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="0 0 444.531 444.531" xml:space="preserve">
                                    <title>Back Button</title>
                                    <g>
                                        <path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                  l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                  c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                  s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                  L213.13,222.409z"></path>
                                    </g>
                                </svg></button>
                            <h3>Back</h3>
                        </div>
                        <div class="ot-lst-subhdr">
                            <div id="ot-search-cntr">
                                <p role="status" class="ot-scrn-rdr"></p><label for="vendor-search-handler"
                                    class="ot-scrn-rdr"></label> <input id="vendor-search-handler" type="text"
                                    name="vendor-search-handler"> <svg xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110"
                                    aria-hidden="true">
                                    <path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
              s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
              c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
              s-17-7.626-17-17S14.61,6,23.984,6z"></path>
                                </svg>
                            </div>
                            <div id="ot-fltr-cntr"><button id="filter-btn-handler" aria-label="Filter"
                                    aria-haspopup="true"><svg role="presentation" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        x="0px" y="0px" viewBox="0 0 402.577 402.577" xml:space="preserve">
                                        <title>Filter Button</title>
                                        <g>
                                            <path fill="#2c3643" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
                            c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
                            c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
                            C402.765,25.895,404.093,19.231,400.858,11.427z"></path>
                                        </g>
                                    </svg></button></div>
                        </div>
                    </div>
                    <section id="ot-lst-cnt" class="ot-pc-scrollbar">
                        <div class="ot-sdk-row">
                            <div class="ot-sdk-column">
                                <div id="ot-sel-blk">
                                    <div class="ot-sel-all">
                                        <div class="ot-sel-all-hdr"><span class="ot-consent-hdr">Consent</span> <span
                                                class="ot-li-hdr">Leg.Interest</span></div>
                                        <div class="ot-sel-all-chkbox">
                                            <div class="ot-chkbox" id="ot-selall-hostcntr"><input
                                                    id="select-all-hosts-groups-handler" type="checkbox"
                                                    aria-checked="false"> <label
                                                    for="select-all-hosts-groups-handler"><span
                                                        class="ot-label-txt">checkbox label</span></label> <span
                                                    class="ot-label-status">label</span></div>
                                            <div class="ot-chkbox" id="ot-selall-vencntr"><input
                                                    id="select-all-vendor-groups-handler" type="checkbox"
                                                    aria-checked="false"> <label
                                                    for="select-all-vendor-groups-handler"><span
                                                        class="ot-label-txt">checkbox label</span></label> <span
                                                    class="ot-label-status">label</span></div>
                                            <div class="ot-chkbox" id="ot-selall-licntr"><input
                                                    id="select-all-vendor-leg-handler" type="checkbox"
                                                    aria-checked="false"> <label
                                                    for="select-all-vendor-leg-handler"><span
                                                        class="ot-label-txt">checkbox label</span></label> <span
                                                    class="ot-label-status">label</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div id="ot-anchor"></div>
                <section id="ot-fltr-modal">
                    <div id="ot-fltr-cnt"><button id="clear-filters-handler">Clear</button>
                        <div class="ot-fltr-scrlcnt ot-pc-scrollbar">
                            <div class="ot-fltr-opts">
                                <div class="ot-fltr-opt">
                                    <div class="ot-chkbox"><input id="chkbox-id" type="checkbox" aria-checked="false"
                                            class="category-filter-handler"> <label for="chkbox-id"><span
                                                class="ot-label-txt">checkbox label</span></label> <span
                                            class="ot-label-status">label</span></div>
                                </div>
                            </div>
                            <div class="ot-fltr-btns"><button id="filter-apply-handler">Apply</button> <button
                                    id="filter-cancel-handler">Cancel</button></div>
                        </div>
                    </div>
                </section>
            </section><!-- Footer buttons and logo -->
            <div class="ot-pc-footer">
                <div class="ot-btn-container"><button
                        class="save-preference-btn-handler onetrust-close-btn-handler">Confirm My Choices</button>
                    <div class="ot-btn-subcntr"> <button id="accept-recommended-btn-handler">Allow All</button></div>
                </div>
                <div class="ot-pc-footer-logo"><a href="https://www.onetrust.com/products/cookie-consent/"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Powered by OneTrust Opens in a new Tab"><img alt="Powered by Onetrust"
                            src="https://cdn-apac.onetrust.com/logos/static/poweredBy_ot_logo.svg"
                            title="Powered by OneTrust Opens in a new Tab"></a></div>
            </div><!-- Cookie subgroup container -->
            <!-- Vendor list link -->
            <!-- Cookie lost link -->
            <!-- Toggle HTML element -->
            <!-- Checkbox HTML -->
            <!-- Arrow SVG element -->
            <!-- Accordion basic element --><span class="ot-scrn-rdr" aria-atomic="true" aria-live="polite"></span>
            <!-- Vendor Service container and item template --><iframe class="ot-text-resize"
                title="onetrust-text-resize" style="position: absolute; top: -50000px; width: 100em;"
                aria-hidden="true"></iframe>
        </div>
    </div><iframe owner="archetype" title="archetype" style="display: none; visibility: hidden;"></iframe><img
        src="https://t.co/i/adsct?bci=3&amp;eci=2&amp;event_id=91149dc4-0394-4983-9b99-4fb38255ceef&amp;events=%5B%5B%22pageview%22%2C%7B%7D%5D%5D&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=4bdd0c63-348e-4799-8f23-24ae2422ea67&amp;tw_document_href=https%3A%2F%2Flocus.sh%2Fecommerce-logistics%2F&amp;tw_iframe_status=0&amp;tw_order_quantity=0&amp;tw_sale_amount=0&amp;txn_id=o6sz6&amp;type=javascript&amp;version=2.3.23"
        height="1" width="1" style="display: none;"><img
        src="https://analytics.twitter.com/i/adsct?bci=3&amp;eci=2&amp;event_id=91149dc4-0394-4983-9b99-4fb38255ceef&amp;events=%5B%5B%22pageview%22%2C%7B%7D%5D%5D&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=4bdd0c63-348e-4799-8f23-24ae2422ea67&amp;tw_document_href=https%3A%2F%2Flocus.sh%2Fecommerce-logistics%2F&amp;tw_iframe_status=0&amp;tw_order_quantity=0&amp;tw_sale_amount=0&amp;txn_id=o6sz6&amp;type=javascript&amp;version=2.3.23"
        height="1" width="1" class="optanon-category-C0004 " style="display: none;">
    <div id="hubspot-messages-iframe-container" class="widget-align-right" style="width: 100%; height: 100%;">
        <div class="shadow-container"></div><iframe
            src="https://app.hubspot.com/conversations-visitor/19520031/threads/utk/4322d70877894dddbaf9ab10ebb5ec91?uuid=9e7a7c69711e42a2969a2dedc88d1486&amp;mobile=false&amp;mobileSafari=false&amp;hideWelcomeMessage=false&amp;hstc=161900707.21f02f7f27048e98eb814fd26ab1909b.1656508164277.1657397034485.1657400040352.28&amp;domain=locus.sh&amp;inApp53=false&amp;messagesUtk=4322d70877894dddbaf9ab10ebb5ec91&amp;url=https%3A%2F%2Flocus.sh%2Fecommerce-logistics%2F&amp;inline=false&amp;isFullscreen=false&amp;globalCookieOptOut=null&amp;isFirstVisitorSession=true&amp;isAttachmentDisabled=false&amp;enableWidgetCookieBanner=false&amp;isInCMS=false&amp;hubspotUtk=21f02f7f27048e98eb814fd26ab1909b"
            title="chat widget" allowfullscreen=""></iframe>
    </div>
</body>

</html>