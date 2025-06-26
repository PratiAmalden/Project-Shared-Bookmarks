// renderBookmarks.test.js
const { generateBookmarkList } = require("./utils.js");

describe("generateBookmarkList", () => {
  it("returns <p> when empty", () => {
    const el = generateBookmarkList([]);
    expect(el.tagName).toBe("P");
    expect(el.textContent).toBe("No bookmarks found for this user.");
  });

  it("returns sorted <ul> list when given bookmarks", () => {
    const bookmarks = [
      {
        title: "Old",
        url: "#1",
        description: "desc1",
        createdAt: "2020-01-01T00:00:00.000Z",
      },
      {
        title: "New",
        url: "#2",
        description: "desc2",
        createdAt: "2025-01-01T00:00:00.000Z",
      },
    ];
    const ul = generateBookmarkList(bookmarks);
    const links = ul.querySelectorAll("a");
    expect(ul.tagName).toBe("UL");
    expect(links[0].textContent).toBe("New");
    expect(links[1].textContent).toBe("Old");
  });
});
