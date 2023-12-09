import { useState } from "react";
import { InputForm, Button, Loading } from "components";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { apiCreateCategory } from "apis";
import { showModal } from "store/categories/categorySlice";

const CreateCategories = () => {
    const dispatch = useDispatch();
    const {
        register,
        formState: { errors },
        reset,
        handleSubmit,
    } = useForm();

    const [payload] = useState({
    });

    const handleCreateCategory = async (data) => {
        const invalids = 0;
        if (invalids === 0) {
            const finalPayload = { ...data, ...payload };
            const formData = {}
            for (let i of Object.entries(finalPayload)) formData[i[0]] = i[1];
            dispatch(showModal({ isShowModal: true, modalChildren: <Loading /> }));
            const response = await apiCreateCategory(formData);
            if (response.success) {
                toast.success(response.mes);
                reset();
            } else toast.error(response.mes);
        }
    };
    return (
        <div className="w-full">
            <h1 className="h-[75px] flex justify-between items-center text-3xl font-bold px-4 border-b">
                <span>Tạo danh mục mới</span>
            </h1>
            <div className="p-4">
                <form onSubmit={handleSubmit(handleCreateCategory)}>
                    <InputForm
                        label="Name Category"
                        name='title'
                        register={register}
                        errors={errors}
                        id="title"
                        validate={{
                            required: "Không được để trống",
                        }}
                        fullWidth
                        placeholder="Tên Danh mục mới"
                    />
                    <div className="my-6">
                        <Button type="submit">Tạo mới</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateCategories;