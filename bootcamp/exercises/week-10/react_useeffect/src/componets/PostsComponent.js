import React, { useState, useEffect } from 'react';

const PostsComponent = () => {
    const [posts, setPosts] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.slice(0, 10)))
            .catch(error => console.error('Error fetching posts:', error));

        const handleResize = () => {
            const smallScreen = window.innerWidth <= 768;
            setIsSmallScreen(smallScreen);
        };

        handleResize(); // Initial call to set initial state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: isSmallScreen ? 'column' : 'row' }}>
            {posts.map(post => (
                <div key={post.id} style={{ border: '1px solid black', padding: '10px', margin: '5px' }}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsComponent;
