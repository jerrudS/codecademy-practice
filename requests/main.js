// boilerplate AJAX request
const xhr = new XMLHttpRequest()
const url = 'https://api-to-call.com/endpoint'
xhr.responseType = 'json'
xhr.onreadystatechange = function(){
  if(xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response)
  }
}
xhr.open('GET', url)
xhr.send()

// example main.js for AJAX request to expand a shortened URL (Google URL Shortener API)
// Include data for accessing Google APIs

const apiKey = 'AIzaSyD1MGM3V3KooE0QZmmzGBK6uzfxVn5zt2c';

const url = 'https://www.googleapis.com/urlshortener/v1/url'
// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
	const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
    $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
		}
  }
  xhr.open('GET', urlToExpand)
  xhr.send()
}

function shortenUrl() {

}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);
