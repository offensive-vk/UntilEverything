for (const eachLink of document.getElementsByClassName("link")) {
    eachLink.onmousemove = (e) => {
        const decimal = e.clientX / eachLink.offsetWidth;

        const basePercent = 80,
            percentRange = 20,
            adjustablePercent = percentRange * decimal;

        const lightBluePercent = basePercent + adjustablePercent;

        eachLink.style.setProperty("--light-blue-percent", `${lightBluePercent}%`)
    };
}