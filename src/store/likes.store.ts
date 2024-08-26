
import { getLikes, removeLike, addLike } from '@/actions';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
  likes: number;
  liked: boolean;
  likedOnSession: boolean;
  loaded: boolean;
  loading: boolean;

  loadLikes: () => void;
  addLike: () => void;
  removeLike: () => void;
};

export const useLikesStore = create<Store>()(
  persist((set, get) => ({
    likes: 0,
    liked: false,
    likedOnSession: false,
    loaded: false,
    loading: true,

    loadLikes: async () => {
      const likesData = await getLikes();
      if (likesData && typeof likesData.count === 'number') {
        set({ 
          likes: likesData.count,
          likedOnSession: false,
          loaded: true,
          loading: false
        });
      } else {
        console.log('Error al cargar los likes desde Firebase');
        set({ 
          likes: 0,
        });
      }
    },
    addLike: async () => {
      set({ loading: true });
      addLike();
      set((state) => ({ 
        likes: state.likes + 1, 
        liked: true,
        likedOnSession: true,
        loading: false
      }));
    },
    removeLike: async () => {
      set({ loading: true });

      removeLike();
      set((state) => ({
        likes: state.likes > 0 ? state.likes - 1 : 0,
        liked: false,
        loading: false
      }));
    },
  }),
  {
    name: 'likes-counter'
  }
)
);
