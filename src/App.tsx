import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
    return (
        <>
            <div>Header</div>
            <RouterProvider router={router} />
            <div>Footer</div>
        </>
    );
}

export default App;
