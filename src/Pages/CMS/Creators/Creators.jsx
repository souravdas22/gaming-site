import React, { useEffect, useState } from 'react'
import GlobalNavbar from '../../Layout/Header/GlobalNavbar'
import CreatorCard from '../../../components/CreatorCard'
import { Triangle } from 'react-loader-spinner';

export default function Creators() {
  const [creators, setCreators] = useState([])
  const [loading, setLoading] = useState(false);
      useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);
  useEffect(() => {
      fetch(
      "https://api.rawg.io/api/creators?key=7412cf4fa59c45bba640fd7518cb7973&page_size=9&page=2"
    )
      .then((res) => res.json())
      .then((data) => setCreators(data.results))
  },[])
  console.log(creators);
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
          <GlobalNavbar />
          <section className="h-auto">
            <h1 className="text-center text-5xl font-bold  text-white p-4 font-[Oxanium] uppercase ">
              Our <span className="text-[#5623d8] uppercase">Creators</span>
            </h1>
            <div className="product-div flex justify-center w-[1380px] p-7 mx-auto gap-[4rem] flex-wrap">
              {creators &&
                creators.map((creator) => (
                  <CreatorCard
                    image={creator.image}
                    imageBackground={creator.image_background}
                    name={creator.name}
                    position={creator.positions.map(
                      (position) => position.name
                    )}
                    games={creator.games.slice(0, 4).map((game) => (
                      <React.Fragment key={game.id}>{game.name}</React.Fragment>
                    ))}
                  />
                ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
