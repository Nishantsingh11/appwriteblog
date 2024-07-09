import { useId,forwardRef } from "react";

const  Select = forwardRef(({ options = [], label, className, ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label &&
        <label className="" htmlFor={id}>
          {label}
        </label>}
      <select {...props} id={id} className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`} ref={ref} >

        {
            options?.map((text)=>(
                <>
            <option key = {text} value= {text}>
                {text}
            </option>
                </>
            ))
        }
      </select>
    </div>
  );
})
Select.displayName = 'Select';

export default Select
