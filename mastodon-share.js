// Grab link from the DOM
const button = document.querySelector('.mastodon-share');

// When a user clicks the link
button.addEventListener('click', (e) => {

// If the user has already entered their instance and it is in localstorage
// write out the link href with the instance and the current page title and URL
if(localStorage.getItem('mastodon-instance')) {
  button.href = `https://${localStorage.getItem('mastodon-instance')}/share?text=${encodeURIComponent(document.title)}%0A${encodeURIComponent(location.href)}`;

// otherwise, prompt the user for their instance and save it to localstorage
} else {
    e.preventDefault();
    let instance = window.prompt('Please tell me your Mastodon instance');
    localStorage.setItem('mastodon-instance', instance);
}
});