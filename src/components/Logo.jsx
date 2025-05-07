const Logo = ({ color }) => {
  return (
    <div>
      {color === `white` ? (
        <img src="https://i.ibb.co/HThZTb4X/Logo-symbol.png" alt="" />
      ) : (
        <img src="https://i.ibb.co/3YfgYS54/LOGO-MASK.png" alt="" />
      )}
    </div>
  );
};
export default Logo;