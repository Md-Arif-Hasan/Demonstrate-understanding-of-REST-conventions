import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Card from '../components/Card';
import { getAllStories } from "../../services/Stories";
import './stories.css';
import HeroSection from '../components/HeroSection';

const StoryDetail = () => {
    const [story, setStory] = useState([]);
    const [result, setResult] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await getAllStories(pageNumber);
                const newStories = response.data.data || [];
                
                setStory((prevStories) => [...prevStories, ...newStories]);
                setResult(response.data);

            } catch (error) {
                console.error('Error fetching story:', error);
            }
        };

        fetchStory();
    }, [pageNumber]);


    const setNewPage = (pageNumber) => {
        console.log(pageNumber);
        setPageNumber(pageNumber + 1);
    }

    return (

        <div>
            <div className='flex flex-col justify-center items-center'>
                <HeroSection />

                {story.length > 0 ? (
                    <>
                        {story.map((story) => (
                            <Card key={story.id} title={story.title} dek={parse(`${story.dek}`)} hero_image={story.hero_image.url} />
                        ))}

                        <button onClick={() => setNewPage(pageNumber)} className="bg-white hover:bg-gray-100 mb-8 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Load More Stories
                        </button>

                    </>
                ) : (

                    <div className="flex flex-col h-screen justify-center items-center">
                        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                        <div className="text-gray-900 text-2xl font-bold mt-4">Loading...</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StoryDetail;
