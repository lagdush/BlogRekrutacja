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

export type ReducerType = {
  comments: {
    fetchedComments: Comments[];
    loading: false;
    error: string;
  };
  articles: {
    fetchedArticles: FetchedPosts[];
    loading: false;
    error: string;
  };
  favourite: {
    favouriteArticles: FetchedPosts[];
    favouriteComments: Comments[];
  }
};