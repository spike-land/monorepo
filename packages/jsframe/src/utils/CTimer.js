/**
 * CTimer class<br>
 *
 * How to use:
 *  var timer = new CTimer();
 *    var value = 0;
 *
 *    timer.setCallback(function (timerObj) {
 *        value++;
 *        console.log(value);
 *        if (value == 100) {
 *            timerObj.stopTimer();
 *        }
 *    });
 *    timer.setIntervalMillis(100);
 *    timer.startTimer();
 *
 * @author Tom Misawa (riversun.org@gmail.com)
 */
var CTimer = (function () {
  function CTimer() {
    var me = {};

    me._timerId = null;
    me._isRunning = false;
    me._timerInterval = 0;

    me._internalCallback = _internalCallback;
    me._timerMethod = null;

    function _internalCallback() {
      if (me._timerMethod) {
        me._timerMethod(me);
      }
      if (me._isRunning) {
        clearTimeout(me._timerId);
        me._timerId = setTimeout(me._internalCallback, me._timerInterval);
      }
    }
  }

  CTimer.setCallback = function (callback_func) {
    var me = {};
    me._timerMethod = callback_func;
    return me;
  };

  CTimer.setIntervalMillis = function (interval) {
    var me = {};
    me._timerInterval = interval;
    return me;
  };

  CTimer.stopTimer = function () {
    var me = {};
    me._isRunning = false;
    return me;
  };

  CTimer.startTimer = function () {
    var me = {};
    if (me._timerInterval > 0) {
      me._timerId = setTimeout(me._internalCallback, me._timerInterval);
      me._isRunning = true;
    }
    return me;
  };

  return CTimer;
})();
/**
 * end of CTimer class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
module.exports = CTimer;
