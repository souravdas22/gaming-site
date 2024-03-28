import React, { useEffect, useState } from "react";
import axiosInstance, { myproduct } from "../Helper";
import { ToastContainer, toast } from "react-toastify";
import FilledButton from "../../components/FilledButton";
import SweetAlertComponent from "../../SweetAlert/SweetAlert";
import { Link } from "react-router-dom";

export default function NewProductList() {
  // --------------------------for create------------------//
  const [product, setProduct] = useState({
    title: "",
    description: "",
  });
  const [img, setimg] = useState("");

  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [id_delete, setId_delete] = useState();
  const createProduct = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("title", product.title);
    formdata.append("description", product.description);
    formdata.append("image", img);
    try {
      const response = await axiosInstance.post("/product/create", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast(response.data.message);
      console.log(response.data);
      fetchProducts();
      if (response.status === 200) {
        setProduct({ ...product, title: "", description: "" });
        setimg("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  // --------------------------for create------------------//

  // --------------------------for delete------------------//
  const deleteProduct = async () => {
    const formdata = new FormData();
    formdata.append("id", id_delete);
    try {
      const response = await axiosInstance.post("/product/remove", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchProducts();
      setOpen(false);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // --------------------------for delete------------------//

  // --------------------------for fetching Products------------------//
  const fetchProducts = async () => {
    const formdata = new FormData();
    formdata.append("perpage", 16);
    try {
      const response = await axiosInstance.post("/product/list", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast(response.data.message);
      console.log(response.data);
      if (response.status === 200) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // --------------------------for fetching Products------------------//
  return (
    <div>
      <section className="login">
        <div className="login-div w-[1380px] mx-auto">
          <ToastContainer />

          <div className="form-div w-[450px] bg-[#1E1F22] py-[30px] px-[40px] rounded-xl">
            <form
              action=""
              className="flex justify-center flex-col gap-2"
              onSubmit={createProduct}
            >
              <h2 className="text-2xl font-bold text-white">
                Create a Product
              </h2>
              <label htmlFor="title">Title</label>
              <input
                name="title"
                label="Title"
                value={product.title}
                onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
                }
                placeholder="Enter your product title..."
                type="text"
                id="title"
              />
              <label htmlFor="description">Description</label>
              <input
                name="description"
                label="description"
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                placeholder="Enter your product description..."
                type="text"
                id="description"
              />
              <label htmlFor="exampleInputPassword1" className="form-label">
                Image
              </label>
              <input
                type="file"
                onChange={(e) => setimg(e.target.files[0])}
                name="img"
                accept="image/*"
                className="form-control"
              />
              {img !== "" && img !== undefined && img !== null ? (
                <img
                  style={{ height: "180px" }}
                  src={URL.createObjectURL(img)}
                  alt="img"
                  className="upload-img"
                />
              ) : (
                <>
                  {img === "" && (
                    <p className="text-white">Drag or drop content here</p>
                  )}
                </>
              )}

              <FilledButton text={"Create Product"} type="submit" />
            </form>
          </div>
        </div>
      </section>
      <section className="h-screen  mt-8">
        <div className=" justify-center flex items-center my-4">
          {/* <button
            className="bg-[#5623d8] h-10 w-40 rounded-xl text-white "
            onClick={fetchProducts}
          >
            Fetch Posts
          </button> */}
        </div>
        <div className=" justify-center flex items-center flex-wrap gap-8">
          {products &&
            products?.map((data, index) => (
              <div key={index}>
                <div className="text-start shadow-2xl p-3">
                  <img
                    src={myproduct(data.image)}
                    alt="img"
                    className="h-[300px] w-[300px] object-fill object-center"
                  />
                  <div className="flex justify-center items-center my-3 flex-col gap-3">
                    <div className="w-full text-center">
                      <h1 className="font-bold">Title: {data.title}</h1>
                      <h1>Description: {data.description}</h1>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/edit/${data?._id}`}>
                        <button
                          onClick={() => {
                            setId_delete(data?._id);
                            setOpen(true);
                          }}
                          className="bg-[#5623d8] w-20 py-2 text-white rounded-lg"
                        >
                          Edit
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setId_delete(data?._id);
                          setOpen(true);
                        }}
                        className="bg-[#5623d8] w-20 py-2 text-white rounded-lg"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
      {open && (
        <SweetAlertComponent
          confirm={deleteProduct}
          cancle={() => setOpen(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )}
    </div>
  );
}
