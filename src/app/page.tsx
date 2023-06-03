'use client'
import { useEffect, useState } from "react";
import { PageContainer, PageContent } from "./pageStyle";
interface Cards {
  id:number
  title: string
  body:string
  imgUrl:string
}
export default function Home() {
  const [posts, setPosts] = useState<Cards[]>([]);
  useEffect(()=> {
    handlePosts();
  },[]);
  const handlePosts = async ()=> {
    const jsonPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonPhotos = await fetch('https://jsonplaceholder.typicode.com/photos');

    const [responsePosts,responsePhotos] = await Promise.all([jsonPosts,jsonPhotos])
    const responsePostsJson = await responsePosts.json();
    const responsePhotosJson = await responsePhotos.json();
    const responsePostsAndPhotosJson = responsePostsJson.map((posts:{},index:number)=>{
      return { ...posts, imgUrl:responsePhotosJson[index].url}
    })
    setPosts(responsePostsAndPhotosJson)
  }
  return (
    <PageContainer>
      <PageContent>
      {posts ? (
          posts.map((post) => (
            <div key={post.id}>
              <img src={post.imgUrl} alt="" />
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <h1>Carregando...</h1>
        )}

      </PageContent>
    </PageContainer>
  )
}
