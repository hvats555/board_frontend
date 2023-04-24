import React from 'react';

import LineChart from '@/components/dashboard/LineChart/LineChart';
import InfoBar from '@/components/dashboard/InfoBar/InfoBar';
import PieChart from '@/components/dashboard/PieChart/PieChart';
import UpdateCard from '@/components/dashboard/UpdateCard/UpdateCard';
import Card from '@/components/Card/Card';
import CardContainer from '@/containers/CardContainer/CardContainer';
import AppContainer from '@/containers/AppContainer/AppContainer';
import PrivateRoute from '@/components/auth/PrivateRoute';

function Dashboard() {
  return (
    <PrivateRoute>
      <AppContainer navbarTitle={"Dashboard"}>
          <InfoBar />
          <LineChart />

          <CardContainer>
              <Card title={"Top products"} meta={"May-June 2021"}>
                  <PieChart />
              </Card>

              <Card title={"Today's schedule"} meta={"See All"}>
                  <UpdateCard title={"Meeting with suppliers from Kuta Bali"} time={"14.00-15.00"} location={"at Sunset Road, Kuta, Bali"} color={"#9BDD7C"}/>
                  <UpdateCard title={"Check Operation at Giga Factory 1"} time={"18.00-20.00"} location={"at Central Jakarta "} color={"#6972C3"}/>
              </Card>
          </CardContainer>
      </AppContainer>
    </PrivateRoute>
  )
}

export default Dashboard