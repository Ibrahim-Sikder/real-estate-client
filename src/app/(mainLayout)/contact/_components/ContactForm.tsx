/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import ADForm from '@/components/Forms/Form';
import ADInput from '@/components/Forms/Input';
import ADTextarea from '@/components/Forms/TextArea';
import { useContactMutation } from '@/redux/api/allApi';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const ContactForm = () => {
    const [contact] = useContactMutation()
    const router = useRouter()
    const handleSubmit = async (data: FieldValues) => {
        try {
            const res = await contact(data).unwrap()
            if (res) {
                toast.success('Your form submit successfully!')
                router.push('/')
            }

        } catch (err: any) {
            toast.error(err?.message || 'Something went to wrong')
        }


    }

    const tabMargin = {
        marginTop: {
            xs: '3px',
            lg: '15px',
        }
    }


    return (
        <div className="bg-white p-3  md:p-8 shadow-md">
            <ADForm onSubmit={handleSubmit}>

                <div className="grid grid-cols-2 gap-3 md:gap-6">
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-gray-700">First Name</label>
                        <ADInput
                            fullWidth
                            label='First Name'
                            name='first_name'
                            size='medium'
                            sx={tabMargin}
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-gray-700">Last Name</label>
                        <ADInput
                            fullWidth
                            label='Last Name'
                            name='last_name'
                            size='medium'
                            sx={tabMargin}

                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700">Email</label>
                        <ADInput
                            fullWidth
                            label='Email Address '
                            name='email'
                            size='medium'
                            sx={tabMargin}

                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-gray-700">Message</label>
                        <ADTextarea placeholder='Message' sx={{ padding: '10px' }} name='message' minRows={5} />
                    </div>
                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#135F4A] text-white font-semibold"
                        >
                            SEND
                        </button>
                    </div>
                </div>
            </ADForm>
        </div>
    );
};

export default ContactForm;