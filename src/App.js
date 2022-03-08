import { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput';

const api = 'https://kitsu.io/api/edge/';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    if (text.length >= 3) {
      console.log(text);
      fetch(`${api}anime?filter[text]=${text}&page[limit]=12`)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        });
    }
  }, [text]);

  return <SearchInput value={text} onChange={(search) => setText(search)} />;
}

export default App;
