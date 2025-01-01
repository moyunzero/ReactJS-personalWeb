/**
 * Node Modules
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Blog from './pages/Blog';

const App = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.1,
            easing: t => t,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: false,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 1,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;