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

  const [postsPerPage, setPostsPerPage] = useState(4);
  const [allPosts, setAllPosts] = useState<CardProps[]>([]);
  const [value, setValue] = useState('');

  const { search, setSearch } = useContext(Context);

  const filteredPosts = value
    ? allPosts.filter(post => post.title.toLowerCase().includes(value.toLowerCase()))
    : allPosts;

  const displayedPosts: CardProps[] = [
    ...filteredPosts.slice(0, postsPerPage).map(card => ({
      ...card,
      onDelete: () => handleDelete(card.id)
    })),
    ...newCards
  ];

  useEffect(() => {
    const fetchData = async () => {
      const responsePostsAndPhotosJson = await handlePosts();
      setAllPosts(responsePostsAndPhotosJson);
    };
    fetchData();
  }, []);

  const handleDelete = (postId: number) => {
    const updatedPosts = allPosts.filter(post => post.id !== postId);
    setAllPosts(updatedPosts);
  };

  const handleInputField = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const loadMorePosts = () => {
    setPostsPerPage(prevPostsPerPage => prevPostsPerPage + 4);
  };

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
          {displayedPosts.length !== 0 ? (
            <Posts allDisplayedPosts={displayedPosts} onDelete={(postId) => handleDelete(postId)} />
          ) : (
            <h1>Não existem posts</h1>
          )}
        </div>
      </PageContent>
      {filteredPosts.length > postsPerPage && <button onClick={loadMorePosts}>Load More Posts</button>}
    </PageContainer>
  );
}
