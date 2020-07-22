export const createBookmark = (bookmarkProps)=> {
    let bookmarks=[];
    if(localStorage.getItem('bookmark')){
       bookmarks=[... JSON.parse(localStorage.getItem('bookmark'))];
    }
    if(!bookmarks.some(bookmark=>bookmark.url === bookmarkProps.url)){
        bookmarks.push(bookmarkProps)
    }else{
        console.log('bookmark already exists')
    }
    localStorage.setItem('bookmark',JSON.stringify(bookmarks));
};

export default {createBookmark}