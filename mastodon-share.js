
// I got the key, I got the secret…
let key = 'mastodon-instance';

// get the link from the DOM
const button = document.querySelector('.mastodon-share');

// labels and texts from the link
let prompt = button.dataset.prompt || 'Please tell me your Mastodon instance';
let editlabel = button.dataset.editlabel || 'Edit your Mastodon instance';
let edittext = button.dataset.edittext || '✏️';

// Ask the user for the instance name and set it…
const setinstance = _ => {
    let instance = window.prompt(prompt);
    if(instance) {
        localStorage.setItem(key, instance);
        createeditbutton();
    }
}

// create and insert the edit link
const createeditbutton = _ => {
    if (button.querySelector('.mastodon-edit')) return;
    let editlink = document.createElement('button');
      editlink.innerText = '✏️';
      editlink.classList.add('mastodon-edit');
      editlink.title = editlabel;
      editlink.ariaLabel = editlabel;
      editlink.addEventListener('click', (e) => {
          e.preventDefault();
          localStorage.removeItem(key);
          setinstance();
      });
      button.insertAdjacentElement('afterend', editlink);
}

// if there is  a value in localstorage, create the edit link
if(localStorage.getItem(key)) {
    createeditbutton();
}  

// When a user clicks the link
button.addEventListener('click', (e) => {
// If the user has already entered their instance and it is in localstorage
// write out the link href with the instance and the current page title and URL
if(localStorage.getItem(key)) {
  button.href = `https://${localStorage.getItem(key)}/share?text=${encodeURIComponent(document.title)}%0A${encodeURIComponent(location.href)}`;
// otherwise, prompt the user for their instance and save it to localstorage
} else {
    e.preventDefault();
    setinstance();
}
});