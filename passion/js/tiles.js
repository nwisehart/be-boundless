/*! be-boundless Fri Oct 07 2016 11:42:21 */
function debounce(a,b){var c;return function(){function d(){a(),c=null}c&&clearTimeout(c),c=setTimeout(d,b||100)}}$(window).load(function(){function a(a){var b=a;b.find(".front").css("background-image","url("+b.data("img")+")")}function b(a){var b=(f-a.height())/2;$mobile=g<768?50:b,i.one("arrangeComplete",function(){$("html, body").animate({scrollTop:a.offset().top-$mobile},900)})}var c,d=$("#searcher_wrap"),e=$("#searcher"),f=$(window).height(),g=$(window).width(),h=$("#filter"),i=$(".grid").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"},filter:".featured"});i.one("arrangeComplete",function(){$("#overlay").fadeOut(300,function(){$(this).remove()})}),i.isotope();var j=$(".quicksearch").keyup(debounce(function(){j.val().length>1?(c=new RegExp(j.val(),"gi"),i.isotope({filter:function(){var a=$(this),b=!c||a.text().match(c);return b&&a.is(":not(.unit-item)")||a.is(".search-more")}}),$("#empty").addClass("active"),$("#empty").addClass("active-filter")):$("#empty").trigger("click")},200));if($(".featured").each(function(b,c){var d=$(c);a(d)}),i.on("click",".grid-item",function(){var c=$(this),d=c.data("name"),e=d&&"#name="+d;c.hasClass("open")||c.hasClass("special")||c.hasClass("search-more")?c.removeClass("open"):($(".grid-item").removeClass("open"),c.addClass("open"),a(c),b(c),window.location.hash=e),i.isotope()}),$("#searcher").on("click",function(a){a.preventDefault(),d.find("input").focus(),d.toggleClass("active_search"),e.hasClass("is-checked")&&(d.find("input").val(""),$(".quicksearch").keyup()),e.toggleClass("is-checked")}),$(document).on("keyup",function(a){27==a.keyCode&&$("#searcher").hasClass("is-checked")&&(d.toggleClass("active_search"),e.toggleClass("is-checked"),d.find("input").val(""))}),$(document).keypress(function(a){13==a.which&&(a.preventDefault(),$(a.target).trigger("click"))}),location.hash.match(/^#name/)){var k=location.hash.substring(6),l=$('*[data-name="'+k+'"]');l.toggleClass("open"),i.isotope(),a(l),b(l)}$(".tags").on("click","a",function(a){var b=$(this),c=a;$text=b.text(),c.preventDefault(),c.stopPropagation(),h.addClass("select_active"),i.isotope({filter:function(){return!$text||$(this).find(".tags").text().match($text)}})}),$(".fyp-filter-triggers").on("click",function(a){a.preventDefault(),$("hr").addClass("reduce"),$("ul.fyp-filters.show").removeClass("show"),$("#"+a.currentTarget.dataset.name).addClass("show")}),$(".fyp-filter-click").on("click",function(a){a.preventDefault();var b=$(this).attr("data-filter");$("#empty").addClass("active"),$("#empty").addClass("active-filter"),i.isotope({filter:"."+b+":not(.unit-small)"}),$(),$("html, body").animate({scrollTop:$(".fyp-search").offset().top},900)}),$("#empty").on("click",function(a){a.preventDefault(),$("html, body").animate({scrollTop:$("body").offset().top},900),$(this).hasClass("active-filter")&&($("#empty").removeClass("active"),$("#empty").removeClass("active-filter"),$(".grid-item.search-item").remove(),$(".grid-item.search-more").removeClass("open"),i.isotope({filter:".featured"})),$(this).hasClass("active-give")&&($("#empty").addClass("active-filter"),$("#empty").removeClass("active-give"),$(".fyp-give-widget-container").remove(),$(".fyp-give-widget-lightbox").remove())}),$(".give-link").on("click",function(a){a.preventDefault();var b=$(this).attr("data-code");$("#empty").addClass("active-give"),$("#empty").removeClass("active-filter"),$("body").prepend('<div class="fyp-give-widget-lightbox"></div><div id="fyp-give-widget-container" class="fyp-give-widget-container"><iframe src="https://online.gifts.washington.edu/secure/makeagift/givingOpps.aspx?source_typ=3&source='+b+'&frame_buster=false" title="Giving at the UW" id="UWFOnlineGivingForm" frameborder="0" scrolling="yes" onload="try{document.domain=\'washington.edu\'}catch(e){}"></iframe></div>'),$("html, body").animate({scrollTop:$("#fyp-give-widget-container").offset().top-$("#campaign-header thick").outerHeight()},900)}),$(".unit-small").on("click",function(a){a.preventDefault();var b=$(this).attr("data-name");i.isotope({filter:"."+b+":not(.unit-small)"})}),$(".search-more").on("click",function(a){a.preventDefault(),$searchTerm=$("#searcher").val(),$.getJSON("http://ua-dev-service.gifts.washington.edu/OnlineAllocation/Search/"+$searchTerm+"?callback=?",function(a){var b=new Array;a.forEach(function(a){var c=a.Key,d=a.Name,e=a.Description,f=e.length<100?e:e.substr(0,100)+"...";b.push($('<li tabindex="0" class="flip-container grid-item search-item ">  <div class="flipper" role="button">    <div class="front">      <p>'+d+'</p>    </div>    <div class="back">      <h3>'+d+'</h3>      <p class="short-desc">'+f+'</p>    </div>    <div tabindex="0" class="full-bio">      <h2>'+d+'</h2>      <div class="bio-text">        <p>'+e+'</p>      </div>      <div class="give-button">        <a href="#" class="give-link" data-code="'+c+'">Give Now</a>      </div>    </div>  </div></li>'))}),$("ul.search-grid").append(b),$(".grid-item.search-more").addClass("open"),i.isotope(),$(".search-item").on("click",function(a){a.preventDefault(),$(".search-item.open").removeClass("open"),$(this).addClass("open")}),$(".give-link").on("click",function(a){a.preventDefault();var b=$(this).attr("data-code");$("#empty").addClass("active-give"),$("#empty").removeClass("active-filter"),$("body").prepend('<div class="fyp-give-widget-lightbox"></div><div id="fyp-give-widget-container" class="fyp-give-widget-container"><iframe src="https://online.gifts.washington.edu/secure/makeagift/givingOpps.aspx?source_typ=3&source='+b+'&frame_buster=false" title="Giving at the UW" id="UWFOnlineGivingForm" frameborder="0" scrolling="yes" onload="try{document.domain=\'washington.edu\'}catch(e){}"></iframe></div>'),$("html, body").animate({scrollTop:$("#fyp-give-widget-container").offset().top-$("#campaign-header thick").outerHeight()},900)})}),$("#searcher").on("keyup",function(a){$(".grid-item.search-item").remove(),$(".grid-item.search-more").removeClass("open")})})}),"onpropertychange"in document&&window.matchMedia&&$("html").addClass("ie10");