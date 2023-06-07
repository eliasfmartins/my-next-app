/* eslint-disable prettier/prettier */
'use client';
import { useContext, useEffect, useState } from 'react';
import { InputField, PageContainer, PageContent } from './pageStyle';
import { Card } from '@/Components/Card';
import {  MagnifyingGlass, X } from 'phosphor-react';
import { Context } from '@/contexts/searchContext';
import { handlePosts } from './fetch';
interface Cards {
  id: number;
  title: string;
  body: string;
  imgUrl: string;
}
export default function Home() {
  const [posts, setPosts] = useState<Cards[]>([]);
  useEffect(() => {
    const fetchData = async () => {

      const responsePostsAndPhotosJson = await handlePosts();
      setPosts(responsePostsAndPhotosJson);
    };
    fetchData();
 }, []);

  const {search,setSearch} = useContext(Context)
  return (
    <PageContainer>
      <InputField variable ={search}>
        <h1>Hello</h1>
      <div className="input">
          <input type="text" />
          <button >
            <MagnifyingGlass size={20} />
          </button>
          <button>
            <X size={20} onClick={() => setSearch(!search)}/>
          </button>
        </div>
      </InputField>
      <PageContent>
        <div className='cards'>

        {posts ? (
          posts.map(({ body, id, title, imgUrl }) => (
            <Card key={id}
             body={body}
            id={id}
            imgUrl={imgUrl}
            title={title} />
          ))
        ) : (
          <h1>Carregando...</h1>
        )}
        </div>

      </PageContent>
    </PageContainer>
  );
}
