import { ReducerType } from '../types/types';

type CachedState = ReducerType | undefined;

type LoadState = (key?: string) => CachedState;

export const loadState:LoadState = (key = 'posts')=>{
   try {
      const stateFromLocalStorage = localStorage.getItem(key);
      if(stateFromLocalStorage === null){
         return undefined;
      }
      return JSON.parse(stateFromLocalStorage);
   } catch(error){
      return undefined;
   }
};
type SaveToLS = (state: unknown, key?: string | undefined, ) => void;

export const saveToLocalStorage:SaveToLS = (state, key = 'posts')=> {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};