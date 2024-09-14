
// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import EarringsSection from './components/EarringsSection';
// import CollectionSection from './components/CollectionSection';
// import TopTrendingSection from './components/TopTrendingSection'; // Import the TopTrendingSection
// import './App.css';
// import bannerImage from './assets/background.jpg'; // Import the banner image

// function App() {
//   return (
//     <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Navbar /> {/* Navbar component */}

//       {/* Display the banner image */}
//       <img
//         src={bannerImage}
//         alt="Banner"
//         style={{
//           width: '100%',
//           height: 'auto',
//           display: 'block',
//           margin: '0 auto',
//         }}
//       />

//       {/* Earrings section */}
//       <EarringsSection />

//       {/* Collection section */}
//       <CollectionSection />

//       {/* Top Trending section */}
//       <TopTrendingSection />

//       <Footer /> {/* Footer component */}
//     </div>
//   );
// }

// export default App;








import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EarringsSection from './components/EarringsSection';
import CollectionSection from './components/CollectionSection';
import TopTrendingSection from './components/TopTrendingSection';
import StylishEarStatements from './components/StylishEarStatements'; // Import the StylishEarStatements component
import './App.css';
import bannerImage from './assets/background.jpg'; // Import the banner image

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar /> {/* Navbar component */}

      {/* Display the banner image */}
      <img
        src={bannerImage}
        alt="Banner"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
        }}
      />

      {/* Earrings section */}
      <EarringsSection />

      {/* Collection section */}
      <CollectionSection />

      {/* Top Trending section */}
      <TopTrendingSection />

      {/* Stylish Ear Statements section */}
      <StylishEarStatements />

      <Footer /> {/* Footer component */}
    </div>
  );
}

export default App;



