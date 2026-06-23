// ==UserScript==
// @name         Remove Paywall
// @namespace    https://github.com/f1amy/remove-paywall
// @homepageURL  https://github.com/f1amy/remove-paywall
// @version      1.2.2
// @description  Open current URL in remove paywall
// @author       F1amy
// @downloadURL  https://raw.githubusercontent.com/f1amy/remove-paywall/main/removePaywall.user.js
// @updateURL    https://raw.githubusercontent.com/f1amy/remove-paywall/main/removePaywall.user.js
// @match        https://*/*
// @exclude      https://www.removepaywall.com/*
// @icon         https://google.com
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    function getTargetUrlRemovePaywall() {
        return 'https://www.removepaywall.com/search?url=' + encodeURIComponent(window.location.href);
    }

    function getTargetUrlRemovePaywalls() {
        return 'https://removepaywalls.com/' + encodeURIComponent(window.location.href);
    }

    GM_registerMenuCommand('Open with removepaywalls.com in new tab', function() {
        window.open(getTargetUrlRemovePaywalls(), '_blank');
    });

    GM_registerMenuCommand('Open with removepaywalls.com in current tab', function() {
        window.location.href = getTargetUrlRemovePaywalls();
    });

    GM_registerMenuCommand('Open with removepaywall.com in new tab', function() {
        window.open(getTargetUrlRemovePaywall(), '_blank');
    });

    GM_registerMenuCommand('Open with removepaywall.com in current tab', function() {
        window.location.href = getTargetUrlRemovePaywall();
    });
})();
