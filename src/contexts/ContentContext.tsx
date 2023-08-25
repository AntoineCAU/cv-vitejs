import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export type ContentType = 'Abilities' | 'Soft Skills' | 'Hobbies';

interface ContentContext {
  content: ContentType;
  setContent: Dispatch<SetStateAction<ContentType>>;
}

interface ProviderProps {
  children: ReactNode;
}

const initialValue: ContentContext = {
  content: 'Abilities',
  setContent: () => {},
};

export const ContentContext = createContext<ContentContext>(initialValue);

export const ContentContextProvider = ({
  children,
}: ProviderProps): JSX.Element => {
  const [content, setContent] = useState<ContentType>('Abilities');

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};
