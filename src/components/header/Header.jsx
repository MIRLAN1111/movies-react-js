import "./Header.css";
import icons from "../../assets/Images/play-buttton.png";
const Header = () => {
	return (
		<div className="block">
			<div className="syrot">
				<img height={"50px"} width={"50px"} src={icons} />
			</div>
			<div className="header">
				
				<p> WELCOME TO MY MOVIES</p>
			</div>
  
  <input type="text" name="text" class="input" placeholder="Поиск" />
		</div>
	);
};

export default Header;
