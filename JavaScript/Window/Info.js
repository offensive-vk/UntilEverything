function getBrowserAndClientInfo() {
    const info = {};

    // Window/Screen
    info.screen = {
        width: window.screen.width,
        height: window.screen.height,
        availWidth: window.screen.availWidth,
        availHeight: window.screen.availHeight,
        colorDepth: window.screen.colorDepth,
        pixelDepth: window.screen.pixelDepth
    };

    // Location
    info.location = {
        href: window.location.href,
        protocol: window.location.protocol,
        host: window.location.host,
        hostname: window.location.hostname,
        port: window.location.port,
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash
    };

    // Navigator
    info.navigator = {
        userAgent: window.navigator.userAgent,
        platform: window.navigator.platform,
        cookieEnabled: window.navigator.cookieEnabled,
        onLine: window.navigator.onLine,
        language: window.navigator.language,
        languages: window.navigator.languages,
        hardwareConcurrency: window.navigator.hardwareConcurrency
    };

    info.history = {
        length: window.history.length,
        data: window.history
    };

    // --- DOM Information ---
    info.document = {
        title: document.title,
        URL: document.URL,
        referrer: document.referrer,
        cookie: document.cookie,
        lastModified: document.lastModified,
        characterSet: document.characterSet
    };

    return info;
}

const clientData = getBrowserAndClientInfo();
console.log(clientData);
