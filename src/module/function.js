export const createBookmark = (bookmarkProps) => {
    let bookmarks = [];
    if (localStorage.getItem('bookmark')) {
        bookmarks = [...JSON.parse(localStorage.getItem('bookmark'))];
    }
    if (!bookmarks.some(bookmark => bookmark.url === bookmarkProps.url)) {
        bookmarks.push(bookmarkProps)
    } else {
        console.log('bookmark already exists')
    }
    localStorage.setItem('bookmark', JSON.stringify(bookmarks));
};
export const DateFormatter = (str) => {
    const date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [day,mnth,date.getFullYear() ].join("-");
}

export const LanguageClass = (str) => {
    str = str.toLowerCase();
    switch (str) {
        case 'typescript':
            return 'skyblue';
        case 'css':
            return 'green';
        case 'html':
            return 'orange';
        case 'javascript':
            return 'yellow';
        case 'angular':
            return 'red';
        case 'react':
            return 'blue';
        default:
            return ''
    }
}


export default {
    createBookmark,
    DateFormatter,
    LanguageClass
}