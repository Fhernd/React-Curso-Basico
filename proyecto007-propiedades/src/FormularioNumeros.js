function FormularioNumeros(propiedades) {
    return (
        <form onSubmit={propiedades.onSumar}>
            <p>
                Ingrese primer valor: <input type="number" name="valor1" />
            </p>
            <p>
                Ingrese segundo valor: <input type="number" name="valor2" />
            </p>
            <input type="submit" value="Sumar" />
        </form>
    );
}

export default FormularioNumeros;
