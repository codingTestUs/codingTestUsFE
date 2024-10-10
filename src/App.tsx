import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './components/landing';
import CodeField from "./components/code-field";
import ChallengesPage from './components/challenges';
import MyPage from './components/mypage';
import Blogs from './components/blogs';
import Repository from './components/repository';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path="/codefield" element={<CodeField/>} />
          <Route path="/challenges" element={<ChallengesPage/>} />
          <Route path="/mypage" element={<MyPage/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/repo" element={<Repository/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
