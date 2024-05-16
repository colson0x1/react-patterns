import { useState } from 'react';

export default function SearchableList({ items, children }) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  // Problem now we're facing is that this Searchable list is great at searching
  // stuff but not that great at outputting stuff.
  // And that it should be usable with all kinds of data in all kinds of formats.
  // Hence, it can't output that data in a correct way.
  // Because for simple strings, we might wanna output the stinrg text like
  // this i.e {item.toString()}
  // And for more complex objects, we might wanna output a more complex markup.
  // And that's where Render Props can now help us!

  // In this situation, in this SearchableList component here, this feature of
  // Render Props allows us to get that concrete rendering logic. So how
  // something should be rendered out of this component!
  return (
    <div className='searchable-list'>
      <input type='search' placeholder='Search' onChange={handleChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
