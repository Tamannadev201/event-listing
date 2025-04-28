import { create } from 'zustand';

const useBookmarkStore = create((set, get) => ({
  bookmarks: [],
  addBookmark: (event) =>
    set((state) => ({
      bookmarks: [...state.bookmarks, event],
    })),
  removeBookmark: (id) =>
    set((state) => ({
      bookmarks: state.bookmarks.filter((e) => e.id !== id),
    })),
  isBookmarked: (id) => {
    const { bookmarks } = get();
    return bookmarks.some((e) => e.id === id);
  },
}));

export default useBookmarkStore;
