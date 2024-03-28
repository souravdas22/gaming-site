import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Helper/Helper";
import { ToastContainer, toast } from "react-toastify";
import FilledButton from "../../../components/FilledButton";

export default function Edit() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [product, setProduct] = useState({
    title: "",
    description: "",
  });
  const [img, setimg] = useState("");
  // --------------------------for details------------------//
  useEffect(() => {
    const fetchDetails = async (id) => {
      const formdata = new FormData();
      formdata.append("id", id);
      try {
        const response = await axiosInstance.get(`/product/detail/${id}`, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setDetails(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDetails(id);
  }, [id]);

  useEffect(() => {
    if (details.title && details.description) {
      setProduct({
        title: details.title,
        description: details.description,
      });
    }
  }, [details]);
  // --------------------------for details------------------//

  // --------------------------for edit------------------//

  const editProduct = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("id", id);
    formdata.append("title", product.title);
    formdata.append("description", product.description);
    if (img) {
      formdata.append("image", img);
    } else {
       formdata.append("image", details.image);
   }
    try {
      const response = await axiosInstance.post("/product/update", formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast(response.data.message);
      if (response.status === 200) {
        setProduct({ ...product, title: "", description: "" });
        setimg("");
      }
    } catch (error) {
      console.error(error);
    }
  };
  // --------------------------for edit------------------//

  return (
    <div>
      <section className="login">
        <div className="login-div w-[1380px] mx-auto">
          <ToastContainer />
          <div className="form-div w-[450px] bg-[#1E1F22] py-[30px] px-[40px] rounded-xl">
            <form
              action=""
              className="flex justify-center flex-col gap-2"
              onSubmit={editProduct}
            >
              <h2 className="text-2xl font-bold text-white">Edit Product</h2>
              <label htmlFor="title">Title</label>
              <input
                name="title"
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
                value={product.description}
                onChange={(e) =>
                  setProduct({ ...product, description: e.target.value })
                }
                placeholder="Enter your product description..."
                type="text"
                id="description"
              />
              <label htmlFor="img" className="form-label">
                Image
              </label>
              <input
                type="file"
                onChange={(e) => setimg(e.target.files[0])}
                name="img"
                accept="image/*"
                className="form-control"
              />
              {img && (
                <img
                  style={{ height: "180px" }}
                  src={URL.createObjectURL(img)}
                  alt="img"
                  className="upload-img"
                />
              )}
              <FilledButton text={"Edit Product"} type="submit" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
