// import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import css from './HomePage.module.css';

const HomePage = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div className={css.homePage}>
      <Sidebar visible={sidebarVisible} onVisible={setSidebarVisible} />
      <div className={css.homePageContent}>
        <Header onVisible={setSidebarVisible} />
        {/* <MainDashboard /> */}
      </div>
    </div>
  );
};

export default HomePage;
