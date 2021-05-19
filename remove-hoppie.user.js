// ==UserScript==
// @name         Cryptohopper Hoppie Removal
// @namespace    https://github.com/markrickert/cryptohopper-dashboard-watchlist
// @version      0.3
// @description  Removes the image of "hoppie" sticking his arm out from the side of the page.
// @author       @markrickert
// @homepage     https://github.com/markrickert/cryptohopper-dashboard-watchlist
// @updateURL    https://github.com/markrickert/cryptohopper-dashboard-watchlist/raw/main/remove-hoppie.user.js
// @match        https://www.cryptohopper.com/*
// @icon         https://www.google.com/s2/favicons?domain=cryptohopper.com
// @grant        GM_addStyle
// ==/UserScript==

try {
  (function () {
    "use strict";

    function removeHoppie() {
      GM_addStyle(`
        img.hoppie-paperclip,
        img.hoppiePaperclipAnimation,
        div.hoppie-speech-container {
          display: none !important;
        }
      `);
    }

    jQuery(() => removeHoppie());
  })();
} catch (err) {
  console.log(
    `Error in script remove-hoppie.user.js: ${err.name}: ${err.message}`
  );
}
