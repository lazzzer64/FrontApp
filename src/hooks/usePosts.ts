import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPosts, createPost } from '../api/posts';

export const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });
};

export const useCreatePost = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createPost,
        onSuccess: (newPost) => {
            // Оптимистичное обновление (опционально)
            // queryClient.setQueryData<IPost[]>(['posts'], (old) => [...(old || []), newPost]);

            // Или просто инвалидируем кеш, чтобы перезапросить
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
        onError: (error) => {
            console.error('Ошибка создания поста:', error);
        },
    });
};