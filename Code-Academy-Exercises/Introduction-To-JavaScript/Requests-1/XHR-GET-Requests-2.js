const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}
xhr.open('GET', url);
xhr.send();

// it's best practice to name our XHR variable xhr;
// I learned how to write the boilerplate code for an AJAX GET request using an XHR object;
