export function generateBookmarkList(bookmarks) {
  if (!bookmarks || bookmarks.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No bookmarks found for this user.";
    return p;
  }

  const validBookmarks = bookmarks.filter((b) => {
    const date = new Date(b.createdAt);
    return date.toString() !== "Invalid Date";
  });

  const sorted = validBookmarks
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const ul = document.createElement("ul");

  sorted.forEach((bookmark) => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = bookmark.url;
    link.textContent = bookmark.title;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const description = document.createElement("p");
    description.textContent = bookmark.description;

    const timestamp = document.createElement("small");
    const date = new Date(bookmark.createdAt);
    timestamp.textContent = date.toString() !== "Invalid Date"
      ? `Created at: ${date.toLocaleString()}`
      : "Created at: Unknown";


    li.appendChild(link);
    li.appendChild(description);
    li.appendChild(timestamp);
    ul.appendChild(li);
  });

  return ul;
}