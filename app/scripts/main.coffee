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
    super 47

sam = new Snake "Sammy the Python"
tom = new Horse "Tommy the Palomino"

sam.move()
tom.move()

# GAME

# Twister must show [4 colors , left or right, leg or hand ] 
# it has timer (start, restart, pause, stop)
# it has internal function change

class Twister
  constructor: ->
    @col = [ 
      'yellow' 
      'green' 
      'red'
      'blue'
    ]

    @part = [
      'leg'
      'hand'
    ]

    @arrow = [
      'left' 
      'right'
    ]

    @timer = {}

    @cur = 
      col: @col[0]
      part: @part[0]
      arrow: @arrow[0]

  getRand = (array) ->
    array[parseInt Math.random() * array.length]

  draw: ->
    $('body').css 'background-color', @cur.col 
    $('.info').text @cur.arrow + ' ' + @cur.part

  change: ->
    @cur.col = getRand(@col)
    @cur.part = getRand(@part)
    @cur.arrow = getRand(@arrow)
    @draw()
    @getCurrent()

  start: ->
    that = this
    console.log 'start -->'
    @timer = setInterval ( -> 
      console.log 'iter'
      that.change()
    ), 3000

  stop: ->

  pause: ->

  restart: ->

  getCurrent: ->
    console.log 'col: ' + @cur.col + ' part: ' + @cur.part + ' arrow: ' + @cur.arrow
    return @cur

twist = new Twister

twist.start()