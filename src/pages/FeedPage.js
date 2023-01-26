import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToSignUp } from "../routes/coordinator";
import useProtectedPage from "../hooks/useProtectedPage";

function FeedPage() {

  useProtectedPage()

  return (
    <main>
      <h1>Página de Feed</h1>
    </main>
  );
}

export default FeedPage;