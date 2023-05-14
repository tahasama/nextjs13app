export interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoParamsProps {
  params: { id: string };
}

export interface UserParamsProps {
  params: { userId: string };
}

export interface SearchProps {
  params: { searchTerm: string };
}

export type User = {
  _id: number;
  name: string;
  email: number;
};

export type UserNext = {
  _id: number;
  name: string;
};
