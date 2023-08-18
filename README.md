# Share on Mastodon button

A simple script to provide a "share on mastodon" button without any styles. 
To use it, add the script and put a link where you want to share to mastodon.

I've made all the things you want to show to the user editable in the link.

```HTML
    <a href="#" rel="noreferrer noopener" 
        target="mastodon" 
        data-prompt="Please tell me your Mastodon instance" 
        data-edittext="✏️" 
        data-editlabel="Edit your Mastodon instance" 
        class="mastodon-share">
        Share to Mastodon
    </a>
    <script src="mastodon-share.js"></script>
```

The first time users click the share button, it asks for their mastodon instance and stores it in local storage. Subsequently you can just click the link. 

You also get an edit link next to the share button to edit your instance in case you made a mistake.

[See it in action](https://codepo8.github.io/mastodon-share/)
