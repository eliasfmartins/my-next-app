/* eslint-disable prettier/prettier */
'use client';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { InputField, PageContainer, PageContent } from '../app/pageStyle';
import {  MagnifyingGlass, X } from 'phosphor-react';
import { Context } from '@/contexts/searchContext';
import { handlePosts } from '../app/fetch';
import { Posts } from '@/Components/Posts';
interface Cards {
  id: number;
  title: string;
  body: string;
  imgUrl: string;
}
export default function Home() {
  const [posts, setPosts] = useState<Cards[]>([]);
  const  [value, setValue] = useState('')
  const  filteredPosts = value?posts.filter(post => {
    return post.title.toLowerCase().includes(value.toLowerCase())
  })

  :
  posts
  useEffect(() => {
    const fetchData = async () => {

      const responsePostsAndPhotosJson = await handlePosts();
      setPosts(responsePostsAndPhotosJson);
    };
    fetchData();
 }, []);

  const {search,setSearch} = useContext(Context)
  const handleInputField = (e:ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    setValue(value)
  }
  return (
    <PageContainer>
      <InputField variable ={search}>
        {value&&<h1>Search for: {value}</h1>}
      <div className="input">
          <input type="search" onChange={(e)=> handleInputField(e) } value={value}/>
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
        {filteredPosts.length!==0?<Posts filteredPosts={filteredPosts} /> : <h1>Não existem posts</h1>}

        </div>



      </PageContent>
    </PageContainer>
  );
}
