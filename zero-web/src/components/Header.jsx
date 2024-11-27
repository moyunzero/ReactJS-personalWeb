/**
 * Header Component
 * 响应式设计的页面头部组件
 * - 小屏幕（<768px）：Flex布局，元素水平排列
 * - 中等屏幕（≥768px）：Grid布局，1:3:1 三列布局
 */
const Header =()=>{
    return(
       <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            {/* 
              主容器：响应式布局容器
              - max-w-screen-xl: 最大宽度限制
              - mx-auto: 水平居中
              - px-4: 默认左右内边距
              - flex justify-between items-center: 小屏幕时的Flex布局
              - md:px-6: 中等屏幕时增加内边距
              - md:grid md:grid-cols-[1fr,3fr,1fr]: 中等屏幕时切换为1:3:1的Grid布局
            */}
            <div className="max-w-screen-xl mx-auto w-full px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                {/* Logo区域 - 第一列 (1fr) */}
                <h1>
                    <a 
                        href="/" 
                        className="logo"
                    >
                        <img 
                            src="./public/images/logo.svg"
                            width={40}
                            height={40} 
                            alt="墨韵-作品集"
                        />
                    </a>
                </h1>

                {/* 导航区域 - 第二列 (3fr) */}
                <div className="">
                    <button
                        className=""
                        onClick={null}
                    >
                        <span className="material-symbols-rounded">
                            menu
                        </span>
                    </button>
                    Navbar
                </div>

                {/* 联系按钮 - 第三列 (1fr) */}
                <a 
                    href="#contact" 
                    className=""
                >
                    联系我
                </a>
            </div>
       </header>
    )
}
export default Header