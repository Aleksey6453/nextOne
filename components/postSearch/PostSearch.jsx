'use client';

import { useState } from "react";
import { getPostsBySearch } from "../../app/services";

// onSearch: (value) => void

const PostSearch = ({onSearch}) => {
    const [search, setSearch] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const posts = await getPostsBySearch(search)

        onSearch(posts)
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" 
             placeholder="search..."
             value={search}
             onChange={e => setSearch(e.target.value)} />
      <button type="submit">Search</button>       
    </form>
  )
}

export {PostSearch}
