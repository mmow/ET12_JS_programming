import React from 'react';
import image from '../images/girl.jpg'; 

const Home = function(){
    return(<>
        <header className ="header">
            <h1 className="headertitle">HomePage</h1>

            </header> 
            <main className="maincontainer">
                <div>
                    <img src={image} alt="Girl" />
                </div>
                </main>

    </>)
}

export default Home;
