/*! be-boundless Mon Sep 26 2016 16:54:28 */
function debounce(a,b){var c;return function(){function d(){a(),c=null}c&&clearTimeout(c),c=setTimeout(d,b||100)}}$(window).load(function(){function a(a){var b=a;b.find(".front").css("background-image","url("+b.data("img")+")")}function b(a){var b=(f-a.height())/2;$mobile=768>g?50:b,i.one("arrangeComplete",function(){$("html, body").animate({scrollTop:a.offset().top-$mobile},900)})}var c,d=$("#searcher_wrap"),e=$("#searcher"),f=$(window).height(),g=$(window).width(),h=$("#filter"),i=$(".grid").isotope({itemSelector:".grid-item",percentPosition:!0,masonry:{columnWidth:".grid-sizer"},filter:".featured"});i.one("arrangeComplete",function(){$("#overlay").fadeOut(300,function(){$(this).remove()})}),i.isotope();var j=$(".quicksearch").keyup(debounce(function(){c=new RegExp(j.val(),"gi"),i.isotope({filter:function(){var a=$(this),b=c?a.text().match(c):!0;return b&&a.is(":not(.unit-item)")}})},200));if($(".featured").each(function(b,c){var d=$(c);a(d)}),i.on("click",".grid-item",function(){var c=$(this),d=c.data("name"),e=d&&"#name="+d;c.hasClass("open")||c.hasClass("special")?c.removeClass("open"):($(".grid-item").removeClass("open"),c.addClass("open"),a(c),b(c),window.location.hash=e),i.isotope()}),$("#searcher").on("click",function(a){a.preventDefault(),d.find("input").focus(),d.toggleClass("active_search"),e.hasClass("is-checked")&&(d.find("input").val(""),$(".quicksearch").keyup()),e.toggleClass("is-checked")}),$(document).on("keyup",function(a){27==a.keyCode&&$("#searcher").hasClass("is-checked")&&(d.toggleClass("active_search"),e.toggleClass("is-checked"),d.find("input").val(""))}),$(document).keypress(function(a){13==a.which&&$(a.target).trigger("click")}),location.hash.match(/^#name/)){var k=location.hash.substring(6),l=$('*[data-name="'+k+'"]');l.toggleClass("open"),i.isotope(),a(l),b(l)}$(".tags").on("click","a",function(a){var b=$(this),c=a;$text=b.text(),c.preventDefault(),c.stopPropagation(),h.addClass("select_active"),i.isotope({filter:function(){return $text?$(this).find(".tags").text().match($text):!0}})}),$(".fyp-filter-triggers").on("click",function(a){a.preventDefault(),$("hr").addClass("reduce"),$("ul.fyp-filters.show").removeClass("show"),$("#"+a.currentTarget.dataset.name).addClass("show")}),$(".fyp-filter-click").on("click",function(a){a.preventDefault();var b=$(this).attr("data-filter");$(".module-hero-image").addClass("hide"),$(".FYP-home-button").addClass("show"),$(".fyp-close-button-gradient").addClass("show"),i.isotope({filter:"."+b+":not(.unit-small)"})}),$(".FYP-home-button").on("click",function(a){a.preventDefault(),$(".module-hero-image").removeClass("hide"),$(".FYP-home-button").removeClass("show"),$(".fyp-close-button-gradient").removeClass("show"),i.isotope({filter:".featured"})}),$(".give-link").on("click",function(a){a.preventDefault();var b=$(this).attr("data-code");$(".FYP-home-button").removeClass("show"),$("body").prepend('<div class="fyp-give-widget-container"><iframe src="https://online.gifts.washington.edu/secure/makeagift/givingOpps.aspx?source_typ=3&source='+b+'&frame_buster=false" title="Giving at the UW" id="UWFOnlineGivingForm" frameborder="0" scrolling="yes" onload="try{document.domain=\'washington.edu\'}catch(e){}" style="display: block; min-width: 662px; height: 763px;"></iframe></div><a class="FYP-give-widget-exit show"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="46.75px" height="46.812px" viewBox="0 0 46.75 46.812" enable-background="new 0 0 46.75 46.812" xml:space="preserve"><g><line fill="none" stroke="#FFF" stroke-miterlimit="10" x1="1.011" y1="1.001" x2="46.011" y2="46.001"/><line fill="none" stroke="#FFF" stroke-miterlimit="10" x1="46.011" y1="1.001" x2="1.011" y2="46.001"/></g></svg></a>'),$(".FYP-give-widget-exit").on("click",function(a){a.preventDefault(),$(".FYP-give-widget-exit").removeClass("show"),$(".FYP-home-button").addClass("show"),$(".fyp-give-widget-container").remove()})}),$(".unit-small").on("click",function(a){console.log("focus"),a.preventDefault();var b=$(this).attr("data-name");$(".module-hero-image").addClass("hide"),$(".FYP-home-button").addClass("show"),$(".fyp-close-button-gradient").addClass("show"),i.isotope({filter:"."+b+":not(.unit-small)"})})}),"onpropertychange"in document&&window.matchMedia&&$("html").addClass("ie10");