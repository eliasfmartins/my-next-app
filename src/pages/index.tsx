'use client';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { InputField, PageContainer, PageContent } from '../styles/pageStyle';
import { MagnifyingGlass, X } from 'phosphor-react';
import { Context } from '@/contexts/searchContext';
import { handlePosts } from '../app/fetch';
import { Posts } from '@/Components/Posts';
import { useNewCards } from '@/contexts/newCardsContext';
import { CardProps } from '@/Components/Card';

export default function Home() {
  const { newCards } = useNewCards();

  const [posts, setPosts] = useState<CardProps[]>([]);
  const [postsPerPage, setPostsPerPage] = useState(4)
  const [allPosts, setAllPosts] = useState<CardProps[]>([])
  const [value, setValue] = useState('')

  const filteredPosts = value ? posts.filter(post => {
    return post.title.toLowerCase().includes(value.toLowerCase())
  })
    :
    posts
  const allDisplayedPosts: CardProps[] = [
    ...filteredPosts.map(card => ({ ...card, onDelete: () => handleDelete(card.id) })),
    ...newCards];

  useEffect(() => {
    const fetchData = async () => {

      const responsePostsAndPhotosJson = await handlePosts();
      setPosts(responsePostsAndPhotosJson.slice(0, postsPerPage))
      setAllPosts(responsePostsAndPhotosJson);
    };
    fetchData();
  }, [postsPerPage]);
  const { search, setSearch } = useContext(Context)

 
  const handleDelete = (postId: number) => {
    const updatePosts = allDisplayedPosts.filter((post) => post.id !== postId);
    setPosts(updatePosts);
    if (updatePosts !== allDisplayedPosts){
      setAllPosts(updatePosts)
    }
  }



  const handleInputField = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }
  useEffect(()=>{
  },[])

  return (
    <PageContainer>
      <InputField variable={search}>
        {value ? <h1>Search for: {value}</h1> : <h1>{"Your Search Here"}</h1>}
        <div className="input">
          <input type="search" onChange={(e) => handleInputField(e)} value={value} />
          <button >
            <MagnifyingGlass size={20} />
          </button>
          <button>
            <X size={20} onClick={() => setSearch(!search)} />
          </button>
        </div>
      </InputField>
      <PageContent>
        <div className='cards'>
          {allDisplayedPosts.length !== 0 ? <Posts allDisplayedPosts={allDisplayedPosts} onDelete={(postId) => handleDelete(postId)} /> : <h1>Não existem posts</h1>}
        </div>


      </PageContent>
      {filteredPosts && <button onClick={() => setPostsPerPage(pv => pv + 4)}>Load More Posts</button>}
    </PageContainer>
  );
}
