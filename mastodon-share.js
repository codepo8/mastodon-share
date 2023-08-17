const button = document.querySelector('.mastodon-share');
button.addEventListener('click', (e) => {
if(localStorage.getItem('mastodon-instance')) {
  button.href = `https://${localStorage.getItem('mastodon-instance')}/share?text=${encodeURIComponent(document.title)}%0A${encodeURIComponent(location.href)}`;
} else {
    e.preventDefault();
    let instance = window.prompt('Please tell me your Mastodon instance');
    localStorage.setItem('mastodon-instance', instance);
}
});