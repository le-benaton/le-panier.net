"use client";

import {useEffect, useState} from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

export default function SelectDialog() {

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const fromParam = url.searchParams.get("from")
      setOpen(fromParam === "card")
    }
  }, [])

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    コンテンツをお選びください
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      名刺の受領ありがとうございます。以下からご希望の項目をお選びください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-gray-50 text-blue-500 px-4 py-3 w-full block text-center border" onClick={() => setOpen(false)}>
              公式サイト
            </button>
            <button className="bg-gray-50 text-blue-500 px-4 py-3 w-full block text-center border" onClick={() => location.href = 'https://maps.app.goo.gl/3iFyke5yY3TKVifp8'}>
              Google Map
            </button>
            <button className="bg-gray-50 text-blue-500 px-4 py-3 w-full block text-center" onClick={() => location.href = 'https://lin.ee/h2BUTwy'}>
              予約・お問合せ（LINE公式アカウント）
            </button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
