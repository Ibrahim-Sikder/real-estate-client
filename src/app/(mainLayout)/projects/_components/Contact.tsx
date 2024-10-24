/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from "next/image";
import img from "../../../../../src/assets/images/contact/contact.png";
import ADForm from "@/components/Forms/Form";
import { useContactMutation } from "@/redux/api/allApi";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import ADInput from "@/components/Forms/Input";
import ADTextarea from "@/components/Forms/TextArea";

const Contact = () => {
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
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 border shadow-lg bg-[#76B486]">
        <Image src={img} className="lg:h-[500px] w-auto" alt="this is img" />

        <ADForm onSubmit={handleSubmit}>
          <div className="space-y-3">
            <div>
              <label className="text-sm">First Name</label>
              <ADInput
                fullWidth
                label="Name"
                name="first_name"
                sx={{ background: '#fff', borderRadius: '5px' }}
             
              />
            </div>
            <div>
              <label className="text-sm">Last Name</label>
              <ADInput
                fullWidth
                label="Name"
                name="last_name"
                sx={{ background: '#fff', borderRadius: '5px' }}
              
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <ADInput
                fullWidth
                label="Email"
                name="email"
                sx={{ background: '#fff', borderRadius: '5px' }}
            
              />
            </div>
            <div>
              <label className="text-sm">Number</label>
              <ADInput
                fullWidth
                label="Number"
                name="phone"
                sx={{ background: '#fff', borderRadius: '5px' }}
             
              />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <ADTextarea placeholder='Message' sx={{ padding: '10px' }} name='message' minRows={5} />
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase bg-[#135F4A]  text-gray-50"
            >
              Send Message
            </button>
          </div>
        </ADForm>
      </div>
    </>
  );
};

export default Contact;
