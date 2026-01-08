export default function(){
    return(`<nav>
        <a href='/'>HOME PAGE</a>
        </nav>
        <br/>
        <br/>
        <form action='/submit' method='post'>
        <input type='text' placeholder='Enter name'/>
        <input type='password' placeholder='Enter password'/>
        <button>Submit</button>
    </form>`)
}