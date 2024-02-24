import React from 'react'
import headerStyle from './header.module.css'
function Header() {
    return (
        <div>
            <div className="row" style={{ margin: 0, textAlign: 'center' }}>
                <div className={headerStyle['card']}>
                    <div className="card-background"></div>
                    <div className="useavatar">
                        <img
                            src="./cybersoft.png"
                            alt="cybersoft.edu.vn"
                        />
                    </div>
                    <div className="card-info">
                        <h4 className="card-title" style={{ padding: '1.5rem' }}>CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến - Virtual Dressing Room</h4>
                    </div>
                </div>
            </div>
            <hr className={headerStyle['header-hr']} />
        </div>
    )
}

export default Header