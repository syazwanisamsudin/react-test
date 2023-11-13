import React from 'react';
import { Typography } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCode, FaSchool, FaFlag } from 'react-icons/fa';
import { timelineData } from './timelineData';

const Timeline = () => {
  const textStyle = { color: '#000', textAlign: 'center' };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <FaCode size={20} />;
      case 'school':
        return <FaSchool size={20} />;
      case 'flag':
        return <FaFlag size={20} />;
      default:
        return null;
    }
  };
  

  return (
    <>
      <Typography variant="h4" style={{ textAlign: "center", margin: "3rem" }}>Timeline</Typography>
      <VerticalTimeline>
        {timelineData.map((data) => (
          <VerticalTimelineElement
            key={data.id}
            date={data.date}
            iconStyle={{ background: data.background, color: data.foreground }}
            icon={getIcon(data.iconName)}
          >
            <Typography variant="h5" style={textStyle}>{data.title}</Typography>
            <Typography variant="h6" style={textStyle}>{data.subtitle}</Typography>
            <p style={textStyle}>{data.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
