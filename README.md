# Share on Mastodon button

A simple script to provide a "share on mastodon" button without any styles. 
To use it, add the script and put a link where you want to share to mastodon.

```HTML
    <a href="#" target="mastodon" class="mastodon-share">Share to Mastodon</a>
    <script src="mastodon-share.js"></script>

```

The first time users click the share button, it asks for their mastodon instance and stores it in local storage. Subsequently you can just click the link.
