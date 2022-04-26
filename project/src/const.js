export const EndPoint = {
  Users: 'https://jsonplaceholder.typicode.com/users',
  Posts: 'https://jsonplaceholder.typicode.com/posts',
  Comments: 'https://jsonplaceholder.typicode.com/comments',
};

export const AppRoute = {
  Home: '/',
  Posts: '/user/:id',
  PostsId: '/user/',
  AllPosts: '/user/all',
  Comments: '/comments/:id',
  CommentsId: '/comments/',
};

export const ErrorMessage = {
  FetchCurrentUser: 'Не удалось загрузить данные пользователя',
  FetchCurrentPost: 'Не удалось загрузить пост',
  FetchComments: 'Не удалось загрузить комментарии',
  PostComment: 'Не удалось отправить комментарий',
  FetchPosts: 'Не удалось загрузить посты',
  FetchUsers: 'Не удалось загрузить пользователей',
};

export const EmptyMessage = {
  Start: 'Добро пожаловать. Для получения постов выберите пользователя',
  Posts: 'Пользователь пока не написал ни одного поста',
  Comments: 'Не удалось загрузить пост',
};
