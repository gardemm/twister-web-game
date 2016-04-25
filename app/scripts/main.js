// Generated by CoffeeScript 1.10.0
'use strict';
var Animal, Horse, Snake, Twister, sam, tom, twist,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Animal = (function() {
  function Animal(name) {
    this.name = name;
  }

  Animal.prototype.move = function(meters) {
    return console.log(this.name + (" moved " + meters + "m."));
  };

  return Animal;

})();

Snake = (function(superClass) {
  extend(Snake, superClass);

  function Snake() {
    return Snake.__super__.constructor.apply(this, arguments);
  }

  Snake.prototype.move = function() {
    console.log("Slithering...");
    return Snake.__super__.move.call(this, 667);
  };

  return Snake;

})(Animal);

Horse = (function(superClass) {
  extend(Horse, superClass);

  function Horse() {
    return Horse.__super__.constructor.apply(this, arguments);
  }

  Horse.prototype.move = function() {
    console.log("Galloping...");
    return Horse.__super__.move.call(this, 45);
  };

  return Horse;

})(Animal);

sam = new Snake("Sammy the Python");

tom = new Horse("Tommy the Palomino");

sam.move();

tom.move();

Twister = (function() {
  Twister.col = ['yellow', 'green', 'red', 'blue'];

  Twister.part = ['leg', 'hand'];

  Twister.arrow = ['left', 'right'];

  Twister.timer = {};

  function Twister() {}

  Twister.start = function() {
    return console.log('start');
  };

  return Twister;

})();

twist = new Twister;
