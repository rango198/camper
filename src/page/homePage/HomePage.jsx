import Home from '../../components/Home/Home';

const HomePage = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      Home page
      <Home />
    </div>
  );
};
export default HomePage;
