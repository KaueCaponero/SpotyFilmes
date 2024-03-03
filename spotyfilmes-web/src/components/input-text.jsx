export default function InputText({ placeholder, register=()=>{}, name, ...props }) {
    return (
        <div className="flex flex-col gap-1">
            <input {...register(name)} type="text" placeholder={placeholder} {...props} className="bg-orange-200 text-orange-500 p-1 rounded focus:outline-orange-500 placeholder-orange-500" />
        </div>
    );
}