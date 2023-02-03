export default function Contact() {
  return (
    <div className="container">
      <form>
        <h1 className="my-2 text-center">
          <strong>Cuentanos, ¿en que podemos ayudarte?</strong>
        </h1>
        <p className=" mx-4 my-3 text-center">Correo:</p>
        <input
          type="text"
          placeholder="name@example.com"
          style={{ width: "100%", height: "2rem" }}
        />
        <p className="mx-4 my-4 text-center">Descripción:</p>
        <input type="text" style={{ width: "100%", height: "9rem" }} />
      </form>
      <button className="my-4 btn btn-danger d-grid mx-auto">Enviar</button>
    </div>
  );
}
