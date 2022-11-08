import { Link } from "react-router-dom";


function ErrorPage() {
  
  return (
    <section>
      <h2 className="error-page-heading">404</h2>
      <p className='error-page-text'>Something Went Wrong!</p>
      <Link to="/">
        <button >Go Home</button>
      </Link>
    </section>
  )
}

export default ErrorPage