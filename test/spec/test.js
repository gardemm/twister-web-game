(function () {
  'use strict';

  // ----- addition block -------
  
  function check( done, f ) {
    try {
      f()
      done()
    } catch( e ) {
      done( e )
    }
  }

  // -------- end --------

  describe('Игра твистер', function () {
  	describe('Инициализация', function () {
      var twist = new Twister();

  	  it('Твистер это класс', function() {
        assert.instanceOf(twist, Twister, 'twist экземпляр класса Twister');
      });

      describe('В нем определены методы: ', function () {
        it('start, pause, stop, restart, change, getCurrent', function() {
          assert.property(twist, 'start', 'есть');
          assert.property(twist, 'pause', 'есть');
          assert.property(twist, 'stop', 'есть');
          assert.property(twist, 'restart', 'есть');
          assert.property(twist, 'change', 'есть');
          assert.property(twist, 'getCurrent', 'есть');
        });
      });

      describe('В нем есть параметры:  ', function () {
        it('4 разных цвета (col)', function() {
          assert.lengthOf(twist.col, 4);
        });

        it('2 вида частей тела (руки, ноги) (part)', function() {
          assert.lengthOf(twist.part, 2);
        });

        it('2 направления (лево право) (arrow)', function() {
          assert.lengthOf(twist.arrow, 2);
        });        

        it('Текущие значения (cur)', function() {
          assert.isObject(twist.cur);
          assert.property(twist.cur, 'col');
          assert.property(twist.cur, 'part');
          assert.property(twist.cur, 'arrow');
        }); 
      });

  	});

    describe('Запуск игры', function () {
      describe('Каждые 5 секунд Твистер меняет текущие значения цвета и частей тела', function () {

        it('функция getCurrent возвращает объект с параметрами col, part, arrow', function() {
          assert.property(twist.getCurrent(),'col');
          assert.property(twist.getCurrent(),'part');
          assert.property(twist.getCurrent(),'arrow');
        });

      });
    });
  });

}());
