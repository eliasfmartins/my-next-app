'use client'
import { useEffect, useState } from "react";
import { PageContainer, PageContent } from "./pageStyle";
import { Card } from "@/Components/Card";
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
          posts.map(({body,id,title,imgUrl}) => (
            <Card body={body} id={id} imgUrl={imgUrl} title={title} />

          ))
        ) : (
          <h1>Carregando...</h1>
        )}

      </PageContent>
    </PageContainer>
  )
}
