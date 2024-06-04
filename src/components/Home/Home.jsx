import { Link } from 'react-router-dom';
import beautifulImage from '../../logo/beautiful.webp';
import logo from '../../logo/Logo32.png';

const Home = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${beautifulImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          padding: '10px 20px',
          textAlign: 'center',
          maxHeight: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link to="/camper">
            <img src={logo} alt="Logo" width={100} height={100} />
          </Link>
          <p style={{ fontFamily: 'Inter', color: '#FFF' }}>
            +38 (067) 700 36 50
          </p>
        </div>
        <div>
          <h1
            style={{
              color: '#addbd7',
              fontFamily: 'Inter',
              fontSize: '40px',
              fontWeight: 600,
              lineHeight: '28px',
              marginBottom: '32px',
              letterSpacing: '2px',
              textShadow: '4px 6px 4px rgba(0, 0, 0, 0.486)',
            }}
          >
            Rent campers for active recreation
          </h1>
          <h2
            style={{
              color: '#e6d5b0',
              fontFamily: 'Inter',
              marginBottom: '32px',
              letterSpacing: '2px',
              textShadow: '4px 6px 4px rgba(0, 0, 0, 0.521)',
            }}
          >
            Reliability and guarantees of a <br />
            successful vacation
          </h2>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              marginTop: '358px',
              background: '#f13c3c',
              width: '250px',
              padding: '18px',
              borderRadius: '100px',
            }}
          >
            <Link to="/camper/catalog">Catalog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
