const NavigationBar = () => {
    return (
        <div style={{ paddingLeft: '50px', paddingRight: '50px' }}>
            <nav className="menuatas menuatas-expand-lg bg-white menuatas-light sticky-top p-0" id="top">
                <a href="/" className="menuatas-brand lurus align-items-center px-4 px-lg-5">
                    <h1 className="m-0">Salma Shakira</h1>
                </a>
                <button className="menuatas-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#menuatasCollapse">
                    <span className="menuatas-toggler-icon"></span>
                </button>
                <div className="collapse menuatas-collapse" id="menuatasCollapse">
                    <div className="menuatas-nav ms-auto p-4 p-lg-0">
                        <a href="/" className="menu-item tombol-link">Home</a>
                        <a href="/about" className="menu-item tombol-link">About</a>
                        <a href="/contact" className="menu-item tombol-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar