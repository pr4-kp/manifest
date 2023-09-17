import sampleVenuePhoto from "../images/FUMO.jpg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Card() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <main
        onClick={openModal}
        class="px-4 p-6 mt-5 mx-3 rounded-xl opacity-100 cursor-pointer hover:bg-opacity-20 transition ease-in hover:bg-pink-800 "
      >
        <div class="max-w-4xl mx-auto grid grid-cols-1">
          <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:p-0 lg:row-start-1"></div>

          <div class="grid gap-4 col-start-1 col-end-3 row-start-1">
            <h1 class="text-lg font-semibold text-pink-600 md:text-2xl ">
              FUMO
            </h1>
            <img
              src={sampleVenuePhoto}
              alt=""
              class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
          </div>
          <dl class="mt-4 text-xs font-medium flex items-center row-start-2">
            <dt class="sr-only">Reviews</dt>
            <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                class="mr-1 stroke-current dark:stroke-indigo-500"
              >
                <path
                  d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>
                4.89 <span class="text-pink-500 font-normal">(128)</span>
              </span>
            </dd>
            <dt class="sr-only">Location</dt>
            <dd class="flex items-center">
              <svg
                width="2"
                height="2"
                aria-hidden="true"
                fill="currentColor"
                class="mx-3 text-pink-300"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-1 text-pink-500"
                aria-hidden="true"
              >
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              <p className="text-pink-500">New York City, NY</p>
            </dd>
          </dl>
        </div>
      </main>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-pink-200 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div class="grid gap-4 col-start-1 col-end-3 row-start-1">
                      <h1 class="text-lg font-semibold text-pink-700">FUMO</h1>
                      <img
                        src={sampleVenuePhoto}
                        alt=""
                        class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                        loading="lazy"
                      />
                    </div>
                    <dl class="mt-4 text-xs font-medium flex items-center row-start-2">
                      <dt class="sr-only">Reviews</dt>
                      <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          aria-hidden="true"
                          class="mr-1 stroke-current dark:stroke-indigo-500"
                        >
                          <path
                            d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>
                          4.89{" "}
                          <span class="text-pink-400 font-normal">(128)</span>
                        </span>
                      </dd>
                      <dt class="sr-only">Location</dt>
                      <dd class="flex items-center">
                        <svg
                          width="2"
                          height="2"
                          aria-hidden="true"
                          fill="currentColor"
                          class="mx-3 text-pink-300"
                        >
                          <circle cx="1" cy="1" r="1" />
                        </svg>
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="mr-1 text-pink-400 dark:text-pink-500"
                          aria-hidden="true"
                        >
                          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                        </svg>
                        <p className="text-pink-400">New York City, NY</p>
                      </dd>
                    </dl>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-pink-700">
                      A bright Italian spot serving up pizza, pasta, wine and
                      more on a corner near City College. Brought to you by the
                      same team behind the nearby The Chick Inn, Uncle Tony’s
                      Pizza and Fumo on the Upper West Side.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-pink-300 px-4 py-2 text-sm font-medium text-blue-900 transition ease-in hover:bg-pink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Register
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
