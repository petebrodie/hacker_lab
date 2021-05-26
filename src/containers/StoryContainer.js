import React, { useState, useEffect } from 'react';
import StoryItem from './StoryItem';
import SearchBar from '../components/SearchBar.js'

const StoryContainer = () => {

    const [stories, setStories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("") 
    const [filteredStories, setFilteredStories] = useState([]);

    
    useEffect(() => {
        getStories()
    }, [])

    useEffect(() => {
        filterStories()
    }, [searchTerm])
    

    const getStories = () => {
      fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
      .then(res => res.json())
      .then(data => {
          const newData = data.slice(0, 10)
          const newFetch = newData.map(id => {
              return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
              .then(res => res.json())
          })
          Promise.all(newFetch)
          .then(data => {
              setStories(data)
              setFilteredStories(data)
          })
      })
      
    }

    const handleSearchTermChange = (evt) => {
        setSearchTerm(evt.target.value)
    }

    const filterStories = () => {
        setFilteredStories(stories.filter(story => {
            return story.title.includes(searchTerm)
        }
        ));
    } 

    const storyItems = filteredStories.map(story => {
        return (
                <StoryItem
                    title = {story.title}
                    key = {story.id}
                    url = {story.url}
                />
        )
    })

    return (
        <>
            <SearchBar handleSearchTermChange={handleSearchTermChange} searchTerm={searchTerm}/>
            <ul>
                {storyItems}
            </ul>
        </> 
    )
    
}

export default StoryContainer;