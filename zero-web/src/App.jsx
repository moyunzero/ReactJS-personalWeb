/**
 * Node Modules
 */
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Blog from './pages/Blog';

// 创建一个新组件来处理滚动和Lenis初始化
const ScrollHandler = () => {
    const location = useLocation();
    
    useEffect(() => {
        // 直接使用原生scrollTo，禁用平滑滚动
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'  // 使用instant而不是smooth，确保立即跳转
        });
    }, [location]);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 0,  // 设置为0以实现即时响应
            easing: t => t,  // 线性缓动，无动画效果
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: false,  // 禁用平滑滚动
            wheelMultiplier: 1,
            smoothTouch: false,  // 禁用触摸平滑滚动
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
    }, []); // 保持组件生命周期内的稳定性
    
    return null;
};

const App = () => {
    return (
        <Router>
            <ScrollHandler />
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