import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { getCategories } from 'store/categories/asyncActions';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Cart, Modal } from 'components';
import { showCart } from 'store/categories/categorySlice';
import AppRoutes from 'AppRoutes';

const Application = () => {
  const dispatch = useDispatch();
  const { isShowModal, modalChildren, isShowCart } = useSelector(
    (state) => state.app,
  );

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="font-main">
      {isShowCart && (
        <div
          onClick={() => dispatch(showCart())}
          className="absolute inset-0 bg-overlay z-50 flex justify-end"
        >
          <Cart />
        </div>
      )}
      {isShowModal && <Modal>{modalChildren}</Modal>}
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Application;
