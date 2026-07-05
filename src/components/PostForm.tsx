import "../css/main/postForm/PostForm.css"
import "../css/main/postForm/postFromTitle.css"
import "../css/main/postForm/submit.css"

import {useState} from 'react';
import TextAreaField from './TextAreaField';
import {useCreatePost} from '../hooks/usePosts';


const PostForm = () => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const createPostMutation = useCreatePost();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !text.trim()) {
            alert('Заполните все поля');
            return;
        }

        createPostMutation.mutate(
            {title: title.trim(), content: text.trim()},
            {
                onSuccess: () => {
                    setTitle('');
                    setText('');
                },
            }
        );
    };

    return (
        <form className="postform"
              onSubmit={handleSubmit}
        >
            <input
                className="postform-title"
                placeholder="Название поста"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={createPostMutation.isPending}
            />
            <TextAreaField
                value={text}
                onChange={setText}
                // disabled={createPostMutation.isPending}
            />
            <button
                type="submit"
                className="submit"
                disabled={createPostMutation.isPending}
            >
                {createPostMutation.isPending ? 'Отправка...' : 'Создать пост'}
            </button>
            {createPostMutation.isError && (
                <div className="error">Ошибка: {createPostMutation.error?.message}</div>
            )}
        </form>
    );
};

export default PostForm;