import { MainDashboard } from 'components/MainDashboard/MainDashboard';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import css from './HomePage.module.css';
import { useDispatch } from 'react-redux';
import { fetchBoards } from '../../redux/boards/boardsOperations';

const HomePage = () => {
  const dispatch = useDispatch();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const getAllBoards = () => {
      const payload = {};
      dispatch(fetchBoards(payload));
    };
    getAllBoards();
  }, [dispatch]);

  return (
    <div className={css.homePage}>
      <Sidebar visible={sidebarVisible} onVisible={setSidebarVisible} />
      <div className={css.homePageContent}>
        <Header onVisible={setSidebarVisible} />
        <MainDashboard />
      </div>
    </div>
  );
};

export default HomePage;
