import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Posts from "../components/Posts";
import NewPost from "../components/NewPost";
function Home() {
  return (
    <>
      <NewPost></NewPost>
      <Header></Header>
      <SideBar></SideBar>
      <div
        style={{ marginLeft: "340px", marginTop: "90px", marginRight: "350px" }}
      >
        <Posts></Posts>
        <Posts></Posts>
        <Posts></Posts>
        <Posts></Posts>
      </div>
    </>
  );
}
export default Home;