import * as React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import CountryMap from '../maps/CountryMap';
import WorldMap from '../maps/WorldMap';

import "./dropdown.css";

const DropDown = () => {
  const navigate = useNavigate();

  const navigateToCountryMap = () => {
    // 👇️ navigate to /contacts
    navigate('/country-map');
  };

  const navigateToWorldMap = () => {
    // 👇️ navigate to /
    navigate('/world-map');
  };
  
  return (
    <Dropdown
      trigger={<button>Select Map</button>}
      menu={[
        <button onClick={navigateToCountryMap}>Country Map</button>,
        <button onClick={navigateToWorldMap}>World Map</button>,
      ]}
    />
    
  );
};
  
const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">
              {React.cloneElement(menuItem, {
                onClick: () => {
                  menuItem.props.onClick();
                  setOpen(false);
                },
              })}
            </li>
          ))}
        </ul>
      ) : null}
    <div>
      <Routes>
        <Route path="/country-map" element={<CountryMap />} />
        <Route path="/world-map" element={<WorldMap />} />
      </Routes>
    </div>
    </div>
  );
};

export default DropDown;