const Desencriptar = ({text, setText}) => {

  return (
    <div className="col-sm-12 col-md-6">
      <h2>Desencriptar</h2>
      <form className="form" id='decryptionForm'>
        <div className="mb-3">
          <label htmlFor="textD" className="form-label">
            Texto encriptado
          </label>
          <textarea
            value={text}
            className="form-control" id="textD" rows="3" />
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