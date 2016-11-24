$(function(){

  var bodyBothell = document.getElementsByTagName('body')[0],
      $bodyHeight = $(document).height()

  var controllerBothell = new ScrollMagic.Controller();

  // This is to set global 
  currentController = controllerBothell;


  var battery = new ScrollMagic.Scene({
    triggerElement: 'body',
    triggerHook: 0,
    duration: $bodyHeight,
    reverse: true
  })
  .setTween('#bar span', { width: '23vh', ease: Power0.easeIn })
  .addTo(controllerBothell);


  var introBothell = new ScrollMagic.Scene({
    triggerElement: '#intro-slide',
    triggerHook: 0,
    duration: '100%',
  })
  .setPin('.intro', {pushFollowers: false})
  .setClassToggle("body", 'bothellIntro')
  .setTween('#intro-text', 0.5, { opacity: 0, transform: 'translateY(100px)', ease: Power0.easeIn })
  .addTo(controllerBothell)


  var videoTrigger = new ScrollMagic.Scene({
    triggerElement: '#video',
    triggerHook: 1
  })
  .on("start", function(){
    videoPlay("https://www.youtube.com/embed/sbELjIqhOZ4?theme=light;autoplay=1&rel=0&amp;showinfo=0&amp");
  })
  .reverse(false)
  .addTo(controllerBothell);


  var parallaxed = new TimelineMax ()
        .add([
          TweenMax.to('#back', 1,      { transform: 'translateY(0)', ease: Power0.easeIn }),
          TweenMax.to('#middle', 0.5,  { transform: 'translateY(0)', ease: Power0.easeIn, delay: 0.0 }),
          TweenMax.to('#fore', 0.3,    { transform: 'translateY(0)', ease: Power0.easeIn, delay: 0.1 }),
          TweenMax.to('#robot', 0.2,   { transform: 'translateY(100px)', ease: Power0.easeIn, delay: 0.3 })
        ])

  var jason = new ScrollMagic.Scene({
    triggerElement: '#jason',
    triggerHook: 0.1,
    offset: $('#jason').height() / 3,
    duration: '100%',
  })
  .setTween(parallaxed)
  .addTo(controllerBothell)


  var treesParallaxed = new TimelineMax ()
        .add([
          TweenMax.to('#trees .background', 1,      { transform: 'translateY(0)', ease: Power0.easeIn }),
          TweenMax.to('#trees .middle', 0.5,  { transform: 'translateY(0)', ease: Power0.easeIn, delay: 0.0 }),
          TweenMax.to('#trees .fore', 0.3,    { transform: 'translateY(0)', ease: Power0.easeIn, delay: 0.1 }),
        ])

  var trees = new ScrollMagic.Scene({
    triggerElement: '#trees',
    triggerHook: 0.1,
    offset: $('#trees').height() / 2,
    duration: '100%',
  })
  .setTween(treesParallaxed)
  .addTo(controllerBothell)


  // Lightbox plugin

  MediumLightbox('figure.zoom-effect');    

  var img = document.getElementsByClassName('img')

  $(img).each(function(index){
    var imgIndex = img[index],
        $this = $(this),
        hasCaption = false;

    imgIndex.addEventListener("mouseover", function(){
      if (!hasCaption) {
        $this.after('<p>' + $this.attr('alt') + '</p>')
        hasCaption = true;
      }
    })
  })



})


