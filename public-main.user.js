// ==UserScript==
// @name         MD_PACK
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  Oszukujmy razem widzowie
// @author       PpekKOX
// @match        http*://*.margonem.pl/
// @match        http*://*.margonem.com/
// @exclude      http*://margonem.*/*
// @exclude      http*://www.margonem.*/*
// @exclude      http*://new.margonem.*/*
// @exclude      http*://forum.margonem.*/*
// @exclude      http*://commons.margonem.*/*
// @exclude      http*://dev-commons.margonem.*/*
// ==/UserScript==

(async function() {
    try {
        const module = await import('https://ppekkox.github.io/MD_PACK_PUBLIC/main.js');
        module.main?.();
    } catch (err) {
        console.error("Błąd ładowania zestawu:", err);
    }
})();

