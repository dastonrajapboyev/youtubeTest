// useSearch.js
import {useState} from 'react';

// Create a custom hook that handles the search logic
export const useSearch = () => {
  // Use the useState hook to manage the search query state
  const [searchQuery, setSearchQuery] = useState('');

  // Define a function that updates the search query state
  const onSearch = (query) => {
    setSearchQuery(query);
    // Do something with the query
  };

  // Return the search query state and the onSearch function
  return [searchQuery, onSearch];
};
export default useSearch