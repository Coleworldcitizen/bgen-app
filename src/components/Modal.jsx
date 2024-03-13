
import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => {

    return{
      open(){
        dialog.current.showModal()
      }
    }
  });

  return createPortal(
    <dialog ref={dialog} className=" w-1/4 h-1/5 backdrop:bg-black/70 rounded-sm px-4 py-4 bg-slate-200 ">
      {children}
      <form method="dialog">
        <button className=" float-end text-stone-700 hover:bg-slate-600 hover:text-stone-400  rounded-sm font-kode tracking-wider  bg-slate-400 px-4 py-2 mt-6">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default Modal;