$(document).ready(function () {
    $('.navbar-nav li .dropdown-menu .dropdown-item').on('click', function (e) {
        $(this).addClass('active').siblings('.dropdown-item').removeClass('active');
        // $(this).parent('.dropdown-menu').addClass('show');
        // $(this).parents('.dropdown-toggle').attr('aria-expanded', 'true');
        // $(this).parents('.dropdown').addClass('show');
    });
    $('.navbar-nav li.dropdown').hover(function(e) {
        $(this).stop(true, true).delay(400).addClass('show').find('.dropdown-toggle').attr('aria-expanded', 'true').siblings('.dropdown-menu').addClass('show')
    }, function(e) {
        $(this).stop(true, true).delay(400).removeClass('show').find('.dropdown-toggle').attr('aria-expanded', 'false').siblings('.dropdown-menu').removeClass('show')
    })

    $('.btn-conversation').on('click', function(e) {
        e.preventDefault()
        var t = $(this).data('target')
        var s = '.score-table--expand:not(#' + t + ')'
        $(s).stop(true, true).slideUp(200)
        $('#' + t).stop(true, true).slideToggle(400)
    })
})
