/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          06-02-SCROLL.JS
*******************************************************************************

PRACTICALSERIES: Practical Series of Publications by Michael Gledhill
                 Published in the United Kingdom

                 Email: mg@practicalseries.com
                 Web:   www.practicalseries.com

-------------------------------------------------------------------------------
DETAILS         LOCAL SCROLL FUNCTIONS

jQuery is using version 3.1.0 from the GoogleAPIs library.

This script applies the scroll to a point within the page (srollTop)
functionality for the current page.

-------------------------------------------------------------------------------
NAMING CONVENTIONS

Each <section> of the site has a waypoint (WP) reference number that identifies
the start of each section. These are id attributes and have the format:

        #js--ccssii

    where:  cc - chapter number
            ss - subsection number
            ii - inline section number

The six digit number is unique to each section, i.e. section 2.1.3
would have waypoint reference js--020103

The trigger class used in the <a> element to trigger the scroll to the waypoint
has the name .js-sc-000000 where the six digit number matches the waypoint
number of the section that is to be scrolled to.

The scrolltop function has an offset of -60px to ensure the title is visible
below the fixed navigation bar.

-------------------------------------------------------------------------------
MODIFICATION HISTORY:

This is a complete summary of all software modifications.

Date          Issue        Author         Reason for Modification
-------------------------------------------------------------------------------
19 Aug 2017   P10          M. Gledhill    Published

09 Aug 2017   d-P09.06.01  M. Gledhill    Page created
---------------------------------------------------------------------------- */


/* ****************************************************************************
   WAIT FOR PAGE TO LOAD
   ****************************************************************************
   No jQuery actions take place until the webpage has loaded, all JQuery code
   is contained within the .ready(function()).
   ************************************************************************* */


$(document).ready(function() {                  /* START OF PAGE READY FUNCTION */

/* ****************************************************************************
   REVISION
   **************************************************************************** */

    $('.aside-right-rev').append (
        "<p>scroll.js&nbsp;&mdash;&nbsp;P10</p>" /* LOCAL JS REVISION NUMBER */
    );


/* ****************************************************************************
   SCROLL TO SECTION
   ****************************************************************************
   This holds several scrollTop functions that scroll from the TOC to the
   specified section. There is one click function per <a> within the TOC.
   ************************************************************************* */


 /* ---------------------------------------------------------------------------
   SCROLL TO TOP
   The offset is set to .to -80 - e.g.

          $('.js--sc-000000').click(function () {
           $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
          });
   ------------------------------------------------------------------------- */
   $('.js--sc-000000').click(function () {     /* START of scroll function */
       $('html, body').animate({scrollTop: $('#js--000000').offset().top -80}, 1000);
    });                                         /* END of scroll function */


 /* ---------------------------------------------------------------------------
   SCROLL TO CHAPTER (Non heading level after TOC)
   The offset is set to .to -10 - e.g.

          $('.js--sc-nn0000').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0000').offset().top -10}, 1000);
          });
   ------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------
   SCROLL TO -  SECTIONS & SUBSECTIONS
   The offset is set to .to -20 - e.g.

          $('.js--sc-nn0100').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0100').offset().top -20}, 1000);
          });
   ------------------------------------------------------------------------- */
          $('.js--sc-060200').click(function () {
           $('html, body').animate({scrollTop: $('#js--060200').offset().top -20}, 1000);
          });

          $('.js--sc-060201').click(function () {
           $('html, body').animate({scrollTop: $('#js--060201').offset().top -20}, 1000);
          });

          $('.js--sc-060202').click(function () {
           $('html, body').animate({scrollTop: $('#js--060202').offset().top -20}, 1000);
          });

          $('.js--sc-060203').click(function () {
           $('html, body').animate({scrollTop: $('#js--060203').offset().top -20}, 1000);
          });

          $('.js--sc-060204').click(function () {
           $('html, body').animate({scrollTop: $('#js--060204').offset().top -20}, 1000);
          });

          $('.js--sc-060205').click(function () {
           $('html, body').animate({scrollTop: $('#js--060205').offset().top -20}, 1000);
          });

          $('.js--sc-060206').click(function () {
           $('html, body').animate({scrollTop: $('#js--060206').offset().top -20}, 1000);
          });


/* ---------------------------------------------------------------------------
   SCROLL TO -  NON-STANDARD (INLINE) SECTIONS
   The offset is set to .to -120 - e.g.

          $('.js--sc-nn0101a').click(function () {
           $('html, body').animate({scrollTop: $('#js--nn0101a').offset().top -120}, 1000);
          });
   ------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------
   SCROLL TO -  CROSS REFERENCES
   For figures, the offset is set to .to -80 - e.g.

          $('.js--sc-fnn-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--fnn-01').offset().top -80}, 1000);
          });

   For tables, the offset is set to .to -60 - e.g.

          $('.js--sc-tnn-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--tnn-01').offset().top -60}, 1000);
          });
   ------------------------------------------------------------------------- */

          $('.js--sc-f06-08').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-08').offset().top -80}, 1000);
          });

          $('.js--sc-f06-09').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-09').offset().top -80}, 1000);
          });

          $('.js--sc-f06-10').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-10').offset().top -80}, 1000);
          });

          $('.js--sc-f06-11').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-11').offset().top -80}, 1000);
          });

          $('.js--sc-f06-12').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-12').offset().top -80}, 1000);
          });

          $('.js--sc-f06-13').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-13').offset().top -80}, 1000);
          });

          $('.js--sc-f06-14').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-14').offset().top -80}, 1000);
          });

          $('.js--sc-f06-15').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-15').offset().top -80}, 1000);
          });

          $('.js--sc-f06-16').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-16').offset().top -80}, 1000);
          });

          $('.js--sc-f06-17').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-17').offset().top -80}, 1000);
          });

          $('.js--sc-f06-18').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-18').offset().top -80}, 1000);
          });

          $('.js--sc-f06-19').click(function () {
           $('html, body').animate({scrollTop: $('#js--f06-19').offset().top -80}, 1000);
          });

          $('.js--sc-t06-01').click(function () {
           $('html, body').animate({scrollTop: $('#js--t06-01').offset().top -60}, 1000);
          });

          $('.js--sc-t06-02').click(function () {
           $('html, body').animate({scrollTop: $('#js--t06-02').offset().top -60}, 1000);
          });


});                                             /* END OF PAGE READY FUNCTION */