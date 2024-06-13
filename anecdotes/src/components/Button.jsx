// Suggested code may be subject to a license. Learn more: ~LicenseLog:2748437351.
// eslint-disable-next-line react/prop-types
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )
  
  export default Button;