export default function InputText({ placeholder, ...props }) {
    return (
        <div className="flex flex-col gap-1">
            <input type="text" placeholder={placeholder} {...props} className="bg-orange-200 text-orange-500 p-1 rounded focus:outline-orange-500 placeholder-orange-500" />
        </div>
    );
}