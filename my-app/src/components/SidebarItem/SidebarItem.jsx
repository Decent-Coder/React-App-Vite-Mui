import React from 'react';
import './SidebarItem.scss';
import { Typography } from '@mui/material';

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div className={`sidebar-item ${active ? 'active' : ''}`}>
      <div className="icon">{icon}</div>
      <Typography variant="body1" fontWeight={active ? 600 : 400}>
        {label}
      </Typography>
    </div>
  );
};

export default SidebarItem;
