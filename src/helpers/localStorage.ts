export const loadState: (key?: string) => undefined | string = (key = 'posts')=>{
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

export const saveToLocalStorage: (key: string | undefined, state: unknown) => void = (key = 'posts' ,state:unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};