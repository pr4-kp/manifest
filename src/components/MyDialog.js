import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function MyDialog() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="absolute top-0 right-0 px-6 py-2 bg-pink-500 transition ease-in hover:bg-pink-700 m-5 rounded-full text-slate-100"
      >
        My Profile
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={isOpen}
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 overflow-y-auto">
              <Dialog.Panel className="w-full max-w-sm m-5 transform overflow-hidden rounded-2xl bg-pink-200 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title className="text-xl font-semibold text-pink-700">
                  Bob
                </Dialog.Title>
                <Dialog.Description>Male, 25.</Dialog.Description>

                <p>Free times: Thursday 3P.M.-6P.M.</p>
                <div className="relative">
                  <button
                    className="absolute bottom-9 right-0 p-3 bg-pink-400 rounded-2xl"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
