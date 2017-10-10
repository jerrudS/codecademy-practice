// refactored expandUrl function to JQuery AJAX request format

function expandUrl() {
	const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  $.ajax({
    url: urlToExpand,
    type: 'GET',
    dataType: 'json',
    success(response) {
      $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
    },
    error(jqXHR, status, errorThrown) {
      console.log(jqXHR)
    }
  });
}
