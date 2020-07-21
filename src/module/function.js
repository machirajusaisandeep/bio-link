export const createBookmark = (bookmarkProps)=>{
    browser.bookmarks.create({
        ...bookmarkProps
    });
}

