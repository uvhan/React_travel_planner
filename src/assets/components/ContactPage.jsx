import './contactpage.css'
function ContactForm(){
    return(
        <div className='from-container'>
            <h1>Send a message to us!</h1>
            <form action="">
                <input type="text" placeholder='Name/' />
                <input type="text" placeholder='Email/' />
                <input type="text" placeholder='Subject/' />
                <textarea name="" placeholder='Message'rows="4" id=""></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}
export default ContactForm