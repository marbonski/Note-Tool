(function() {
  'use strict';

  angular
    .module('noteTool')
    .controller('MainController', ['$scope', function (data) {
      data.remove = function (data) {
        data.remove();
      };

      data.newItem = function () {
       // var nodeData = data.data[data.data.length - 1];
        data.data.push({
          id: data.data.length + 1,
          title: 'node ' + (data.data.length + 1)
        });
      };

      data.data = [{
        'id': 1,
        'title': 'node 1'
      }, {
        'id': 2,
        'title': 'node 2'
      }, {
        'id': 3,
        'title': 'node 3'
      }];
    }]);

}());
