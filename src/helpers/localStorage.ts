export const loadState = (key = 'posts')=>{
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

export const saveToLocalStorage = (key = 'posts' ,state:any) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};