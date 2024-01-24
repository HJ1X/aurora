import { create } from "zustand";
import { GameQuery } from "./types";

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

interface AvailableGamesCountStore {
  count?: number;
  setCount: (count: number) => void;
}

const useAvailableGamesCountStore = create<AvailableGamesCountStore>((set) => ({
  setCount: (count) => set(() => ({ count: count })),
}));

export { useGameQueryStore, useAvailableGamesCountStore };
