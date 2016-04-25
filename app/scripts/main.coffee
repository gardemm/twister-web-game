'use strict'


class Animal
  constructor: (@name) ->

  move: (meters) ->
    console.log @name + " moved #{meters}m."

class Snake extends Animal
  move: ->
    console.log "Slithering..."
    super 667

class Horse extends Animal
  move: ->
    console.log "Galloping..."
    super 45

sam = new Snake "Sammy the Python"
tom = new Horse "Tommy the Palomino"

sam.move()
tom.move()

# GAME

# Twister must show [4 colors , left or right, leg or hand ] 
# it has timer (start, restart, pause, stop)
# 

class Twister

  @col: ['yellow','green','red','blue']

  @part: ['leg','hand']

  @arrow: ['left', 'right']

  @timer: {}

  constructor: () ->

  @start: () ->
    console.log 'start'

twist = new Twister