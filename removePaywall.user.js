// ==UserScript==
// @name         Remove Paywall
// @namespace    https://github.com/f1amy/remove-paywall
// @homepageURL  https://github.com/f1amy/remove-paywall
// @version      1.0.1
// @description  Open current URL in remove paywall
// @author       F1amy
// @downloadURL  https://raw.githubusercontent.com/f1amy/remove-paywall/main/removePaywall.user.js
// @match        *://*/*
// @exclude      https://www.removepaywall.com/*
// @icon         https://google.com
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    function getTargetUrl() {
        return 'https://www.removepaywall.com/search?url=' + encodeURIComponent(window.location.href);
    }

    GM_registerMenuCommand('Open with removepaywall.com in new tab', function() {
        window.open(getTargetUrl(), '_blank');
    });

    GM_registerMenuCommand('Open with removepaywall.com in current tab', function() {
        window.location.href = getTargetUrl();
    });
})();
