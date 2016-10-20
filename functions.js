var $userTitleInput = $('.titleInput');
var $userURLInput = $('.urlInput');

$('.enter').on('click', function() {
  var title = $userTitleInput.val();
  var url = $userURLInput.val();
  $userTitleInput.val("");
  $userURLInput.val("");

  checkEnter()

  $(".bookmarks").append("<div class='card'><h2 class='bookmarkTitle'>"+title+"</h2><p class='bookmarkURL'>"+url+"</p><button class='bookmarkRead'>Read</button><button class='bookmarkRemove'>Delete</button></div>");

  updateCardCounter();
});

$('.bookmarks').on('click', '.bookmarkRead', function() {
  $(this).closest('div').toggleClass('read');
  updateCardCounter();
});

$('.bookmarks').on('click', '.bookmarkRemove', function() {
  $(this).closest('div').remove();
  updateCardCounter();
});

$('.clearRead').on('click', function() {
  $('.read').remove();
  updateCardCounter();
});

$(':text').on('keyup', function() {
  checkEnter();
});

function checkEnter() {
  if ($userTitleInput.val() === "" || $userURLInput.val() === "" ) {
    $('.enter').prop('disabled', true);
  } else {
    $('.enter').prop('disabled', false);
  }
}

function updateCardCounter() {
  $('.cardCounter').text($('.card').length);
  $('.readCounter').text($('.read').length);
  $('.unreadCounter').text($('.card').length)- ($('.read').length);
}

checkEnter();
updateCardCounter();
