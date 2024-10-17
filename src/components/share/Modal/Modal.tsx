/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ADForm from "@/components/Forms/Form";
import { FieldValues } from "react-hook-form";
import { useAppointmentMutation } from "@/redux/api/allApi";
import { toast } from "sonner";
import ADInput from "@/components/Forms/Input";
import ADSelect from "@/components/Forms/Select";
import ADDatePicker from "@/components/Forms/DatePicker";
import { appointmentBook } from "@/constant";


interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ open, onClose }) => {
  const [appointment] = useAppointmentMutation()


  const handleSubmit = async (data: FieldValues) => {
 
    try {
      const res = await appointment(data).unwrap()
      if (res) {
        toast.success('Appointment book successfully!')
        onClose()
      }

    } catch (err: any) {
      toast.error(err?.message || 'Something went to wrong')
    }
  }


  return (
    <Dialog open={open} onClose={onClose}>
      <ADForm onSubmit={handleSubmit}>
        <DialogTitle>Book an Appointment</DialogTitle>
        <DialogContent>
          <ADInput
            label="Your Name"
            name="name"
            fullWidth
            size="medium"
          />
          <ADInput
            label="Your Email"
            name="email"
            fullWidth
            size="medium"
          />
          <ADInput
            label="Your Number"
            name="phone"
            fullWidth
            size="medium"
          />
          <ADDatePicker
            label="Date"
            name="dob"
            fullWidth
            size="medium"
          />

          <ADSelect size="medium" name="category" label="Category " items={appointmentBook} />
        </DialogContent>
        <DialogActions>
          <button
            onClick={onClose}
            className="bg-[#135F4A] px-6 py-2 text-white uppercase text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#135F4A] px-6 py-2 text-white uppercase text-sm"
          >
            Submit
          </button>
        </DialogActions>
      </ADForm>
    </Dialog>
  );
};

export default Modal;
