// ==UserScript==
// @name         MD_PACK
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Oszukujmy razem widzowie!
// @author       PpekKOX
// @match        http*://*.margonem.pl/*
// @match        http*://*.margonem.com/*
// @exclude      http*://margonem.*/*
// @exclude      http*://www.margonem.*/*
// @exclude      http*://new.margonem.*/*
// @exclude      http*://forum.margonem.*/*
// @exclude      http*://commons.margonem.*/*
// @exclude      http*://dev-commons.margonem.*/*
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(async () => {
    try {
        const url = "https://ppekkox.github.io/MD_PACK_PUBLIC/main.js?v=" + Date.now();
        console.log("[MD_PACK] Loading bundle:", url);

        const code = await fetch(url).then(r => r.text());
        eval(code);

        console.log("[MD_PACK] Bundle executed");
    } catch (err) {
        console.error("[MD_PACK] ERROR loading bundle", err);
    }
})();

