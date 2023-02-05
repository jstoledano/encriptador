const Desencriptar = ({text, setText}) => {

  console.log(text)

  return (
    <div className="col-sm-12 col-md-6">
      <h2>Desencriptar</h2>
      <form className="form" id='decryptionForm'>
        <div className="mb-3">
          <label htmlFor="textD" className="form-label">
            Texto encriptado
          </label>
          <textarea className="form-control" id="textD" rows="3"></textarea>
        </div>
        <div className="row">
          <button className="btn btn-success float-end">
            Copiar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Desencriptar