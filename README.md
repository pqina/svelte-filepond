# Svelte FilePond

Svelte FilePond is a handy adapter component for [FilePond](https://pqina.nl/filepond/), a JavaScript library that can upload anything you throw at it, optimizes images for faster uploads, and offers a great, accessible, silky smooth user experience.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/pqina/svelte-filepond/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/svelte-filepond.svg)](https://www.npmjs.com/package/svelte-filepond)

<img src="https://github.com/pqina/filepond-github-assets/blob/master/filepond-animation-01.gif?raw=true" width="370" alt=""/>

### Core Features

- Accepts **directories**, **files**, blobs, local URLs, **remote URLs** and Data URIs.
- **Drop files**, select on filesystem, **copy and paste files**, or add files using the API.
- **Async uploading** with AJAX, or encode files as base64 data and send along form post.
- **Accessible**, tested with AT software like VoiceOver and JAWS, **navigable by Keyboard**.
- **Image optimization**, automatic image resizing, **cropping**, and **fixes EXIF orientation**.
- **Responsive**, automatically scales to available space, is functional on both **mobile and desktop devices**.

[Learn more about FilePond](https://pqina.nl/filepond/)

---

### Also need Image Editing?

**Doka Image Editor** might be just what you're looking for. It's a Modern JavaScript Image Editor, Doka supports setting **crop aspect ratios**, **resizing**, **rotating**, **cropping**, and **flipping** images. Above all, it integrates beautifully with FilePond.

[Learn more about Doka](https://pqina.nl/doka/)

<img src="https://github.com/pqina/filepond-github-assets/blob/master/filepond_doka.gif?raw=true" width="600" alt=""/>

---

Installation:

```bash
npm install svelte-filepond filepond --save
```

Usage:

```svelte
<script>
import FilePond, { registerPlugin, supported } from 'svelte-filepond';
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// a reference to the component, used to call FilePond methods
let pond;

// pond.getFiles() will return the active files

// the name to use for the internal file input
let name = 'filepond';

// handle filepond events
function handleInit() {
	console.log('FilePond has initialised');
}

function handleAddFile(err, fileItem) {
	console.log('A file has been added', fileItem);
}
</script>

<div class="app">

	<FilePond bind:this={pond} {name}
		server="/api"
		allowMultiple={true}
		oninit={handleInit}
		onaddfile={handleAddFile}/>

</div>
```

[Read the docs for more information](https://pqina.nl/filepond/docs/patterns/frameworks/svelte/)
