const FooterCliente = () => {
    const footerNavs = [
        { href: 'javascript:void()', name: 'Quienes somos' },
        { href: 'javascript:void()', name: 'Envios' },
        { href: 'javascript:void()', name: 'Equipo' },
        { href: 'javascript:void()', name: 'Contacto' },
        { href: 'javascript:void()', name: 'Soporte' },
    ];

    return (
        <footer className="bg-slate-900 text-white w-full dark:border-t">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-4">
                    <img src="/tekcam.png" alt="Logo" className="w-16 h-16 mx-auto" />
                    <strong>TEKCAM</strong>
                    {/* <p className="leading-relaxed mt-2 text-[15px]">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p> */}
                </div>
                <ul className="flex flex-wrap justify-center mt-8 space-x-4">
                    {footerNavs.map((item, idx) => (
                        <li key={idx} className="hover:text-gray-300">
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row sm:justify-between items-center">
                    <div className="text-center sm:text-left">&copy; {new Date().getFullYear()} Todos los derechos reservados por TEKCAM.</div>
                    <ul className="flex items-center space-x-4 mt-4 sm:mt-0">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                                {/* SVG icons go here */}
                            </a>
                        </li>
                        {/* Repite los elementos de íconos según sea necesario */}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default FooterCliente;
