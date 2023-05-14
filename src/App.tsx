import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getCharacter } from "rickmortyapi";
import { CharacterList } from "./components/CharacterList/CharacterList";
import "./App.css";

function App() {
    useEffect(() => {
        getCharacter(1).then((data) => console.log(data));
    }, []);

    return (
        <>
            <Router>
                <div>
                    <Routes>
                        <Route path="/">
                            <CharacterList />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
