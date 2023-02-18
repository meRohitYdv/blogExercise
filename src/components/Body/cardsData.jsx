import abstractImg from '../../assets/Images/abstract.png';
import inspiredImg from '../../assets/Images/inspired.png';
import outdoorImg from '../../assets/Images/outdoor.png';
import perfectArtImg from '../../assets/Images/perfect-art.png';
import reasonImg from '../../assets/Images/reason.png';
import youngPaintersImg from '../../assets/Images/young-painters.png';
import appreciateIcon from '../../assets/Icons/clapping.svg';
import heartIcon from '../../assets/Icons/heart-black.svg';
import likedHeartIcon from '../../assets/Icons/heart-red.svg'

export default function cardsData(){
    const subTitle = 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...';
    return [
        {image: abstractImg, date: '2nd January, 2018', readTime: '2 mins', title:'The future of abstract art and the culture ...', subTitle: subTitle, appreciateIcon:appreciateIcon, heartIcon:heartIcon, appreciateCount: 10, likedHeartIcon:likedHeartIcon },
        {image: outdoorImg, date: '31st January, 2018', readTime: '1 min', title:'How painting items can transform your', subTitle: subTitle, appreciateIcon:appreciateIcon, heartIcon:heartIcon, appreciateCount: 1, likedHeartIcon:likedHeartIcon },
        {image: youngPaintersImg, date: '20th March, 2018', readTime: '2 mins', title:'10 young painters you need to know', subTitle: subTitle, appreciateIcon:appreciateIcon, heartIcon:heartIcon, appreciateCount: 15, likedHeartIcon:likedHeartIcon },
        {image: perfectArtImg, date: '22nd June, 2018', readTime: '5 mins', title:'Tips for creating perfect art', subTitle: subTitle, appreciateIcon:appreciateIcon, heartIcon:heartIcon, appreciateCount: 11, likedHeartIcon:likedHeartIcon },
        {image: inspiredImg, date: '4th February, 2019', readTime: '9 mins', title:'Stay inspired: top artists blog ...', subTitle: subTitle, appreciateIcon:appreciateIcon, heartIcon:heartIcon, appreciateCount: 45, likedHeartIcon:likedHeartIcon },
        {image: reasonImg, date: '10th January, 2019', readTime: '2 mins', title:'5 reasons why everyone should try an ...', subTitle: subTitle, appreciateIcon:appreciateIcon, heartIcon:heartIcon, appreciateCount: 11, likedHeartIcon:likedHeartIcon }
    ];
}