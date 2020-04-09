// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = async function() {
  return await fetch("http://localhost:1337/posts", {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOGNlMTNlMjQwNmMzMDA4NTRiMTQzMSIsImlhdCI6MTU4NjI5MjAxMSwiZXhwIjoxNTg4ODg0MDExfQ.Wicl1PfLf1tWG6Dq8c6SjjtKoj78yX0qOM76HyGryWA",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => {
      console.log(error);
      return error;
    });
};

export default posts;
