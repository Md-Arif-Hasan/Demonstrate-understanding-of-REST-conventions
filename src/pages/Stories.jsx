import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import Card from '../components/Card';
import { getAllStories } from "../../services/Stories";
import './stories.css';

const StoryDetail = () => {
    const [story, setStory] = useState([]);
    const [result, setResult] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const fetchStory = async (pageNumber) => {
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
        setPageNumber(pageNumber + 1);
    }

    return (

        <div>

            <div className="flex h-half-screen relative">
                <div className="flex-1 relative">

                    <img src="src/assets/air.png" className="object-cover h-full w-full" alt="Cover" />


                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h1 className="text-4xl font-bold mb-2">KONTINENTALIST</h1>
                        <p className="text-lg mb-1">We tell data stories about Asia</p>


                        <div className="flex items-center justify-center mt-2">
                            <a href="https://www.linkedin.com/company/kontinentalist/" target="_blank" rel="noopener noreferrer" className="text-lg mr-2">🔗</a>
                            <a href="https://kontinentalist.com/" target="_blank" rel="noopener noreferrer" className="text-lg">🌐</a>
                        </div>

                        <p className="text-lg mt-4">
                            An informed Asia at the front of global conversations.
                        </p>
                    </div>
                </div>
            </div>




            <div className='flex flex-col justify-center items-center'>


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
