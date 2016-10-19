var $userTitleInput = $('.titleInput')
var $userURLInput = $('.urlInput')
var $enterButton = $('.enter')

$('.enter').on('click', function() {
  var title = $userTitleInput.val()
  var $title = $('.bookmarkTitle')
  var url = $userURLInput.val()
  var $url = $('.bookmarkURL')
  $title.text(title)
  $url.text(url)
  $userTitleInput.val("")
  $userURLInput.val("")
  console.log($url)
})
