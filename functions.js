var $userTitleInput = $('.titleInput')
var $userURLInput = $('.URLInput')
var $enterButton = $('.enter')

$('.enter').on('click', function() {
  var title = $userTitleInput.val()
  var $title = $('.bookmarkTitle')
  var URL = $userURLInput.val()
  var $URL = $('.bookmarkURL')
  $title.text(title)
  $URL.text(URL)
  console.log
})
