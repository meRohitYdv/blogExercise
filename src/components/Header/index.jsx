import Title from './Title';
import SubTitle from './SubTitle';
import NavigationBar from './NavigationBar';
import './index.css';
export default function Header(){
    return(
        <div className="Header">
            <Title />
            <SubTitle />
            <NavigationBar />
        </div>
    );
};