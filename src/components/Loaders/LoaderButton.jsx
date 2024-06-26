import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

export const LoaderButton = () => {
  return (
    <div className={css.containerBtn}>
      <ThreeDots
        visible={true}
        height="20"
        width="20"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
