import Image from 'next/image';
import './style/header.css';

export default function Header({ theme, ThemeToggle }) {
  return (
    <div>
      <div id="HeaderContainer" className={theme === 'LightMode' ? 'LightMode' : ''}>
        <div id="LeftHeader">
          <button className={`HeaderButton ${theme === 'LightMode' ? 'LightMode' : ''}`}>About Me</button>
          <button className={`HeaderButton ${theme === 'LightMode' ? 'LightMode' : ''}`}>Skills</button>
          <button className={`HeaderButton ${theme === 'LightMode' ? 'LightMode' : ''}`}>Projects</button>
        </div>
        <div className="dropdown">
          <button className="drpClick">
            <Image src="/assets/img/btn.svg" width="30" height="30" alt="menu button" draggable={false} />
          </button>
          <div className="DropdownContent">
            <button className="DrpContent">About Me</button>
            <button className="DrpContent">Skills</button>
            <button className="DrpContent">Projects</button>
          </div>
        </div>
        <div id="RightHeader">
          <button className={`HeaderButton ${theme === 'LightMode' ? 'LightMode' : ''}`} onClick={ThemeToggle}>
            {theme === 'LightMode' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </div>
  );
}
