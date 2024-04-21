import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

export default function MainLayout() {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <Outlet></Outlet>
        </div>
        );
}