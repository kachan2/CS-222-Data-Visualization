import * as React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import CountryMap from '../maps/CountryMap';
// import WorldMap from '../maps/WorldMap';
import Slider from './slider';

import "./dropdown.css";

const DropDown = () => {
  const navigate = useNavigate();

  const navigateToCountryMap = () => {
    navigate('/country-map');
  };

  const navigateToWorldMap = () => {
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
      {/* handles button click */}
      {React.cloneElement(trigger, {
        onClick: handleOpen,
      })}
      {/* opens menu on button click and renders menu items */}
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
      {/* routes to redirect to the world and country map */}
      <Routes>
        <Route path="/country-map" element={<CountryMap />} />
        <Route path="/world-map" element={<Slider />} />
      </Routes>
    </div>
    </div>
  );
};

export default DropDown;