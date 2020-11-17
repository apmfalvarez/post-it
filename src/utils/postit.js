import 'whatwg-fetch';

const Postit = {};
const baseUrl = new URL('http://localhost:4000/api');


Postit.getPosts = () => {
  let url = `${baseUrl}/posts`;
  return fetch(url, {
    method: 'GET'
  }).then(response => {
    if(response.ok) {
      return response.json().then(jsonResponse => {
      const posts = jsonResponse.posts;
      return posts;
    });
  }});
};

Postit.addPost = (post) => {
  let url = `${baseUrl}/posts`;
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({post: post})
  }).then(response => {
    if(response.ok) {
      return response.json().then(jsonResponse => {
      const post = jsonResponse.post;
      return post;
    });
  }});
}

Postit.deletePost = (post) => {
  let url = `${baseUrl}/posts/${post.id}`;
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({post: post})
  }).then(response => {
    if(response.ok) {
      return post;
    }
  })
}

export default Postit;