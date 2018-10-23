$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()

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

    $('.fp--comment-reply').on('click', function(e) {
        e.preventDefault()
        var html = '<div class="fp--comment-response"><form action=""><div class="fp--comment-response-block"><img src="img/avatar.jpeg" alt="User" class="fp--comment-user-img"><div class="form-group"><label for="commentReply" class="sr-only">Write your reply</label><input class="form-control" id="commentReply" type="text" placeholder="Write your reply here"></div><input type="submit" value="Send" class="btn btn-brand"></div></form></div>'
        var parent = $(this).parent('.fp--comment-meta')
        $(html).insertAfter(parent)
    })

    $('#addKeyword').on('keypress', function(e) {
        if(e.keyCode !== 13) {
            return
        }
        e.preventDefault()
        var val = e.target.value
        var html = '<span class="cf--keyword"><a class="cf--keyword-remove" onclick="removeKeyword(this)">&times;</a>' + val + '</span>'
        $(this).siblings('.cf--keywords-container').append(html)
        $(this).val('')
    })

    $('.cf--keyword-remove').on('click', function(e) {
        e.preventDefault()
        $(this).parent('.cf--keyword').remove()
    })
})

function removeKeyword(_this) {
    // console.log('this', _this);
    $(_this).parent('.cf--keyword').remove()
}
