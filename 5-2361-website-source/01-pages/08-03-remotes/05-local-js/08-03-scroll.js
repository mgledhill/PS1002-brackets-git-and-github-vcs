/* PRACTICALSERIES (c) 2016

*******************************************************************************
Title :          LOCAL SCROLL - JQUERY                          08-03-SCROLL.JS
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
02 Aug 2018   R02          M. Gledhill    Second formal release

23 Sep 2017   R01          M. Gledhill    First formal release

02 Sep 2017   P12          M. Gledhill    Published

29 Aug 2017   d-P11.08.02  M. Gledhill    Page created
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
        "<p>scroll.js&nbsp;&mdash;&nbsp;R02</p>" /* LOCAL JS REVISION NUMBER */
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
          $('.js--sc-080300').click(function () {
           $('html, body').animate({scrollTop: $('#js--080300').offset().top -20}, 1000);
          });

          $('.js--sc-080301').click(function () {
           $('html, body').animate({scrollTop: $('#js--080301').offset().top -20}, 1000);
          });
          $('.js--sc-080302').click(function () {
           $('html, body').animate({scrollTop: $('#js--080302').offset().top -20}, 1000);
          });
          $('.js--sc-080303').click(function () {
           $('html, body').animate({scrollTop: $('#js--080303').offset().top -20}, 1000);
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

          $('.js--sc-f08-12').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-12').offset().top -80}, 1000);
          });

          $('.js--sc-f08-13').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-13').offset().top -80}, 1000);
          });

          $('.js--sc-f08-14').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-14').offset().top -80}, 1000);
          });

          $('.js--sc-f08-15').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-15').offset().top -80}, 1000);
          });

          $('.js--sc-f08-16').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-16').offset().top -80}, 1000);
          });

          $('.js--sc-f08-17').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-17').offset().top -80}, 1000);
          });

          $('.js--sc-f08-18').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-18').offset().top -80}, 1000);
          });

          $('.js--sc-f08-19').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-19').offset().top -80}, 1000);
          });

          $('.js--sc-f08-20').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-20').offset().top -80}, 1000);
          });

          $('.js--sc-f08-21').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-21').offset().top -80}, 1000);
          });

          $('.js--sc-f08-22').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-22').offset().top -80}, 1000);
          });

          $('.js--sc-f08-23').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-23').offset().top -80}, 1000);
          });

          $('.js--sc-f08-24').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-24').offset().top -80}, 1000);
          });

          $('.js--sc-f08-25').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-25').offset().top -80}, 1000);
          });

          $('.js--sc-f08-26').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-26').offset().top -80}, 1000);
          });

          $('.js--sc-f08-27').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-27').offset().top -80}, 1000);
          });

          $('.js--sc-f08-28').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-28').offset().top -80}, 1000);
          });

          $('.js--sc-f08-29').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-29').offset().top -80}, 1000);
          });

          $('.js--sc-f08-30').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-30').offset().top -80}, 1000);
          });

          $('.js--sc-f08-31').click(function () {
           $('html, body').animate({scrollTop: $('#js--f08-31').offset().top -80}, 1000);
          });




});                                             /* END OF PAGE READY FUNCTION */
