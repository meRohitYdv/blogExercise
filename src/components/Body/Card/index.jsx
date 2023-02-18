import './index.css';
import React from 'react';


export default function Card({key, data}){
    let { image, date, readTime, title, subTitle,appreciateIcon, appreciateCount, heartIcon, likedHeartIcon} = data;
    appreciateCount = Number(appreciateCount);
    console.log(typeof appreciateCount);

    const [isLiked, setIsLiked] = React.useState(false);
    const [clapCount, setClapCount] = React.useState(appreciateCount);
    
    function handleHeartClick(){
        setIsLiked(!isLiked);
    }
    function setHeartIcon(){
        return (isLiked) ? likedHeartIcon : heartIcon;
    }

    function handleAppreciateClick(){
        console.log('In click handler');
        setClapCount(clapCount+1);
        console.log(setClapCount);
    }

    return (
        <div className='Card'>
            <img className='CardImage' src={image} alt="image"/>
            <div className='CardHeader'>
                <p>{date}</p>
                <p>{readTime}</p>
            </div>
            <p className='CardTitle'>{title}</p>
            <p className='CardSubTitle'>{subTitle}</p>
            <hr className='CardLine'></hr>
            <div className='CardEngagement'>
                <div className='CardAppreciate'>
                    <img className='CardAppreciateIcon' onClick={handleAppreciateClick} src={appreciateIcon} alt='image'/>
                    <p>{clapCount}</p>
                </div>
                <img className='CardHeartIcon' onClick={handleHeartClick} src={setHeartIcon()} alt='image'/>
            </div>
        </div>
    );
}