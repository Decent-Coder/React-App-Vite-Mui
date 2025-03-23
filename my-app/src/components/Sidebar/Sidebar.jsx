import React from 'react';
import './Sidebar.scss';
import { FiGrid, FiBox, FiUsers, FiTrendingUp, FiSend, FiHelpCircle } from 'react-icons/fi';
import { Typography, Avatar } from '@mui/material';
import SidebarItem from '../SidebarItem/SidebarItem';
import UpgradeCard from '../UpgradeCard/UpgradeCard';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Typography variant="h5" fontSize={600}>
          Dashboard
          <Typography
            component="span"
            variant="subtitle2"
            color="text.secondary"
          >
            v01
          </Typography>
        </Typography>
      </div>

      <nav className="sidebar_menu">
        <SidebarItem icon={<FiGrid />} label="Dashboard" />
        <SidebarItem icon={<FiBox />} label="Product" />
        <SidebarItem icon={<FiUsers />} label="Customers" active />
        <SidebarItem icon={<FiTrendingUp />} label="Income" />
        <SidebarItem icon={<FiSend />} label="Promote" />
        <SidebarItem icon={<FiHelpCircle />} label="Help" />

        <UpgradeCard />
      </nav>
      <div className="sidebar__profile">
        <Avatar
          alt="Evano"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          sx={{ width: 44, height: 44 }}
        />
        <div>
          <Typography variant="subtitle1" fontWeight={600}>
            Evano
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Project Manager
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Sidebar