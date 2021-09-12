import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {/* <div
          class=" preloader bg-dark flex-column justify-content-center align-items-center">
          <div class="position-relative">
            <img
              src="../assets/img/brand/light-without-letter.svg"
              alt="Logo loader"
            />
            <img
              src="../assets/img/brand/letter.svg"
              class="rotate-letter"
              alt="Letter loader"
            />
          </div>
        </div> */}
        {children}
      </main>
    </>
  );
};

export default Layout;
