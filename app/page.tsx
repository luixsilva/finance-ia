import Image from "next/image";
import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <>
      <h1 className="p-5 text-red-500">Hello, World!</h1>

      <Button>Login</Button>
    </>
  );
};
export default Home;
