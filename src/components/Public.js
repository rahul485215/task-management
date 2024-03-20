import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Indian Market Store <span className="nowrap">Task Management</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Chennai City,<span> Indian Market Store</span> provides a trained staff ready to meet your tech repair needs.</p>
                <br />
                <p>Owner: <span>Abilash</span></p>
            </main>
            <footer className='footer__employee'>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public