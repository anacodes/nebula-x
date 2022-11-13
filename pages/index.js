// import background from "./home.jpeg";
// function HomePage() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'Right',
//         alignItems: 'Center',
//         backgroundImage: `url(${background})`,
//         backgroundPosition: 'Right',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         height: '80vh',
//         width: '80vw'
//       }}
//     >
//     </div>
//   );
// }

// export default HomePage;

// import background from "./home.jpg";

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Center',
        backgroundImage: "url(/home.jpeg)",
        backgroundPosition: 'Right',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        width: '80vw'
      }}
    >
    </div>
  );
};

export default Home;