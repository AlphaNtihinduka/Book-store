const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cMttkmMxhyqVcWCKtnfZ/books/';

export const fetchData = async () => {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  }).catch((error) => error.message);
  const resp = await response.json();
  const data = Object.keys(resp).map((key) => {
    const book = resp[key][0];
    book.id = key;
    return book;
  });
  return data;
};

export const addData = async (book) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  }).catch((error) => error.message);
};

export const deleteData = async (id) => {
  await fetch(API_URL + id, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  }).catch((error) => error.message);
};
