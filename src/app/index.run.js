(function() {
  'use strict';

  angular
    .module('noteTool')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
