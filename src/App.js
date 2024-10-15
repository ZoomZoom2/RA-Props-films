import Stars from './components/Stars/Stars';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>Домашнее задание «Props»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>Рейтинг фильмов</h3>
          </header>
          <div className={'task__body'}>
            <Stars count={1} />
            <Stars count={2} />
            <Stars count={3} />
            <Stars count={4} />
            <Stars count={5} />
            <Stars />
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
