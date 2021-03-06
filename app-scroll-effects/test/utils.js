/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE The complete set of authors may be found at
http://polymer.github.io/AUTHORS The complete set of contributors may be found
at http://polymer.github.io/CONTRIBUTORS Code distributed by Google as part of
the polymer project is also subject to an additional IP rights grant found at
http://polymer.github.io/PATENTS
*/
/**
 * Checks if an element has a given CSS text
 *
 * @param {HTMLElement} el
 * @param {string} cssText
 */
window.sameCSS = function(el, cssText) {
  var propName;
  var dummy = document.createElement('div');

  dummy.style.cssText = cssText;
  document.body.appendChild(dummy);

  var elStyle = window.getComputedStyle(el);
  var parts = cssText.split(/\s/);
  var dummyStyle = window.getComputedStyle(dummy);

  for (var i = 0; i < parts.length; i++) {
    if (parts[i].substr(-1, 1) != ':') {
      continue;
    }

    propName = parts[i].substr(0, parts[i].length - 1);

    if (elStyle[propName] && elStyle[propName] !== dummyStyle[propName]) {
      throw new Error(
          '`' + propName + '` is different: ' +
          '`' + elStyle[propName] + '` != `' + dummyStyle[propName] + '`');
    }
  }
  return true;
};
