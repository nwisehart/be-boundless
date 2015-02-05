(function(){var a=this,b=function(a){return a instanceof b?a:!this instanceof b?new b(a):void(this._wrapped=a)};a.BOUNDLESS=b,b.VERSION="0.1",b.initialize=function(){b.currentView=!1,b.videos=new b.Videos,b.router=new b.Router,Backbone.history.start()},jQuery(document).ready(b.initialize),b.UWTiles=Backbone.View.extend({name:"UW Campus",alt:"UW Map",tileSize:new google.maps.Size(256,256),maxZoom:19,minZoom:1,scrollwheel:!1,streetViewControl:!1,initialize:function(){},getTile:function(a,b,c){var d=c.createElement("DIV");if(!this.withinLoadingBounds(a,b))return d.style.width="256px",d.style.height="256px",d.style.background="#FFFFFF",d;var e=c.createElement("IMG");return e.src="http://www.washington.edu/wp-content/themes/maps/tiles/"+b+"_"+a.x+"_"+a.y+".png",e.onerror=function(){d.removeChild(e),d.style.width="256px",d.style.height="256px",d.style.background="#FFFFFF"},d.appendChild(e),d},withinLoadingBounds:function(a,b){return!(a.x>Math.floor(84049/Math.pow(2,19-b))||a.x<Math.floor(83996/Math.pow(2,19-b))||a.y<Math.floor(182980/Math.pow(2,19-b))||a.y>Math.floor(183017/Math.pow(2,19-b)))}}),b.youtube_api_ready=!1,b.YouTubeAPIReady=new Event("youtube_api_ready"),window.onYouTubeIframeAPIReady=function(){b.youtube_api_ready=!0,this.dispatchEvent(b.YouTubeAPIReady)},b.Video=Backbone.Model.extend({}),b.Videos=Backbone.Collection.extend({model:b.Video,is_ready:!1,view_to_render:void 0,initialize:function(){_.bindAll(this,"fetch_success"),this.url="?json=boundless_video.get_videos",this.fetch({success:this.fetch_success})},fetch_success:function(){this.is_ready=!0,void 0!==this.view_to_render&&this.view_to_render.data_prep()}}),b.Video.View=Backbone.View.extend({template:'<div class="fullscreen" style="background-image:url(<%= image %>)"><h2 class="video-title"><%= title %></h2><button class="play"></button><div class="behind boundless-youtube" id="video<%= video %>" aria-label="Video: <%= title %>"></div><div class="blurb"><%= text %></div></div>',el:"#message",initialize:function(a){_.bindAll(this,"render","data_prep","onReady","onStateChange","resized","youtube_iframe"),this.collection=b.videos,this.videoNum=parseInt(a.videoNum),this.slug=a.slug,this.collection.is_ready?this.data_prep(a):this.collection.view_to_render=this,this.player_ready=!1},data_prep:function(){this.model=this.collection.models[this.videoNum],this.render(),b.youtube_api_ready?this.youtube_iframe():window.addEventListener("youtube_api_ready",this.youtube_iframe)},render:function(){var a=this.model.toJSON(),b=_.template(this.template,a);this.$el.html(b),this.$button=this.$el.find("button.play")},youtube_iframe:function(){var a={};this.modest&&(a={rel:0,controls:0,modestbranding:1}),this.uwplayer=new YT.Player("video"+this.model.get("video"),{videoId:this.model.get("video"),playerVars:a,width:"100%",height:"100%",events:{onReady:this.onReady,onStateChange:this.onStateChange}})},resized:function(){var a=this.$vidSmall.find(".viewport").width();a!=this.$viewport_width&&(this.$viewport_width=a)},onReady:function(){this.play(this.model.get("video"))},onStateChange:function(){},play:function(a,b){b=b||!1,b?(this.uwplayer.loadVideoById(a),this.$el.focus()):this.uwplayer.cueVideoById(a)}}),b.Map=Backbone.View.extend({el:"#map",infoWindow:'<div class="overlay"></div>',settings:{name:"campusmap",allowedBounds:new google.maps.LatLngBounds(new google.maps.LatLng(47.647523,-122.325039),new google.maps.LatLng(47.664983,-122.290106)),allowedZoom:16,map:{zoom:17,center:new google.maps.LatLng(47.653851681095,-122.30780562698),minZoom:1,maxZoom:19,disableDoubleClickZoom:!1,mapTypeControl:!1},icon:{url:"wp-content/themes/be-boundless/less/svg/map-marker.svg",size:new google.maps.Size(85,85),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(42.5,42.5)},marker:{}},initialize:function(){_.bindAll(this,"delegateGoogleMapEvents","handleCenterChanged","handleZoomChanged","getMapType","putMarkersOnMap","render","show","hide"),this.points=new b.Map.Points,this.points.on("sync",this.render)},render:function(){this.map=new google.maps.Map(this.el,this.settings.map),this.map.mapTypes.set(this.settings.name,b.uwtiles),this.map.setMapTypeId(this.settings.name),this.bounds=new google.maps.LatLngBounds,this.points.each(this.putMarkersOnMap),this.delegateGoogleMapEvents(),this.show()},delegateGoogleMapEvents:function(){new google.maps.event.addListener(this.map,"center_changed",this.handleCenterChanged),new google.maps.event.addListener(this.map,"zoom_changed",this.handleZoomChanged)},handleCenterChanged:function(){this.map.setMapTypeId(this.getMapType())},handleZoomChanged:function(){this.map.setMapTypeId(this.getMapType())},getMapType:function(){return!this.settings.allowedBounds.contains(this.map.getCenter())||this.map.getZoom()<this.settings.allowedZoom?google.maps.MapTypeId.ROADMAP:this.settings.name},putMarkersOnMap:function(a){var c=new google.maps.Marker(this.settings.marker),d=new google.maps.LatLng(a.get("coordinate").latitude,a.get("coordinate").longitude),e=new b.Map.InfoWindow(this.map,d,a);this.bounds.extend(d),c.setPosition(d),c.setTitle(a.get("title")),c.setText(a.get("text")),c.setMap(this.map),c.setIcon(this.settings.icon),c.set("infoWindow",e),google.maps.event.addListener(c,"click",this.handleClickMarker),this.map.fitBounds(this.bounds)},handleClickMarker:function(){this.getMap().panTo(this.getPosition()),this.infoWindow.setMap(this.getMap())},show:function(){this.$el.hide().css("z-index",0).fadeIn(1e3)},hide:function(){this.$el.fadeOut(1e3,function(){$(this).css("z-index",0).hide()})}}),b.Map.Point=Backbone.Model.extend({}),b.Map.Points=Backbone.Collection.extend({url:"?json=map_point.get_map_points",model:b.Map.Point,initialize:function(){this.on("error",this.error),this.fetch()},error:function(){console.log("There was an error retrieving the map points.")}}),b.Map.InfoWindow=function(a,b,c){this.div=document.createElement("div"),this.div.className="infowindow",this.div.innerHTML=_.template('<div class="image"><img src="<%= _.first(info.get("image")) %>" title="<%= info.get("title") %>" /><h3><%= info.get("title") %></h3></div><div class="text"><p><%= info.get("text") %></p><span class="close"></span><span class="open"></span></div>',{info:c}),this.point=b,this.setMap(a)},b.Map.InfoWindow.prototype=new google.maps.OverlayView,b.Map.InfoWindow.prototype.onAdd=function(){var a=this.getPanes();this.div.style.display="inline",a.floatPane.appendChild(this.div)},b.Map.InfoWindow.prototype.draw=function(){var a=this.getProjection(),b=a.fromLatLngToDivPixel(this.point);this.div.style.top=b.y+"px",this.div.style.left=b.x+"px"},b.Map.InfoWindow.prototype.onRemove=function(){this.div.style.display="none"},b.Router=Backbone.Router.extend({routes:{"!/map":"initializeMap","!/video-:video":"initializeVideo","":"animateInInteraction"},initialize:function(){_.bindAll(this,"initializeMap")},initializeVideo:function(a){b.videoView=new b.Video.View({videoNum:a})},animateInInteraction:function(){console.log("Initial loading of the front page interaction animation"),b.interaction=new b.Interactions},execute:function(a,c){b.currentView&&(console.log("Boundless transition hiding the current view and going back to homepage"),b.currentView.hide()),b.currentView=!1,a&&a.apply(this,c)},initializeMap:function(){b.map?(console.log("Boundless map already rendered and being routed to"),b.map.show()):(console.log("Boundless map initial load"),b.uwtiles=new b.UWTiles,b.map=new b.Map),b.currentView=b.map}}),b.Interactions=Backbone.View.extend({initialize:function(){var a=jQuery,b=a(".navigation"),c=a("#message");b.find("li").each(function(){a(this).animate({marginRight:20,opacity:1},{duration:1500,easing:"easeOutElastic"})}),b.animate({left:0},{duration:500,easing:"easeInOutQuad"});var d={template:3},e=new Mprogress(d);b.on("click","li",function(){e.start(),e.set(.2)}),b.find("li").on({mouseenter:function(){c.addClass("blur"),a(this).show("scale",{percent:100},2e3)},mouseleave:function(){c.removeClass("blur")}})}})}).call(this);
//# sourceMappingURL=boundless.js.map