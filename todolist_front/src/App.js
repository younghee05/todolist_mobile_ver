import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboarder/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import { Global } from "@emotion/react";
import { reset } from "./styles/common";
import DandP from "./pages/DandP/DandP";
import MainLayout from "./components/MainLayout/MainLayout";
import TodoAll from "./pages/TodoAll/TodoAll";

function App() {
    return (
        <>
            <Global styles={reset} />
            <MainLayout>
                {/* BrowerRouter 안에 쓰는 거 */}
                <Routes>
                    <Route path="/todo/*" element={<Dashboard />} />
                    <Route path="/login" element={<></>} />
                    <Route path="/join" element={<></>} />
                    <Route path="/dp" element={<DandP />} />
                    {/* 제일 우선순위가 낮으므로 /login & /join & / 실행된 후 그외에 다른 주소가 들어오면 NotFound로 실행이된다 */}
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </MainLayout>
            
            
        </>
    );
}

export default App;
