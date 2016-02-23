/**
* Posts
* @namespace thinkster.posts.directives
*/
(function () {
  'use strict';

  angular
    .module('thinkster.posts.directives')
    .directive('post', post);

  /**
  * @namespace Posts
  */
  function post() {
    /**
    * @name directive
    * @desc The directive to be returned
    * @memberOf thinkster.posts.directives.Posts
    */
    var directive = {
      restrict: 'E',
      scope: {
        'post': '='
      },
      templateUrl: '/static/templates/posts/post.html'
    };

    return directive;
  }
})();