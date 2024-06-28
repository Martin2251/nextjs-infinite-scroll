"use client";
import { useState } from 'react';


export default function PostList({ initialPosts }: PostListProps) {
    const [offset, setOffset] = useState(POSTS_PER_PAGE);
    const [posts, setPosts] = useState<Post[]>(initialPosts);
    const [hasMoreData, setHasMoreData] = useState(true);

  
    return (
      <>
        <div className="...">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="...">
          {hasMoreData ? (
            <button
              className="..."
              onClick={loadMorePosts}
            >
              Load More Posts
            </button>
          ) : (
            <p className="...">No more posts to load</p>
          )}
        </div>
      </>
    );
  }