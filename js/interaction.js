// Navigation View
BOUNDLESS.Navigation = Backbone.View.extend({

  el : '.navigation',

  hidden : true,

  message : '#message',

  events : {
    // 'mouseenter' : 'addBlur',
    // 'mouseleave' : 'removeBlur',
    'click li' : 'segueOut',
    'click .show-nav' : 'segueIn',
  },

  initialize : function( options )
  {
    // this.$message = $('#message')
  },

  segueOut : function()
  {
    this.$el.transition({ left : -2300 }, BOUNDLESS.AnimationDuration, 'easeInOutQuad' )
    this.hidden = true
  },

  segueIn: function() {

     this.$el.transition({ left : -230 }, BOUNDLESS.AnimationDuration, 'easeInOutQuad' )
     this.hidden = false
  },

  segue : function()
  {
      // Backbone.history.fragement protects against linking directily to a slide
      if ( this.hidden && ! Backbone.history.fragment ) this.segueIn()
      if ( ! this.hidden && Backbone.history.fragment.length ) this.segueOut()
  }



})


