import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function MyDialog() {
  let [isOpen, setIsOpen] = useState(true)

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white">
          
          <Dialog.Title>Profile</Dialog.Title>
          <Dialog.Description>
          This is your profile
          </Dialog.Description>

          <p>
          Heres info.
          </p>

          <button onClick={() => setIsOpen(false)}>Close</button>
          
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}