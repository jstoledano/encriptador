const Encriptar = ({text, setText}) => {
  const handleForm = e => {
    e.preventDefault()

    const llavesEncriptar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let cadenaEncriptar = text.toLowerCase();

    for(let i = 0; i < llavesEncriptar.length; i++) {
      if(cadenaEncriptar.includes(llavesEncriptar[i][0])) {
        cadenaEncriptar = cadenaEncriptar.replaceAll(llavesEncriptar[i][0], llavesEncriptar[i][1]);
      }
    }

    setText(cadenaEncriptar);
  } 

  return (
    <div className="col-sm-12 col-md-6 mb-6">
      <h2>Encriptar</h2>
      <form 
        className="form" 
        id='encryptionForm'
        onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="textTo" className="form-label">
            Escriba el texto a encriptar
          </label>
          <textarea 
            onChange={e => setText(e.target.value)}
            className="form-control" 
            id="textTo"
            placeholder="usa solo letras minúsculas"
            rows="3" />
        </div>

        <div className="row clearfix">
          <div className="col">
            <button className="btn btn-primary">Encriptar</button>
          </div>
          <div className="col">
            <input 
              type={'submit'}
              name={'send'}
              id={'send'}
              value={'Encriptar'}
              className="btn btn-danger float-end" />
          </div>
        </div>
      </form>
    </div>
  )
  }
  
  export default Encriptar