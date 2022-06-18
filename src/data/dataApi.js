const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cMttkmMxhyqVcWCKtnfZ/books/';

const HEADERS = {
  'content-type': 'application/json; charset=UTF-8',
};

export const getData = async () => {
  const response = await fetch(API_URL, {
    method: 'GET',
    HEADERS,
  }).catch((error) => error.message);
  const resp = await response.json();
  const data = Object.keys(resp).map((key) => {
    const book = resp[key][0];
    book.id = key;
    console.log('book', book);
    return book;
  });
  return data;
};

export const addData = async (book) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  }).catch((err) => err.message);
};

export const deleteData = async (id) => {
  await fetch(API_URL + id, {
    method: 'DELETE',
    HEADERS,
    body: JSON.stringify({
      item_id: id,
    }),
  }).catch((err) => err.message);
};
