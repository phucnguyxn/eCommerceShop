import { useState } from "react";
import { InputForm, Select, Button, Loading } from "components";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { apiCreateBrand } from "apis";
import { showModal } from "store/categories/categorySlice";

const CreateBrands = () => {
    const { categories } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm();
    const [payload] = useState({
    });
    const handleCreateBrand = async (data) => {
        const invalids = 0;
        if (invalids === 0) {
            if (data.category)
                data.category = categories?.find(
                    (el) => el._id === data.category
                )?.title;
            const finalPayload = { ...data, ...payload };
            const formData = {}
            for (let i of Object.entries(finalPayload)) formData[i[0]] = i[1];
            dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }));
            const response = await apiCreateBrand(formData);
            dispatch(showModal({ isShowModal: false, modalChildren: null }));
            if (response.success) {
                toast.success(response.mes);
                reset();
            } else toast.error(response.mes);
        }
    };
    return (
        <div className="w-full">
            <h1 className="h-[75px] flex justify-between items-center text-3xl font-bold px-4 border-b">
                <span>Tạo mới Brand</span>
            </h1>
            <div className="p-4">
                <form onSubmit={handleSubmit(handleCreateBrand)}>
                    <InputForm
                        label="Tên Brand"
                        register={register}
                        errors={errors}
                        id="title"
                        validate={{
                            required: "Không được để trống",
                        }}
                        fullWidth
                        placeholder="Name of new Brand"
                    />
                    <div className="my-6">
                        <Button type="submit">Tạo mới Brand</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBrands;