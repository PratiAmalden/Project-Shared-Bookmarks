// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

// Import functions to manage storage and generate the bookmark list UI
import { getUserIds, getData, setData } from './storage.js';
import { generateBookmarkList } from './utils.js';

// references to key DOM elements by their IDs
const userSelect     = document.getElementById('user-select');      // <select> for choosing a user
const bookmarkList   = document.getElementById('bookmark-list');    // Container to display bookmarks
const form           = document.getElementById('bookmark-form');    // The form for adding new bookmarks
const urlInput       = document.getElementById('url-input');        // Input for bookmark URL
const titleInput     = document.getElementById('title-input');      // Input for bookmark title
const descInput      = document.getElementById('description-input');// Input for bookmark description

// Tracks which user is currently selected
let currentUserId = null;

/**
 * Populate the user dropdown on page load.
 * For each user ID returned by getUserIds(), create an <option> element.
 */
function userDropdown() {
  getUserIds().forEach(userId => {
    const option = document.createElement('option');
    option.value = userId;
    option.textContent = `User ${userId}`;
    userSelect.appendChild(option);
  });
}

// Initialize the app by loading the user dropdown
userDropdown();
