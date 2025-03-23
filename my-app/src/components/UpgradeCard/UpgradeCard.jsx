import React from 'react';
import './UpgradeCard.scss';
import { Typography, Button } from '@mui/material';

const UpgradeCard = () => {
  return (
    <div className="upgrade-card">
      <Typography variant="subtitle1" fontWeight={600} color="common.white">
        Upgrade to PRO
      </Typography>
      <Typography variant="body2" color="common.white" sx={{ mt: 0.5, mb: 1 }}>
        to get access to all features!
      </Typography>
      <Button variant="contained" className="upgrade-btn">
        Get Pro Now!
      </Button>
    </div>
  );
};

export default UpgradeCard;
