/*! be-boundless Wed Oct 19 2016 14:35:26 */
function debounce(a,b){var c;return function(){function d(){a(),c=null}c&&clearTimeout(c),c=setTimeout(d,b||100)}}$(window).load(function(){function a(a){var b=a;b.find(".front").css("background-image","url("+b.data("img")+")")}function b(a){var b=(f-a.height())/2;$mobile=g<768?50:b,h.one("arrangeComplete",function(){$("html, body").animate({scrollTop:a.offset().top-$mobile},900)})}var c,d=$("#searcher_wrap"),e=$("#searcher"),f=$(window).height(),g=$(window).width(),h=($("#filter"),$(".grid").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"},filter:".featured",getSortData:{selected:function(a){return a=$(a),(a.hasClass("open")?-1:0)+a.data("sort")}},sortBy:"selected"}));h.one("arrangeComplete",function(){$("#overlay").fadeOut(300,function(){$(this).remove()})}),h.isotope();var i=$(".quicksearch").keyup(debounce(function(){i.val().length>1&&(c=new RegExp(i.val(),"gi"),h.isotope({filter:function(){var a=$(this),b=!c||a.text().match(c);return b&&a.is(":not(.unit-item):not(.filter-item)")||a.is(".search-more")}}))},200));if($(".featured").each(function(b,c){var d=$(c);a(d)}),h.on("click",".grid-item:not(.filter-item):not(.search-more):not(.open)",function(){var c=$(this);c.hasClass("special")||c.hasClass("search-more")||c.hasClass("fyp-units")||($prevSelect=$(".grid-item.open:not(.search-more):not(.filter-item)"),$prevSelect.removeClass("open"),h.isotope("updateSortData",$prevSelect),c.addClass("open"),h.isotope("updateSortData",c),a(c),b(c)),h.isotope()}),$("#searcher").on("click",function(a){a.preventDefault(),d.find("input").focus(),d.toggleClass("active_search"),e.hasClass("is-checked")&&(d.find("input").val(""),$(".quicksearch").keyup()),e.toggleClass("is-checked"),$prevSelect=$(".grid-item.open:not(.search-more):not(.filter-item)"),$prevSelect.removeClass("open"),h.isotope("updateSortData",$prevSelect),h.isotope()}),$(document).on("keyup",function(a){27==a.keyCode&&$("#searcher").hasClass("is-checked")&&(d.toggleClass("active_search"),e.toggleClass("is-checked"),d.find("input").val(""))}),$(document).keypress(function(a){13==a.which&&(a.preventDefault(),$(a.target).trigger("click"))}),$(".fyp-filter-triggers").on("click",function(a){a.preventDefault(),$("hr").addClass("reduce"),$("ul.fyp-filters.show").removeClass("show"),$("#"+a.currentTarget.dataset.name).addClass("show"),$(".flip-container.active").removeClass("active"),$(a.currentTarget).find(".flip-container").addClass("active")}),$(".fyp-filter-click").on("click",function(a){a.preventDefault();var b=$(this).attr("data-filter");$prevSelect=$(".grid-item.open:not(.search-more):not(.filter-item)"),$prevSelect.removeClass("open"),h.isotope("updateSortData",$prevSelect),h.isotope({filter:"."+b+":not(.unit-small)"}),$("html, body").animate({scrollTop:$(".fyp-search").offset().top},900),dataCheck=$(this).data("filter"),dataName=dataCheck&&"#"+dataCheck,window.location.hash=dataName}),$("#fyp-search-button").on("click",function(a){a.preventDefault(),$("html, body").animate({scrollTop:$("#fyp-search-button").offset().top},900)}),$(".empty-fund").on("click",function(a){a.preventDefault(),a.stopPropagation(),$prevSelect=$(".grid-item.open:not(.search-more):not(.filter-item)"),$prevSelect.removeClass("open"),h.isotope("updateSortData",$prevSelect),h.isotope()}),$(".give-link").on("click",function(a){a.preventDefault();var b=$(this).attr("data-code"),c=""!=b?"https://online.gifts.washington.edu/secure/makeagift/givingOpps.aspx?nobanner=true&source_typ=3&source="+b+"&appeal=17XFP":"https://online.gifts.washington.edu/secure/?nobanner=true&tab=0&appeal=17XFP";$("#give-iframe").empty(),$("<iframe>",{src:c,frameborder:0,width:"100%",height:"100%"}).appendTo("#give-iframe"),"Give now"===$("#give-now")[0].innerHTML&&($("#give-now")[0].innerHTML="Close"),$("body").toggleClass("give-modal-active")}),$(".unit-small").on("click",function(a){a.preventDefault();var b=$(this).attr("data-name");$prevSelect=$(".grid-item.open:not(.search-more):not(.filter-item)"),$prevSelect.removeClass("open"),h.isotope("updateSortData",$prevSelect),h.isotope({filter:"."+b+":not(.unit-small)"})}),$(".search-more").on("click",function(a){a.preventDefault(),$searchTerm=$("#searcher").val(),$prevSelect=$(".grid-item.open:not(.search-more):not(.filter-item)"),$prevSelect.removeClass("open"),h.isotope("updateSortData",$prevSelect),$.getJSON("http://service.gifts.washington.edu/OnlineAllocation/Search/"+$searchTerm+"?callback=?",function(a){var b=new Array;b.push($('<li class="grid-sizer search-item"></li>')),a.forEach(function(a){var c=a.Key,d=a.Name,e=a.Description,f=e.length<100?e:e.substr(0,100)+"...";b.push($('<li tabindex="0" class="flip-container grid-item search-item ">  <div class="flipper" role="button">    <div class="front">      <p>'+d+'</p>    </div>    <div class="back">      <h3>'+d+'</h3>      <p class="short-desc">'+f+'</p>    </div>    <div tabindex="0" class="full-bio">      <h2>'+d+'</h2>      <div class="bio-text">        <p>'+e+'</p>      </div>      <div class="give-button">        <a href="#" class="give-link" data-code="'+c+'">Give Now</a>      </div>      <button class="empty-fund">        Close current fund        <svg aria-hidden="true" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34.147px" height="37.833px" viewBox="0 0 34.147 37.833" enable-background="new 0 0 34.147 37.833" xml:space="preserve">          <line fill="none" stroke="#A7A9AC" stroke-width="2" stroke-miterlimit="10" x1="9.616" y1="8.449" x2="31.782" y2="30.614"></line>          <line fill="none" stroke="#A7A9AC" stroke-width="2" stroke-miterlimit="10" x1="31.782" y1="8.449" x2="9.616" y2="30.614"></line>        </svg>      </button>    </div>  </div></li>'))}),$("ul.search-grid").append(b),$(".grid-item.search-more").addClass("open");var c=$(".search-grid").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"}});$("#searcher").on("keyup",function(a){$(".grid-item.search-item").remove(),$(".grid-item.search-more").removeClass("open")}),$(".search-grid").on("click",".search-item",function(){var a=$(this);a.hasClass("open")||($(".grid-item:not(.search-more)").removeClass("open"),a.addClass("open"),c.isotope())})})}),""!=location.hash){var j=location.hash.substring(1);h.isotope({filter:"."+j+":not(.unit-small)"}),$("html, body").animate({scrollTop:$(".fyp-search").offset().top},900)}}),"onpropertychange"in document&&window.matchMedia&&$("html").addClass("ie10");