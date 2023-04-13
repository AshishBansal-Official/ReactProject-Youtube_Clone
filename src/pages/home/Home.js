import Header from "./header/Header";
import Content from "./content/Content";

const Home = () => {
    return (
        <div className="flex flex-col">
            <Header></Header>
            <Content></Content>
        </div>
    );
};

export default Home;
