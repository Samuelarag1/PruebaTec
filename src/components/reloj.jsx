import { useEffect, useState } from "react";
export const Reloj = () => {
  //! Ejercicio numero 1
  const [hora, setHora] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const ActualTime = new Date();
      const hours = ActualTime.getHours();
      const minutes = ActualTime.getMinutes();
      const seconds = ActualTime.getSeconds();

      setHora(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }, [hora]);

  //! Ejercicio numero 3

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("no hace nada");
  };

  //! Ejercicio numero 5
  const [intNumber, setIntNumber] = useState();
  const handleOnChange = (e) => {
    const { value } = e.target;

    if (/[0-9]+$/.test(value)) {
      setIntNumber(value);
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h1>Reloj</h1>
        {hora}
        <hr />
        <input
          value={intNumber}
          type="text"
          placeholder="Ingrese solo numeros enteros"
          onChange={handleOnChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
