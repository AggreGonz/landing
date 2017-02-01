$(document).ready(function($) {

/**
 * Created by IntelliJ IDEA.
 *
 * User: phil
 * Date: 15/11/12
 * Time: 11:04 AM
 *
 */
(function ($) {

    var self = this, container, running=false, currentY = 0, targetY = 0, oldY = 0, maxScrollTop= 0, minScrollTop, direction, onRenderCallback=null,
            fricton = 0.95, // higher value for slower deceleration
            vy = 0,
            stepAmt = 1,
            minMovement= 0.1,
            ts=0.1;

    var updateScrollTarget = function (amt) {
        targetY += amt;
        vy += (targetY - oldY) * stepAmt;
      
        oldY = targetY;


    }
    var render = function () {
        if (vy < -(minMovement) || vy > minMovement) {

            currentY = (currentY + vy);
            if (currentY > maxScrollTop) {
                currentY = vy = 0;
            } else if (currentY < minScrollTop) {
                    vy = 0;
                    currentY = minScrollTop;
                }
           
            container.scrollTop(-currentY);

            vy *= fricton;
            
         //   vy += ts * (currentY-targetY);
            // scrollTopTweened += settings.tweenSpeed * (scrollTop - scrollTopTweened);
            // currentY += ts * (targetY - currentY);

            if(onRenderCallback){
                onRenderCallback();
            }
        }
    }
    var animateLoop = function () {
        if(! running)return;
        requestAnimFrame(animateLoop);
        render();
        //log("45","animateLoop","animateLoop", "",stop);
    }
    var onWheel = function (e) {
        e.preventDefault();
        var evt = e.originalEvent;
       
        var delta = evt.detail ? evt.detail * -1 : evt.wheelDelta / 40;
        var dir = delta < 0 ? -1 : 1;
        if (dir != direction) {
            vy = 0;
            direction = dir;
        }

        //reset currentY in case non-wheel scroll has occurred (scrollbar drag, etc.)
        currentY = -container.scrollTop();
        
        updateScrollTarget(delta);
    }

    /*
     * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     */
    window.requestAnimFrame = (function () {
        return  window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    window.setTimeout(callback, 1000 / 60);
                }; 
              
                
    })();

    /*
     * http://jsbin.com/iqafek/2/edit
     */
    var normalizeWheelDelta = function () {
        // Keep a distribution of observed values, and scale by the
        // 33rd percentile.
        var distribution = [], done = null, scale = 30;
        return function (n) {
            // Zeroes don't count.
            if (n == 0) return n;
            // After 500 samples, we stop sampling and keep current factor.
            if (done != null) return n * done;
            var abs = Math.abs(n);
            // Insert value (sorted in ascending order).
            outer: do { // Just used for break goto
                for (var i = 0; i < distribution.length; ++i) {
                    if (abs <= distribution[i]) {
                        distribution.splice(i, 0, abs);
                        break outer;
                    }
                }
                distribution.push(abs);
            } while (false);
            // Factor is scale divided by 33rd percentile.
            var factor = scale / distribution[Math.floor(distribution.length / 3)];
            if (distribution.length == 500) done = factor;
            return n * factor;
        };
    }();


    $.fn.smoothWheel = function () {
        //  var args = [].splice.call(arguments, 0);
        var options = jQuery.extend({}, arguments[0]);
        return this.each(function (index, elm) {

            if(!('ontouchstart' in window)){
                container = $(this);
                container.bind("mousewheel", onWheel);
                container.bind("DOMMouseScroll", onWheel);

                //set target/old/current Y to match current scroll position to prevent jump to top of container
                targetY = oldY = container.get(0).scrollTop;
                currentY = -targetY;
                
                minScrollTop = container.get(0).clientHeight - container.get(0).scrollHeight;
                if(options.onRender){
                    onRenderCallback = options.onRender;
                }
                if(options.remove){
                    log("122","smoothWheel","remove", "");
                    running=false;
                    container.unbind("mousewheel", onWheel);
                    container.unbind("DOMMouseScroll", onWheel);
                }else if(!running){
                    running=true;
                    animateLoop();
                }

            }
        });
    };


})(jQuery);


  function pathPrepare ($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
  }

  var $1 = $("path#line1");
  var $2 = $("path#line2");
  var $3 = $("path#line3");

  // prepare SVG
  pathPrepare($1);
  pathPrepare($2);
  pathPrepare($3);

  // init controller
  var controller = new ScrollMagic.Controller();

  // build tween
  var tween = new TimelineMax()
    .add(TweenMax.to($1, 1, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
    .add(TweenMax.to($2, 1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
    .add(TweenMax.to($3, 1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
    .add(TweenMax.to("path", 1, {stroke: "#1e9fff",ease:Linear.easeNone}), 0);     // change color during the whole thing

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#cont2",duration: 1000, tweenChanges: true})
                    .setTween(tween)
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);

    var image = $('#cont1 .image');
    var image2 = $('#cont2 .image');
    var image3 = $('#cont3 .image');
    var image4 = $('#cont4 .image');


    new ScrollMagic.Scene({triggerElement: "#cont1",duration:380})

                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller)

                    .on("enter", function () {
                            // trigger animation by changing inline style.
                            image.fadeIn('slow').addClass('active');
                    })
                    .on("leave", function () {
                            image.removeClass('active')
                    });
    new ScrollMagic.Scene({triggerElement: "#cont2",duration:380})
                    //.setClassToggle("", "active") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller)

                    .on("enter", function () {
                            // trigger animation by changing inline style.
                            image2.fadeIn('slow').addClass('active');
                    })
                    .on("leave", function () {
                            image2.removeClass('active')
                    });

    new ScrollMagic.Scene({triggerElement: "#cont3",duration:380})
                    //.setClassToggle("", "active") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller)

                    .on("enter", function () {
                            // trigger animation by changing inline style.
                            image3.fadeIn('slow').addClass('active');
                    })
                    .on("leave", function () {
                            image3.removeClass('active')
                    });
    new ScrollMagic.Scene({triggerElement: "#cont4",duration:380})
                    //.setClassToggle("", "active") // add class toggle
                    .addIndicators() // add indicators (requires plugin)
                    .addTo(controller)

                    .on("enter", function () {
                            // trigger animation by changing inline style.
                            image4.fadeIn('slow').addClass('active');
                    })
                    .on("leave", function () {
                            image4.removeClass('active')
                    });

});