import React, { useEffect, useState } from "react";
import { Bounce, Fade } from "react-reveal";
import Card from "../../../components/Card";
import Footer from "../../Layout/Footer/Footer";
import GlobalNavbar from "../../Layout/Header/GlobalNavbar";
import { Triangle } from "react-loader-spinner";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageSize, setPageSize] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=7412cf4fa59c45bba640fd7518cb7973&page_size=${pageSize}&page=2`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.results))
      .catch((error) => console.log(error));
  }, [pageSize]);
  useEffect(() => {
    fetch(
      "https://api.rawg.io/api/games?key=7412cf4fa59c45bba640fd7518cb7973&page=2"
    )
      .then((res) => res.json())
      .then((data) => {
        const genreNames = new Set();
        data.results.forEach((result) => {
          result.genres.forEach((genre) => {
            genreNames.add(genre.name);
          });
        });
        setGenres(Array.from(genreNames));
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch(
      `https://api.rawg.io/api/games?key=7412cf4fa59c45bba640fd7518cb7973&page_size=${pageSize}&search=${encodeURIComponent(
        searchTerm
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results);
      })
      .catch((error) => console.log(error));
  }, [searchTerm, pageSize]);

 
  
  return (
    <>
      {loading ? (
        <div className="h-screen bg-[#1e1f22]">
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          >
            <Triangle
              visible={true}
              height="80"
              width="80"
              color="#5623d8"
              ariaLabel="triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        </div>
      ) : (
        <div className="bg-[#1e1f22]">
          <GlobalNavbar className="bg-inherit" />
          <div className="absolute top-20 left-0 right-0 bg-[#1e1f22]">
            <section style={{ height: "auto" }} className="section-5 ">
              <h1 className="text-center text-5xl font-bold  text-white p-4 font-[Oxanium] uppercase ">
                Top <span className="text-[#5623d8] uppercase">Games</span>
              </h1>
              <div className="product-div flex justify-center w-[1380px] mx-auto gap-6">
                <Bounce left duration={1500}>
                  <div className="left-part w-[50rem]  mt-[6rem]">
                    <ul className="flex flex-col justify-center items-start gap-4">
                      {genres.map((genre, index) => (
                        <li
                          className="genre-categories text-lg py-3 px-4 w-full "
                          onClick={() => setSearchTerm(genre)}
                          key={index}
                        >
                          {genre}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Bounce>
                <div className="right-part flex justify-center items-center flex-wrap gap-6 py-6 ">
                  {products.map((product, index) => (
                    <Fade left duration={1000} key={index}>
                      {/* <Link to={`/product/${product.id}`}> */}
                      <Card
                        image={product.background_image}
                        text={product.name}
                        key={index}
                      />
                      {/* </Link> */}
                    </Fade>
                  ))}
                  <button
                    className="text-white bg-[#5623d8] border-none border-2 px-5 py-2 my-5 rounded-lg uppercase font-bold"
                    onClick={() => setPageSize(pageSize + 3)}
                  >
                    See More
                  </button>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
