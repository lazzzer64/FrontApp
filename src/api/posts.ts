import type {IPost} from '../types/postInterface';

const BASE_URL = 'http://localhost:3001/posts';

export const fetchPosts = async (): Promise<IPost[]> => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Failed to fetch posts');
    return res.json();
};

export const createPost = async (post: Omit<IPost, 'id'>): Promise<IPost> => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
    });
    if (!res.ok) throw new Error('Failed to create post');
    return res.json();
};