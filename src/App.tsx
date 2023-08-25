import { ContentContextProvider } from './contexts/ContentContext';
import Header from './components/header/Header';
import Content from './components/content/Content';

const App = () => {
  return (
    <div className='w-screen h-screen bg-gradient-to-tl from-bluedark to-darkred body-font'>
      <ContentContextProvider>
        <Header />
        <Content />
      </ContentContextProvider>
    </div>
  );
};

export default App;
