import Form from '../components/Form';
import List from '../components/List';
import  style from './Home.module.scss'

function Home() {
  return (

    <div className={style.HomeStyle}>
      <Form />
      <List />
    </div>
  );
}

export default Home;
