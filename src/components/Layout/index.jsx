import PropTypes from 'prop-types'
import './Layout.css'

const Layout = ({ children }) => {
    Layout.propTypes = {
      children: PropTypes.node.isRequired,
    }
    return (
        <div className='children-text--style'>
            {children}
        </div>
    )
}

export default Layout