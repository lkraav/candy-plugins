/*
 * automatic-reconnect
 * @version 1.0
 * @author Leho Kraav (leho@kraav.com)
 *
 * Executes a simple auto-reconnect with window.location.reload()
 * https://github.com/candy-chat/candy/issues/202
 */

var CandyShop = (function(self) { return self; }(CandyShop || {}));

CandyShop.AutomaticReconnect = (function(self, Candy, $) {

  /** Function: init
   * Initializes the automatic-reconnect plugin with the default settings.
   */
  self.init = function() {
    // STROPHE DISCONNECTED
    $(Candy).on('candy:view.connection.status-6', function() {
      // on next browser event loop
      setTimeout(function() {
        // reload page to automatically reattach on disconnect
        window.location.reload();
      }, 0);
    // stop view changes right here.
      return false;
    });
  };

  return self;
}(CandyShop.AutomaticReconnect || {}, Candy, jQuery));
