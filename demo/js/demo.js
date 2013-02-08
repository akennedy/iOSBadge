
(function(window, document) {
  "use strict";

  var addClass, hasClass, keys, konami, randomNumber, randomTheme, removeClass, themes;
  hasClass = function(el, name) {
    return new RegExp('(\\s|^)' + name + '(\\s|$)').test(el.className);
  };
  addClass = function(el, name) {
    if (!hasClass(el, name)) {
      return el.className += (el.className ? ' ' : '') + name;
    }
  };
  removeClass = function(el, name) {
    if (hasClass(el, name)) {
      return el.className = el.className.replace(new RegExp('(\\s|^)' + name + '(\\s|$)'), ' ').replace(/^\s+|\s+$/g, '');
    }
  };
  if (window.addEventListener) {
    keys = [];
    themes = ['red', 'yellow', 'blue', 'green', 'grey', 'ios'];
    konami = "38,38,40,40,37,39,37,39,66,65";
    randomTheme = function() {
      return themes[Math.floor(Math.random() * themes.length)];
    };
    randomNumber = function() {
      return Math.floor(10 * Math.random());
    };
    document.addEventListener("DOMContentLoaded", function() {
      var badge, demoPosition, demoPositionBtns, demoSize, demoSizeBtns, demoTheme, demoThemeBtns, demoValue, demoValueBtns, icon;
      $('#side-nav').affix();
      $('table').addClass('table').addClass('table-striped').addClass('table-bordered');
      $('pre').addClass('prettyprint').addClass('linenums');
      window.prettyPrint && prettyPrint();
      icon = document.getElementById('badge-icon');
      badge = new IOSBadge(icon, {
        size: 24
      });
      demoValue = document.getElementById('demo-val');
      demoValueBtns = demoValue.getElementsByTagName('button');
      demoValue.addEventListener('click', function(e) {
        var btn, _i, _len;
        for (_i = 0, _len = demoValueBtns.length; _i < _len; _i++) {
          btn = demoValueBtns[_i];
          removeClass(btn, 'active');
        }
        addClass(e.target, 'active');
        return badge.setContent(e.target.innerHTML);
      }, false);
      demoSize = document.getElementById('demo-size');
      demoSizeBtns = demoSize.getElementsByTagName('button');
      demoSize.addEventListener('click', function(e) {
        var btn, _i, _len;
        for (_i = 0, _len = demoSizeBtns.length; _i < _len; _i++) {
          btn = demoSizeBtns[_i];
          removeClass(btn, 'active');
        }
        addClass(e.target, 'active');
        return badge.setSize(e.target.innerHTML);
      }, false);
      demoTheme = document.getElementById('demo-theme');
      demoThemeBtns = demoTheme.getElementsByTagName('button');
      demoTheme.addEventListener('click', function(e) {
        var btn, _i, _len;
        for (_i = 0, _len = demoThemeBtns.length; _i < _len; _i++) {
          btn = demoThemeBtns[_i];
          removeClass(btn, 'active');
        }
        addClass(e.target, 'active');
        return badge.setTheme(e.target.innerHTML);
      }, false);
      demoPosition = document.getElementById('demo-pos');
      demoPositionBtns = demoPosition.getElementsByTagName('button');
      demoPosition.addEventListener('click', function(e) {
        var btn, _i, _len;
        for (_i = 0, _len = demoPositionBtns.length; _i < _len; _i++) {
          btn = demoPositionBtns[_i];
          removeClass(btn, 'active');
        }
        addClass(e.target, 'active');
        return badge.setPosition(e.target.innerHTML);
      }, false);
      window.addEventListener("keydown", function(e) {
        keys.push(e.keyCode);
        if (keys.toString().indexOf(konami) >= 0) {
          setInterval(function() {
            badge.setContent(randomNumber()).setTheme(randomTheme());
          }, 2000);
          keys.length = 0;
        }
      }, true);
    }, false);
  }
})(window, window.document);
