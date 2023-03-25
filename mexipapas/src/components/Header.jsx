import logo from "../../public/logotipo.webp";

const Header = () => {
  return (
    <header className="menu-de-navegacion">
      <img src={logo} alt="" />
      

      <nav className="menu">
        <a href="">Ubicaciones</a>
        <a href="">Domicilios</a>
        <a href="">Contacto</a>
      </nav>
      
    </header>
  );
};

export default Header;
