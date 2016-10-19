var $userTitleInput = $('.titleInput');
var $userURLInput = $('.urlInput');
var $enterButton = $('.enter');

$('.enter').on('click', function() {
  var title = $userTitleInput.val();
  // var titleLength = $userTitleInput.val.length()
  // var $cardTitle = $('.bookmarkTitle');
  var url = $userURLInput.val();
  // var $cardUrl = $('.bookmarkURL');
  $userTitleInput.val("");
  $userURLInput.val("");

  $(".bookmarks").append("<div class='card'><h2 class='bookmarkTitle'>"+title+"</h2><p class='bookmarkURL'>"+url+"</p><button class='bookmarkRead'>Read</button><button class='bookmarkRemove'>Delete</button></div>");

  updateCardCounter()

});

$('.bookmarks').on('click', '.bookmarkRead', function() {
  $(this).toggleClass('read');
});

$('.bookmarks').on('click', '.bookmarkRemove', function() {
  $(this).closest('div').remove();
});

$(':text').on('keyup', function() {
  check_enter();
});

function check_enter() {
  if ($userTitleInput.val() === "" || $userURLInput.val() ==="" ) {

      $('.enter').prop('disabled', true);
    } else {
      $('.enter').prop('disabled', false);
    }
}

  function updateCardCounter() {
    $('.cardCounter').text($('.card').length)
  }

check_enter()
updateCardCounter()
