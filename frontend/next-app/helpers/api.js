import {posts} from './posts';

export default async function fetchPosts() {

  //   console.log(posts);
  posts.forEach(post => {
    post.date = post.date.replace(/-/g, "/");
    post.year = post.date.substring(0, 4);
    post.month = post.date.substring(5, 7);
    post.day = post.date.substring(8, 10);
  });
//   console.log(posts);
  return posts;
}
