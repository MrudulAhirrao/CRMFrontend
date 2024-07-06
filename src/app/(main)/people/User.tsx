'use client';
export default function User(){
    return (
        <div className="flex items-center justify-center gap-2 border rounded-[8px] p-4">
            <div className="avatar rounded-full min-h-12 min-w-12 bg-amber-400 text-black font-[700] flex items-center justify-center">
                <p>MA</p>
            </div>
            <div>
                <p className="text-[16px] font-semibold">Mrudul Ahirrao</p>
                <p className="text-[12px] font-semibold text-neutral-300">abc@gmail.com</p>
            </div>
        </div>
    );
}