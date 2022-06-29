import { Route, Routes } from "react-router-dom"
import { Awaiting } from "./components/Awaiting";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";



export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />}/>
      <Route path="/event" element={<Event />}/>
      <Route path="/event/lesson/:slug" element={<Event />}/>
      <Route path="/awaiting" element={<Awaiting />}/>
    </Routes>
  );
}