const Encriptar = () => {
    return (
        <div className="col-sm-12 col-md-6">
            <h2>Encriptar</h2>
            <form className="form">
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">
                        Escriba el texto a encriptar
                    </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>
    )
  }
  
  export default Encriptar