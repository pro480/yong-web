import React, { useEffect } from "react";
import useAuth from "../src/hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
interface Inputs {
    email: string;
    password: string;
}

function AdminLogin() {
    const { signIn, user } = useAuth();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
        await signIn(email, password);
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => router.back(), 3000);
        }
    }, []);

    if (user) {
        return (
            <div className='flex w-screen items-center justify-center py-20'>
                <h1 className='text-3xl font-bold'>
                    이미 로그인 되었습니다. 3초뒤 이전 페이지로 이동합니다.
                </h1>
            </div>
        );
    } else {
        return (
            <div className='flex w-screen items-center justify-center py-20'>
                <form
                    className='flex w-[500px] flex-col gap-y-4 border px-24 py-16'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <h1 className='text-3xl font-bold '>Admin Login</h1>
                    <div className='flex flex-col gap-y-4'>
                        <label>
                            <input
                                className=' h-8 w-full border border-gray-700  px-3'
                                type='email'
                                placeholder='E-mail'
                                {...register("email", { required: true })}
                            />
                            {errors.email && (
                                <p>정확한 이메일 주소를 입력하세요.</p>
                            )}
                        </label>

                        <label>
                            <input
                                className=' h-8 w-full border border-gray-700 px-3'
                                type='password'
                                placeholder='Password'
                                {...register("password", { required: true })}
                            />
                            {errors.password && (
                                <p>비밀번호는 4~60자 사이여야 합니다.</p>
                            )}
                        </label>
                    </div>

                    <button>Sign In</button>
                </form>
            </div>
        );
    }
}

export default AdminLogin;
