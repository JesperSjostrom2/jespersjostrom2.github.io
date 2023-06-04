function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Jesper Sjöström | Frontend Developer</title>
                <meta name="description" content="I am a frontend developer who loves design and creating websites." />
              </Helmet>
              <MainLayout>
                <Intro />
                <About />
                <Education />
                <Skills />
                <Contact />
              </MainLayout>
            </>
          }
        />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Adminpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;