export const handlePosts = async () => {
  const jsonPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
  const jsonPhotos = await fetch('https://jsonplaceholder.typicode.com/photos');

  const [responsePosts, responsePhotos] = await Promise.all([
    jsonPosts,
    jsonPhotos,
  ]);
  const responsePostsJson = await responsePosts.json();
  const responsePhotosJson = await responsePhotos.json();
  const responsePostsAndPhotosJson = responsePostsJson.map(
    (posts: {}, index: number) => {
      return { ...posts, imgUrl: responsePhotosJson[index].url };
    },
  );
  return responsePostsAndPhotosJson;
  // setPosts(responsePostsAndPhotosJson);
};
