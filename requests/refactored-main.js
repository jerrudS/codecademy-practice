// refactored expandUrl function to JQuery AJAX GET request format

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

// refactored above code to $.get() format
function expandUrl() {
	const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  $.get(urlToExpand, response => {
  $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
  }, 'json');
}

// refactored shortenUrl function to JQuery AJAX POST request format
function shortenUrl() {
	const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val()
  $.ajax({
    url: urlWithKey,
    type: 'POST',
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    success(response) {
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    },
    error(jqXHR, status, errorThrown) {
      console.log(jqXHR)
    }
  });
}
