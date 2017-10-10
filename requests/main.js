// boilerplate AJAX GET request
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

// boilerplate AJAX POST request
const xhr = new XMLHttpRequest()
const url = 'https://api-to-call.com/endpoint'
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json'
xhr.onreadystatechange = function() {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response)
  }
}
xhr.open('POST', url)
xhr.send(data)

// example main.js for AJAX request to expand and shorten a URL (Google URL Shortener API)
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
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val()
  const data = JSON.stringify({longUrl: urlToShorten});
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'json'
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
    $responseField.append('<p>Your shortened url is: </p><p>' + xhr.response.id + '</p>');
		}
  }
  xhr.open('POST', urlWithKey)
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data)
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
