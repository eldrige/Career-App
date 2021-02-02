(function($)  {

  $.fn.countdown = function(options, callback) {

    var settings = { 'date': null }

    if (options) {
      $.extend(settings, options)
    }

    this_sel = $(this);

    function count_ecec() {



      eventDate = Date.parse(settings['date']) / 1000;
      currentDate = Math.floor( $.now() / 1000 );

      if (eventDate <= currentDate ) {
        callback.call(this);
        clearInterval(interval);
      }

      seconds = eventDate - currentDate;

      if (this_sel.find('.years').length > 0) {
        years = Math.floor( seconds / ( 60 * 60 * 24 * 365 ) );
        seconds -= years * 60 * 60 * 24 * 365  ;
      }

      if (this_sel.find('.days').length > 0) {
        days = Math.floor( seconds / ( 60 * 60 * 24 ) );
        seconds -= days * 60 * 60 * 24 ;
    }
    if (this_sel.find('.hours').length > 0) {
      hours = Math.floor( seconds / ( 60 * 60) );
      seconds -= hours * 60 * 60 ;
    }
    if (this_sel.find('.mins').length > 0) {
      minutes =  Math.floor( seconds / 60 );
      seconds -= minutes * 60 ;
    }


      if (this_sel.find('.years').length > 0) {
        years = (String(years).length < 2 ? '0'  + years : years);
      }

      if (this_sel.find('.days').length > 0) {
        days = (String(days).length < 2 ? '0'  + days : days);
      }
      if (this_sel.find('.hours').length > 0) {
      hours = (String(hours).length !==2 ? '0'  + hours : hours);
    }
    if (this_sel.find('.mins').length > 0) {
      minutes = (String(minutes).length !==2 ? '0'  + minutes : minutes);
    }
      seconds = (String(seconds).length !==2 ? '0'  + seconds : seconds);

      if (!isNaN(eventDate)) {
        if (this_sel.find('.years').length > 0) {
          this_sel.find('.years').text(years);
      }
      if (this_sel.find('.days').length > 0) {
        this_sel.find('.days').text(days);
      }
      if (this_sel.find('.hours').length > 0) {
        this_sel.find('.hours').text(hours);
      }
      if (this_sel.find('.mins').length > 0) {
        this_sel.find('.mins').text(minutes);
      }
        this_sel.find('.secs').text(seconds);
      }


    }

    count_ecec();
    interval = setInterval(count_ecec, 1000);


  }

}) (jQuery);
