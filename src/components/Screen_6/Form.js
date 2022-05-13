function Form() {
    return( 
        <div className="form_6">
            <div>
                <div style={{fontSize: 20}}>05 - Get Involved</div>
                <div style={{fontSize: 40, fontWeight: 600, width: 400}}>Join our Expedition</div>
                <div style={{width: 450}}> <b>The Expedition Team</b> will be <b>selected</b> through several stages. Only about <b>8 people</b> will be selected to join this expedition. Make sure you are <b>one of them!</b></div>
            </div>
            <div>
                <form className="form_wrap_6">
                    <input placeholder="Your Email" className="input_plc_6"/>
                    <input placeholder="Age" className="input_plc_6"/>
                    <input placeholder="Phone" className="input_plc_6"/>
                    <input type="submit" value="Send" className="submit_6"/>
                </form>
            </div>
        </div>
    )
}

export default Form;