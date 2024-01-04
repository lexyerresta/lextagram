import { Models } from 'appwrite';
import React from 'react'

type SearchResultsProps = {
    isSearchFetching: boolean;
    searchedPosts: Models.document[];

}

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultsProps) => {
    if (isSearchFetching) return <Loader />

    if (searchPosts.documents.length > 0) {
        return (
            <GridPostList />
        )
    }
    
    return (
        <div>SearchResults</div>
    )
}

export default SearchResults