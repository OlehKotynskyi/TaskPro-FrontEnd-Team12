import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import css from './HomePage.module.css';
import { useDispatch } from 'react-redux';
import { featchBoards } from '../../redux/boards/boardsOperations';
import { Outlet, useParams } from 'react-router-dom';
import { Info } from 'components/Info/Info';

const HomePage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const getAllBoards = () => {
      dispatch(featchBoards());
    };
    getAllBoards();
  }, [dispatch]);

  return (
    <div className={css.homePage}>
      <Sidebar visible={sidebarVisible} onVisible={setSidebarVisible} />
      <div className={css.homePageContent}>
        <Header onVisible={setSidebarVisible} />
        {boardId ? <Outlet /> : <Info />}
      </div>
    </div>
  );
};

export default HomePage;
