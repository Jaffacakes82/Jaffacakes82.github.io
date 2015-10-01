$(document).ready(function() {
	$('#loading-frame').hide();

	$('#go').click(function(){
		$('#go').hide();
		$('#loading-frame').show();
		grabPlaylist();

		setTimeout(grabPlaylist, 3600000)
	})
})

function grabPlaylist()
{
	$('#spotify-frame').hide();
	$('#loading-frame').show();
	var iframeMarkup = '<iframe src="https://embed.spotify.com/?uri=REPLACE" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>';

    OAuth.initialize('R5rTO8oc_CELsgldvNwDTIovI4I');

    //Example with Spotify with the cache option enabled
    OAuth.popup('spotify', {
        cache: true
    }).done(function(spotify) {
        //make API calls with `spotify`
        spotify.get('https://api.spotify.com/v1/browse/categories').done(function(data) {
            var length = data.categories.items.length;
            var index = Math.floor(Math.random() * (length - 1)) + 0;
			var category = data.categories.items[index].id;

			spotify.get('https://api.spotify.com/v1/browse/categories/' + category + '/playlists').done(function(data){
				var length = data.playlists.items.length;
	            var index = Math.floor(Math.random() * (length - 1)) + 0;
				var playlist = data.playlists.items[index].uri;

				iframeMarkup = iframeMarkup.replace("REPLACE", playlist)
				$('#spotify-frame').show();
				$('#spotify-frame').html(iframeMarkup);
				$('#loading-frame').hide();
			}).fail(function(err) {

			})
        }).fail(function(err) {

        })
    }).fail(function(err) {
        //todo when the OAuth flow failed
    })
}
