$(window).load(function(){    

    // $( function() {

      var qsRegex,
          $searcher_wrap = $( "#searcher_wrap" ),
          $searcher = $( "#searcher" ),
          $window = $( window ).height(),
          $window_width = $( window ).width(),
          $filter = $('#filter');
          //$lastLocation = 0;

      // init Isotope
      var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer'
        },
        filter: '.featured',
        getSortData : {
          selected : function( $item ){
            $item = $( $item );
            // sort by selected first, then by original order
            return ( $item.hasClass('open') ? -1 : 0 ) + $item.data('sort');
          }
        },
        sortBy : 'selected'
      });

      // Remove overlay once all is loaded
      $grid.one( 'arrangeComplete', function() {
        $('#overlay').fadeOut(300, function(){
          $(this).remove();
        });
      });
    
     // Fire isotope initially
     $grid.isotope();

//ADJUST THIS FUNCTION FOR THE NEW SEARCH
      // use value of search field to filter
     var $quicksearch = $('.quicksearch').keyup( debounce( function() {
      if($quicksearch.val().length > 1){
         qsRegex = new RegExp( $quicksearch.val(), 'gi' );
         $grid.isotope({
           filter: function() {
             var $this = $(this);
             var search = qsRegex ? $this.text().match( qsRegex ) : true;
             return (search && $this.is( ':not(.unit-item):not(.filter-item)' )) || $this.is( '.search-more' );
           }
         });
         $('#empty').addClass('active');
      } else {
        $('#empty').trigger('click'); 
      }
     }, 200 ) );

      // Function to replace the image with the high-rest one
      function imageSwitch(el){
        var $this = el;
        $this.find('.front').css('background-image', 'url(' + $this.data('img') + ')');
      }

      // Find featured images and give them high-res images;
      $('.featured').each( function(i, els){
        var el = $(els);
        imageSwitch(el);
      }) 

      // Reusable scroll to position

      function scrollIt(el){
        var $offset = ( $window - el.height() ) / 2
            // Scroll the tile to the top if mobile, otherwise center the tile on desktop
            $mobile = $window_width < 768 ? 50 : $offset 

        $grid.one( 'arrangeComplete', function() {
          $('html, body').animate({
            scrollTop: ( el.offset().top - $mobile )
          }, 900); 
        });
      }         



      // Main portion that opens and closes the 
      $grid.on( 'click', '.grid-item:not(.filter-item):not(.search-more)', function() {
        var $this = $(this);
            // dataCheck = $this.data('name'),
            // dataName = dataCheck && '#name=' + dataCheck;
        if( !$this.hasClass('open') && !$this.hasClass('special') && !$this.hasClass('search-more') && !$this.hasClass('fyp-units') ) {
          $prevSelect = $('.grid-item.open:not(.search-more):not(.filter-item)');
          $prevSelect.removeClass('open');
          $grid.isotope( 'updateSortData', $prevSelect ); 
          $this.addClass('open');
          $grid.isotope( 'updateSortData', $this);
          // Switch image
          imageSwitch($this);              
          // Scroll-to portion
          scrollIt($this)
          // Add data attribute 'name' to URL has
          // window.location.hash = dataName;          
        } else {
          $this.removeClass('open')
          $grid.isotope( 'updateSortData', $this);
        }
        $grid.isotope();                
      });              

      // // bind filter button click
      // $filter.on( 'click', 'button', function() {
      //   var filterValue = $( this ).attr('data-filter');
      //   $grid.isotope({ filter: filterValue });
      // }); 

      // // Clear select menus and re-isotope
      // $('#clear').on('click', function(el){
      //   el.preventDefault();
      //   // Clear selects, open class, and hash
      //   $('select').prop('selectedIndex',0);
      //   $('.grid-item').removeClass('open');
      //   $filter.removeClass('select_active')
      //   window.location.hash = '';          
      //   $grid.isotope({ filter: ':not(.title-card)' });
      // })

      // // bind filter on select change
      // $filter.on( 'change', 'select', function() {
      //   // get filter value from option value
      //   var filterValue = this.value;
      //   $filter.addClass('select_active')

      //   // use filterFn if matches value
      //   filterValue = filterValue;
      //   $grid.isotope({ filter: filterValue });
      // });

      // // change is-checked class on buttons
      // $filter.each( function( i, buttonGroup ) {
      //   var $buttonGroup = $( buttonGroup );
      //   $buttonGroup.on( 'click', 'button', function() {
      //     $buttonGroup.find('.is-checked').removeClass('is-checked');
      //     $(this).addClass('is-checked');
      //   });
      // }); 
//ADJUST THIS FUNCTION FOR NEW SEARCH FIELD
      // Search field
      $('#searcher').on('click', function(el){  

        el.preventDefault();  
        $searcher_wrap.find('input').focus();
        $searcher_wrap.toggleClass('active_search'); 

        if ( $searcher.hasClass('is-checked') ) {
          $searcher_wrap.find('input').val('')
          $('.quicksearch').keyup();                  
        }
        $searcher.toggleClass('is-checked');
      })

      //DO WE WANT THIS???
      // $('#searcher').on('keyup', function(e){
      //   $('html, body').animate({
      //       scrollTop: ( $("#searcher").offset().top - $("#campaign-header").height() )
      //     }, 900);
      // })

      // Close on escape
      $(document).on('keyup',function(evt) {
          if (evt.keyCode == 27 && $( "#searcher" ).hasClass('is-checked')) {
            $searcher_wrap.toggleClass('active_search');
            $searcher.toggleClass('is-checked');
            $searcher_wrap.find('input').val('')
          }
      });

      // Triggers open upon return key
      $(document).keypress(function(e) {
          if(e.which == 13) {
              e.preventDefault();
              $(e.target).trigger('click')
          }
      });

      // Search through category tags
      // $('.tags').on('click', 'a', function(els){
      //   var $this = $(this),
      //       el = els;
      //       $text = $this.text();

      //   el.preventDefault();
      //   // Stop propagation, otherwise it will bubble and want to close the slide
      //   el.stopPropagation();        
      //   $filter.addClass('select_active');
      //   $grid.isotope({
      //     filter: function() {
      //       return $text ? $(this).find('.tags').text().match( $text ) : true;
      //     }
      //   });
      // })

   //  });
   //  
   
   // $('.module-hero-image').on('click', function(e){
   //    $('ul.fyp-filters.show').removeClass('show');
   //    $('#'+e.currentTarget.dataset.name).addClass('show');
   //    $('.flip-container.active').removeClass('active');
   // })

   //FYP - Reveal filters under categories
   $('.fyp-filter-triggers').on('click', function(e){
      e.preventDefault();
      $('hr').addClass('reduce');
      $('ul.fyp-filters.show').removeClass('show');
      $('#'+e.currentTarget.dataset.name).addClass('show');
      $('.flip-container.active').removeClass('active');
      $( e.currentTarget ).find('.flip-container').addClass('active');
      //console.log( $(e.currentTarget ' flip-container') );
   })

   //FYP - Click filter sorts the boxes
   $('.fyp-filter-click').on('click', function(e){
      e.preventDefault();
      var filterValue = $( this ).attr('data-filter');
      //$('.module-hero-image').addClass('hide');
      $('#empty').addClass('active');
      //$('.fyp-close-button-gradient').addClass('show');
      $grid.isotope({ filter: '.' + filterValue + ':not(.unit-small)' });
      $('html, body').animate({
            scrollTop: ( $(".fyp-search").offset().top)// - parseInt( $("#main-content").css("margin-top").replace("px", "") ) )
          }, 900);
      //ADDS #URL
      dataCheck = $( this ).data('filter'),
      dataName = dataCheck && '#' + dataCheck;
      // var urlParam = location.hash.split("appeal=");
      // var appeal = urlParam[1] ? ( "&appeal=" + urlParam[1].split("&")[0] ) : "";
      // window.location.hash = dataName + appeal;
      window.location.hash = dataName;
   })

   $('#fyp-search-button').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
            scrollTop: ( $("#fyp-search-button").offset().top)
          }, 900);
   })

   $('#empty').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
            scrollTop: $('body').offset().top
          }, 900);

      $('#empty').removeClass('active');
      $('.grid-item.search-item').remove();
      $('.grid-item.search-more').removeClass('open');
      $('#searcher').val("");
      $grid.isotope({ filter: '.featured' }); 
      //removes url hash
      // var urlParam = location.hash.split("appeal=");
      // var appeal = urlParam[1] ? ( "appeal=" + urlParam[1].split("&")[0] ) : "";
      // window.location.hash = "" + appeal;
      window.location.hash = "";

   })

   // Check for empty
  function isEmpty( el ){
    return !$.trim(el.html())
  }

   $('.give-link').on('click', function(e){
      e.preventDefault(); 
      // var urlParam = location.hash.split("appeal=");
      // var appeal = urlParam[1] ? ( "&appeal=" + urlParam[1].split("&")[0] ) : "";
      var allocCode = $( this ).attr('data-code');
      //var source = (allocCode != "") ? 'https://online.gifts.washington.edu/secure/makeagift/givingOpps.aspx?nobanner=true&source_typ=3&source=' + allocCode + appeal + '' : 'https://online.gifts.washington.edu/secure/?nobanner=true&tab=0' + appeal + '';
      var source = (allocCode != "") ? 'https://online.gifts.washington.edu/secure/makeagift/givingOpps.aspx?nobanner=true&source_typ=3&source=' + allocCode + '&appeal=17XFP' : 'https://online.gifts.washington.edu/secure/?nobanner=true&tab=0&appeal=17XFP';

      $('#give-iframe').empty();

      $('<iframe>', {
        src: source,
        frameborder: 0,
        width: '100%',
        height: '100%',
      }).appendTo('#give-iframe');
      
      if($('#give-now')[0].innerHTML === 'Give now'){
        $('#give-now')[0].innerHTML = 'Close';
      } 

      $('body').toggleClass('give-modal-active');
   })


   $('.unit-small').on('click', function(e){
      e.preventDefault();
      var filterValue = $( this ).attr('data-name');
      $('#empty').trigger('click'); 
      //$('.module-hero-image').addClass('hide');
      //$('#empty').addClass('active-filter');
      //$('#empty').addClass('active');
      $grid.isotope({ filter: '.' + filterValue + ':not(.unit-small)' });
   });

   // $('.fyp-search-bar').on('keydown', function(e){
      // if(e.which == 13) {
      //         e.preventDefault();
      // }
   // })

   //search api call for more search results
   $('.search-more').on('click', function(e){
      e.preventDefault();
      $searchTerm = $('#searcher').val(); 
      $.getJSON('http://service.gifts.washington.edu/OnlineAllocation/Search/' + $searchTerm + '?callback=?', function(data) {
          //console.log(data);
          //$('.grid-item.search-more').addClass('hide');
          var searchItems = new Array();
          data.forEach(function(fund){
            var alloc        = fund.Key,
                title        = fund.Name,
                desc         = fund.Description,
                shortDesc    = (desc.length < 100) ? desc : (desc.substr(0,100) + "...");
            searchItems.push($(
                '<li tabindex="0" class="flip-container grid-item search-item ">' +
                '  <div class="flipper" role="button">' +
                '    <div class="front">' +
                '      <p>' + title + '</p>' +
                '    </div>' +
                '    <div class="back">' +
                '      <h3>' + title + '</h3>' +
                //'      <!-- <p class="back-unit-name">ASSOCIATED UNIT???</p> -->' +
                '      <p class="short-desc">' + shortDesc + '</p>' +
                '    </div>' +
                '    <div tabindex="0" class="full-bio">' +
                '      <h2>' + title + '</h2>' +
                '      <div class="bio-text">' +
                '        <p>' + desc + '</p>' +
                '      </div>' +
                '      <div class="give-button">' +
                '        <a href="#" class="give-link" data-code="' + alloc + '">Give Now</a>' +
                '      </div>' +
                '    </div>' +
                '  </div>' +
                '</li>'));
            
          });
          //$grid.append(searchItems);
         // $grid.isotope('appended',searchItems);
          $('ul.search-grid').append(searchItems);
          $('.grid-item.search-more').addClass('open');
          $grid.isotope();
          $('#searcher').on('keyup', function(el){
              $('.grid-item.search-item').remove();
              $('.grid-item.search-more').removeClass('open');
            });
          // $('.search-item').on('click', function(el){
          //     el.preventDefault();
          //     $('.search-item.open').removeClass('open');
          //     $( this ).addClass('open');
          //   });
          // $('.give-link').on('click', function(e){
          //       e.preventDefault();
          //       //$lastLocation = e.offset().top;
          //       var allocCode = $( this ).attr('data-code');
          //       $('body').prepend('<div class="fyp-give-widget-lightbox"></div>' +
          //                         '<div id="fyp-give-widget-container" class="fyp-give-widget-container">' +
          //                           '<iframe src="https://online.gifts.washington.edu/secure/makeagift/givingOpps.aspx?source_typ=3&source=' + allocCode + '&frame_buster=false" title="Giving at the UW" id="UWFOnlineGivingForm" frameborder="0" scrolling="yes" onload="try{document.domain=\'washington.edu\'}catch(e){}"></iframe>' +
          //                         '</div>');

          //       $('html, body').animate({
          //           scrollTop: ( $("#fyp-give-widget-container").offset().top - $("#campaign-header thick").outerHeight() )
          //         }, 900);
          //    });
          $('.search-grid').on( 'click', '.search-item', function() {
                  var $this = $(this);
                  if( !$this.hasClass('open')) {
                    $('.grid-item:not(.search-more)').removeClass('open')
                    $this.addClass('open');             
                    // Scroll-to portion
                    //scrollIt($this);          
                  } else {
                    $this.removeClass('open')
                  }                
             });
          
      });
      
      
   });


//THIS FUNCTION NEEDS WORK FOR SCHOOLS TO USE
      // Open by URL hash
      if(location.hash != '') {

          //var hashName = location.hash.substring(1).split("&")[0];
          var hashName = location.hash.substring(1);

          //if(!hashName.includes('appeal=')) {

              //$dataName = $('*[data-filter="' + hashName + '"]');

              //$dataName.trigger('click'); //This doesnt work for pillars and such that aren't click filters on page...
                  //console.log('clicked');
              $('#empty').addClass('active');
              $grid.isotope({ filter: '.' + hashName + ':not(.unit-small)' });
              $('html, body').animate({
                    scrollTop: ( $(".fyp-search").offset().top)// - parseInt( $("#main-content").css("margin-top").replace("px", "") ) )
                  }, 900);
          //}

          // //$dataName.toggleClass('open');
          // $grid.isotope();

          // // Replace with high quality image
          // imageSwitch($dataName);

          // // Scroll-to portion
          // scrollIt($dataName)          

      } 
  

}); 


// Debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    timeout = setTimeout( delayed, threshold || 100 );
  }
}


// IE10 fix for select menu issue
if ("onpropertychange" in document && !!window.matchMedia) {
  $("html").addClass("ie10");
}

