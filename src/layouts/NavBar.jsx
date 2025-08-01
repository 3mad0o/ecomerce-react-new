import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { toggleCartSide } from "../redux/Cart/CartSlice";
import Modal from "../components/Modal";
import { LoginModal } from "../features/authentication/components/LoginModal";
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import omdalogo from "../assets/omdalogo.png";
import { Dropdown } from "../components/ui/Dropdown";
import { closeModal, openSearchModal } from "../redux/Search/searchSlice";
import { SearchModal } from "../features/search/components/SearchModal";
import apiClient from "../lib/axios_client";
import { setUser } from "../redux/User/UserSlice";

export const NavBar = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const categories = useSelector((state) => state.category.categories);
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const fastLogin = () => {
    apiClient.post("/auth/fast-login").then((response) => {
      localStorage.setItem("token", response.data.data.access_token);
      dispatch(setUser(response.data.data.user));
    });
  };
  const cartCount = useSelector((state) => state.carts.cartCount);
  const isSearchModalOpen = useSelector((state) => state.search.isOpenSearch);

  useEffect(() => {
    console.log("Modal open?", isSearchModalOpen);
  });
  const wishlistCount = useSelector(
    (state) => state.wishlist.wishlistItems.length
  );

  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(toggleCartSide());
  };

  const openLoaginModal = () => {
    setOpenLoginModal(true);
    setIsLogin(true);
  };

  const closeLoginModal = () => {
    setOpenLoginModal(false);
    setIsLogin(false);
  };

const profileItems = useMemo(() => {
  return isAuthenticated
    ? [
        { label: "Profile", link: "/profile" },
        { label: "Orders", link: "/orders" },
        { label: "Settings", link: "/settings" },
        { label: "Logout", link: "/logout" },
      ]
    : [
        { label: "fast Login", event: fastLogin },
        { label: "Login", event: openLoaginModal },
      ];
}, [isAuthenticated]);

  return (
    <>
      <header className="sticky  top-0 z-50 ">
        <div className="flex bg-white border-b py-3 sm:px-6 px-4 font-[sans-serif] min-h-[75px] tracking-wide  z-50">
          <div className="flex max-w-screen-xl mx-auto w-full">
            <div className="flex flex-wrap items-center justify-between lg:gap-y-2 gap-4 w-full">
              <Link to={"/"} className="max-sm:hidden">
                <img src={omdalogo} alt="logo" className="w-28" />
              </Link>
              <Link to={"/"} className="hidden max-sm:block">
                <img src={omdalogo} alt="logo" className="w-20" />
              </Link>

              <div
                id="collapseMenu"
                className="lg:ml-6 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
              >
                <button
                  id="toggleClose"
                  className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 fill-black"
                    viewBox="0 0 320.591 320.591"
                  >
                    <path
                      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="flex items-center gap-x-6 gap-y-4 ">
                <div className="flex items-center sm:space-x-8 space-x-6">
                  <button
                    type="button"
                    onClick={() => dispatch(openSearchModal())}
                  >
                    <CiSearch className="text-3xl" />
                  </button>
                  <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                    <Link className="relative" to={"/wishlist"}>
                      <CiHeart className="text-3xl" />

                      <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                        {wishlistCount}
                      </span>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                    <div className="relative" onClick={openCart}>
                      <CiShoppingCart className="text-3xl" />

                      <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                        {cartCount}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
                    <Dropdown
                      items={profileItems}
                      title={<CiUser className="text-3xl" />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* categories scroll */}
        <div className="no-scrollbar w-full overflow-x-scroll flex flex-row items-center justify-between bg-white border-b p-4 gap-5 font-[sans-serif] tracking-wide ">
          {categories.map((category) => {
            return (
              <Link
                to={`/category/${category.slug}`}
                key={category.id}
                className="text-sm font-medium text-black hover:text-black  text-nowrap"
              >
                {category.name}
              </Link>
            );
          })}
        </div>
      </header>

      {openLoginModal && isLogin && (
        <Modal isOpen={openLoginModal && isLogin} onClose={closeLoginModal}>
          <LoginModal />
        </Modal>
      )}

      {openLoginModal && !isLogin && (
        <Modal isOpen={openLoginModal && !isLogin} onClose={closeLoginModal}>
          <RegisterModal />
        </Modal>
      )}

      {isSearchModalOpen && (
        <Modal
          isOpen={isSearchModalOpen}
          onClose={() => dispatch(closeModal())}
          title={"Search Product"}
        >
          <SearchModal />
        </Modal>
      )}
    </>
  );
};
