/**
 * Renderiza el pie de página de la aplicación.
 * @returns {JSX.Element}
 */
function Footer() {
    const CURRENT_YEAR = new Date().getFullYear();
    const APP_NAME = "Transpositor Musical";
    const DEV = "Alejandro Ihuit Herrera";
    const DEV_CONTACT_MESSAGE = "Hola Alejandro, me interesa tu proyecto de transpositor musical. ¿Podemos hablar más al respecto?";
    const VERSION = "2.0.0";

    return (
        <footer className="mt-1">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4 text-center shadow-xl backdrop-blur sm:px-6">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                    {APP_NAME}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                    Desarrollado por{' '}
                    <a
                        href={`https://wa.me/529971389770?text=${encodeURIComponent(DEV_CONTACT_MESSAGE)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-cyan-400 transition hover:text-cyan-300 hover:underline"
                    >
                    {DEV}
                    </a>
                </p>
                <span className="text-xs text-slate-500">v{VERSION}</span>
                <p className="mt-1 text-xs text-slate-500">
                    © {CURRENT_YEAR} · Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
}

export default Footer;