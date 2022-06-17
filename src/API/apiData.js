const bookApi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Eio9vAe2moPUpCKBhYVX/books';

const fetchApi = async () => {
  const result = await fetch(bookApi, {
    method: 'GET',
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  }).catch((error) => error.message);
  const response = await result.json();
  return response;
};

export const addApiData = async (book) => {
  await fetch(bookApi, {
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

export const deleteApiData = async (id) => {
  await fetch(bookApi + id, {
    method: 'DELETE',
  }).catch((error) => error.message);
};

export default fetchApi;
