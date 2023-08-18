
// labels and shizzle…
let key = 'mastodon-instance';
let prompt = 'Please tell me your Mastodon instance';
let editmessage = 'Edit your Mastodon instance';

// get the link from the DOM
const button = document.querySelector('.mastodon-share');

// Ask the user for the instance name and set it…
const setinstance = _ => {
    let instance = window.prompt(prompt);
    localStorage.setItem(key, instance);
}

// create and insert the edit link
const createeditlink = _ => {
    let editlink = document.createElement('a');
      editlink.href = '#';
      editlink.innerText = '✏️';
      editlink.classList.add('edit');
      editlink.title = editmessage;
      editlink.ariaLabel = editmessage;
      editlink.addEventListener('click', (e) => {
          e.preventDefault();
          localStorage.removeItem(key);
          setinstance();
      });
      button.insertAdjacentElement('afterend', editlink);
}

// if there is  a value in localstorage, create the edit link
if(localStorage.getItem(key)) {
    createeditlink();
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