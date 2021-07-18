
export type ParamsType = {
  id?: string | undefined;
};


export type FetchedPosts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Comments = {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
};

export type FavouriteInitialState ={
    favouriteArticles: FetchedPosts[];
    favouriteComments:  Comments[];
  }

  export type CommentsInitialState = {
    fetchedComments: Comments[];
    loading: boolean;
    error: string;
  }

   export type ArticlesInitialState = {
    fetchedArticles: FetchedPosts[];
    loading: boolean;
    error: string;
  }


export type ReducerType = {
  comments: CommentsInitialState;
  articles: ArticlesInitialState;
  favourite: FavouriteInitialState
};