import React from 'react'
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import CourseOverview from '../courseOverview'
import { Route, Routes, Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';
import CourseManagement from '../courseManagement';
import Course from '../course';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const drawerWidth = 256;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `50px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,

    }),
  }),
);

const MainContent = (props) => {
  const {isDrawerOpen} = props;

  return (
    <Main open={isDrawerOpen}>
      <DrawerHeader />
      <Routes>
        <Route index element={<CourseOverview/>} />
        <Route path='courses-management' element={<CourseManagement/>} />
        <Route path="course/:course" element={<Course/>} />

      </Routes>
      <Outlet />
    </Main>
  )
}

export default MainContent
