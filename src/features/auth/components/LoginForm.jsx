export const LoginForm = ({ onForgot }) => {
    return (
        <>
            <form className="space-y-5">
                {/* 2. Sección de email o usuario */}
                <div>
                    {/* 3. Etiqueta email */}
                    <label className="block text-sm font-medium text-gray-800 mb-1.5">
                        Email o Usuario
                    </label>
                    {/* 4. Campo de texto email */}
                    <input
                        type="text"
                        placeholder="correo@ejemplo.com o usuario"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* 2. Sección de contraseña */}
                <div>
                    {/* 5. Etiqueta contraseña */}
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Contraseña
                    </label>
                    {/* 6. Campo de contraseña */}
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* 7. Botón de submit */}
                <button
                    type="submit"
                    className="w-full bg-main-blue hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
                >
                    Iniciar Sesión
                </button>
            </form>

            {/* 8. Contenedor link olvidé contraseña */}
            <p className="text-center text-sm mt-4">
                {/* 9. Link olvidé contraseña */}
                <button
                    type="button"
                    onClick={onForgot}
                    className="text-main-blue hover:underline"
                >
                    ¿Olvidaste tu contraseña?
                </button>
            </p>
        </>
    );
};

export default LoginForm;