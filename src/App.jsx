// @ts-nocheck

import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => (
  <div className="h-screen px-6 overflow-x-hidden overflow-y-scroll scrollbar-hide">
    <Header />
    <div className="flex items-start justify-start w-full space-x-2">
      <Sidebar />
      <Content />
    </div>
  </div>
);

export default App;
