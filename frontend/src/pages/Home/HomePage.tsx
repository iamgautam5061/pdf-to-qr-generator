import { useState } from "react";

import Container from "../../components/Container/Container";
import HeroSection from "./sections/HeroSection";

import type { GoogleAuthResponse } from "../../types/auth";

const HomePage = () => {
  const [auth, setAuth] = useState<GoogleAuthResponse | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  console.log("Selected file:", selectedFile?.name);

  return (
    <main>
      <Container>
        <HeroSection
          auth={auth}
          setAuth={setAuth}
          setSelectedFile={setSelectedFile}
        />
      </Container>
    </main>
  );
};

export default HomePage;