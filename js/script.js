$(document).ready(function() {
    // Toggle additional info on home page
    $('#learnMoreBtn').on('click', function() {
        $('#moreInfo').slideToggle();  // jQuery effect
    });

    // Simple smooth scroll for any in-page links (if you add them later)
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600);
        }
    });
});
