
  $(document).ready(function() {

      var windw = this;

      $.fn.followTo = function ( pos , pos2 ) {
          var $this = this,
              $window = $(windw);

          $window.scroll(function(e){
              if ($window.scrollTop() > pos && $window.scrollTop() < pos2) {
                  $this.css({
                      position: 'fixed',
                      bottom: 0,
                      left: 0
                  });
              } else if ($window.scrollTop() < pos) {
                  $this.css({
                      position: 'relative',
                  });
              } else if ($window.scrollTop() > pos2) {
                $this.css({
                    position: 'relative',
                });
              }

          });
      };


      $('#fixme').followTo(1860, 5250);
  });
