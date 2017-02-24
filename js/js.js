
  $(document).ready(function() {

      var windw = this;

      $.fn.followTo = function ( pos , pos2 ) {
          var $this = this,
              $window = $(windw);

          $window.scroll(function(e){
              if ($window.scrollTop() > pos && $window.scrollTop() < pos2) {
                  $this.css({
                      position: 'fixed',
                      top: 0
                  });
              } else if ($window.scrollTop() < pos) {
                  $this.css({
                      position: 'relative',
                      top: 0
                  });
              } else if ($window.scrollTop() > pos2) {
                $this.css({
                    position: 'relative',
                    top: 50
                });
              }

          });
      };


      $('#fixme').followTo(1800, 5500);
  });
