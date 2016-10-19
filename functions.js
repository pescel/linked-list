var $userTitleInput = $('.titleInput')
var $userURLInput = $('.urlInput')
var $enterButton = $('.enter')

$('.enter').on('click', function() {
  var title = $userTitleInput.val()
  var $title = $('.bookmarkTitle')

  var url = $userURLInput.val()
  var $url = $('.bookmarkURL')
  //$url.text(url)
  //$title.text(title)

  $userTitleInput.val("")
  $userURLInput.val("")
  $(".bookmarks").append("<div class='card'><h2 class='bookmarkTitle'>"+title+"</h2><p class='bookmarkURL'>"+url+"</p><button class='bookmarkRead'>Read</button><button class='bookmarkRemove'>Delete</button></div>")
})
